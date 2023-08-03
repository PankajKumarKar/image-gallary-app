import React from "react";
import { Routes, Route } from "react-router-dom";
import Gallary from "./Gallary/Gallary";
import Image from "./Image/Image";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Gallary />} />
      <Route path="/photos/:id" element={<Image />} />
    </Routes>
  );
};

export default CustomRoutes;
