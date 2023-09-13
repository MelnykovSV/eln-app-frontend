import Container from "./SingleSchemePage.styled";
import { Scheme } from "../../modules";
// import { currentScheme } from "../../testData";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import { ReagentList } from "../../modules";
import { reagentListShortData } from "../../testData";
import { calc } from "../../helpers/molMass";
import axios from "axios";
import { CustomTabPanel } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { useAppDispatch } from "../../redux/hooks";
import { useParams } from "react-router";
import { getSingleScheme } from "../../redux/schemes/operations";
import { ICurrentScheme } from "../../types";

import { calculateSchemeYieldCoefficients } from "../../helpers/calculateSchemeYieldCoefficients";
import { smilesToMolecularFormula } from "../../helpers/chemistryHelpers";
import { getCurrentScheme } from "../../redux/schemes/schemesSlice";

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

  const [value, setValue] = useState(0);

  const [reagentsListData, setReagentsListData] = useState([] as any);

  // const updatedSchemeData = {...currentScheme, calculateSchemeYieldCoefficients(currentScheme[stages])}
  const updatedSchemeData = calculateSchemeYieldCoefficients(
    currentScheme
  ) as ICurrentScheme;
  useEffect(() => {
    if (schemeId) {
      dispatch(getSingleScheme(schemeId));
    }

    const arr1 = reagentListShortData.map(async (item) => {
      const formula = smilesToMolecularFormula(item.smiles);
      const molWeight = calc(formula) as unknown as string;
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
    });

    Promise.all(arr1).then((resolvedArr) => {
      setReagentsListData(resolvedArr);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schemeId]);

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
