import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import DashBoard from "./DashBoard";
import Fainas from "./Fainas";
import Reports from "./Reports";
import CalcRemuneration from "./CalcRemuneration";
import TabelaCCT from "./TabelaCCT";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { FaCalculator as IconCalc } from 'react-icons/fa';
import { AiFillDashboard as IconDash } from 'react-icons/ai';
import { HiDocumentReport as IconReport } from 'react-icons/hi';
import { GrWorkshop as IconWorks } from 'react-icons/gr';
import { MdMoneyOff as IconCCT } from 'react-icons/md';

export default function App() {
  
  console.log('Teste no console do navegador');

  


  return (
    <>
    <div>
      <Header>
        Controle de Fainas
      </Header>
    </div>

    <div>
      <Main>

        <div>
          <Tabs>
            <TabList>
              <Tab>
              <div className="flex flex-row items-center space-y-4">
                    <IconDash/>
                    DashBoard
                </div>
              </Tab>
              <Tab>
              <div className="flex flex-row items-center space-y-4">
                    <IconWorks/>
                    Fainas
                </div>
              </Tab>
              <Tab>
              <div className="flex flex-row items-center space-y-4">
                    <IconReport/>
                    Relatórios
                </div>
              </Tab>
              <Tab>
                <div className="flex flex-row items-center space-y-4">
                    <IconCalc/>
                    Calculadora Remuneração
                </div>
                </Tab>
                <Tab>
              <div className="flex flex-row items-center space-y-4">
                    <IconCCT/>
                    Tabela CCT
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <DashBoard/>
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
              <TabelaCCT/>
            </TabPanel>
          </Tabs>
        </div>
      </Main>
    </div>

    <div>
      <Footer>
        Desenvolvido por BsD ® 2021
      </Footer>
    </div>

    

    </>
  );
}
