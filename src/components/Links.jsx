import imgPorto from '../images/portorg.png';
import imgOgmo from '../images/ogmorg.png';
import imgTecon from '../images/tecon.png';
import imgPraticagen from '../images/praticagem.png';
import imgMarine from '../images/esperado.png';
import imgPeriodo from '../images/lineup.png';
import imgRelacao from '../images/fundeado.png';
import imgCct from '../images/operacao.png';
import imgAct from '../images/esperado.png';

import svgShip1 from '../images/boat.svg';
import svgShip2 from '../images/cargo-ship.svg';
import svgShip3 from '../images/ocean-transportation.svg';
//import svgShip4 from '../images/desenho.svg';


import cctSindop from '../docs/cct-sindop.pdf'
import actTecon from '../docs/act-tecon.pdf'

//import imgShip from './images/porto-image.png';

// import { FaShip as IconShip } from 'react-icons/fa';

import { IconContext } from "react-icons";

export default function Links() {
    return (
        <>
        <IconContext.Provider value={{ color:'red', classname:'react-icons', style: { verticalAlign: 'middle' } }}>
        <div className="border-2 border-gray-600 flex flex-col align-middle justify-items-cemter space-y-8 p-4 m-2">
            
            <div className="border-2 border-blue-500 flex flex-row align-middle justify-evenly text-center">
                <span className="border-2 border-yellow-600 place-self-center rounded m-1">
                    <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/cais-virtual/_action/index/cd_usuario/publico' target="_blank" rel="noreferrer">
                        <img src={imgPorto} alt="Porto do Rio Grande - Cais Virtual" width="150px" height="150px"/>
                    </a>
                </span>
                <div className="border-2 border-green-500 flex flex-col align-middle text-center text-xs flex-wrap">
                    <div className="border-2 border-pink-600 align-middle text-center">
                        <p>Movimentação Portuária:</p>
                    </div>  

                    <div className="bg-gray-200 flex flex-col flex-wrap">
                        <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/3/param__rel_metodo/pdf' label="Esperado" target="_blank" rel="noreferrer">
                            <span className="bg-yellow-400 align-middle flex flex-row justify-between rounded space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="OGMO/RG" width="30" height="30"/>
                                <p className="self-center">Esperado</p>
                            </span>
                        </a>


                        <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/4/param__rel_metodo/pdf' label="Programado" target="_blank" rel="noreferrer">
                            <span className="bg-red-600 align-middle flex flex-row justify-between rounded space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="OGMO/RG" width="30" height="30"/>
                                <p className="self-center">Programado</p>
                            </span>
                        </a>

                        <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/0/param__rel_metodo/pdf' label="Operação" target="_blank" rel="noreferrer">
                            <span className="bg-blue-500 align-middle flex flex-row justify-between rounded space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="OGMO/RG" width="30" height="30"/>
                                <p className="self-center">Operação</p>
                            </span>
                        </a>

                        <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/2/param__rel_metodo/pdf' label="Fundeado" target="_blank" rel="noreferrer">
                            <span className="bg-green-600 align-middle flex flex-row justify-between rounded space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="OGMO/RG" width="30" height="30"/>
                                <p className="self-center">Fundeado</p>
                            </span>
                        </a>

                        <a href='ttp://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/rel-lineup/_action/index/cd_usuario/publico/' label="LineUp" target="_blank" rel="noreferrer">
                            <span className="bg-pink-400 align-middle flex flex-row justify-between rounded space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="OGMO/RG" width="30" height="30"/>
                                <p className="self-center">LineUp</p>
                            </span>
                        </a>

                    </div>
                </div>  
            </div>    

            <div className="flex flex-row justify-around align-middle border-2">
                <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center ">
                    <a href='http://www.ogmo-rg.com.br:81/' target="_blank" rel="noreferrer">
                        <img src={imgOgmo}  alt="OGMO/RG" width="150px" height="150px"/>
                    </a>
                </span>

                <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center ">
                    <a href='https://www.rgpilots.com.br/atalaia' target="_blank" rel="noreferrer">
                        <img src={imgPraticagen} alt="Praticagem - RGPilots" width="100px" height="100px"/> 
                    </a>
                </span>
            </div>
            
            <div className="flex flex-row justify-around align-middle border-2">
                <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center "> 
                    <a href='http://www.teconline.com.br/programacao-navios' target="_blank" rel="noreferrer">
                        <img src={imgTecon} alt="Tecon Rio Grande" width="150px" height="150px"/>
                    </a>
                </span>

                <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center ">
                    <a href='https://www.marinetraffic.com/en/ais/details/ports/17380/Brazil_port:RIO%20GRANDE' target="_blank" rel="noreferrer">
                        <img src={imgMarine} alt="Marine Traffic - Porto do Rio Grande" width="150px" height="150px"/>
                    </a>
                </span>
            </div>

            <div className="flex flex-row justify-around align-middle border-2">
                <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center ">
                    <a href='./periodo' target="_blank" rel="noreferrer">
                        <img src={imgPeriodo} alt="Periodo Cadastro" width="150px" height="150px"/>
                    </a>
                </span>
                <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center ">
                    <a href='./relacao' target="_blank" rel="noreferrer">
                        <img src={imgRelacao} alt="Relação Estivadores Rio Grande" width="150px" height="150px"/>
                    </a>
                </span>
            </div>

            <div className="flex flex-row justify-around align-middle border-2">
                <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center ">
                    <a href={cctSindop} target="_blank" rel="noreferrer">
                        <img src={imgCct} alt="Convenção Coletiva Sindop" width="150px" height="150px"/>
                    </a>
                </span>
                <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center ">
                    <a href={actTecon} rel="noreferrer">
                        <img src={imgAct} alt="Acordo Coletivo Tecon" width="150px" height="150px"/>
                    </a>
                </span>
            </div>

            <div className="flex flex-row justify-around align-middle">
               <span className="bg-blue-300 border-2 border-blue-500 rounded-full self-center ">
                    <a href='https://drive.google.com/drive/folders/1bSPnOw2bLF2-B_OFObsPpYNmMxmOFSHt?usp=sharing' target="_blank" rel="noreferrer">
                        <img src="./images/shared.png" alt="Pasta compartilhada" width="120px" height="120px"/>
                    </a>
                </span>            
            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}


