import Container from "./SpectraForm.styled";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addSpectr } from "../../redux/schemes/operations";
import { useDropzone } from "react-dropzone";
import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useCallback } from "react";
import { DNALoaderSmall } from "../../ui";

import { getIsSpectrUploading } from "../../redux/schemes/schemesSlice";

interface IAttemptSpectraProps {
  attemptNumber: number;
}

const SpectraForm = ({ attemptNumber }: IAttemptSpectraProps) => {
  const dispatch = useAppDispatch();
  const isSpectrUploading = useAppSelector(getIsSpectrUploading);

  const [myFiles, setMyFiles] = useState([] as any);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  const { schemeId, stageId } = useParams() as {
    schemeId: string;
    stageId: string;
  };

  const files = myFiles.map((file: File) => (
    <li key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const fileFormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(
      addSpectr({
        spectr: myFiles[0],
        label: (e.target as HTMLFormElement).label.value,
        attemptNumber: attemptNumber,
        schemeId,
        stageId,
      })
    );
    setMyFiles([]);
    (e.target as HTMLFormElement).label.value = "";
  };
  return (
    <Container onSubmit={fileFormSubmitHandler}>
      <section>
        <div
          {...getRootProps({ className: "dropzone" })}
          style={{ height: "100px" }}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop file here, or click to select file</p>
        </div>
        <div>
          <div className="label-wrapper">
            <p>File</p>
            {isSpectrUploading ? <DNALoaderSmall /> : null}
          </div>

          <ul>{files}</ul>
        </div>
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
