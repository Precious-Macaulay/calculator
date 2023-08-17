import React from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { clearAll } from "../features/displaySlice";

const ACButton = () => {
  const dispatch = useDispatch();
  return (
    <Col
      as={"button"}
      id="clear"
      className="clearButton"
      xs={6}
      onClick={() => {
        dispatch(clearAll());
      }}
    >
      AC
    </Col>
  );
};

export default ACButton;
