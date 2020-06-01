import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { GlobalLayout } from './components/Layout/GlobalLayout';

function App() {
  return (
    <GlobalLayout sider="12" header="1" content="1" footer="1">
      123
    </GlobalLayout>
  );
}

export default App;
