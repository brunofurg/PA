import ChartBrutoFaina from "./Charts/ChartBrutoFaina";
import ChartGanhosOperador from "./Charts/ChartGanhosOperador";
import ChartTrabalhosSemana from "./Charts/ChatTrabalhosSemana";
import ChartTopFainas from "./Charts/ChartTopFainas";
import ChartTurnosTrabalhados from "./Charts/ChartTurnosTrabalhados";
import ChartSalario from "./Charts/ChartSalario";
import ChartTipoFaina from "./Charts/ChartTipoFaina";
import ChartTrabalhosMes from "./Charts/ChartTrabalhosMes";


import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import SelectIntervalo from "./SelectIntervalo";

Chart.register(ChartDataLabels);

export default function Painel() {
    return (
     <>
             <div className="border-2 bg-gray-200 p-1">
                <div className="flex flex-row justify-evenly items-center">
                    <span>
                        {`Demonstrativo ${SelectIntervalo.children}`}
                    </span>
                    <span>
                        <SelectIntervalo />
                    </span>
                </div>
                <div className="p-2 space-y-4">
                    <ChartSalario />
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
