import Header from "./Header";
import Footer from "./Footer";

import Painel from "./Painel";
import Trabalhos from "./Trabalhos";
import Reports from "./Reports";
import Calculadora from "./Calculadora";
import TabelasCCT from "./TabelasCCT";
import Links from "./Links";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { BiCalculator as IconCalc } from 'react-icons/bi';
import { FiActivity as IconDash } from 'react-icons/fi';
import { HiOutlineDocumentReport as IconReport } from 'react-icons/hi';
import { GrWorkshop as IconWorks } from 'react-icons/gr';
import { MdAttachMoney as IconCCT } from 'react-icons/md';
import { FiExternalLink as IconLinks } from 'react-icons/fi';

import { useState } from "react";

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);
  console.log('App');
  return (
  <>
  <div className="flex flex-col content-evenly">
      <div className="flex flex-col align-top">
         <Header/>
      </div>
      <div className="align-center bg-gray-100">
          <Tabs  selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
            <TabList>

              <Tab>
                <div className="flex flex-row space-x-2 p-1">
                    <span align="left"><IconDash/></span>
                    <span align="right">Painel</span>
                </div>
              </Tab>
              <Tab>
              <div className="text-primary flex flex-row space-x-2 p-1">
                    <span align="left"><IconWorks/></span>
                    <span align="right">Trabalhos</span>
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
                    <span align="right">Calculadora</span>
                </div>
              </Tab>
              <Tab>
              <div className="text-primary flex flex-row space-x-2 p-1">
                    <span align="left"><IconCCT/></span>
                    <span align="right">Tabelas CCT</span>
                </div>
              </Tab>
              <Tab>
              <div className="text-primary flex flex-row space-x-2 p-1">
                    <span align="left"><IconLinks/></span>
                    <span align="right">Links</span>
                </div>
              </Tab>              
            </TabList>

            <TabPanel>
              <div className="flex flex-col space-y-6 p-4 m-4">
                <Painel/>
              </div>
            </TabPanel>

            <TabPanel>
            <div className="flex flex-col space-y-6 p-4 m-4">
                <Trabalhos/>
              </div>
            </TabPanel>

            <TabPanel>
            <div className="flex flex-col space-y-6 p-4 m-4">
                <Reports/>
              </div>
            </TabPanel>

            <TabPanel>
            <div className="flex flex-col space-y-6 p-4 m-4">
                <Calculadora/>
              </div>
            </TabPanel>

            <TabPanel>
            <div className="flex flex-col space-y-6 p-4 m-4">
                <TabelasCCT/>
              </div>
            </TabPanel>
            <TabPanel>
            <div className="flex flex-col space-y-6 p-4 m-4">
                <Links/>
              </div>
            </TabPanel>            

          </Tabs>
    </div>

    <div className="justify-self-end">
      <Footer/>
    </div>
  </div>
  </>
  );
}
