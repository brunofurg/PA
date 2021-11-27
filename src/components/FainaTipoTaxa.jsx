import { useState } from "react";
import RadioButton from "./RadioButton";

export default function FainaTipoTaxa({ childOptions = "teste" }) {
  const [radioValue, setRadioValue] = useState(
    childOptions?.inputedValues.periodo || ""
  );
  function handleSindop(sindop) {
    setRadioValue("Sindop");
  }
  function handleSintermar(sintermar) {
    setRadioValue("Sintermar");
  }
  function handleNaoSocio(naoSocio) {
    setRadioValue("Não-Sócio");
  }
  function handlePersonalizada(personalizada) {
    setRadioValue("Personalizada");
  }

  return (
    <div className="flex flex-col border border-gray-300 text-center justify-around p-4">
      <div className="bg-blue-300 rounded-lg shadow-lg p-2 mb-3">
        Valor de Tarifa
      </div>
      <div className="flex flew-row text-white justify-around">
        <RadioButton
          labelDescription="Sindop"
          radioGroupName="selectTarifa"
          buttonChecked={radioValue === "Sindop"}
          onRadioChange={handleSindop}
        />
        <RadioButton
          labelDescription="Sintermar"
          radioGroupName="selectTarifa"
          buttonChecked={radioValue === "Sintermar"}
          onRadioChange={handleSintermar}
        />
        <RadioButton
          labelDescription="Não-Sócio"
          radioGroupName="selectTarifa"
          buttonChecked={radioValue === "Não-Sócio"}
          onRadioChange={handleNaoSocio}
        />
        <RadioButton
          labelDescription="Personalizada"
          radioGroupName="selectTarifa"
          buttonChecked={radioValue === "Personalizada"}
          onRadioChange={handlePersonalizada}
        />
      </div>
    </div>
  );
}
