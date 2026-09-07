import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";

function App() {
  return (
    <div>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </div>
  );
}

export default App;
