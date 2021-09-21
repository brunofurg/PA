import ChartBrutoFaina from "./Charts/ChartBrutoFaina";
import ChartGanhosOperador from "./Charts/ChartGanhosOperador";
import ChartTrabalhosSemana from "./Charts/ChatTrabalhosSemana";
//import CallChart from "./CallChart";
import ChartTopFainas from "./Charts/ChartTopFainas";
import ChartTurnosTrabalhados from "./Charts/ChartTurnosTrabalhados";
import ChartSalarioBruto from "./Charts/ChartSalarioBruto";
import ChartTipoFaina from "./Charts/ChartTipoFaina";
import ChartTrabalhosMes from "./Charts/ChartTrabalhosMes";


export default function Painel() {
    return (
     <>
             <div className="border-2 border-gray-600 p-1">
                <div className="flex flex-row justify-between p-2">
                    <span>
                        Demonstrativo
                    </span>
                    <span>
                        SelectPeriodo
                    </span>
                </div>
                <div>
                    <ChartSalarioBruto />
                    <ChartBrutoFaina />
                    <ChartGanhosOperador />
                    <ChartTrabalhosSemana />
                    <ChartTurnosTrabalhados />
                    <ChartTopFainas />
                    <ChartTipoFaina />
                    <ChartTrabalhosMes />
                
        
                    {/* <CallChart /> */}
                </div>
             </div>
               
    </>
    )
}
