import Container from "./Schemes.styled";
import { ReactionSchemePreview } from "../../components";
import { testSchemePreviewData } from "../../testData";

const Schemes = () => {
  return (
    <Container>
      <div className="schemes-preview-container">
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />

        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
      </div>
    </Container>
  );
};

export default Schemes;
