import imgLogo from '../images/logo.svg';

import { TiThMenu as IconMenu } from 'react-icons/ti';
import { FaUserCog as IconUser } from 'react-icons/fa';
import { FaBell as IconAlert } from 'react-icons/fa';


export default function Header({acao}) {
  return (
    <>
    <header className={ acao ? 'ativaCor' : ''}>
      <div className="bg-terciary text-white border-2 border-red-600 items-center flex flex-row justify-between p-2">
       <span> 
         <img src={imgLogo} alt="PortoNaTela" width="75" height="75"/>
       </span>
       <span className="border-2 border-indigo-600">
        <strong>
          17ºC - 16:20
        </strong>
      </span>
       <span className="border-yellow-300 border-2 ">
         <div className="border-2 border-green-600 flex flex-row space-x-4 text-lg">
            <IconAlert/>
            <IconUser/>
            <IconMenu/>
          </div>
        </span>
      </div>
    </header>
    </>
  );
}
