import React from 'react';

import { FaShip as IconShip } from 'react-icons/fa';
//import Tooltip from '@material-ui/core/Tooltip';

export default function Links() {
    return (
        <>
        <div className="flex flex-col align-middle justify-items-cemter space-y-8 p-4 m-2">
            
            <div className="flex flex-row">
                <span className="place-self-center m-1">
                    <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/cais-virtual/_action/index/cd_usuario/publico' target="_blank" rel="noreferrer">
                        Porto do Rio Grande - Cais Virtual
                    </a>
                </span>
                <div className="flex flex-col flex-wrap">
                  <div>
                    <p>Movimentação Portuária:</p>
                  </div>  

                  <div className="bg-gray-200 flex flex-row align-middle flex-wrap">
                    <span className="bg-yellow-300 align-middle place-items-center m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/3/param__rel_metodo/pdf' label="Esperado" target="_blank" rel="noreferrer">
                            <p className="text-xs">Esperado</p>
                            <IconShip/>
                            </a>
                    </span>


                    <span className="bg-red-600 align-middle place-items-center m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/4/param__rel_metodo/pdf' label="Programado" target="_blank" rel="noreferrer">
                            <p className="text-xs">Programado</p>
                            <IconShip/>
                            </a>
                    </span>


                    <span className="bg-blue-500 align-middle place-items-center m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/0/param__rel_metodo/pdf' label="Operação" target="_blank" rel="noreferrer">
                            <p className="text-xs">Operação</p>
                            <IconShip/>
                            </a>
                    </span>

                    <span className="bg-green-600 align-middle place-items-center m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/2/param__rel_metodo/pdf' label="Fundeado" target="_blank" rel="noreferrer">
                            <p className="text-xs">Fundeado</p>
                            <IconShip/>
                            </a>
                    </span>

                    <span className="bg-pink-400 align-middle place-items-center m-1">
                            <a href='http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/rel-lineup/_action/index/cd_usuario/publico/' label="LineUp" target="_blank" rel="noreferrer">
                            <p className="text-xs">LineUp</p>
                            <IconShip/>
                            </a>
                    </span>

                </div>
              </div>  
            </div>    

            <div>
                <a href='http://www.ogmo-rg.com.br:81/' target="_blank" rel="noreferrer">
                OGMO/RG
                </a>
            </div>

            <div>
            <a href='https://www.rgpilots.com.br/atalaia' target="_blank" rel="noreferrer">
                Praticagem Rio Grande
                </a>
            </div>

            <div>
            <a href='http://www.teconline.com.br' target="_blank" rel="noreferrer">
                TECON RG
                </a>
            </div>

            <div>
            <a href='./periodo' target="_blank" rel="noreferrer">
                Período Cadastro
                </a>
            </div>

            <div>
            <a href='./relacao' target="_blank" rel="noreferrer">
                Relação Estivadores
                </a>
            </div>

            <div>
            <a href='https://011a493a-19ae-4750-88de-65e08f8219c2.filesusr.com/ugd/12ba0b_a57e923a5a834103a635ad876a5e40ef.pdf' target="_blank" rel="noreferrer">
                Convenção Coletiva Sindop
                </a>
            </div>

            <div>
            <a href='https://011a493a-19ae-4750-88de-65e08f8219c2.filesusr.com/ugd/12ba0b_9f0cbcbe7c194dedae25ab436dd3f682.pdf' target="_blank" rel="noreferrer">
                Acordo Coletivo Tecon
                </a>
            </div>
        </div>
        </>
    )
}
