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

Chart.register(ChartDataLabels);

export default function Painel() {
    return (
     <>
             <div className="border-2 border-gray-600 p-1">
                <div className="flex flex-row justify-between p-2">
                    <span>
                        Demonstrativo Agosto/21
                    </span>
                    <span>
                        SelectPeriodo
                    </span>
                </div>
                <div>
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
