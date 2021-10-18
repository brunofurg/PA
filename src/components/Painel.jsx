import ChartBrutoFaina from "./Charts/ChartBrutoFaina";
import ChartGanhosOperador from "./Charts/ChartGanhosOperador";
import ChartTrabalhosSemana from "./Charts/ChatTrabalhosSemana";
import ChartTopFainas from "./Charts/ChartTopFainas";
import ChartTurnosTrabalhados from "./Charts/ChartTurnosTrabalhados";
import ChartSalarioBruto from "./Charts/ChartSalarioBruto";
import ChartTipoFaina from "./Charts/ChartTipoFaina";
import ChartTrabalhosMes from "./Charts/ChartTrabalhosMes";


import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import SelectIntervalo from "./SelectIntervalo";

Chart.register(ChartDataLabels);

export default function Painel() {
    return (
     <>
             <div className="border-2 bg-gray-100 p-1">
                <div className="flex flex-row justify-evenly items-center">
                    <span className="bg-blue-400 text-white rounded-lg shadow-lg flex flex-col text-center p-2">
                        <p className="text-bold text-base">Demonstrativo</p>
                        <p>{`Setembro/21`}</p>
                    </span>
                    <span>
                        <SelectIntervalo />
                    </span>
                </div>
                <div className="p-2 space-y-4 font-bold">
                    <ChartSalarioBruto />
                    <ChartBrutoFaina />
                    <ChartGanhosOperador />
                    <ChartTrabalhosSemana />
                    <ChartTurnosTrabalhados />
                    <ChartTopFainas />
                    <ChartTipoFaina />
                    <ChartTrabalhosMes />
                </div>
             </div>
               
    </>
    )
}
