import Container from "./ReagentList.styled";
import { ReagentCard } from "../../components";
import { IReagentListProps } from "../../types";


const ReagentList = ({ reagents }: IReagentListProps) => {
  return (
    <Container>
      {reagents.map((item: any) => (
        <ReagentCard reagentData={item} key={item.smiles} />
      ))}
    </Container>
  );
};

export default ReagentList;
