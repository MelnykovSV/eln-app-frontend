export interface ISingleMolCanvasProps {
  smiles: string;
  options?: {
    width: number;
    height: number;
  };
}

export interface IReactionPreviewData {
  _id: string;
  status: string; ///  понять, почему не работают литералы
  mass: number;
  price: string;
  deadline: string;
  stagesNumber: number;
  startingMaterial: string;
  targetCompound: string;
  createdAt: string;
  updatedAt: string;
}

export interface IReactionSchemePreviewProps {
  schemePreviewData: IReactionPreviewData;
}
