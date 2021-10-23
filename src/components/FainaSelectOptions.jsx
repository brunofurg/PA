import RadioButton from "./RadioButton";

export default function FainaSelectOptions() {
  return (
    <div className="flex flex-col p-2">
      <div className="bg-blue-300 shadow-lg rounded-lg text-center p-2">
        <p>Calcular Por:</p>
      </div>
      <div className="flex flex-row justify-evenly space-x-1 p-2">
        <span className="bg-terciary hover:bg-primary text-center text-white rounded-lg shadow-lg p-2">
          <RadioButton labelDescription="" />
          {`Peso|Unidades`}
        </span>
        <span className="bg-terciary hover:bg-primary text-center text-white rounded-lg shadow-lg p-2">
          <RadioButton labelDescription="" />
          {`Caminhões`}
        </span>
        <span className="bg-terciary hover:bg-primary text-white rounded-lg p-2">
          <RadioButton
            labelDescription=""
            value={`checkboxValue`}
            readOnly
            onChange={`handleCheckboxChange`}
          />
          Fardos|Bobinas
        </span>
      </div>
    </div>
  );
}
