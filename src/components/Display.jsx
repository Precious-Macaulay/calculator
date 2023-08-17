import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { resetLimit } from "../features/displaySlice";

const Display = () => {
  const displayValue = useSelector((state) => state.display.value);
  const limit = useSelector((state) => state.display.limit);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(resetLimit());
    }, 2000);
  }, [limit]);
  return (
    <div id="display" className="outputScreen">
      {limit ? "DIGIT LIMIT MET" : displayValue === "" ? 0 : displayValue}
    </div>
  );
};

export default Display;
