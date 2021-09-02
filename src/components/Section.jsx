import Painel from "./Painel";
//import Trabalhos from "./Trabalhos";
import Reports from "./Reports";
import Calculadora from "./Calculadora";
import TabelasCCT from "./TabelasCCT";
import Links from "./Links";
import FlashCardsPage from "./FlashCards/FlashCardsPage";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { BiCalculator as IconCalc } from 'react-icons/bi';
import { FiActivity as IconDash } from 'react-icons/fi';
import { HiOutlineDocumentReport as IconReport } from 'react-icons/hi';
import { GrWorkshop as IconWorks } from 'react-icons/gr';
import { MdAttachMoney as IconCCT } from 'react-icons/md';
import { FiExternalLink as IconLinks } from 'react-icons/fi';

import { Fragment, useState } from "react";

export default function Section() {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Fragment>
            <div className="items-cemter text-secondary">
                <Tabs  selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                    <div className="flex flex-row flex-wrap align-middle text-center text-sm">
                        <TabList>
                            <Tab>
                                <div className="flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconDash/></span>
                                    <span align="right">Painel</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconCalc/></span>
                                    <span align="right">Calculadora</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconWorks/></span>
                                    <span align="right">Trabalhos</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconReport/></span>
                                    <span align="right">Relatórios</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="align-middle text-center flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconCCT/></span>
                                    <span align="right">Tabelas</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="align-middle text-center flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconLinks/></span>
                                    <span align="right">Links</span>
                                </div>
                            </Tab> 
                        </TabList>
                    </div>
                    <div className="bg-white text-black border-1 border-blue-500 rounded-md align-top flex flex-col text-justify justify-items-center p-2">
                        <TabPanel>
                            <Painel/>
                        </TabPanel>
                        <TabPanel>
                            <Calculadora/>
                        </TabPanel>
                        <TabPanel>
                            <FlashCardsPage/>
                        </TabPanel>
                        <TabPanel>
                            <Reports/>
                        </TabPanel>
                        <TabPanel>
                            <TabelasCCT/>
                        </TabPanel>
                        <TabPanel>
                            <Links/>
                        </TabPanel> 

                    </div>
                </Tabs>
            </div>
    </Fragment>
    )
}

