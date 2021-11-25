import { useState } from "react";
import NumberInput from "./NumberInput";
import RadioButton from "./RadioButton";

export default function FainaPorCaminhao({ childOptions = "teste" }) {
  const [trucksTotal, setTrucksTotal] = useState("");
  const [byHour, setByHour] = useState("");
  const [mediumWeight, setMediumWeight] = useState("");

  const [radioValue, setRadioValue] = useState("");
  //   childOptions?.inputedValues.periodo || ""
  // );
  function handleTrucks(trucks) {
    console.log(trucks);
    setRadioValue(trucks);
  }
  function handleHour(hour) {
    console.log(hour);
    setRadioValue(hour);
  }

  function handleTrucksTotal(totalTrucks) {
    setTrucksTotal(totalTrucks);
  }
  function handleByHour(byHour) {
    setByHour(byHour);
  }
  function handleMediumWeight(mediumWeight) {
    setMediumWeight(mediumWeight);
  }
  return (
    <div className="flex flex-col border border-gray-300 text-center p-4">
      <span className="bg-blue-300 rounded-lg shadow-lg p-2 mb-2">
        Calcular Caminhões:
      </span>
      <div className="flex flex-row place-content-around text-xs">
        <div className="border border-gray-400 hover:bg-gray-200 content-center rounded-lg p-2">
          <RadioButton
            labelDescription=""
            radioValue={radioValue === "Pelo Período"}
            onRadioChange={handleTrucks}
          />
          <NumberInput
            labelDescription="Pelo Período"
            inputValue={trucksTotal}
            onInputChange={handleTrucksTotal}
            placeHolder="Total movimentado"
          />
        </div>
        <div className="border border-gray-400 hover:bg-gray-200 place-content-center rounded-lg p-2">
          <RadioButton
            labelDescription=""
            radioValue={radioValue === "Por Hora"}
            onRadioChange={handleHour}
          />
          <NumberInput
            labelDescription="Por Hora"
            inputValue={byHour}
            onInputChange={handleByHour}
            placeHolder="Média Caminhões/Hora"
          />
        </div>
      </div>
      <div className="flex flex-row flex place-content-around">
        <div className="place-self-center">
          <NumberInput
            labelDescription="Peso Médio por Caminhão"
            inputValue={mediumWeight}
            onInputChange={handleMediumWeight}
            placeHolder="Padrão 30 toneladas"
          />
        </div>
        <div className="flex flex-col p-2">
          <span>25 caminhões</span>
          <span>x</span>
          <span>30 ton|und</span>
          <span>=750 ton|und</span>
        </div>
      </div>
    </div>
  );
}
