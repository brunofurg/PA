import { useState } from "react";
import RadioButton from "./RadioButton";

export default function FainaSelectOptions({ childOptions = "teste" }) {
  const [radioValue, setRadioValue] = useState(
    childOptions?.inputedValues.periodo || ""
  );
  function handlePeso(peso) {
    console.log(peso);
    setRadioValue(peso);
  }
  function handleCaminhoes(caminhoes) {
    console.log(caminhoes);
    setRadioValue(caminhoes);
  }
  function handleFardos(fardos) {
    console.log(fardos);
    setRadioValue(fardos);
  }
  return (
    <div className="flex flex-col p-2">
      <div className="bg-blue-300 shadow-lg rounded-lg text-center p-2">
        <p>Calcular Por:</p>
      </div>
      <div className="flex flex-row justify-evenly space-x-1 p-2">
        <span className="bg-terciary hover:bg-primary text-center text-white rounded-lg shadow-lg p-2">
          <RadioButton
            labelDescription="Peso|Unidades"
            radioValue={radioValue === "Peso|Unidades"}
            onRadioChange={handlePeso}
          />
        </span>
        <span className="bg-terciary hover:bg-primary text-center text-white rounded-lg shadow-lg p-2">
          <RadioButton
            labelDescription="Caminhões"
            radioValue={radioValue === "Caminhões"}
            onRadioChange={handleCaminhoes}
          />
        </span>
        <span className="bg-terciary hover:bg-primary text-white rounded-lg p-2">
          <RadioButton
            labelDescription="Fardos|Bobinas"
            radioValue={radioValue === "Fardos|Bobinas"}
            onRadioChange={handleFardos}
          />
        </span>
      </div>
    </div>
  );
}
