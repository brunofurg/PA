import Painel from "./Painel";
import Reports from "./Reports";
import TabelasCCT from "./TabelasCCT";
import Links from "./Links";
//import MonthDisplay from "./MonthDisplay";

import FlashCardForm from './FlashCards/FlashCardForm';
import FlashCardItem from './FlashCards/FlashCardItem';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from './Button';
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
import { FiChevronsLeft as IconReturn } from 'react-icons/fi';

import { useEffect, useState } from "react";

export default function Section() {
    const [allCards, setAllCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [createMode, setCreateMode] = useState(true);
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedFlashCard, setSelectedFlashCard] = useState(null);
    
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
      setSelectedTab(1);
      setSelectedFlashCard(card);
    }
  
    // function handleNewFlashCard() {
    //   setCreateMode(true);
    //   setSelectedFlashCard(null);
    // }
  
    function handleTabSelect(tabIndex) {
      setSelectedTab(tabIndex);
    }
    function handleImport() {
      console.log("pdf");
    }

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
                                    <span align="left"><IconCalc size={16} /></span>
                                    <span align="right">Calculadora</span>
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
                                    <span align="left"><IconReport size={16} /></span>
                                    <span align="right">Relatórios</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="align-middle text-center flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconCCT size={16} /></span>
                                    <span align="right">Tabelas</span>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="align-middle text-center flex flex-row space-x-2 p-2 rounded hover:bg-secondary hover:text-white">
                                    <span align="left"><IconLinks size={16} /></span>
                                    <span align="right">Links</span>
                                </div>
                            </Tab> 
                        </TabList>
                    </div>

                    <div className="align-top flex flex-col text-justify justify-items-center">
                        <TabPanel>
                            <Painel/>
                        </TabPanel>

                        <TabPanel>
                            {/* <div className="border border-pink-400 flex flex-row justify-around my-4">
                                <Button onButtonClick={handleNewFlashCard}>
                                    Novo Trabalho
                                </Button>
                            </div> */}

                            <FlashCardForm createMode={createMode} onPersist={handlePersist}>
                                {selectedFlashCard}
                            </FlashCardForm>
                        </TabPanel>

                        <TabPanel>
                          <div>
                            <div className="flex flex-row justify-around items-center" >
                              <span>
                                <IconReturn size={18}/>
                              </span>
                              <span className="text-center">
                                04/21
                                -
                                05/21                                
                                -
                                06/21
                                -
                                07/21
                                -
                                08/21
                                -
                                09/21
                                
                                {/* <MonthDisplay /> */}
                              </span>
                              <span>
                              <Button onButtonClick={handleImport}>
                                    Importar Analítico
                                </Button>
                              </span>
                            </div>

                            <div>

                              {allCards.map(flashCard => {
                                return (
                                    <FlashCardItem
                                        key={flashCard.id}
                                        onDelete={handleDeleteFlashCard}
                                        onEdit={handleEditFlashCard}
                                    >
                                        {flashCard}
                                    </FlashCardItem>
                                  );
                                })}
                             </div>

                             <div className="border border-gray-600 bg-gray-200 flex flex-col items-center justify-between align-middle hover:shadow-lg p-2 ">
                             <div>
                                 Setembro 2021
                              </div>
                              <div className="flex flex-row items-center justify-between align-middle">
                                <div className="border bg-gray-100 hover:bg-white shadow-lg p-2 m-1 rounded-md">
                                  <strong>Bruto:</strong> 7087,09
                                </div>
                                <div className="border bg-gray-100 hover:bg-white  shadow-lg p-2 m-1 rounded-md">
                                  <strong>Líquido:</strong> 5067,89
                                </div>
                                <div className="border bg-gray-100 hover:bg-white  shadow-lg p-2 m-1 rounded-md">
                                  <strong>Férias:</strong> 67,89
                                </div>
                                <div className="border bg-gray-100 hover:bg-white  shadow-lg p-2 m-1 rounded-md">
                                  <strong>13°:</strong> 76,87
                                </div>
                                <div className="border bg-gray-100 hover:bg-white  shadow-lg p-2 m-1 rounded-md">
                                  <strong>FGTS:</strong> 42,22
                                </div>
</div>

                             </div>
                          </div>
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
    



