import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { theme } from "./theme/theme";

import {
  // LoginForm,
  // RegistrationForm,
  SingleMolCanvas,
  ReactionSchemePreview,
} from "./components";

import { Schemes } from "./pages";

import { testSchemePreviewData } from "./testData";

console.log(testSchemePreviewData);

function App() {
  return (
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

      <Schemes></Schemes>
    </div>
  );
}

export default App;
