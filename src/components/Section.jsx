import Painel from "./Painel";
import Reports from "./Reports";
import TabelasCCT from "./TabelasCCT";
import Links from "./Links";
import MonthDisplay from "./MonthDisplay";
import WorkDialog from "./WorkDialog";


import FlashCardForm from './FlashCards/FlashCardForm';
import FlashCardItem from './FlashCards/FlashCardItem';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Error from './Error';
import Loading from './Loading';
import Main from './Main';

import {
  apiCreateFlashCard,
  apiDeleteFlashCard,
  apiGetAllFlashCards,
  apiUpdateFlashCard,
} from '../services/apiService';

import { BiCalculator as IconCalc } from 'react-icons/bi';
import { AiOutlineLineChart as IconDash } from 'react-icons/ai';
import { HiOutlineDocumentReport as IconReport } from 'react-icons/hi';
//GrWorkshop
//GiPikeman
import { GiShipBow as IconWorks } from 'react-icons/gi';
import { MdAttachMoney as IconCCT } from 'react-icons/md';
import { FiExternalLink as IconLinks } from 'react-icons/fi';
//import { FiChevronsLeft as IconReturn } from 'react-icons/fi';

import { useEffect, useState } from "react";
import CheckboxInput from "./CheckboxInput";
//import WindowWork from "./WindowWork";

export default function Section() {
    const [allCards, setAllCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [createMode, setCreateMode] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedFlashCard, setSelectedFlashCard] = useState(null);
    //const [clickableFlashCard, setClickableFlashCard] = useState(null);

    useEffect(() => {
      async function getAllCards() {
        try {
          const backEndAllCards = await apiGetAllFlashCards();
  
          setAllCards(backEndAllCards);
  
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        } catch (error) {
          setError(error.message);
        }
      }
  
      getAllCards();
    }, []);
  
    async function handleDeleteFlashCard(cardId) {
      try {
        // Back End
        await apiDeleteFlashCard(cardId);
  
        // Front End
        setAllCards(allCards.filter(card => card.id !== cardId));
        setError('');
        console.log(cardId.title);
        toast.success(`Trabalho "${cardId.title}" excluído com sucesso!`);
      } catch (error) {
        setError(error.message);
      }
    }
  
    function handleEditFlashCard(card) {
      setCreateMode(false);
      setSelectedTab(2);
      setSelectedFlashCard(card);
    }
  
    function handleNewFlashCard() {
      setCreateMode(true);
      setSelectedFlashCard(null);
    }
  
    function handleTabSelect(tabIndex) {
      setSelectedTab(tabIndex);
    }

    // function handleClickFlashCard(card) {
    //   setClickableFlashCard(card);
    //   // <WindowWork>{card}</WindowWork>
    // }

    // function handleImport() {
    //   console.log("pdf");
    // }

    async function handlePersist(title, description ) {
      if (createMode) {
        try {
          // Back End
          const newFlashCard = await apiCreateFlashCard(title, description);
      
          // Front End
          setAllCards([...allCards, newFlashCard]);
          setError('');
          toast.success(`"${title}" incluído com sucesso!`);
        } catch (error) {
          setError(error.message);
        }
      } else {
        try {
          // Back End
          await apiUpdateFlashCard(selectedFlashCard.id, title, description);
  
          // Front End
          setAllCards(
            allCards.map(card => {
              if (card.id === selectedFlashCard.id) {
                return { ...card, title, description };
              }
              return card;
            })
          );
      
          setSelectedFlashCard(null);
          setCreateMode(true);
          setError('');
          toast.success(`"${title}" alterado com sucesso!`);
        } catch (error) {
          setError(error.message);
        }
      }
    }
  
    let mainJsx = (
      <div className="flex justify-center my-4">
        <Loading />
      </div>
    );
  
    if (error) {
      mainJsx = <Error>{error}</Error>;
    }
  
    if (!loading && !error) {
        mainJsx = (
          <>
            <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
                 <div className="flex flex-row flex-wrap justify-between align-middle text-center text-xs">
                        <TabList>
                            <Tab>
                                <div className="flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconDash size={16} /></span>
                                    <span align="right">Painel</span>
                                </div>
                            </Tab>
                            <Tab>
                               <div className="flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconWorks size={16} /></span>
                                    <span align="right">Trabalhos</span>
                                </div>
                                
                            </Tab>
                            <Tab>
                                <div className="flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconCalc size={16} /></span>
                                    <span align="right">Calculadora</span>
                                </div>
                            </Tab>
                            <Tab>
                               <div className="align-middle text-center flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconLinks size={16} /></span>
                                    <span align="right">Links</span>
                                </div>
                                
                            </Tab>
                            <Tab>
                                <div className="align-middle text-center flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconCCT size={16} /></span>
                                    <span align="right">Tabelas</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconReport size={16} /></span>
                                    <span align="right">Relatórios</span>
                                </div>
                            </Tab> 
                        </TabList>
                    </div>

                    <div className="align-top flex flex-col text-justify justify-items-center">
                        <TabPanel>
                            <Painel/>
                        </TabPanel>

                        <TabPanel>

                        <div>
                              <div className="bg-gray-100 flex place-content-center mb-1">                            
                                 <MonthDisplay />
                              </div>            
                              <div className="bg-gray-100 border border-gray-300 rounded-lg p-2">
                                <div className="bg-gray-200 flex flex-row justify-around items-center p-2">
                                  <span>
                                    <CheckboxInput checkboxValue="true" labelDescription="Tudo"/>
                                  </span>
                                  <span className="text-center">
                                      <p className="bg-blue-400 text-white text-center text-base shadow-lg rounded-lg p-2">Setembro 2021</p>
                                  </span>
                                  <span className="button-small">
                                      <WorkDialog />
                                  </span> 
                                </div>
                                <div className="">
                             
                               {allCards.map(flashCard => {
                                return (
                                  <div className="border border-gray-300 shadow-lg hover:bg-gray-200 hover:border-gray-600 rounded-lg flex flex-row m-3 p-2">
                                      <div className="flex flex-col space-y-10 p-2">
                                          <div className="">1</div>
                                          <div className=""><CheckboxInput checkboxValue="false" labelDescription=""/></div>
                                       </div>
                                       <div className="">
                                           <FlashCardItem
                                              key={flashCard.id}
                                              onDelete={handleDeleteFlashCard}
                                              onEdit={handleEditFlashCard}
                                              //onClick={handleClickFlashCard}
                                           >{flashCard}</FlashCardItem>
                                        </div>
                                      </div>
                                    );
                                })}
                                </div>
                                <div className="bg-gray-200 border border-gray-400 flex flex-col place-content-stretch align-middle rounded-lg shadow-lg p-2">
                                  <p className="bg-blue-200 text-center font-black rounded-lg mb-2 p-2">Total Mensal (Selecionado) [R$]</p>
                                  <div className="bg-green-50 rounded-lg flex flex-col place-content-around shadow-lg mb-3">
                                    <div className="flex flex-row place-content-center flex-wrap ">
                                    <div className="border bg-green-100 shadow-lg p-2 m-1 rounded-md">
                                       <strong>Bruto: </strong>10.710,43
                                    </div>
                                    <div className="border bg-green-100 shadow-lg p-2 m-1 rounded-md">
                                      <strong>Líquido: </strong>7.701,89
                                    </div>
                                    <div className="border bg-green-100 shadow-lg p-2 m-1 rounded-md">
                                      <strong>Férias: </strong> 1.191,00
                                    </div>
                                    <div className="border bg-green-100 shadow-lg p-2 m-1 rounded-md">
                                      <strong>13°: </strong>893,25
                                    </div>
                                    <div className="border bg-green-100 shadow-lg p-2 m-1 rounded-md">
                                      <strong>FGTS: </strong>1.023,57
                                    </div>
                                    </div>
                                    <div className="flex flex-row place-items-center place-content-around p-2">
                                      <div className="text-green-600 text-xl">
                                        +Entradas
                                      </div>
                                      <div className="flex flex-row place-items-center space-x-2">
                                        <div className="text-right font-black">Rendimentos Totais:</div>
                                        <div className="border border-gray-400 bg-green-200 rounded-md p-2 text-base shadow-lg">10.809,66</div>
                                      </div>
                                    </div>
                                    
                                  
                                  </div>
                                  <div className="bg-red-50 rounded-lg flex flex-col place-content-around shadow-lg mb-3">
                                    <div className="flex flex-row place-content-center flex-wrap p-2">
                                    <div className="border bg-red-100 shadow-lg p-2 m-1 rounded-md flex-wrap ">
                                      <strong>IRPF: </strong>1.764,93 (30,3%)
                                    </div>
                                    <div className="border bg-red-100 shadow-lg p-2 m-1 rounded-md flex-wrap ">
                                      <strong>INSS: </strong>752,00 (14%)
                                    </div>
                                    <div className="border bg-red-100 shadow-lg p-2 m-1 rounded-md flex-wrap ">
                                      <strong>DAS: </strong>491,61 (6%)
                                    </div>
                                    <div className="border bg-red-100 shadow-lg p-2 m-1 rounded-md flex-wrap ">
                                      <strong>Judicial: </strong>0,00 (0%)
                                    </div>
                                    <div className="border bg-red-100 shadow-lg p-2 m-1 rounded-md flex-wrap ">
                                      <strong>EPI: </strong>0,00 (0%)
                                   </div>
                               </div>
                               <div className="flex flex-row place-items-center place-content-around p-2">
                               <div className="text-red-600 text-xl">-Saídas</div>
                                      <div className="flex flex-row place-items-center space-x-2">
                                        <div className="text-right font-black">Descontos Totais:</div>
                                        <div className="border border-gray-400 bg-red-300 rounded-md p-2 shadow-lg text-base ">3.008,54</div>
                                      </div>
                                </div>
                              </div>
                              <div className="bg-blue-50 rounded-lg flex flex-col shadow-lg p-2 mb-2">
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>1</p>
                                      <strong> Faina(s) realizada(s)</strong>
                                    </div>
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>4</p>
                                      <strong> Média Faina(s)/Semana</strong>
                                    </div>
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>25</p>
                                      <strong> Dom/Fer Trabalhado(s)</strong>
                                    </div>
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>360,87</p>
                                      <strong> Média Bruto/Faina</strong>
                                    </div>
                                    <div className="border bg-blue-100 shadow-lg p-2 m-1 rounded-md flex flex-row justify-evenly">
                                      <p>320,63</p>
                                      <strong> Média Liquido/Faina</strong>
                                    </div>
                               
                                                               
                                  
                                  
                                  
                                  

                              </div>
                            </div>
                          </div>
                        </div>



                        </TabPanel>

                        <TabPanel>
    

                        <FlashCardForm
                               createMode={createMode} 
                               onPersist={handlePersist}
                               onButtonClick={handleNewFlashCard}
                            >
                                {selectedFlashCard}
                            </FlashCardForm>
                    
                          
                        </TabPanel> 
                        <TabPanel>
                            <Links/>
                        </TabPanel>
                        <TabPanel>
                            <TabelasCCT/>
                        </TabPanel>
                        <TabPanel>
                            <Reports/>
                        </TabPanel> 
                   </div>
                </Tabs>
           </>
        );
      }
    
      // console.log(process.env.NODE_ENV);
    
      return (
        <>
          <ToastContainer />
    
          <Main>{mainJsx}</Main>
        </>
      );
    }
    



