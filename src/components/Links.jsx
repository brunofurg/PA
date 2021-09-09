import * as React from 'react';
import  { Fragment } from 'react';

import imgPorto from '../images/imgPorto.svg';
//import imgPortoMap from '../images/portoMap.svg';

import imgOgmo from '../images/imgOgmo.svg';
import imgTecon from '../images/imgTecon.svg';
import imgRelacao from '../images/imgRelacao.svg';
import imgCalendario from '../images/imgCalendario.svg';
import imgPraticagen from '../images/imgPraticagem.svg';
import imgDrive from '../images/imgDrive.svg';
import imgMarine from '../images/imgMarinetraffic.svg';
import imgCctSindop from '../images/imgCctSindop.svg';
import imgActTecon from '../images/imgActTecon.svg';


import imgAccuweather from '../images/imgAccuweather.svg';
import imgWindguru from '../images/imgWindguru.svg';
import imgWeather from '../images/imgWeather.svg';
import imgClimatempo from '../images/imgClimatempo.svg';


import svgShip1 from '../images/boat.svg';

import cctSindop from '../docs/cct-sindop.pdf'
import actTecon from '../docs/act-tecon.pdf'
import relacaoEstiva from '../docs/relacao.pdf'
import calendarioEstiva from '../docs/calendario.pdf'
import { IconContext } from "react-icons";
import './Links.css';

export default function Links() {
    return (
    <Fragment>
        <div className="flex flex-col align-middle justify-items-cemter space-y-8 p-4 m-2">
            
            <div className="flex flex-row align-middle justify-around">
               <span className="element hover:shadow-lg rounded-lg place-self-center m-1">
                <p className="align-top text-center">Cais Virtual</p>
                    <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/cais-virtual/_action/index/cd_usuario/publico' target="_blank" className="hover:scale-120" rel="noreferrer">
                     <img src={imgPorto} alt="Porto do Rio Grande - Cais Virtual" title="Porto do Rio Grande - Cais Virtual" width="100" height="100"/>
                    </a>
                </span>
                <IconContext.Provider value={{ color:'green', classname:'react-icons', style: { verticalAlign: 'middle' } }}>
                <div className="flex flex-col align-middle text-center text-xs flex-wrap border-2 rounded-3xl p-2">
                    <div className="align-middle text-center">
                        <p>Movimentação Portuária:</p>
                    </div>  

                    <div className="flex flex-col flex-wrap">
                        <a title="Movimentação Portuária - Esperado" href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/3/param__rel_metodo/pdf' label="Esperado" target="_blank" rel="noreferrer">
                            <span className="rounded-full hover:shadow-lg hover:bg-yellow-300 bg-yellow-400 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="Movimentação Portuária - Esperado" width="30" height="30"/>
                                <p className="self-center">Esperado</p>
                            </span>
                        </a>


                        <a title="Movimentação Portuária - Programado" href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/4/param__rel_metodo/pdf' label="Programado" target="_blank" rel="noreferrer">
                            <span className="rounded-full hover:shadow-lg hover:bg-red-500 bg-red-600 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="Movimentação Portuária - Programado" width="30" height="30"/>
                                <p className="self-center">Programado</p>
                            </span>
                        </a>

                        <a title="Movimentação Portuária - Operação" href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/0/param__rel_metodo/pdf' label="Operação" target="_blank" rel="noreferrer">
                            <span className="rounded-full hover:shadow-lg hover:bg-blue-400 bg-blue-500 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="Movimentação Portuária - Operação" title="Movimentação Portuária - Operação" width="30" height="30"/>
                                <p className="self-center">Operação</p>
                            </span>
                        </a>

                        <a title="Movimentação Portuária - Fundeado" href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/2/param__rel_metodo/pdf' label="Fundeado" target="_blank" rel="noreferrer">
                            <span className="rounded-full hover:shadow-lg hover:bg-green-500 bg-green-600 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="Movimentação Portuária - Fundeado" title="Movimentação Portuária - Fundeado" width="30" height="30"/>
                                <p className="self-center">Fundeado</p>
                            </span>
                        </a>

                        <a title="Movimentação Portuária - LineUp" href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/rel-lineup/_action/index/cd_usuario/publico/' label="LineUp" target="_blank" rel="noreferrer">
                            <span className="rounded-full hover:shadow-lg hover:bg-pink-300 bg-pink-400 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                                <img src={svgShip1} alt="Movimentação Portuária - LineUp" title="Movimentação Portuária - LineUp" width="30" height="30"/>
                                <p className="self-center">LineUp</p>
                            </span>
                        </a>

                    </div>
                    
                </div>  
                </IconContext.Provider>
            </div>    

            <div className="flex flex-col align-middle border-2 p-2 rounded-3xl">
            <div>
                <p className="align-top text-center text-lg">
                    Habilitação:
                </p>
            </div>
            <div className="flex flex-row  justify-evenly align-middle">
                <a className="rounded-full hover:shadow-lg" href='http://www.ogmo-rg.com.br/habilitacao-eletronica' target="_blank" rel="noreferrer">
                    <img src={imgOgmo} alt="OGMO/RG" title="OGMO/RG" width="80" height="80"/>
                </a>
                <a className="rounded-full hover:shadow-lg" href='https://www.rgpilots.com.br/atalaia' target="_blank" rel="noreferrer">
                    <img src={imgPraticagen} alt="Praticagem - RGPilots" title="Praticagem - RGPilots" width="80" height="80"/> 
                </a>
                <a className="rounded-full hover:shadow-lg" href='http://www.teconline.com.br/programacao-navios' target="_blank" rel="noreferrer">
                    <img src={imgTecon} alt="Tecon Rio Grande" title="Tecon Rio Grande" width="80" height="80"/>
                </a>
                <a className="rounded-full hover:shadow-lg" href='https://www.marinetraffic.com/en/ais/details/ports/17380/Brazil_port:RIO%20GRANDE' target="_blank" rel="noreferrer">
                    <img src={imgMarine} alt="Marine Traffic - Porto do Rio Grande" title="Marine Traffic - Porto do Rio Grande" width="80" height="80"/>
                </a>
            </div>
        </div>

            <div className="flex flex-col align-middle border-2 p-2 rounded-3xl">
                <div><p className="align-center text-center text-lg">Previsão do Tempo:</p></div>
                <div className="flex flex-row  justify-evenly align-middle">
               <a className="rounded-full hover:shadow-lg" href='https://www.accuweather.com/pt/br/rio-grande/35734/weather-forecast/35734' target="_blank" rel="noreferrer">
                    <img src={imgAccuweather} alt="AccuWeather" title="AccuWeather" width="80" height="80"/>
                </a>
                <a className="rounded-full hover:shadow-lg" href='https://www.climatempo.com.br/previsao-do-tempo/agora/cidade/364/riogrande-rs' target="_blank" rel="noreferrer">
                <img src={imgClimatempo} alt="ClimaTempo" title="ClimaTempo" width="80" height="80"/>
                </a>
                <a className="rounded-full hover:shadow-lg" href='https://weather.com/pt-BR/weather/today/l/2abed6966d03d537defe664c29a8c35e33a01bbd8307facf6c92cfd7a9e48ba5' target="_blank" rel="noreferrer">
                    <img src={imgWeather} alt="Weather.com" title="Weather.com" width="80" height="80"/>
                </a>
                <a className="rounded-full hover:shadow-lg" href='https://www.windguru.cz/21694' target="_blank" rel="noreferrer">
                    <img src={imgWindguru} alt="WindGuru" title="WindGuru" width="80" height="80"/>
                </a>
            </div>



            </div>
            <div className="flex flex-row justify-evenly align-middle">
                <div className="flex flex-col items-center justify-center space-y-6 border-2 p-2 rounded-3xl" >
                    <span className="align-middle self-start text-center">
                        Pasta Compartilhada:
                    </span>
                    <span className="rounded-full hover:shadow-lg self-center" >
                        <a href='https://drive.google.com/drive/folders/1bSPnOw2bLF2-B_OFObsPpYNmMxmOFSHt?usp=sharing' target="_blank" rel="noreferrer" >
                            <img src={imgDrive} alt="Pasta compartilhada" title="Pasta Compartilhada" width="80" height="80" />
                        </a>
                    </span>            
                </div>

         
                <div className="flex flex-col justify-evenly align-middle border-2 p-2 rounded-3xl">
                    <span className="align-middle text-center">
                        Calendário:
                    </span>

                        <a className="rounded-full hover:shadow-lg m-2" href={calendarioEstiva} target="_blank" rel="noreferrer" >
                            <img src={imgCalendario} alt="Calendário" title="Calendário" width="80" height="80" />
                        </a>
                        <span className="align-middle text-center">
                        Relação:
                    </span>

                        <a className="rounded-full hover:shadow-lg m-2" href={relacaoEstiva} target="_blank" rel="noreferrer" >
                            <img src={imgRelacao} alt="Relação Estivadores" title="Relação Estivadores Rio Grande" width="80" height="80" />
                        </a>

                </div>
                <div className="flex flex-col justify-evenly align-middle border-2 p-2 rounded-3xl">
                    <span className="align-middle text-center">
                        CCT Sindop:
                    </span>

                        <a className="rounded-full hover:shadow-lg m-2" href={cctSindop} target="_blank" rel="noreferrer" >
                            <img src={imgCctSindop} alt="Convenção Coletiva SINDOP" title="Convenção Coletiva SINDOP" width="80" height="80" />
                        </a>
                        <span className="align-middle text-center">
                        ACT Tecon:
                    </span>                        

                        <a className="rounded-full hover:shadow-lg m-2" href={actTecon} rel="noreferrer" >
                            <img src={imgActTecon} alt="Acordo Coletivo Tecon" title="Acordo Coletivo Tecon" width="80" height="80" />
                        </a>


                </div>

            </div>

        </div>  
        
    </Fragment>
    )
}


