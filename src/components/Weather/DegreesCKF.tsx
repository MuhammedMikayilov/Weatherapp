import React from "react";
import { Button, ButtonGroup, Col } from "reactstrap";

interface IProps {
  rSelected: string;
  setRSelected: React.Dispatch<React.SetStateAction<string>>;
  handleChangeWeatherDegree: (e: any) => void;
}
const DegreesCKF: React.FC<IProps> = ({
  rSelected,
  setRSelected,
  handleChangeWeatherDegree,
}) => {
  return (
    <Col sm="2" className="mt-4">
      <ButtonGroup>
        <Button
          color="primary"
          onClick={handleChangeWeatherDegree}
          active={rSelected === "Celsius"}
        >
          Celsius
        </Button>
        <Button
          color="primary"
          onClick={() => setRSelected("Kelvin")}
          active={rSelected === "Kelvin"}
        >
          Kelvin
        </Button>
        <Button
          color="primary"
          onClick={() => setRSelected("Fahrenheit")}
          active={rSelected === "Fahrenheit"}
        >
          Fahrenheit
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default DegreesCKF;
