import ChartBrutoFaina from "./Charts/ChartBrutoFaina";
import ChartGanhosOperador from "./Charts/ChartGanhosOperador";
import ChartTrabalhosSemana from "./Charts/ChatTrabalhosSemana";
//import CallChart from "./CallChart";
import ChartTopFainas from "./Charts/ChartTopFainas";
import ChartTurnosTrabalhados from "./Charts/ChartTurnosTrabalhados";


export default function Painel() {
    return (
     <>

                <ChartGanhosOperador />
                <ChartBrutoFaina />
                <ChartTrabalhosSemana />
                <ChartTopFainas />
                <ChartTurnosTrabalhados />
                {/* <CallChart /> */}
    </>
    )
}
