import imgLogo from '../images/logo.svg';
import iconNotifications from '../images/iconNotifications.svg';
import iconUser from '../images/iconUser.svg'
import iconMenu from '../images/iconMenu.svg'
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Header({acao}) {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);


  let getWeather =  async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: '-32.0425',
        lon: '-52.1196',
        appid: process.env.REACT_APP_OPEN_WEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data.main.temp);
    console.log(res.data);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
  })
}, [])


  const cityPort = "Rio Grande";
  
  const now = new Date();
  const hour = now.getHours().toString();
  const minute = now.getMinutes().toString();
  const timeNow = `${hour}:${minute}` ;

  const temperature = weather;



  return (
    <>
    <header className={ acao ? 'ativaCor' : ''}>
      <div className="bg-terciary text-white items-center flex flex-row justify-between p-2">
       <span> 
         <img src={imgLogo} title="PortoNaTela" className="shadow-lg" alt="PortoNaTela" width="75" height="75"/>
       </span>
       <span title={`${cityPort} - ${temperature}°C - ${timeNow}`} className="bg-secondary shadow-lg rounded-full p-2 hover:bg-primary hover:shadow-inner ">
        <strong>
          {`${temperature}°C - ${timeNow}`}
        </strong>
      </span>
      <div className="mr-2">
       <span className="flex flex-row space-x-4 text-lg">
          <span className="shadow-lg hover:shadow-inner rounded-full p-2 hover:bg-secondary " hidden> 
             <img src={iconNotifications} alt="Notifications" title="Notificações" width="25" height="25" />
           </span>
           <span className="shadow-lg hover:shadow-inner rounded-full p-2 hover:bg-secondary " hidden> 
             <img src={iconUser} alt="User" title="Configurações de usuário" width="25" height="25" />
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
