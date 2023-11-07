import * as S from "./CustomTabPanel.styled";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <S.Container
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      className="tab-panel"
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <div>{children}</div>}
    </S.Container>
  );
};

export default CustomTabPanel;
