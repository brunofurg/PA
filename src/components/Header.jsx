import imgLogo from '../images/logo.svg';
import iconNotifications from '../images/iconNotifications.svg';
import iconUser from '../images/iconUser.svg'
import iconMenu from '../images/iconMenu.svg'

export default function Header({acao}) {
  return (
    <>
    <header className={ acao ? 'ativaCor' : ''}>
      <div className="bg-terciary text-white items-center flex flex-row justify-between p-2">
       <span> 
         <img src={imgLogo} alt="PortoNaTela" width="75" height="75"/>
       </span>
       <span className="border-2 border-gray-300 rounded-md p-2">
        <strong>
          17ºC - 16:20
        </strong>
      </span>

       <span className="flex flex-row space-x-4 text-lg">
          <span className="border-2 border-gray-300 rounded-full p-2 hover:bg-secondary "> 
             <img src={iconNotifications} alt="Notifications" width="25" height="25"/>
           </span>
           <span className="border-2 border-gray-300 rounded-full p-2 hover:bg-secondary "> 
             <img src={iconUser} alt="User" width="25" height="25"/>
           </span>
           <span className="border-2 border-gray-300 rounded-full p-2 mr-4 hover:bg-secondary "> 
             <img src={iconMenu} alt="Menu" width="25" height="25"/>
           </span>
        </span>
      </div>
    </header>
    </>
  );
}
