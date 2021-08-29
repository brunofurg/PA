import imgLogo from '../images/logo.svg';
import iconNotifications from '../images/iconNotifications.svg';
import iconUser from '../images/iconUser.svg'
import iconMenu from '../images/iconMenu.svg'


export default function Header({acao}) {
  const temperature = 17;
  const timeNow = "19:25";
  const cityPort = "Rio Grande";
  return (
    <>
    <header className={ acao ? 'ativaCor' : ''}>
      <div className="bg-terciary text-white items-center flex flex-row justify-between p-2">
       <span> 
         <img src={imgLogo} alt="PortoNaTela" width="75" height="75"/>
       </span>
       <span title={`${cityPort} - ${temperature}°C - ${timeNow}`} className="border-2 border-gray-300 rounded-md p-2">
        <strong>
          {`${temperature}°C - ${timeNow}`}
        </strong>
      </span>
      <div className="mr-2">
       <span className="flex flex-row space-x-4 text-lg">
          <span className="border-1 border-gray-300 rounded-full p-2 hover:bg-secondary "> 
             <img src={iconNotifications} alt="Notifications" width="25" height="25"/>
           </span>
           <span className="border-1 border-gray-300 rounded-full p-2 hover:bg-secondary "> 
             <img src={iconUser} alt="User" width="25" height="25"/>
           </span>
           <span className="border-1 border-gray-300 rounded-full p-2 hover:bg-secondary "> 
             <img src={iconMenu} alt="Menu" width="25" height="25"/>
           </span>
        </span>
        </div>
      </div>
    </header>
    </>
  );
}
