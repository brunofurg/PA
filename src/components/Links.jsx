import * as React from 'react';
import  { Fragment } from 'react';

import imgPorto from '../images/imgPorto.svg';
import imgOgmo from '../images/imgOgmo.svg';
import imgTecon from '../images/imgTecon.svg';
import imgRelacao from '../images/imgRelacao.svg';
import imgCalendario from '../images/imgCalendario.svg';
import imgPraticagen from '../images/imgPraticagem.svg';
import imgDrive from '../images/imgDrive.svg';
import imgMarine from '../images/imgMarinetraffic.svg';
import imgCctSindop from '../images/img_CctSindop.svg';
import imgActTecon from '../images/img_ActTecon.svg';

import imgAccuweather from '../images/imgAccuweather.svg';
import imgWindguru from '../images/imgWindguru.svg';
import imgCptec from '../images/imgCptec.svg';
import imgClimatempo from '../images/imgClimatempo.svg';


import svgShip1 from '../images/boat.svg';

import cctSindop from '../docs/cct-sindop.pdf'
import actTecon from '../docs/act-tecon.pdf'
import relacaoEstiva from '../docs/relacao.pdf'
import calendarioEstiva from '../docs/calendario.pdf'
import { IconContext } from "react-icons";

export default function Links() {
    return (
    <Fragment>
        <IconContext.Provider value={{ color:'red', classname:'react-icons', style: { verticalAlign: 'middle' } }}>
        <div className="border-2 border-gray-600 flex flex-col align-middle justify-items-cemter space-y-8 p-4 m-2">
            
            <div className="flex flex-row align-middle justify-evenly text-center">
                <span className="place-self-center rounded m-1">
                <p className="align-top text-center">PortoWeb</p>
                    <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/cais-virtual/_action/index/cd_usuario/publico' target="_blank" rel="noreferrer">
                    <img src={imgPorto} alt="Porto do Rio Grande - Cais Virtual" width="100" height="100"/>
                        {/* Porto do Rio Grande - Cais Virtual */}

                    </a>
                </span>
                <div className="flex flex-col align-middle text-center text-xs flex-wrap">
                    <div className="align-middle text-center">
                        <p>Movimentação Portuária:</p>
                    </div>  

                    <div className="flex flex-col flex-wrap">
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

            <div className="flex flex-col align-middle">
            <div>
                <p className="align-center text-center p-2">
                    Habilitação:
                </p>
            </div>
            <div className="flex flex-row  justify-evenly align-middle">
                <a href='http://www.ogmo-rg.com.br/habilitacao-eletronica' target="_blank" rel="noreferrer">
                    <img src={imgOgmo}  alt="OGMO/RG" width="100" height="100"/>
                </a>
                <a href='https://www.rgpilots.com.br/atalaia' target="_blank" rel="noreferrer">
                    <img src={imgPraticagen} alt="Praticagem - RGPilots" width="100" height="100"/> 
                </a>
                <a href='http://www.teconline.com.br/programacao-navios' target="_blank" rel="noreferrer">
                    <img src={imgTecon} alt="Tecon Rio Grande" width="100" height="100"/>
                </a>
                <a href='https://www.marinetraffic.com/en/ais/details/ports/17380/Brazil_port:RIO%20GRANDE' target="_blank" rel="noreferrer">
                    <img src={imgMarine} alt="Marine Traffic - Porto do Rio Grande" width="100" height="100"/>
                </a>
            </div>
        </div>

            <div className="flex flex-col align-middle">
                <div><p className="align-center text-center">Previsão do Tempo:</p></div>
                <div className="flex flex-row  justify-evenly align-middle">
               <a href='https://www.accuweather.com/pt/br/rio-grande/35734/weather-forecast/35734' target="_blank" rel="noreferrer">
                    <img src={imgAccuweather} alt="Accuweather" width="100" height="100"/>
                </a>
                <a href='https://www.climatempo.com.br/previsao-do-tempo/agora/cidade/364/riogrande-rs' target="_blank" rel="noreferrer">
                <img src={imgClimatempo} alt="Climatempo" width="100" height="100"/>
                </a>
                <a href='https://tempo.cptec.inpe.br/rs/rio-grande' target="_blank" rel="noreferrer">
                    <img src={imgCptec} alt="CPTEC INPE" width="100" height="100"/>
                </a>
                <a href='https://www.windguru.cz/21694' target="_blank" rel="noreferrer">
                    <img src={imgWindguru} alt="WindGuru" width="100" height="100"/>
                </a>
            </div>



            </div>
            <div className="flex flex-row justify-evenly align-middle">
                <div className="flex flex-col items-center justify-center space-y-6" >
                    <span className="align-middle self-start text-center">
                        Pasta Compartilhada:
                    </span>
                    <span className="rounded-full self-center">
                        <a href='https://drive.google.com/drive/folders/1bSPnOw2bLF2-B_OFObsPpYNmMxmOFSHt?usp=sharing' target="_blank" rel="noreferrer">
                            <img src={imgDrive} alt="Pasta compartilhada" width="100" height="100"/>
                        </a>
                    </span>            
                </div>






           
                <div className="flex flex-col justify-evenly align-middle">
                    <span className="align-middle text-center">
                        Listas:
                    </span>
                    <span className="m-2">
                        <a href={calendarioEstiva} target="_blank" rel="noreferrer">
                            <img src={imgCalendario} alt="Periodo Cadastro" width="100" height="100"/>
                        </a>
                    </span>
                    <span className="m-2">
                        <a href={relacaoEstiva} target="_blank" rel="noreferrer">
                            <img src={imgRelacao} alt="Relação Estivadores Rio Grande" width="100" height="100"/>
                        </a>
                    </span>
                </div>
                <div className="flex flex-col justify-evenly align-middle">
                    <span className="align-middle text-center">
                        Documentos:
                    </span>
                    <span className="m-2">
                        <a href={cctSindop} target="_blank" rel="noreferrer">
                            <img src={imgCctSindop} alt="Convenção Coletiva Sindop" width="100" height="100"/>
                        </a>
                    </span>
                    <span className="m-2">
                        <a href={actTecon} rel="noreferrer">
                            <img src={imgActTecon} alt="Acordo Coletivo Tecon" width="100" height="100"/>
                        </a>
                    </span>
                </div>

            </div>

        </div>  
        </IconContext.Provider>
    </Fragment>
    )
}


