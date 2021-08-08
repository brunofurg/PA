import Header from "./Header";
import Footer from "./Footer";
//import Main from "./Main";

import DashBoard from "./DashBoard";
import Fainas from "./Fainas";
import Reports from "./Reports";
import CalcRemuneration from "./CalcRemuneration";
import TabelasCCT from "./TabelasCCT";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { BiCalculator as IconCalc } from 'react-icons/bi';
import { FiActivity as IconDash } from 'react-icons/fi';
import { HiOutlineDocumentReport as IconReport } from 'react-icons/hi';
import { GrWorkshop as IconWorks } from 'react-icons/gr';
import { MdAttachMoney as IconCCT } from 'react-icons/md';
import { useState } from "react";

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  console.log('App');

  


  return (
    <div className="flex flex-col align-top">
    <div className="align-top">
      <Header>
        Controle de Fainas
      </Header>
    </div>

    <div className="align-center bg-primary">
      {/* <Main> */}
        <div className="">

          <Tabs  selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>

              <Tab>
                <div className="text-primary flex flex-row space-x-2 p-1">
                    <span align="left"><IconDash/></span>
                    <span align="right">DashBoard</span>
                </div>
              </Tab>
              <Tab>
              <div className="text-primary flex flex-row space-x-2 p-1">
                    <span align="left"><IconWorks/></span>
                    <span align="right">Fainas</span>
                </div>
              </Tab>
              <Tab>
              <div className="text-primary flex flex-row space-x-2 p-1">
                    <span align="left"><IconReport/></span>
                    <span align="right">Relatórios</span>
                </div>
              </Tab>
              <Tab>
              <div className="text-primary flex flex-row space-x-2 p-1">
                    <span align="left"><IconCalc/></span>
                    <span align="right">Calculadora Remuneração</span>
                </div>
              </Tab>
              <Tab>
              <div className="text-primary flex flex-row space-x-2 p-1">
                    <span align="left"><IconCCT/></span>
                    <span align="right">Tabelas CCT</span>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <div className="bg-terciary">
                <DashBoard/>
              </div>
            </TabPanel>

            <TabPanel>
              <Fainas/>
            </TabPanel>

            <TabPanel>
              <Reports/>
            </TabPanel>

            <TabPanel>
              <CalcRemuneration/>
            </TabPanel>

            <TabPanel>
              <TabelasCCT/>
            </TabPanel>

          </Tabs>
        </div>
      {/* </Main> */}
    </div>
    <div className="align-bottom">
      <Footer/>
    </div>
  </div>
  );
}
