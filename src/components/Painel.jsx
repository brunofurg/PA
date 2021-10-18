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


                <div className="bg-blue-50 rounded-lg flex flex-col shadow-lg p-2 mb-2">
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>1</p>
                                      <strong> Faina(s) realizada(s)</strong>
                                    </div>
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>4</p>
                                      <strong> Média Faina(s)/Semana</strong>
                                    </div>
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>25</p>
                                      <strong> Dom/Fer Trabalhado(s)</strong>
                                    </div>
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>360,87</p>
                                      <strong> Média Bruto/Faina</strong>
                                    </div>
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>320,63</p>
                                      <strong> Média Liquido/Faina</strong>
                                    </div>
                               
                                                               
                                  
                                  
                                  
                                  

                              </div>




             </div>
               
    </>
    )
}
