import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

import { Fragment, useEffect, useState } from "react";

export default function App() {
  const [ativaCor, setAtivaCor] = useState(true);
 
  useEffect(function() {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setAtivaCor(true);
        console.log("true");
      }
      else {
        setAtivaCor(false);
        console.log("false");
      }
    }
    window.addEventListener('scroll', posicaoScroll);
    console.log("scrolling");
  }, []);
  return (
  <Fragment>
  <div className="text-sm mt-0 flex flex-col">
      <div className="items-center w-screen fixed">
         <Header acao={ativaCor}/>
      </div>
 
      <div className="border-2 border-purple-500 inline mt-16 align-middle justify-center">
         <Section/>
      </div>
      

      <div className="bottom-0 align-middle justify-items-center">
      <Footer/>
     </div>
  </div>
  </Fragment>
  );
}