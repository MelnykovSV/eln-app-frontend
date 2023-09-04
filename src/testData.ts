export const testSchemePreviewDataActive = {
  _id: "64dab5750f9d36f00dacd0b2",
  status: "active",
  mass: 321,
  price: 300,
  deadline: "20.10.2023",
  stagesNumber: 7,
  startingMaterial: "N#CC1=CC=CC=C1",
  targetCompound: "C1(C2=NCCN2)=CC=CC=C1",
  createdAt: "14.08.2023",
  updatedAt: "16.08.2023",
};

export const testSchemePreviewDataSuccess = {
  _id: "64dab5750f9d36f00dacd0b2",
  status: "success",
  mass: 222,
  price: 500,
  deadline: "22.10.2023",
  stagesNumber: 7,
  startingMaterial: "N#CC1=CC=CC=C1",
  targetCompound: "C1(C2=NCCN2)=C",
  createdAt: "23.09.2023",
  updatedAt: "19.10.2023",
};

export const testSchemePreviewDataFail = {
  _id: "64dab5750f9d36f00dacd0b2",
  status: "fail",
  mass: 555,
  price: 600,
  deadline: "15.11.2023",
  stagesNumber: 7,
  startingMaterial: "N#CC1=CC=CC=C1",
  targetCompound: "C1(C2=NCCN2)=CC=CC=C1",
  createdAt: "12.05.2023",
  updatedAt: "07.08.2023",
};

export const testSchemePreviewDataChosen = {
  _id: "64dab5750f9d36f00dacd0b2",
  status: "chosen",
  mass: 234,
  price: 900,
  deadline: "22.12.2023",
  stagesNumber: 7,
  startingMaterial: "N#CC1=CC=CC=C1",
  targetCompound: "C1(C2=NCCN2)=CC=CC=C1",
  createdAt: "15.07.2023",
  updatedAt: "18.09.2023",
};

export const testSchemesPreviewData = [
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataActive,
  testSchemePreviewDataFail,
  testSchemePreviewDataChosen,
  testSchemePreviewDataFail,
  testSchemePreviewDataFail,
  testSchemePreviewDataActive,
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataFail,
  testSchemePreviewDataActive,
  testSchemePreviewDataActive,
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataFail,
  testSchemePreviewDataActive,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataActive,
  testSchemePreviewDataFail,
  testSchemePreviewDataFail,
  testSchemePreviewDataChosen,
  testSchemePreviewDataChosen,
  testSchemePreviewDataChosen,
  testSchemePreviewDataChosen,
  testSchemePreviewDataSuccess,
  testSchemePreviewDataActive,
  testSchemePreviewDataChosen,
  testSchemePreviewDataChosen,
];

export const singleStageTestData = {
  solvent: "MeOH",
  temp: 70,
  time: "20h",
  _yield: 86,
  product: "CN1CCC[C@H]1c2cccnc2",
  methodic:
    "The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.",
};

export const schemeTestData = {
  startingMaterial: "CC(C)[C@@]12C[C@@H]1[C@@H](C)C(=O)C2",
  targetCompound: "CN1CCC[C@H]1c2cccnc2",
  mass: 30,

  stages: [
    // singleStageTestData,
    // singleStageTestData,
    // singleStageTestData,
    // singleStageTestData,
    // singleStageTestData,
    // singleStageTestData,
    // singleStageTestData,
    // singleStageTestData,
    // singleStageTestData,
    {
      solvent: "MeOH",
      temp: 70,
      time: "20h",
      _yield: 1,
      product: "CN1CCC[C@H]1c2cccnc2",
      methodic:
        "The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.",
    },
    {
      solvent: "MeOH",
      temp: 70,
      time: "20h",
      _yield: 50,
      product: "CN1CCC[C@H]1c2cccnc2",
      methodic:
        "The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.",
    },
    {
      solvent: "MeOH",
      temp: 70,
      time: "20h",
      _yield: 85,
      product: "CN1CCC[C@H]1c2cccnc2",
      methodic:
        "The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.",
    },
    {
      solvent: "MeOH",
      temp: 70,
      time: "20h",
      _yield: 50,
      product: "CN1CCC[C@H]1c2cccnc2",
      methodic:
        "The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.The one-pot interaction with dimethyl(vinyl)phosphine oxide was used for the synthesis of the target compounds. Nitrile oxides were obtained in situ from the corresponding halogenoximes by base-promoted generation. The ADME parameters for a synthesized 5-P(O)Me2-isoxazoline compared to its isosters with the same core structure were predicted using a SwissADME Web Tool. The compounds obtained were characterized by 1H, 13C, 19F, 31P NMR spectroscopy and HPLC-MS spectrometry methods, as well as the elemental analysis.",
    },
  ],
};

export const reagentCardData = {
  smiles: "COC(=O)C1=CC=CC2=NC=CN21",
  mass: 200,
  formula: "C9H8N2O2",
  molWeight: 176.17,
  compoundName: "",
};

export const reagentListData = [
  {
    smiles: "COC(=O)C1=CC=CC2=NC=CN21",
    mass: 200,
    formula: "C9H8N2O2",
    molWeight: 176.17,
    compoundName: "",
  },
  {
    smiles: "COC(=O)C1=CC=CC2=NC=CN21",
    mass: 200,
    formula: "C9H8N2O2",
    molWeight: 176.17,
    compoundName: "",
  },
  {
    smiles: "COC(=O)C1=CC=CC2=NC=CN21",
    mass: 200,
    formula: "C9H8N2O2",
    molWeight: 176.17,
    compoundName: "",
  },
  {
    smiles: "COC(=O)C1=CC=CC2=NC=CN21",
    mass: 200,
    formula: "C9H8N2O2",
    molWeight: 176.17,
    compoundName: "",
  },
];

export const reagentListShortData = [
  {
    smiles: "COC(=O)C1=CC=CC2=NC=CN21",
    mass: 200,
  },
  {
    smiles: "COC(=O)C1=CC=CC2=NC=CN21",
    mass: 200,
  },
  {
    smiles: "O1C=C[C@H]([C@H]1O2)c3c2cc(OC)c4c3OC(=O)C5=C4CCC(=O)5",
    mass: 200,
  },
  {
    smiles: "COC(=O)C1=CC=CC2=NC=CN21",
    mass: 200,
  },
];
