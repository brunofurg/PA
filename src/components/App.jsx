import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

import { Fragment, useEffect, useState } from "react";

export default function App() {
  const [ativaCor, setAtivaCor] = useState(false);
 
  useEffect(function() {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setAtivaCor(true);
      }
      else {
        setAtivaCor(false);
      }
    }
    window.addEventListener('scroll', posicaoScroll);
  }, []);
  return (
  <Fragment>
  <div className="text-sm mt-0 flex flex-col">
      <div className="border-2 border-green-600 items-center w-screen fixed">
         <Header acao={ativaCor}/>
      </div>
 
      <div className="border-2 border-purple-500 inline mt-14 align-middle justify-center">
         <Section/>
      </div>
      

      <div className="border-2 border-yellow-600 bottom-0 align-middle justify-items-center">
      <Footer/>
     </div>
  </div>
  </Fragment>
  );
}