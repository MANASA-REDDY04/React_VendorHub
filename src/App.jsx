import React from "react";
import LandingPage from "./vendorDashboard/pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./vendorDashboard/components/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
