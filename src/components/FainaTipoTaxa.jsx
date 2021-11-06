import RadioButton from "./RadioButton";

export default function FainaTipoTaxa() {
  return (
    <div className="flex flex-col border border-gray-300 text-center justify-around p-4">
      <div className="bg-blue-300 rounded-lg shadow-lg p-2 mb-3">
        Valor de Tarifa
      </div>
      <div className="flex flew-row text-white justify-around">
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton labelDescription="" />
          Sindop
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton labelDescription="" />
          Sintermar
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton labelDescription="" />
          Não-Sócio
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton labelDescription="" />
          Personalizada
        </div>
      </div>
    </div>
  );
}
