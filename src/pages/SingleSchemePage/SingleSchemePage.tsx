import Container from "./SingleSchemePage.styled";
import { Scheme } from "../../modules";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import { ReagentList } from "../../modules";
import { calc } from "../../helpers/molMass";
import axios from "axios";
import { CustomTabPanel } from "../../components";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { useParams } from "react-router";
import { getSingleScheme } from "../../redux/schemes/operations";
import { calculateSchemeYieldCoefficients } from "../../helpers/calculateSchemeYieldCoefficients";
import { smilesToMolecularFormula } from "../../helpers/chemistryHelpers";
import { getCurrentScheme } from "../../redux/schemes/schemesSlice";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";
import { IUpdatedCurrentScheme } from "../../types/redux";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { updateSchemeStatusAndSave } from "../../redux/schemes/operations";
import {
  getIsLoadingSchemes,
  getCurrentSchemeId,
} from "../../redux/schemes/schemesSlice";
import { DNALoader } from "../../ui";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SingleSchemePage = () => {
  const { schemeId } = useParams();
  const isLoadingSchemes = useAppSelector(getIsLoadingSchemes);
  const currentSchemeId = useAppSelector(getCurrentSchemeId);
  const dispatch = useAppDispatch();
  const currentScheme = useAppSelector(getCurrentScheme);
  const updatedSchemeData = calculateSchemeYieldCoefficients(
    currentScheme
  ) as IUpdatedCurrentScheme;

  const reagentsList = [
    {
      smiles: currentScheme.startingMaterial,
      mass: Number(
        (
          (smilesToMolWeight(updatedSchemeData.startingMaterial || "") *
            ((updatedSchemeData.mass || 0) /
              smilesToMolWeight(updatedSchemeData.targetCompound || ""))) /
          updatedSchemeData.totalYieldCoefficient
        ).toFixed(2)
      ),
    },
  ];

  currentScheme.stages.forEach((item, i) => {
    const approvedAttempt = item.attempts.find((attempt) => attempt.isOk);
    if (i === 0) {
      approvedAttempt?.reagents.forEach((reagent) => {
        return reagentsList.push({
          smiles: reagent.smiles,
          mass: Number(
            (
              ((smilesToMolWeight(reagent.smiles || "") *
                ((updatedSchemeData.mass || 0) /
                  smilesToMolWeight(updatedSchemeData.targetCompound || ""))) /
                updatedSchemeData.totalYieldCoefficient) *
              (reagent.equivalents || 0)
            ).toFixed(2)
          ),
        });
      });
    } else {
      approvedAttempt?.reagents.forEach((reagent) => {
        return reagentsList.push({
          smiles: reagent.smiles,
          mass: Number(
            (
              ((smilesToMolWeight(reagent.smiles || "") *
                ((updatedSchemeData.mass || 0) /
                  smilesToMolWeight(updatedSchemeData.targetCompound || ""))) /
                updatedSchemeData.stages[i - 1].yieldCoefficient) *
              (reagent.equivalents || 0)
            ).toFixed(2)
          ),
        });
      });
    }
  });

  const [value, setValue] = useState(0);

  const [reagentsListData, setReagentsListData] = useState([] as any);
  useEffect(() => {
    if (schemeId && schemeId !== currentScheme._id) {
      dispatch(getSingleScheme(schemeId));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schemeId]);

  useEffect(() => {
    const arr1 = reagentsList.map(async (item) => {
      if (item.smiles !== null) {
        const formula = smilesToMolecularFormula(item.smiles);
        const molWeight = calc(formula) as unknown as string;
        try {
          const response = await axios.get(
            `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/smiles/${item.smiles}/property/IUPACName/JSON`
          );
          return {
            smiles: item.smiles,
            mass: item.mass,
            formula,
            molWeight,
            compoundName: response.data.PropertyTable.Properties[0].IUPACName,
          };
        } catch (e) {
          return {
            smiles: item.smiles,
            mass: item.mass,
            formula,
            molWeight,
            compoundName: "",
          };
        }
      }
    });

    Promise.all(arr1).then((resolvedArr) => {
      const filteredArray = resolvedArr.filter((item) => item !== undefined);
      setReagentsListData(filteredArray);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScheme]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const synthesisStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateSchemeStatusAndSave({
        schemeId: currentScheme._id,
        status: e.target.value,
      })
    );
  };

  return (
    <Container className="container">
      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="Scheme" {...a11yProps(0)} />
          <Tab label="Reagents calculation" {...a11yProps(1)} />
        </Tabs>
      </div>
      <CustomTabPanel value={value} index={0}>
        <RadioGroup
          onChange={synthesisStatusChange}
          value={currentScheme.status}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          className="radio-buttons-container">
          <FormControlLabel value="active" control={<Radio />} label="Active" />
          <FormControlLabel
            value="success"
            control={<Radio />}
            label="Success"
          />
          <FormControlLabel value="fail" control={<Radio />} label="Fail" />
          <FormControlLabel value="chosen" control={<Radio />} label="Chosen" />
        </RadioGroup>
        {isLoadingSchemes && currentSchemeId !== schemeId ? (
          <DNALoader />
        ) : (
          <div className="scheme-container">
            <Scheme schemeData={updatedSchemeData} />
          </div>
        )}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ReagentList reagents={reagentsListData} />
      </CustomTabPanel>
    </Container>
  );
};

export default SingleSchemePage;
