import ChartBrutoFaina from "./Charts/ChartBrutoFaina";
import ChartGanhosOperador from "./Charts/ChartGanhosOperador";
import ChartTrabalhosSemana from "./Charts/ChatTrabalhosSemana";
import ChartTopFainas from "./Charts/ChartTopFainas";
import ChartTurnosTrabalhados from "./Charts/ChartTurnosTrabalhados";
import ChartSalarioBruto from "./Charts/ChartSalarioBruto";
import ChartTipoFaina from "./Charts/ChartTipoFaina";
import ChartTrabalhosMes from "./Charts/ChartTrabalhosMes";

import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import SelectIntervalo from "./SelectIntervalo";

Chart.register(ChartDataLabels);

export default function Painel() {
  return (
    <>
      <div className="border-2 bg-gray-100 p-1">
        <div className="flex flex-row justify-evenly items-center">
          <div className="bg-blue-400 border border-blue-600 text-white rounded-lg shadow-lg flex flex-col justify-center text-center p-2 m-2">
            Demonstrativo
            <SelectIntervalo />
          </div>
        </div>
        <div className="space-y-4 font-bold p-4">
          <ChartSalarioBruto />
          <ChartBrutoFaina />
          <ChartGanhosOperador />
          <ChartTrabalhosSemana />
          <ChartTurnosTrabalhados />
          <ChartTopFainas />
          <ChartTipoFaina />
          <ChartTrabalhosMes />
        </div>

        <div className="bg-blue-50 rounded-lg flex flex-col shadow-lg p-4 m-4">
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>1</p>
            <strong>Faina(s) realizada(s)</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>4</p>
            <strong>Média Faina(s)/Semana</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>25</p>
            <strong>Dom/Fer Trabalhado(s)</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>360,87</p>
            <strong>Média Bruto/Faina</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>320,63</p>
            <strong>Média Liquido/Faina</strong>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg flex flex-col place-content-around shadow-lg m-4 p-2">
          <div className="bg-blue-200 rounded-lg shadow-lg text-center mb-2 p-2">
            Rendimentos por Operador (R$)
          </div>
          <div className="flex flex-col place-content-center flex-wrap ">
            <div className="bg-blue-300 rounded-lg text-center p-2 m-2">
              Tecon
            </div>
            <div className="flex flex-row text-center p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>4
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>7.701,89
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong> 1.191,00
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>893,25
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg flex flex-col place-content-around shadow-lg m-4 p-2">
          <div className="bg-blue-200 rounded-lg shadow-lg text-center mb-2 p-2">
            Rendimentos por Faina (R$)
          </div>
          <div className="flex flex-col place-content-center flex-wrap ">
            <div className="bg-blue-300 rounded-lg text-center p-2 m-2">
              Adubo
            </div>
            <div className="flex flex-row text-center p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>4
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>7.701,89
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong> 1.191,00
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>893,25
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg flex flex-col shadow-lg p-4 m-4">
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <strong>Rendimentos por Operador:</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-3 rounded-md flex flex-row justify-evenly">
            <strong>AGM</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>25</p>
            <strong>Dom/Fer Trabalhado(s)</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>360,87</p>
            <strong>Média Bruto/Faina</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>320,63</p>
            <strong>Média Liquido/Faina</strong>
          </div>
        </div>
      </div>
    </>
  );
}
