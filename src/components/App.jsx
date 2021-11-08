import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

import { Fragment, useEffect, useState } from "react";
//import Login from "./Login";

export default function App() {
  const [ativaCor, setAtivaCor] = useState(true);
  useEffect(function () {
    function posicaoScroll() {
      if (window.scrollY > 10) {
        setAtivaCor(true);
      } else {
        setAtivaCor(false);
      }
    }
    window.addEventListener("scroll", posicaoScroll);
  }, []);
  return (
    <Fragment>
      <div className="text-sm flex flex-col">
        <div className="fixed inset-x-0 top-0 w-screen justify-around">
          <Header colorHeader={ativaCor} />
        </div>
        <div className="mt-12 inline align-middle justify-center">
          <Section />
          {/* <Login /> */}
        </div>
        <div className="align-middle justify-items-center">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}
