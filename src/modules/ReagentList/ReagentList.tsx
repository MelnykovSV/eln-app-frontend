import Container from "./ReagentList.styled";
import { ReagentCard } from "../../components";
import { IReagentListProps } from "../../types";
import { IReagentListItem } from "../../types/componentsProps";

const ReagentList = ({ reagents }: IReagentListProps) => {
  return (
    <Container>
      {reagents.map((item: IReagentListItem) => (
        <ReagentCard reagentData={item} key={item.smiles} />
      ))}
    </Container>
  );
};

export default ReagentList;
