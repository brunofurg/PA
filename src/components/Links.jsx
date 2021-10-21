import * as React from "react";
import { Fragment } from "react";

import imgPorto from "../images/portoMap.svg";

import imgOgmo from "../images/imgOgmo.svg";
import imgTecon from "../images/imgTecon.svg";
import imgRelacao from "../images/imgRelacao.svg";
import imgCalendario from "../images/imgCalendario.svg";
import imgPraticagen from "../images/imgPraticagem.svg";
import imgDrive from "../images/imgDrive.svg";
import imgMarine from "../images/imgMarinetraffic.svg";
import imgSindestiva from "../images/imgSindestiva.svg";

import imgAccuweather from "../images/imgAccuweather.svg";
import imgWindguru from "../images/imgWindguru.svg";
import imgWeather from "../images/imgWeather.svg";
import imgClimatempo from "../images/imgClimatempo.svg";

import svgShip1 from "../images/boat.svg";

import relacaoEstiva from "../docs/relacao.pdf";
import calendarioEstiva from "../docs/calendario.pdf";

export default function Links() {
  return (
    <Fragment>
      <div className="bg-gray-100 flex flex-col justify-items-stretch">
        <div className="bg-white border flex flex-row shadow-lg rounded-3xl justify-evenly m-3">
          <div className="p-4 justify-center">
            <div className="bg-blue-300 border border-blue-500 rounded-lg shadow-lg justify-center flex p-2 m-2">
              Porto do Rio Grande
            </div>
            <a
              href="http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/cais-virtual/_action/index/cd_usuario/publico"
              target="_blank"
              className="hover:scale-120"
              rel="noreferrer"
            >
              <div className="bg-blue-50 hover:shadow-lg hover:border-gray-500 border shadow-lg rounded-3xl p-10">
                <p className="text-center">Cais Virtual</p>

                <img
                  className=""
                  src={imgPorto}
                  alt="Porto do Rio Grande - Cais Virtual"
                  title="Porto do Rio Grande - Cais Virtual"
                  width="200"
                  height="200"
                />
              </div>
            </a>
          </div>

          <div className="flex flex-col align-middle text-center text-xs flex-wrap rounded-lg  place-content-center p-2">
            <div className="align-middle text-center bg-blue-300 border-blue-500 shadow-lg rounded-lg p-2 m-2">
              <p>Movimentação Portuária:</p>
            </div>

            <div className="flex flex-col flex-wrap">
              <a
                title="Movimentação Portuária - Esperado"
                href="http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/3/param__rel_metodo/pdf"
                label="Esperado"
                target="_blank"
                rel="noreferrer"
              >
                <span className="rounded-full hover:shadow-lg hover:bg-yellow-300 bg-yellow-400 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                  <img
                    src={svgShip1}
                    alt="Movimentação Portuária - Esperado"
                    width="30"
                    height="30"
                  />
                  <p className="self-center">Esperado</p>
                </span>
              </a>

              <a
                title="Movimentação Portuária - Programado"
                href="http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/4/param__rel_metodo/pdf"
                label="Programado"
                target="_blank"
                rel="noreferrer"
              >
                <span className="rounded-full hover:shadow-lg hover:bg-red-500 bg-red-600 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                  <img
                    src={svgShip1}
                    alt="Movimentação Portuária - Programado"
                    width="30"
                    height="30"
                  />
                  <p className="self-center">Programado</p>
                </span>
              </a>

              <a
                title="Movimentação Portuária - Operação"
                href="http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/0/param__rel_metodo/pdf"
                label="Operação"
                target="_blank"
                rel="noreferrer"
              >
                <span className="rounded-full hover:shadow-lg hover:bg-blue-400 bg-blue-500 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                  <img
                    src={svgShip1}
                    alt="Movimentação Portuária - Operação"
                    title="Movimentação Portuária - Operação"
                    width="30"
                    height="30"
                  />
                  <p className="self-center">Operação</p>
                </span>
              </a>

              <a
                title="Movimentação Portuária - Fundeado"
                href="http://www.portosrs.com.br/portoweb/zf/login/logar/_module/porto-gerencial/_controller/navios-situacao/_action/relatorio/cd_usuario/publico/param_situacao/2/param__rel_metodo/pdf"
                label="Fundeado"
                target="_blank"
                rel="noreferrer"
              >
                <span className="rounded-full hover:shadow-lg hover:bg-green-500 bg-green-600 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                  <img
                    src={svgShip1}
                    alt="Movimentação Portuária - Fundeado"
                    title="Movimentação Portuária - Fundeado"
                    width="30"
                    height="30"
                  />
                  <p className="self-center">Fundeado</p>
                </span>
              </a>

              <a
                title="Movimentação Portuária - LineUp"
                href="http://www.portosrs.com.br/portoweb/zf/login/logar/_module/atracacao/_controller/rel-lineup/_action/index/cd_usuario/publico/"
                label="LineUp"
                target="_blank"
                rel="noreferrer"
              >
                <span className="rounded-full hover:shadow-lg hover:bg-pink-300 bg-pink-400 align-middle flex flex-row justify-between space-x-2 p-1 m-1">
                  <img
                    src={svgShip1}
                    alt="Movimentação Portuária - LineUp"
                    title="Movimentação Portuária - LineUp"
                    width="30"
                    height="30"
                  />
                  <p className="self-center">LineUp</p>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white border shadow-lg flex flex-col align-middle m-3 p-2 rounded-3xl">
          <div className="bg-blue-300 border border-blue-500 rounded-lg shadow-lg p-2 m-2">
            <p className="align-top text-center">Habilitação:</p>
          </div>
          <div className="flex flex-row  justify-evenly align-middle">
            <a
              className="rounded-full hover:shadow-lg"
              href="http://www.ogmo-rg.com.br/habilitacao-eletronica"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgOgmo}
                alt="OGMO/RG"
                title="OGMO/RG"
                width="80"
                height="80"
              />
            </a>
            <a
              className="rounded-full hover:shadow-lg"
              href="https://www.rgpilots.com.br/atalaia"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgPraticagen}
                alt="Praticagem - RGPilots"
                title="Praticagem - RGPilots"
                width="80"
                height="80"
              />
            </a>
            <a
              className="rounded-full hover:shadow-lg"
              href="http://www.teconline.com.br/programacao-navios"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgTecon}
                alt="Tecon Rio Grande"
                title="Tecon Rio Grande"
                width="80"
                height="80"
              />
            </a>
            <a
              className="rounded-full hover:shadow-lg"
              href="https://www.marinetraffic.com/en/ais/details/ports/17380/Brazil_port:RIO%20GRANDE"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgMarine}
                alt="Marine Traffic - Porto do Rio Grande"
                title="Marine Traffic - Porto do Rio Grande"
                width="80"
                height="80"
              />
            </a>
          </div>
        </div>

        <div className="bg-white border shadow-lg flex flex-col align-middle m-3 p-2 rounded-3xl">
          <div className="bg-blue-300 border border-blue-500 rounded-lg shadow-lg p-2 m-2">
            <p className="align-center text-center">Previsão do Tempo:</p>
          </div>
          <div className="flex flex-row  justify-evenly align-middle">
            <a
              className="rounded-full hover:shadow-lg"
              href="https://www.accuweather.com/pt/br/rio-grande/35734/weather-forecast/35734"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgAccuweather}
                alt="AccuWeather"
                title="AccuWeather"
                width="80"
                height="80"
              />
            </a>
            <a
              className="rounded-full hover:shadow-lg"
              href="https://www.climatempo.com.br/previsao-do-tempo/agora/cidade/364/riogrande-rs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgClimatempo}
                alt="ClimaTempo"
                title="ClimaTempo"
                width="80"
                height="80"
              />
            </a>
            <a
              className="rounded-full hover:shadow-lg"
              href="https://weather.com/pt-BR/weather/today/l/2abed6966d03d537defe664c29a8c35e33a01bbd8307facf6c92cfd7a9e48ba5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgWeather}
                alt="Weather.com"
                title="Weather.com"
                width="80"
                height="80"
              />
            </a>
            <a
              className="rounded-full hover:shadow-lg"
              href="https://www.windguru.cz/21694"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={imgWindguru}
                alt="WindGuru"
                title="WindGuru"
                width="80"
                height="80"
              />
            </a>
          </div>
        </div>
        <div className="bg-white border shadow-lg flex flex-row justify-around align-middle m-3 p-2 text-xs rounded-3xl">
          <span className="flex flex-row text-center justify-center">
            <a
              href="https://drive.google.com/drive/folders/1E0WK6rexk5gVxRc3KPYK4ECnc4oBqs0Z"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-full hover:shadow-lg"
                src={imgDrive}
                alt="Pasta compartilhada"
                title="Pasta Compartilhada"
                width="80"
                height="80"
              />
              <p>Pasta</p>
              <p>Compartilhada</p>
            </a>
          </span>
          <span className="flex flex-row text-center justify-center">
            <a href={calendarioEstiva} target="_blank" rel="noreferrer">
              <img
                className="rounded-full hover:shadow-lg"
                src={imgCalendario}
                alt="Calendário"
                title="Calendário"
                width="80"
                height="80"
              />
              <p>Calendário</p>
            </a>
          </span>
          <span className="flex flex-row text-center justify-center">
            <a href={relacaoEstiva} target="_blank" rel="noreferrer">
              <img
                className="rounded-full hover:shadow-lg"
                src={imgRelacao}
                alt="Quadro Estivadores"
                title="Quadro Estivadores"
                width="80"
                height="80"
              />
              <p>Lista</p>
            </a>
          </span>
          <span className="flex flex-row text-center justify-center flex-wrap">
            <a
              href="https://drive.google.com/drive/folders/1N8ZQn7UVmZWGQ2K1q2FuntKPGyIksyfB"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="rounded-full hover:shadow-lg"
                src={imgSindestiva}
                alt="Acordos e Convenções"
                title="Acordos e Convenções"
                width="80"
                height="80"
              />
              <p>Acordos</p>
              <p> Convenções</p>
            </a>
          </span>
        </div>
      </div>
    </Fragment>
  );
}
