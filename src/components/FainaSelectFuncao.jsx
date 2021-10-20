import SelectFuncao from "./SelectFuncao";

export default function FainaSelectFuncao() {
  return (
    <>
      <div className="flex flex-col place-items-center p-3">
        <div className="bg-blue-300 shadow-lg text-center rounded-lg p-2">
          Selecione Função da Escalação
        </div>
        <SelectFuncao
          labelDescription="Selecione o tipo de Função"
          selectValue={`typeFaina`}
          onSelectChange={`handleTypeFaina`}
        />
      </div>
    </>
  );
}
