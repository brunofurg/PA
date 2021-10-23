import { useState } from "react";
import NumberInput from "./NumberInput";

export default function FainaValoresFaina() {
  const [a1tGlobalCheio, setA1tGlobalCheio] = useState("");
  const [a1tGlobalVazio, setA1tGlobalVazio] = useState("");
  const [a1tCabotagemCheio, setA1tCabotagemCheio] = useState("");
  const [a1tCabotagemVazio, setA1tCabotagemVazio] = useState("");
  const [a1tTranshipCheio, setA1tTranshipCheio] = useState("");
  const [a1tTranshipVazio, setA1tTranshipVazio] = useState("");

  function handleA1tGlobalCheio(quantity) {
    console.log(a1tGlobalCheio);
    setA1tGlobalCheio(quantity);
  }
  function handleA1tGlobalVazio(quantity) {
    setA1tGlobalVazio(quantity);
  }
  function handleA1tCabotagemCheio(quantity) {
    setA1tCabotagemCheio(quantity);
  }
  function handleA1tCabotagemVazio(quantity) {
    setA1tCabotagemVazio(quantity);
  }
  function handleA1tTranshipCheio(quantity) {
    setA1tTranshipCheio(quantity);
  }

  function handleA1tTranshipVazio(quantity) {
    setA1tTranshipVazio(quantity);
  }

  return (
    <>
      <div className="flex flex-col border border-gray-300 p-2">
        <div className="flex flex-row justify-center">
          <div className="bg-blue-300 rounded-lg shadow-lg p-3">
            Insira os Valores da Faina:
          </div>
        </div>

        <div className="flex flex-row place-content-center text-xs text-center">
          <div className="flex flex-col justify-center space-y-1 p-2">
            <div className="bg-green-300 border border-gray-300 hover:bg-gray-200 rounded-lg p-2">
              <NumberInput
                labelDescription="Bruto"
                inputValue={a1tGlobalCheio}
                onInputChange={handleA1tGlobalCheio}
                placeHolder=""
              />
            </div>
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="Judicial"
                inputValue={a1tCabotagemCheio}
                onInputChange={handleA1tCabotagemCheio}
                placeHolder=""
              />
            </div>
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="Sindical"
                inputValue={a1tTranshipCheio}
                onInputChange={handleA1tTranshipCheio}
                placeHolder=""
              />
            </div>
            <div className="bg-green-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="Férias"
                inputValue={a1tTranshipCheio}
                onInputChange={handleA1tTranshipCheio}
                placeHolder=""
              />
            </div>
            <div className="bg-green-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="FGTS"
                inputValue={a1tTranshipCheio}
                onInputChange={handleA1tTranshipCheio}
                placeHolder=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-1 p-2">
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg p-2">
              <NumberInput
                labelDescription="INSS"
                inputValue={a1tGlobalCheio}
                onInputChange={handleA1tGlobalCheio}
                placeHolder=""
              />
            </div>
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="DAS"
                inputValue={a1tCabotagemCheio}
                onInputChange={handleA1tCabotagemCheio}
                placeHolder=""
              />
            </div>
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="EPI"
                inputValue={a1tTranshipCheio}
                onInputChange={handleA1tTranshipCheio}
                placeHolder=""
              />
            </div>
            <div className="bg-green-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="13°"
                inputValue={a1tTranshipCheio}
                onInputChange={handleA1tTranshipCheio}
                placeHolder=""
              />
            </div>
            <div className="bg-green-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="FGTSAcumulado"
                inputValue={a1tTranshipCheio}
                onInputChange={handleA1tTranshipCheio}
                placeHolder=""
              />
            </div>
          </div>

          <div className="flex flex-col justify-evenly space-y-1 p-2">
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="IRPF"
                inputValue={a1tGlobalVazio}
                onInputChange={handleA1tGlobalVazio}
                placeHolder=""
              />
            </div>
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="Mensal"
                inputValue={a1tCabotagemVazio}
                onInputChange={handleA1tCabotagemVazio}
                placeHolder=""
              />
            </div>
            <div className="bg-green-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="Liquido"
                inputValue={a1tTranshipVazio}
                onInputChange={handleA1tTranshipVazio}
                placeHolder=""
              />
            </div>
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="EncS/13°"
                inputValue={a1tTranshipVazio}
                onInputChange={handleA1tTranshipVazio}
                placeHolder=""
              />
            </div>
            <div className="bg-red-300 border border-gray-300 hover:bg-gray-200 rounded-lg  p-2">
              <NumberInput
                labelDescription="Revisão"
                inputValue={a1tTranshipVazio}
                onInputChange={handleA1tTranshipVazio}
                placeHolder=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
