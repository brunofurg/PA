import { useState } from "react";
import RadioButton from "./RadioButton";

export default function FainaTipoTaxa({ childOptions = "teste" }) {
  const [radioValue, setRadioValue] = useState(
    childOptions?.inputedValues.periodo || ""
  );
  function handleSindop(sindop) {
    console.log(sindop);
    setRadioValue(sindop);
  }
  function handleSintermar(sintermar) {
    console.log(sintermar);
    setRadioValue(sintermar);
  }
  function handleNaoSocio(naoSocio) {
    console.log(naoSocio);
    setRadioValue(naoSocio);
  }
  function handlePersonalizada(personalizada) {
    console.log(personalizada);
    setRadioValue(personalizada);
  }

  return (
    <div className="flex flex-col border border-gray-300 text-center justify-around p-4">
      <div className="bg-blue-300 rounded-lg shadow-lg p-2 mb-3">
        Valor de Tarifa
      </div>
      <div className="flex flew-row text-white justify-around">
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton
            labelDescription="Sindop"
            radioValue={radioValue === "Sindop"}
            onRadioChange={handleSindop}
          />
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton
            labelDescription="Sintermar"
            radioValue={radioValue === "Sintermar"}
            onRadioChange={handleSintermar}
          />
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton
            labelDescription="Não-Sócio"
            radioValue={radioValue === "Não-Sócio"}
            onRadioChange={handleNaoSocio}
          />
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton
            labelDescription="Personalizada"
            radioValue={radioValue === "Personalizada"}
            onRadioChange={handlePersonalizada}
          />
        </div>
      </div>
    </div>
  );
}
