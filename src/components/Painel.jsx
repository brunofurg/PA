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
import ChartRetornosTotais from "./Charts/ChartRetornosTotais";

Chart.register(ChartDataLabels);

export default function Painel() {
  return (
    <>
      <div className="border-2 bg-gray-100 p-3">
        <div className="">
          <div className="bg-blue-400 border border-blue-600 text-white text-center rounded-lg shadow-lg flex flex-col p-2">
            Demonstrativo
            <SelectIntervalo />
          </div>
        </div>
        <div className="space-y-4 font-bold p-2">
          <ChartSalarioBruto />
          <ChartBrutoFaina />
          <ChartGanhosOperador />
          <ChartTrabalhosSemana />
          <ChartTurnosTrabalhados />
          <ChartTopFainas />
          <ChartTipoFaina />
          <ChartTrabalhosMes />
          <ChartRetornosTotais />
        </div>

        <div className="bg-blue-50 rounded-lg flex flex-col shadow-lg p-4 m-4">
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>16</p>
            <strong>Faina(s) realizada(s)</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>3,2</p>
            <strong>Média Faina(s)/Semana</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>5</p>
            <strong>Dom/Fer Trabalhado(s)</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>410,09</p>
            <strong>Média Bruto/Faina</strong>
          </div>
          <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
            <p>291,39</p>
            <strong>Média Liquido/Faina</strong>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg flex flex-col place-content-around shadow-lg m-4 p-2">
          <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-2 p-2">
            Rendimentos por Operador (R$)
          </div>
          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Sagres
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>6
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>556,34
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong> 836,67
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>50,87
              </div>
            </div>
          </div>
          <div className="flex flex-col border border-blue-200 rounded-lg  justify-evenly  flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Tecon
            </div>
            <div className="flex flex-row text-center  justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>4
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>337,96
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>471,11
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>20,60
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg  justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Vanzin
            </div>
            <div className="flex flex-row text-center  justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>4
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>328,00
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>703,41
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>20,01
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg  justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Termasa
            </div>
            <div className="flex flex-row text-center  justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>2
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>279,78
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>298,94
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>8,52
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              AGM
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Bianchini
            </div>
            <div className="flex flex-row text-center  justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              CTIL
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Livenport
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Serra Morena
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg flex flex-col place-content-around shadow-lg m-4 p-2">
          <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-2 p-2">
            Rendimentos por Tipo de Carga (R$)
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Toras de Madeira
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>3
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>700,29
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>836,67
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>32,01
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Contêiner
            </div>
            <div className="flex flex-row text-center  justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>4
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>337,96
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>459,65
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>20,60
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg  justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Adubo
            </div>
            <div className="flex flex-row text-center justify-evenly  p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>4
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>328,00
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>703,41
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>20,01
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Celulose
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>3
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>412,39
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>459,31
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>18,86
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Granéis
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>2
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>279,78
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>298,94
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>8,52
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Agrícola
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Carga Geral
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Cargas Vivas
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Cavaco de Madeira
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Sacaria
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-blue-200 rounded-lg justify-evenly flex-wrap ">
            <div className="bg-blue-200 rounded-lg text-center p-2 m-2">
              Veículos
            </div>
            <div className="flex flex-row text-center justify-evenly p-2">
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Fainas: </strong>0
              </div>
              <div className="border border-blue-300 bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Média: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>Maior Bruto: </strong>0
              </div>
              <div className="border border-blue-300  bg-blue-100 shadow-lg p-1 rounded-md">
                <strong>% do Total: </strong>0
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
