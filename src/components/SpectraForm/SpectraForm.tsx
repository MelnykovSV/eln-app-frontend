import Container from "./SpectraForm.styled";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addSpectr } from "../../redux/schemes/operations";
import { useDropzone } from "react-dropzone";
import { useParams } from "react-router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useCallback, useRef, useEffect } from "react";
import { DNALoaderSmall } from "../../ui";
import { getIsSpectrUploading } from "../../redux/schemes/schemesSlice";

interface IAttemptSpectraProps {
  attemptNumber: number;
}

const SpectraForm = ({ attemptNumber }: IAttemptSpectraProps) => {
  const dispatch = useAppDispatch();
  const isSpectrUploading = useAppSelector(getIsSpectrUploading);
  const fileErrorRef = useRef<HTMLParagraphElement>(null);
  const spectrLabelRef = useRef<HTMLParagraphElement>(null);

  const [myFiles, setMyFiles] = useState([] as File[]);
  const [spectrLabel, setSpectrLabel] = useState("");

  useEffect(() => {
    if (
      myFiles.length &&
      fileErrorRef.current?.innerText !== "" &&
      fileErrorRef.current
    ) {
      fileErrorRef.current.innerText = "";
    }
  }, [myFiles]);

  useEffect(() => {
    if (
      spectrLabel &&
      spectrLabel.length <= 300 &&
      spectrLabelRef.current &&
      spectrLabelRef.current.innerText !== ""
    ) {
      spectrLabelRef.current.innerText = "";
    }
  }, [spectrLabel]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
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

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpectrLabel(e.target.value);
  };

  const fileFormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!myFiles.length && fileErrorRef.current) {
      fileErrorRef.current.innerText = "File is required";
    }
    if (!(e.target as HTMLFormElement).label.value && spectrLabelRef.current) {
      spectrLabelRef.current.innerText = "Spectr label is required";
    } else if (
      (e.target as HTMLFormElement).label.value.length > 300 &&
      spectrLabelRef.current
    ) {
      spectrLabelRef.current.innerText = "Spectr label max length is 300";
    } else if (myFiles.length && (e.target as HTMLFormElement).label.value) {
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
      setSpectrLabel("");
    }
  };
  return (
    <Container onSubmit={fileFormSubmitHandler}>
      <section>
        <div
          {...getRootProps({ className: "dropzone" })}
          style={{ height: "100px" }}>
          <input {...getInputProps()} />
          <p>Drop PDF file here, or click to select file</p>
          <p className="dropzone-error" ref={fileErrorRef}></p>
        </div>
        <div>
          <div className="label-wrapper">
            <p>File:</p>
            {isSpectrUploading ? <DNALoaderSmall /> : null}
          </div>

          <ul className="files-list">{files}</ul>
        </div>
      </section>

      <TextField
        label="Description"
        className="spectr-label"
        name="label"
        variant="outlined"
        onChange={inputChangeHandler}
        value={spectrLabel}
        size="medium"
        type="text"
      />
      <p className="spectr-label-error" ref={spectrLabelRef}></p>

      <Button type="submit" variant="contained" disabled={isSpectrUploading}>
        Submit file
      </Button>
    </Container>
  );
};

export default SpectraForm;
