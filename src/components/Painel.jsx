import { Fragment } from "react";
import CallChart from "./CallChart.js";

export default function Painel() {
    return (
     <Fragment>
        <div>
            <div>
               Dashboard
               <CallChart/>
            </div>
        </div>
    </Fragment>
    )
}
