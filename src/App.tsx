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
      <ReactionSchemePreview schemePreviewData={testSchemePreviewData} />
    </div>
  );
}

export default App;
