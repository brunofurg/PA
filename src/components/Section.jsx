import Painel from "./Painel";
import Reports from "./Reports";
import TabelasCCT from "./TabelasCCT";
import Links from "./Links";

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
import { FiActivity as IconDash } from 'react-icons/fi';
import { HiOutlineDocumentReport as IconReport } from 'react-icons/hi';
import { GrWorkshop as IconWorks } from 'react-icons/gr';
import { MdAttachMoney as IconCCT } from 'react-icons/md';
import { FiExternalLink as IconLinks } from 'react-icons/fi';

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
  
    function handleNewFlashCard() {
      setCreateMode(true);
      setSelectedFlashCard(null);
    }
  
    function handleTabSelect(tabIndex) {
      setSelectedTab(tabIndex);
    }
  
    async function handlePersist(title, description) {
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
                            <div className="my-4">
                                <Button onButtonClick={handleNewFlashCard}>
                                    Novo Trabalho
                                </Button>
                            </div>
                            <FlashCardForm createMode={createMode} onPersist={handlePersist}>
                                {selectedFlashCard}
                            </FlashCardForm>
                        </TabPanel>

                        <TabPanel>
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
    



