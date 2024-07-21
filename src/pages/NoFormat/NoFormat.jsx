import React from "react";
import { Outlet } from "react-router-dom";

function NoFormat() {
  return (
    <div>
      <Outlet /> {/* Renders child routes */}
    </div>
  );
}

export default NoFormat;
