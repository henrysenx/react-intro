import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskManager from "./pages/TaskManager";
import Calculator from "./pages/Calculator";
import Layout from "./components/Layout";
import Conclusion from "./pages/Conclution";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<TaskManager />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/conclusion" element={<Conclusion />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
