import Container from "./SingleSchemePage.styled";
import { Scheme } from "../../modules";
// import { currentScheme } from "../../testData";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import { ReagentList } from "../../modules";
import { calc } from "../../helpers/molMass";
import axios from "axios";
import { CustomTabPanel } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "../../redux/hooks";
import { useParams } from "react-router";
import { getSingleScheme } from "../../redux/schemes/operations";
import { calculateSchemeYieldCoefficients } from "../../helpers/calculateSchemeYieldCoefficients";
import { smilesToMolecularFormula } from "../../helpers/chemistryHelpers";
import { getCurrentScheme } from "../../redux/schemes/schemesSlice";
import { smilesToMolWeight } from "../../helpers/chemistryHelpers";
import { IUpdatedCurrentScheme } from "../../types/redux";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const SingleSchemePage = () => {
  const { schemeId } = useParams();

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
      // mass: 100
    },
  ];

  currentScheme.stages.forEach((item) => {
    const approvedAttempt = item.attempts.find((attempt) => attempt.isOk);
    approvedAttempt?.reagents.forEach((reagent) =>
      reagentsList.push({
        smiles: reagent.smiles,
        mass: reagent.mass ? reagent.mass : 0,
      })
    );
  });

  console.log(reagentsList);
  const [value, setValue] = useState(0);

  const [reagentsListData, setReagentsListData] = useState([] as any);

  // const updatedSchemeData = {...currentScheme, calculateSchemeYieldCoefficients(currentScheme[stages])}

  //Use for reagents masses calculation!!!
  console.log(updatedSchemeData);

  // Судя по всему, useEffect срабатывает до
  useEffect(() => {
    if (schemeId && schemeId !== currentScheme._id) {
      dispatch(getSingleScheme(schemeId));
    }

    console.log(reagentsList);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schemeId]);

  useEffect(() => {
    console.log(reagentsList);
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
          console.log(e);
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
      console.log(resolvedArr);
      if (resolvedArr.some((item) => item === undefined)) {
        return;
      }

      setReagentsListData(resolvedArr);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScheme]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
        <Scheme schemeData={updatedSchemeData} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ReagentList reagents={reagentsListData} />
      </CustomTabPanel>
    </Container>
  );
};

export default SingleSchemePage;
