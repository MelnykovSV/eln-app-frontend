import * as S from "./SearchTextInput.styled";
import { InputAdornment } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
import { ISearchTextInput } from "../../types";

const SearchTextInput = ({ label, changeHandler, value }: ISearchTextInput) => {
  return (
    <S.Container
      label={label}
      onChange={changeHandler}
      value={value}
      sx={{ width: "100%" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <AiOutlineSearch />
          </InputAdornment>
        ),
      }}></S.Container>
  );
};

export default SearchTextInput;
