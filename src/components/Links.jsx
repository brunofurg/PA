import imgPorto from '../images/portorg.png';
import imgOgmo from '../images/ogmorg.png';
import imgTecon from '../images/tecon.png';
import imgPraticagen from '../images/praticagem.png';
import imgMarine from '../images/esperado.png';
import imgPeriodo from '../images/lineup.png';
import imgRelacao from '../images/fundeado.png';
import imgCct from '../images/operacao.png';
import imgAct from '../images/esperado.png';

import cctSindop from '../docs/cct-sindop.pdf'
import actTecon from '../docs/act-tecon.pdf'

//import imgShip from './images/porto-image.png';

// import { FaShip as IconShip } from 'react-icons/fa';

import { IconContext } from "react-icons";

export default function Links() {
    return (
        <>
        <IconContext.Provider value={{ color:'red', classname:'react-icons', style: { verticalAlign: 'middle' } }}>
        <div className="flex flex-col align-middle justify-items-cemter space-y-8 p-4 m-2">
            
            <div className="flex flex-row align-middle justify-around border-2 text-center">
                <span className="place-self-center rounded m-1">
                    <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/cais-virtual/_action/index/cd_usuario/publico' target="_blank" rel="noreferrer">
                        <img src={imgPorto} alt="Porto do Rio Grande - Cais Virtual" width="150px" height="150px"/>
                    </a>
                </span>
                <div className="flex flex-col align-middle text-center text-xs flex-wrap">
                    <div className="align-middle text-center">
                        <p>Movimentação Portuária:</p>
                    </div>  

                    <div className="bg-gray-200 flex flex-row flex-wrap">
                        <span className="bg-yellow-300 rounded p-1 m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/3/param__rel_metodo/pdf' label="Esperado" target="_blank" rel="noreferrer">
                                {/* <IconShip className="bg-purple-400 text-center"/> */}
                                <p>Esperado</p>
                            </a>
                        </span>


                        <span className="bg-red-600 rounded p-1 m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/4/param__rel_metodo/pdf' label="Programado" target="_blank" rel="noreferrer">
                                {/* <IconShip/> */}
                                <p>Programado</p>
                            </a>
                        </span>


                        <span className="bg-blue-500 rounded p-1 m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/0/param__rel_metodo/pdf' label="Operação" target="_blank" rel="noreferrer">
                                {/* <IconShip/> */}
                                <p>Operação</p>
                            </a>
                        </span>

                        <span className="bg-green-600 rounded p-1 m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/2/param__rel_metodo/pdf' label="Fundeado" target="_blank" rel="noreferrer">
                                {/* <IconShip/> */}
                                <p>Fundeado</p>
                            </a>
                        </span>

                        <span className="bg-pink-400 rounded p-1 m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/rel-lineup/_action/index/cd_usuario/publico/' label="LineUp" target="_blank" rel="noreferrer">
                                {/* <IconShip/> */}
                                <p>LineUp</p>
                            </a>
                        </span>

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


