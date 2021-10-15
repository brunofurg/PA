import imgLogo from '../images/logo.svg';
import iconNotifications from '../images/iconNotifications.svg';
import iconUser from '../images/iconUser.svg'
import iconMenu from '../images/iconMenu.svg'
import axios from 'axios';
import { useState } from 'react';

export default function Header({acao}) {
  const [temperature, setTemperature] = useState(false);
  const [weather, setWeather] = useState(false);

  function leftPad(value, count = 2, char = '0') {
    let leftPad = value;

    if (value.length < count) {
      for (let i = 0; i < count - value.length; i++) {
        leftPad = char + leftPad;
      }
    }

    return leftPad;
  }

  let getWeather =  async (latitude, longitude) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: latitude,
        lon: longitude,
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setTemperature(res.data.main.temp.toFixed(1));
    setWeather(res.data.weather[0].description);
    //console.log(res.data);
    //console.log(res.data.weather[0].main);
  }

  const cityPort = "Rio Grande";
  
  const now = new Date();
  const hour = leftPad(now.getHours().toString());
  const minute = leftPad(now.getMinutes().toString());
  const timeNow = `${hour}:${minute}`;

  getWeather('-32.0425', '-52.1196');


  return (
    <>
    <header className={ acao ? 'bg-terciary' : 'bg-primary'}>
      <div className="text-white items-center flex flex-row justify-between p-2">
       <span> 
         <img src={imgLogo} title="PortoNaTela" className="shadow-lg" alt="PortoNaTela" width="75" height="75"/>
       </span>
       <span title={`${cityPort} - ${timeNow} - ${temperature}°C - ${weather}`} className="bg-secondary shadow-lg rounded-full p-2 hover:bg-primary hover:shadow-inner ">
        <strong>
          {`${temperature || "..."}°C - ${timeNow}`}
        </strong>
      </span>
      <div className="mr-2">
       <span className="flex flex-row items-center space-x-4 text-lg">
          <span className="shadow-lg hover:shadow-inner rounded-full p-2 hover:bg-secondary " hidden > 
             <img src={iconNotifications} alt="Notifications" title="Notificações" width="15" height="15" />
           </span>
           <span className="shadow-lg hover:shadow-inner rounded-full p-2 hover:bg-secondary " > 
             <img src={iconUser} alt="User" title="Configurações de usuário" width="15" height="15" />
           </span>
           <span className="shadow-lg hover:shadow-inner rounded-full p-2 hover:bg-secondary "> 
             <img src={iconMenu} alt="Menu" title="Menu" width="25" height="25"/>
           </span>
        </span>
        </div>
      </div>
    </header>
    </>
  );
}
