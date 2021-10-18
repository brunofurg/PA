import TextInput from '../TextInput';
//import TextArea from '../TextArea';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Error from '../Error';

import { BsPlusCircle as IconPlus } from 'react-icons/bs';

import DateInput from "../DateInput";
import FainaA1t from '../FainaA1t';
import PorCaminhao from '../PorCaminhao';
import SelectFaina from "../SelectFaina";
import PesoMovimentado from '../PesoMovimentado';
import FainaCalculo from '../FainaCalculo';
import FainaValor from '../FainaValor';
import FainaCotas from '../FainaCotas';
import FainaComRotator from '../FainaSemRotator';
import FainaTipoTaxa from '../FainaTipoTaxa';

export default function FlashCardForm({
  createMode = true,
  onPersist = null,
  onButtonClick = null,
  children: flashCard = null,
}) {
  const [title, setTitle] = useState(flashCard?.title || '');
  const [description, setDescription] = useState(flashCard?.description || '');
  
  const [dayWork, setDayWork] = useState(flashCard?.infoWork.dia || '');
  const [typeFaina, setTypeFaina] = useState(flashCard?.inputValues._tipo || '');
    
  
  const [error, setError] = useState('');


  //const [typeFaina, setTypeFaina] = useState('');
  //const [dayFaina, setDayFaina] = useState('');
  //const [shiftWork, setShiftWork] = useState(false);


  useEffect(() => {
    if (createMode) {
      setTitle('');
      setDescription('');
    }
  }, [createMode]);

  function handleTitleChange(newTitle) {
    setTitle(newTitle);
  }

  function handleDescriptionChange(newDescription) {
    setDescription(newDescription);
  }

  function clearFields() {
    setTitle('');
    setDescription('');
  }

  function validateForm() {
    return title.trim() !== '' && description.trim() !== '';
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      setError('');

      if (onPersist) {
        onPersist(title, description);
        clearFields();
      }
    } else {
      setError('Título e Descrição são obrigatórios.');
    }
  }

  function handleFormReset() {
    clearFields();
  }




  function handleTypeFaina(newTipo) {
    setTypeFaina(newTipo);
  }
  function handleDayWork(newTipo) {
    setDayWork(newTipo);
  }


  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }


  const backgroundClassName = createMode ? 'bg-gray-100' : 'bg-yellow-50';




  return (
    <form
      className={`${backgroundClassName} p-2`}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      // onButtonClick={handleButtonClick}
    >
      <div className="bg-pink-60 border-2">
        <div className="bg-gray-200 flex flex-row place-items-center justify-between p-2">
          <span className="bg-blue-400 text-white text-sm text-center rounded-lg shadow-lg font-semibold mb-2 p-2">Calculadora de Remuneração</span>
          <div>
             <Button onButtonClick={handleButtonClick}>Novo Trabalho</Button>
          </div>
        </div>
      
      <div className="border border-gray-300">
        <div className="p-2">
          <TextInput
            labelDescription="Navio:"
            inputValue={title}
            onInputChange={handleTitleChange}
          />
          <TextInput
            labelDescription="Observações:"
            inputValue={description}
            onTextAreaChange={handleDescriptionChange}
          />
        </div>
        <div className="flex flex-col">
          <div className="border border-gray-300 flex flex-row justify-evenly p-2">
          <div className="p-2"> 
              <div className="bg-blue-300 shadow-lg rounded-lg p-2 mb-4">Selecione o dia</div>  
              <DateInput
                  labelDescription='' 
                  inputValue={dayWork} 
                  onInputChange={handleDayWork}
              />
          </div>
            <div className="flex flex-col p-2"> 
                <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-2 p-2">Período</div>
                <div className="bg-yellow-300 flex flex-row space-x-1">
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">{`A`}</div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">{`B`}</div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">{`C (+25%)`}</div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">{`D (+50%)`}</div>
                </div>            
            </div> 


       
          </div>
        <div className="border border-gray-300 flex flex-row justify-evenly p-2">
        <div className="p-3">
            <div className="bg-blue-300 shadow-lg rounded-lg p-2">Selecione tipo de Faina:</div>
             <SelectFaina
              labelDescription='Selecione o tipo de faina' 
              selectValue={typeFaina} 
              onSelectChange={handleTypeFaina}
             />  
          </div>
          
          <div className="flex flex-col p-2">
              <div className="bg-blue-300 shadow-lg rounded-lg text-center mb-2 p-2">
                <p>Calcular por:</p>
              </div>
              <div className="bg-pink-200 flex flex-row justify-evenly space-x-2 p-2">
                <p className="bg-terciary hover:bg-primary text-center text-white rounded-lg shadow-lg p-2">{`Peso`}</p>
                <p className="bg-terciary hover:bg-primary text-center text-white rounded-lg shadow-lg p-2">{`Caminhão`}</p>
              </div>

            </div>

        </div>
      </div>
      <div className="">
              <PesoMovimentado />
          </div> 
          <div className="">
            <PorCaminhao />
          </div>
          <div className="">
             <FainaCotas />
          </div>

          <div className="">
            <FainaComRotator />
          </div>
          <div className="">
             <FainaTipoTaxa />
          </div>

          <div className="">
          <FainaA1t />
              { typeFaina === "a1t" 
              ? console.log("teste1")
              : console.log("teste2")
              }
        </div>
        <div className="">
          <FainaCalculo />
        </div> 
        <div className="">
          <FainaValor />
        </div> 
          <div className="p-4 flex justify-center">
                <IconPlus className="hover:bg-blue-200 rounded-full" size={30}/>
            </div>
          </div>  
          <div className="bg-pink-50 flex items-center justify-around">
              {error.trim() !== '' ? <Error>{error}</Error> : <span>&nbsp;</span>}
                  <div className="flex flex-row items-center p-2 space-x-2">
                      <Button colorClass="bg-red-500 hover:bg-red-300" type="reset">
                        Limpar
                      </Button>
                      <Button colorClass="bg-terciary hover:bg-green-400" type="submit">
                        Incluir
                      </Button>
           </div>
      
      </div>
     </div>
  </form>
  );
}
