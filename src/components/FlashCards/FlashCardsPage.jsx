import { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../Button';
import Error from '../Error';
import FlashCard from './FlashCard';
import FlashCardForm from './FlashCardForm';
import FlashCardItem from './FlashCardItem';
import FlashCards from './FlashCards';
import Loading from '../Loading';
import Main from '../Main';
import RadioButton from '../RadioButton';

// import { helperShuffleArray } from '../../helpers/arrayHelpers';

import {
  apiCreateFlashCard,
  apiDeleteFlashCard,
  apiGetAllFlashCards,
  apiUpdateFlashCard,
} from '../../services/apiService';

export default function FlashCardsPage() {
  // Back End
  const [allCards, setAllCards] = useState([]);
  const [allWorks, setAllWorks] = useState([]);

  // Exclusivo para "Estudo"
  const [studyCards, setStudyCards] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [createMode, setCreateMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedFlashCard, setSelectedFlashCard] = useState(null);

  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  useEffect(() => {
    async function getAllCards() {
      try {
        const backEndAllCards = await apiGetAllFlashCards();

        setAllCards(backEndAllCards);
        setAllWorks(backEndAllCards);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        setError(error.message);
      }
    }

    getAllCards();
  }, []);


  useEffect(() => {
    setStudyCards(allCards.map(card => ({ ...card, showTitle: true })));
  }, [allCards]);

  function handleRadioShowDescriptionClick() {
    // prettier-ignore
    const updatedCards = 
      [...studyCards].map(card => ({...card, showTitle: false}));

    setStudyCards(updatedCards);
    setRadioButtonShowTitle(false);
  }

  function handleRadioShowTitleClick() {
    // prettier-ignore
    const updatedCards = 
      [...studyCards].map(card => ({...card, showTitle: true}));

    setStudyCards(updatedCards);

    setRadioButtonShowTitle(true);
  }

  function handleToggleFlashCard(cardId) {
    const updatedCards = [...studyCards];
    const cardIndex = updatedCards.findIndex(card => card.id === cardId);
    updatedCards[cardIndex].showTitle = !updatedCards[cardIndex].showTitle;

    setStudyCards(updatedCards);
  }

  async function handleDeleteFlashCard(cardId) {
    try {
      // Back End
      await apiDeleteFlashCard(cardId);

      // Front End
      setAllCards(allCards.filter(card => card.id !== cardId));
      setAllWorks(allWorks.filter(card => card.id !== cardId));

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
        const newWorkCard = await apiCreateFlashCard(title, description);
        // Front End
        setAllCards([...allCards, newFlashCard]);
        setAllWorks([...allWorks, newWorkCard]);

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

        setAllWorks(
          allWorks.map(card => {
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
          <TabList>
            <Tab>Listagem</Tab>
            <Tab>Inserir</Tab>
            <Tab>Trabalhos</Tab>
          </TabList>

{/* Listagem */}
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

{/* Cadastro */}
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

{/* Estudo */}
          <TabPanel>

            <div className="flex flex-row items-center justify-center space-x-4 m-4">
              <RadioButton
                id="radioButtonShowTitle"
                name="showInfo"
                buttonChecked={radioButtonShowTitle}
                onButtonClick={handleRadioShowTitleClick}
              >
                Mostrar resumo
              </RadioButton>

              <RadioButton
                id="radioButtonShowDescription"
                name="showInfo"
                buttonChecked={!radioButtonShowTitle}
                onButtonClick={handleRadioShowDescriptionClick}
              >
                Mostrar valores
              </RadioButton>
            </div>




{allWorks.map(workCard => {
              return (
            <FlashCards>
              {studyCards.map(({ id, title, description, showTitle }) => {
                return (
                  <FlashCard
                    key={workCard.id}
                    id={id}
                    title={title}
                    description={description}
                    showFlashCardTitle={showTitle}               
                    // keyId={workCard.id}
                    onDelete={handleDeleteFlashCard}
                    onEdit={handleEditFlashCard}
                    onToggleFlashCard={handleToggleFlashCard}
                  >
                     {workCard}
                </FlashCard>
                );

              })}


            </FlashCards>

);
})}


          </TabPanel>


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
