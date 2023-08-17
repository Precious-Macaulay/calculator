import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateDisplayNumber } from "../features/displaySlice";

const NumberInput = ({ id, value, ...props }) => {
  const dispatch = useDispatch();

  return (
    <Col
      as={"button"}
      id={id}
      className="numbers"
      value={value}
      {...props}
      onClick={() => {
        dispatch(updateDisplayNumber(value));
      }}
    >
      {value}
    </Col>
  );
};

export default NumberInput;
