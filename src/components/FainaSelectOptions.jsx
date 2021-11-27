import { useState } from "react";
import RadioButton from "./RadioButton";

export default function FainaSelectOptions({ childOptions = "teste" }) {
  const [button2RadioValue, setButton2RadioValue] = useState(
    childOptions?.inputedValues.periodo || ""
  );
  function handlePeso(peso) {
    setButton2RadioValue("Peso|Unidades");
  }
  function handleCaminhoes(caminhoes) {
    setButton2RadioValue("Caminhões");
  }
  function handleFardos(fardos) {
    setButton2RadioValue("Fardos|Bobinas");
  }
  return (
    <div className="flex flex-col p-2">
      <div className="bg-blue-300 shadow-lg rounded-lg text-center p-2">
        <p>Calcular Por:</p>
      </div>
      <div className="flex flex-row justify-evenly space-x-1 p-2">
        <RadioButton
          labelDescription="Peso|Unidades"
          radioGroupName="selectWayCalculate"
          buttonChecked={button2RadioValue === "Peso|Unidades"}
          onRadioChange={handlePeso}
        />
        <RadioButton
          labelDescription="Caminhões"
          radioGroupName="selectWayCalculate"
          buttonChecked={button2RadioValue === "Caminhões"}
          onRadioChange={handleCaminhoes}
        />
        <RadioButton
          labelDescription="Fardos|Bobinas"
          radioGroupName="selectWayCalculate"
          buttonChecked={button2RadioValue === "Fardos|Bobinas"}
          onRadioChange={handleFardos}
        />
      </div>
    </div>
  );
}
