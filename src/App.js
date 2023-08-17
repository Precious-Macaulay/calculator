import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Display from "./components/Display";
import FormulaScreen from "./components/FormulaScreen";
import ACButton from "./components/ACButton";
import OperatorInput from "./components/OperatorInput";
import NumberInput from "./components/NumberInput";
import EqualButton from "./components/EqualButton";

function App() {
  return (
    <div className="app">
      <div className="calculator">
        <Container>
          <Row>
            <FormulaScreen />
          </Row>
          <Row>
            <Display />
          </Row>
          <Row>
            <ACButton />
            <OperatorInput id={"divide"} value={"/"} />
            <OperatorInput id={"multiply"} value={"*"} />
          </Row>
          <Row>
            <NumberInput id={"seven"} value={"7"} />
            <NumberInput id={"eight"} value={"8"} />
            <NumberInput id={"nine"} value={"9"} />
            <OperatorInput id={"add"} value={"+"} />
          </Row>
          <Row>
            <NumberInput id={"four"} value={"4"} />
            <NumberInput id={"five"} value={"5"} />
            <NumberInput id={"six"} value={"6"} />
            <OperatorInput id={"subtract"} value={"-"} />
          </Row>
          <Row>
            <Col xs={"9"}>
              <Row>
                <NumberInput id={"three"} value={"3"} />
                <NumberInput id={"two"} value={"2"} />
                <NumberInput id={"one"} value={"1"} />
              </Row>
              <Row>
                <NumberInput id={"zero"} value={"0"} xs={8}/>
                <NumberInput id={"decimal"} value={"."} />
              </Row>
            </Col>
            <EqualButton />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
