import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { equalsTo } from "../features/displaySlice";

const EqualButton = () => {
  const dispatch = useDispatch();
  return (
    <Col
      as={"button"}
      id="equals"
      className="equals"
      onClick={() => {
        dispatch(equalsTo());
      }}
    >
      {"="}
    </Col>
  );
};

export default EqualButton;
