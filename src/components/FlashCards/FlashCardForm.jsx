import TextInput from '../TextInput';
import TextArea from '../TextArea';
import { useEffect, useState } from 'react';
import Button from '../Button';
import Error from '../Error';


//import { Button } from '@material-ui/core';
// import { Fragment, useState } from 'react';
import DateInput from "../DateInput";
import RadioButton from '../RadioButton';
import TypeChoice from '../TypeChoice';


export default function FlashCardForm({
  createMode = true,
  onPersist = null,
  children: flashCard = null,
}) {
  const [title, setTitle] = useState(flashCard?.title || '');
  const [description, setDescription] = useState(flashCard?.description || '');
  const [error, setError] = useState('');


  const [typeFaina, setTypeFaina] = useState('');
  const [dayFaina, setDayFaina] = useState('');
  const [shiftWork, setShiftWork] = useState(false);


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
  function handleDayFaina(newTipo) {
    setDayFaina(newTipo);
  }
  function handleSetShift(newTipo) {
    setShiftWork(newTipo);
  }




  const backgroundClassName = createMode ? 'bg-gray-200' : 'bg-blue-200';

  return (
    <form
      className={`${backgroundClassName} p-4`}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <h2 className="text-center font-semibold">Calculadora de Remuneração</h2>

      <TextInput
        labelDescription="Título:"
        inputValue={title}
        onInputChange={handleTitleChange}
      />
      <TextArea
        labelDescription="Descrição:"
        textAreaValue={description}
        onTextAreaChange={handleDescriptionChange}
      />

      <div className="flex items-center justify-between">
        {error.trim() !== '' ? <Error>{error}</Error> : <span>&nbsp;</span>}

        <div>
          <Button colorClass="bg-red-200" type="reset">
            Limpar
          </Button>

          <Button colorClass="bg-green-300" type="submit">
            Incluir
          </Button>
        </div>
      </div>
<div>
<div className="border-2 border-gray-500 flex flex-col align-middle justify-around">
        <strong className="bg-gray-400 text-center align-middle">Calculadora de Remuneração</strong>
        <div className="border-2 border-red-300 flex flex-row justify-evenly my-2">
          <span>   
            <DateInput
                labelDescription='Selecione o dia:' 
                inputValue={dayFaina} 
                onInputChange={handleDayFaina}
            />
          </span>
          <span>
            <div className="border-2 border-red-400 flex flex-col items-center align-middle"> 
                <p>Período:</p>
                <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">A</RadioButton>
                <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">B</RadioButton>
                <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">C</RadioButton>
                <RadioButton buttonChecked={!shiftWork} onButtonClick={handleSetShift} name="shiftChoose">D</RadioButton>
            </div> 
          </span>
          <span>   
            <TextInput
              labelDescription='Digite o tipo de faina:' 
              inputValue={typeFaina} 
              onInputChange={handleTypeFaina}
              placeHolder='C6 para adubo'
            />  
          </span>
          {/* <span>
          <SelectFaina
              labelDescription='Digite o tipo de faina:' 
              selectValue={faina} 
              onSelectChange={handleSelectChange}
            />  
          </span> */}


        </div>


        <div className="flex flex-row align-middle justify-items-center my-2">
          <TypeChoice/>
        </div> 


        <div className="flex flex-row justify-center mb-5 space-x-10">
          <span>
            <Button color="primary" variant="contained" >
              Calcular
            </Button>
          </span>
          <span>
            <Button color="secondary" variant="contained" >
              Inserir
            </Button>
          </span>        
          <span>
            <Button color="inherit" variant="outlined">
              Limpar
            </Button>
          </span>
        </div>
      </div>
</div>


    </form>
  );
}
