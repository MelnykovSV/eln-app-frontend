import Container from "./SpectraForm.styled";
import { useAppDispatch } from "../../redux/hooks";
import { addSpectr } from "../../redux/schemes/operations";
import { useDropzone } from "react-dropzone";
import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface IAttemptSpectraProps {
  attemptNumber: number;
}

const SpectraForm = ({ attemptNumber }: IAttemptSpectraProps) => {
  const dispatch = useAppDispatch();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const { schemeId, stageId } = useParams() as {
    schemeId: string;
    stageId: string;
  };

  const files = acceptedFiles.map((file: File) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const fileFormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addSpectr({
        spectr: acceptedFiles[0],
        label: (e.target as HTMLFormElement).label.value,
        attemptNumber: attemptNumber,
        schemeId,
        stageId,
      })
    );
  };
  return (
    <Container onSubmit={fileFormSubmitHandler}>
      <section >
        <div
          {...getRootProps({ className: "dropzone" })}
          style={{ height: "100px" }}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop file here, or click to select file</p>
        </div>
        <aside>
          <h4>File</h4>
          <ul>{files}</ul>
        </aside>
      </section>

      {/* <input type="text" name="label" /> */}

      <TextField
        label="Description"
        className="spectr-label"
        name="label"
        // value={mass || ""}
        variant="outlined"
        // onChange={inputChangeHandler}
        size="medium"
        type="text"
      />

      <Button type="submit" variant="contained">
        Submit file
      </Button>
    </Container>
  );
};

export default SpectraForm;
