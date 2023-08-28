import React from "react";
import logo from "./../../logo.svg";
import "./App.css";
import { theme } from "../../theme/theme";

import {
  // LoginForm,
  // RegistrationForm,
  SingleMolCanvas,
  ReactionSchemePreview,
} from "..";

import { DoubleArrows } from "..";

import { Schemes } from "../../pages";

import { testSchemePreviewData } from "../../testData";
import { ModernNormalize } from "emotion-modern-normalize";
import Container from "./App.styled";

console.log(testSchemePreviewData);

function App() {
  return (
    <Container>
      <ModernNormalize />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>

        {/* <RegistrationForm />
      <LoginForm /> */}
        {/* <div className="schemes-preview-container">
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
        <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
      </div> */}
        <DoubleArrows stagesNumber={7} />

        <Schemes></Schemes>
      </div>
    </Container>
  );
}

export default App;
