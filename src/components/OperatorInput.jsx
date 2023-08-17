import React from "react";
import { Col } from "react-bootstrap";
import { updateDisplayOperator } from "../features/displaySlice";
import { useDispatch } from "react-redux";

const OperatorInput = ({ id, value }) => {
  const dispatch = useDispatch();
  return (
    <Col
      as={"button"}
      id={id}
      className="operator"
      value={value}
      onClick={() => {
        dispatch(updateDisplayOperator(value));
      }}
    >
      {value}
    </Col>
  );
};

export default OperatorInput;
