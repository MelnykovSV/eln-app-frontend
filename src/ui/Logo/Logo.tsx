import * as S from "./Logo.styled";

import { ReactComponent as LogoIcon } from "./../../images/icons/eln_logo.svg";

const Logo = () => {
  return (
    <S.Container>
      <LogoIcon className="logo_icon"></LogoIcon>
      <div className="logo_text-container">
        <span className="logo_text-line">
          <span className="logo_capital-letter">E</span>lectronic
        </span>
        <span className="logo_text-line">
          <span className="logo_capital-letter">L</span>aboratory
        </span>
        <span className="logo_text-line">
          <span className="logo_capital-letter">N</span>otebook
        </span>
      </div>
    </S.Container>
  );
};

export default Logo;
