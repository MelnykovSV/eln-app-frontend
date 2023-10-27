import * as S from "./DescriptionSection.styled";
import SchemesPageImage from "./../../images/Schemes-page.JPG";
import NewSchemePage from "./../../images/New-scheme-page.JPG";
import SingleSchemePage from "./../../images/Single-scheme-page1.JPG";
import SingleSchemePageReagents from "./../../images/Single-scheme-page-reagents.JPG";
import SingleStagePage from "./../../images/Single-stage-page.JPG";

const DescriptionSection = () => {
  return (
    <S.Container>
      <S.DescriptionContent>
        <S.DescriptionBlock>
          <S.DescriptionInfo>
            <S.DescriptionNumber>1.</S.DescriptionNumber>
            <S.DescriptionNameAccent>Schemes Page</S.DescriptionNameAccent>
            <S.DescriptionText>
              <ul>
                <li>
                  Scheme Previews: Each scheme preview is a detailed snapshot of
                  your synthesis. You'll find essential information, including
                  starting compound, final product and the number of stages
                  involved, creation date, last update date, mass, price.
                </li>
                <li>
                  Take control of your data with sortable options, allowing you
                  to arrange schemes based on creation date, last update date,
                  mass, price in both ascending and descending order. Find what
                  you need quickly, or track the most recent updates
                  effortlessly.
                </li>
                <li>
                  Pagination: Manage extensive lists of schemes efficiently
                  through our convenient pagination system.
                </li>
                <li>
                  SMILES Search: Streamline your research by searching for
                  specific schemes using SMILES substrings. No more hunting
                  through endless lists; find what you need in seconds.
                </li>
              </ul>
            </S.DescriptionText>
          </S.DescriptionInfo>

          <S.DescritpionPictureContainer>
            <div className="img-container schemes-page">
              <img src={SchemesPageImage} alt="Schemes page" />
            </div>
          </S.DescritpionPictureContainer>
        </S.DescriptionBlock>

        <S.DescriptionBlock>
          <S.DescriptionInfo>
            <S.DescriptionNumber>2.</S.DescriptionNumber>
            <S.DescriptionNameAccent>
              New synthesis page
            </S.DescriptionNameAccent>

            <S.DescriptionText>
              <ul>
                <li>
                  Commence your synthesis project effortlessly through our
                  user-friendly "New Scheme" form, where you can effortlessly
                  enter all the necessary data for your scheme.
                </li>
                <li>
                  For each synthesis project, you can break down the process
                  into stages. Easily navigate between stage tabs with a
                  user-friendly selection feature, allowing you to focus on the
                  specific details of each stage while keeping the entire scheme
                  within reach. Enter crucial data such as reaction conditions,
                  including solvent, yield, time, temperature, and methodic, for
                  each stage.
                </li>
                <li>
                  See the big picture as you add data to your scheme in real
                  time. Our "Scheme Preview" feature updates as you enter
                  information, providing you with an immediate overview of your
                  project's progress and details.
                </li>
              </ul>
            </S.DescriptionText>
          </S.DescriptionInfo>
          <S.DescritpionPictureContainer>
            <div className="img-container new-scheme-page">
              <img src={NewSchemePage} alt="New scheme page" />
            </div>
          </S.DescritpionPictureContainer>
        </S.DescriptionBlock>

        <S.DescriptionBlock>
          <S.DescriptionInfo>
            <S.DescriptionNumber>3.</S.DescriptionNumber>
            <S.DescriptionNameAccent>
              Single scheme page
            </S.DescriptionNameAccent>
            <S.DescriptionText>
              <ul>
                <li>
                  Seamlessly move between different stages of your synthesis,
                  making it easy to track progress and input essential data,
                  including reaction conditions and yields for each stage.
                </li>
                <li>
                  Additionally, the "Single Scheme" page can identify the last
                  successfully completed stage by outlining its product in
                  green, making it easy to track your progress and quickly
                  identify the latest accomplishments in your synthesis journey.
                </li>
                <li>
                  In the dedicated "Reagents Calculation" tab, you can access
                  information about every reagent required for your synthesis.
                  This feature not only provides details on the reagents but
                  also calculates the masses required to achieve the desired
                  mass of the target compound when yields are provided for each
                  stage.
                </li>
              </ul>
            </S.DescriptionText>
          </S.DescriptionInfo>
          <S.DescritpionPictureContainer>
            <div className="img-container single-scheme-page">
              <img src={SingleSchemePage} alt="Single scheme page" />
            </div>
            <div className="img-container single-scheme-page-reagents">
              <img
                src={SingleSchemePageReagents}
                alt="Single scheme page reagents"
              />
            </div>
          </S.DescritpionPictureContainer>
        </S.DescriptionBlock>
        <S.DescriptionBlock>
          <S.DescriptionInfo>
            <S.DescriptionNumber>4.</S.DescriptionNumber>
            <S.DescriptionNameAccent>Single stage page</S.DescriptionNameAccent>
            <S.DescriptionText>
              <ul>
                <li>
                  Easily switch between different experiments for a single stage
                  using a simple select feature. This flexibility is crucial for
                  optimizing conditions and selecting the best approach.
                </li>
                <li>
                  Within each experiment tab, you'll find a user-friendly form
                  for inputting experiment conditions. These conditions are
                  vital for ensuring accurate and reproducible results.
                </li>
                <li>
                  Experiment yield is automatically calculated from the product
                  mass and purity, eliminating manual calculations and saving
                  you time.
                </li>
                <li>
                  Each experiment allows you to manage up to four reagents.
                  Reagent masses are automatically calculated based on the
                  starting material mass and the number of equivalents for each
                  reagent.
                </li>
                <li>
                  The experiment spectra panel provides a dynamic platform for
                  managing experiment data. Upload spectra in PDF format with
                  comments, view the uploaded spectra, download them for further
                  analysis, or delete as needed.
                </li>
              </ul>
            </S.DescriptionText>
          </S.DescriptionInfo>
          <S.DescritpionPictureContainer>
            <div className="img-container single-stage-page">
              <img src={SingleStagePage} alt="Single stage page" />
            </div>
          </S.DescritpionPictureContainer>
        </S.DescriptionBlock>
      </S.DescriptionContent>
    </S.Container>
  );
};

export default DescriptionSection;
