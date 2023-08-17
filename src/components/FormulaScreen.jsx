import React from "react";
import { useSelector } from "react-redux";

const FormulaScreen = () => {
  const formulaDisplay = useSelector((state) => state.display.formula);
  return <div className="formulaScreen">
    {formulaDisplay}
  </div>;
};

export default FormulaScreen;
