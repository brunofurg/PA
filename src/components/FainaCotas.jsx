import { useState } from "react";
import CheckboxInput from "./CheckboxInput";
import NumberInput from "./NumberInput";

export default function FainaCotas() {
  const [diaria, setDiaria] = useState("");
  const [motorista, setMotorista] = useState("");
  const [operador, setOperador] = useState("");
  const [conexo, setConexo] = useState("");
  const [producao, setProducao] = useState("");
  const [contramestre, setContramestre] = useState("");
  const [capataz, setCapataz] = useState("");
  const [cmConexo, setCmConexo] = useState("");

  function handleDiaria(quantity) {
    console.log(diaria);
    setDiaria(quantity);
  }
  function handleMotorista(quantity) {
    setMotorista(quantity);
  }
  function handleOperador(quantity) {
    setOperador(quantity);
  }
  function handleConexo(quantity) {
    setConexo(quantity);
  }
  function handleProducao(quantity) {
    setProducao(quantity);
  }
  function handleContramestre(quantity) {
    setContramestre(quantity);
  }
  function handleCapataz(quantity) {
    setCapataz(quantity);
  }
  function handleCmConexo(quantity) {
    setCmConexo(quantity);
  }

  return (
    <>
      <div className="flex flex-col border border-gray-300 p-2">
        <div className="bg-blue-300 text-center shadow-lg rounded-lg p-2 m-1 mb-2">
          <p>Insira Quantidade e Tipo de Cotas</p>
        </div>

        <div className="flex flex-row text-center justify-around">
          <div className="text-xs space-y-2">
            <div className="border border-gray-400 hover:bg-gray-200 rounded-lg flex flex-col p-2">
              <CheckboxInput labelDescription="" />
              <NumberInput
                labelDescription="Diária(x1.0)"
                inputValue={diaria}
                onInputChange={handleDiaria}
                placeHolder=""
              />
            </div>
            <div className="border border-gray-400 hover:bg-gray-200 rounded-lg flex flex-col p-2">
              <CheckboxInput labelDescription="" />
              <NumberInput
                labelDescription="Motorista(x1.2)"
                inputValue={motorista}
                onInputChange={handleMotorista}
                placeHolder=""
              />
            </div>
            <div className="border border-gray-400 hover:bg-gray-200 rounded-lg flex flex-col p-2">
              <CheckboxInput labelDescription="" />
              <NumberInput
                labelDescription="Operador(x2.0)"
                inputValue={operador}
                onInputChange={handleOperador}
                placeHolder=""
              />
            </div>
            <div className="border border-gray-400 hover:bg-gray-200 rounded-lg flex flex-col p-2">
              <CheckboxInput labelDescription="" />
              <NumberInput
                labelDescription="Conexo(x1.0)"
                inputValue={conexo}
                onInputChange={handleConexo}
                placeHolder=""
              />
            </div>
          </div>
          <div className="text-xs text-center space-y-2">
            <div className="border border-gray-400 hover:bg-gray-200 rounded-lg flex flex-col p-2">
              <CheckboxInput labelDescription="" />
              <NumberInput
                labelDescription="Produção(x1.0)"
                inputValue={producao}
                onInputChange={handleProducao}
                placeHolder=""
              />
            </div>
            <div className="border border-gray-400 hover:bg-gray-200 rounded-lg flex flex-col p-2">
              <CheckboxInput labelDescription="" />
              <NumberInput
                labelDescription="Contra-Mestre(x1.5)"
                inputValue={contramestre}
                onInputChange={handleContramestre}
                placeHolder=""
              />
            </div>
            <div className="border border-gray-400 hover:bg-gray-200 rounded-lg flex flex-col p-2">
              <CheckboxInput labelDescription="" />
              <NumberInput
                labelDescription="Capataz(x2.25)"
                inputValue={capataz}
                onInputChange={handleCapataz}
                placeHolder=""
              />
            </div>
            <div className="border border-gray-400 hover:bg-gray-200 rounded-lg flex flex-col p-2">
              <CheckboxInput labelDescription="" />
              <NumberInput
                labelDescription="CM Conexo(x1.5cnx)"
                inputValue={cmConexo}
                onInputChange={handleCmConexo}
                placeHolder=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export default function FainaCotas() {
//     return (
//         <div className="bg-red-300 flex flex-col">
//             /Soldado(x1)
//             Motorista(x1,2)
//             /Contra-Mestre(x1,5)
//             Operador(x2)
//             /Capataz(x2,25)

//         </div>
//     )
// }
