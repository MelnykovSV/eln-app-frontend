import Container from "./ReagentList.styled";
import { ReagentCard } from "../../components";
import { IReagentListProps } from "../../types";
import { nanoid } from "nanoid";


const ReagentList = ({ reagents }: IReagentListProps) => {
  return (
    <Container>
      {reagents.map((item: any) => (
        <ReagentCard reagentData={item} key={nanoid()} />
      ))}
    </Container>
  );
};

export default ReagentList;
