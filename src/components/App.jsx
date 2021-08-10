import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

import { useEffect, useState } from "react";

export default function App() {
  const [ativaCor, setAtivaCor] = useState(false);
  
  useEffect(function() {
    function posicaoScroll() {
      if (window.scrollY > 30) {
        setAtivaCor(true);
      }
      else {
        setAtivaCor(false);
      }
    }
    window.addEventListener('scroll', posicaoScroll);
  }, []);
  return (
  <>
  <div className="text-sm justify-evenly">
      <div className="align-top w-screen h-6">
         <Header acao={ativaCor} className="border-2 fixed border-blue-400"/>
      </div>
 
      <div className="bg-blue-800 border-2 mt-10 border-red-600">
         <Section/>
      </div>
      

      <div className="bottom-0 align-middle justify-items-center">
      <Footer/>
     </div>
  </div>
  </>
  );
}
