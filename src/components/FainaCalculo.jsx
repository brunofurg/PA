export default function FainaCalculo() {
  return (
    <div className="flex flex-row border border-gray-300 justify-around p-2">
      <div className="flex flex-col">
        <div className="bg-blue-300 borderflex flex flex-row space-x-2 justify-around mb-1 p-2">
          <span>Peso|Qtd Total</span>
          <span>Valor Ton|Und</span>
        </div>
        <div className="bg-blue-200 flex justify-around mb-2 p-1">
          <span>750 tons</span>
          <span>x</span>
          <span>0,8051</span>
        </div>
        <div className="flex flex-col flex-wrap">
          <p>B13-Tora Longa Automático</p>
          <p>1 x Produção(x1)</p>
          <p>1 x Conexo(x1)</p>
        </div>
      </div>

      <div className="">
        <div className="bg-blue-300 flex justify-around p-2 mb-1">
          <span>Produção</span>
          <span>Diária</span>
        </div>
        <div className="bg-green-200">
          <div className="flex flex-row flex-wrap justify-around p-2">
            <span>603,82</span>
            <span>
              <p>{`>`}</p>
            </span>
            <span>167,79</span>
          </div>
          <div className="text-xs p-1">Produção ultrapassou a diária</div>
        </div>
        <div className="flex flex-row justify-around text-center">
          <div className="flex flex-col p-2">
            <span className="font-bold">Adicional</span>
            <span>+50%</span>
            <span>301,91</span>
          </div>
          <div className="flex flex-col p-2">
            <span className="font-bold">RSR</span>
            <span>+18,18%</span>
            <span>164,66</span>
          </div>
        </div>
      </div>
    </div>
  );
}
