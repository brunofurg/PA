import RadioButton from "./RadioButton";

export default function FainaTipoTaxa() {
  return (
    <div className="flex flex-col border border-gray-300 text-center justify-around p-4">
      <div className="bg-blue-300 rounded-lg shadow-lg p-2 mb-3">
        Valor de Tarifa
      </div>
      <div className="flex flew-row text-white justify-around">
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton labelDescription="" name="valorTaxa" buttonChecked />
          Sindop
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton labelDescription="" name="valorTaxa" />
          Sintermar
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton labelDescription="" name="valorTaxa" />
          Não-Sócio
        </div>
        <div className="bg-terciary hover:bg-primary rounded-lg p-2">
          <RadioButton labelDescription="" name="valorTaxa" />
          Personalizada
        </div>
      </div>
    </div>
  );
}
