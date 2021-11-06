import TextInput from "../TextInput";
//import TextArea from '../TextArea';
import { useEffect, useState } from "react";
import Button from "../Button";
import Error from "../Error";

import { VscNewFile as IconNew } from "react-icons/vsc";
import { FiSave as IconSave } from "react-icons/fi";

import DateInput from "../DateInput";
import FainaA1t from "../FainaA1t";
import FainaPorCaminhao from "../FainaPorCaminhao";
import SelectFaina from "../SelectFaina";
import PesoMovimentado from "../PesoMovimentado";
import FainaCalculo from "../FainaCalculo";
import FainaValor from "../FainaValor";
import FainaCotas from "../FainaCotas";
import FainaTipoTaxa from "../FainaTipoTaxa";
import FainaSelectFuncao from "../FainaSelectFuncao";
import CheckboxInput from "../CheckboxInput";
import FainaSelectOptions from "../FainaSelectOptions";
import FainaValoresFaina from "../FainaValoresFaina";
import RadioButton from "../RadioButton";

export default function FlashCardForm({
  createMode = true,
  onPersist = null,
  onButtonClick = null,
  children: flashCard = null,
}) {
  const [title, setTitle] = useState(flashCard?.title || "");
  const [description, setDescription] = useState(flashCard?.description || "");
  // const [cardColor, setCardColor] = useState(flashCard?.situaoEstorno || "");

  const [dayWork, setDayWork] = useState(flashCard?.infoWork.dia || "");
  const [typeFaina, setTypeFaina] = useState(
    flashCard?.inputValues._tipo || ""
  );

  const [error, setError] = useState("");

  //const [typeFaina, setTypeFaina] = useState('');
  //const [dayFaina, setDayFaina] = useState('');
  //const [shiftWork, setShiftWork] = useState(false);

  useEffect(() => {
    if (createMode) {
      setTitle("");
      setDescription("");
    }
  }, [createMode]);

  function handleTitleChange(newTitle) {
    setTitle(newTitle);
  }

  function handleDescriptionChange(newDescription) {
    setDescription(newDescription);
  }

  function clearFields() {
    setTitle("");
    setDescription("");
  }

  function validateForm() {
    return title.trim() !== "" && description.trim() !== "";
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      setError("");

      if (onPersist) {
        onPersist(title, description);
        clearFields();
      }
    } else {
      setError("Título e Descrição são obrigatórios.");
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

  // function handleButtonClick() {
  //   if (onButtonClick) {
  //     onButtonClick();
  //   }
  // }

  const backgroundClassName = createMode ? "bg-gray-100" : "bg-yellow-50";

  return (
    <form
      className={`${backgroundClassName} p-2`}
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
      // onButtonClick={handleButtonClick}
    >
      <div className="border border-gray-300">
        <div className="bg-gray-200 flex flex-row justify-center p-2">
          <div className="bg-blue-400 border border-blue-500 text-white rounded-lg shadow-lg p-2">
            Calculadora de Remuneração
          </div>
        </div>

        <div className="">
          <div className="border border-gray-300 p-2">
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
                <div className="bg-blue-300 shadow-lg rounded-lg p-2 mb-2">
                  Selecione a Data
                </div>
                <DateInput
                  labelDescription=""
                  inputValue={dayWork}
                  onInputChange={handleDayWork}
                />
              </div>
              <div className="flex flex-col flex-wrap p-2">
                <div className="bg-blue-300 rounded-lg shadow-lg text-center mb-2 p-2">
                  Período
                </div>
                <div className="flex flex-row space-x-1">
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">
                    <RadioButton labelDescription="" />
                    {`A`}
                  </div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">
                    <RadioButton labelDescription="" />
                    {`B`}
                  </div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">
                    <RadioButton labelDescription="" />
                    {`C (+25%)`}
                  </div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">
                    <RadioButton labelDescription="" />
                    {`D (+50%)`}
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-300 flex flex-row flex-wrap justify-evenly p-2">
              <div className="p-3">
                <div className="bg-blue-300 shadow-lg rounded-lg p-2">
                  Selecione Tipo de Faina
                </div>
                <SelectFaina
                  labelDescription="Selecione o tipo de faina"
                  selectValue={typeFaina}
                  onSelectChange={handleTypeFaina}
                />
              </div>
              <div className="flex place-items-center">
                <div className="bg-terciary hover:bg-primary text-white rounded-lg shadow-lg p-2">
                  <CheckboxInput
                    labelDescription=""
                    value={`checkboxValue`}
                    readOnly
                    onChange={`handleCheckboxChange`}
                  />
                  Sem Rotator (x1.75)
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <FainaSelectOptions />
          </div>

          <div className="">
            <PesoMovimentado />
          </div>
          <div className="">
            <FainaPorCaminhao />
          </div>
          <div className="">
            <FainaTipoTaxa />
          </div>
          <div className="">
            <FainaSelectFuncao />
          </div>
          <div className="">
            <FainaCotas />
          </div>
          <div className="">
            <FainaA1t />
            {typeFaina === "a1t"
              ? console.log("teste1")
              : console.log("teste2")}
          </div>
          <div className="">
            <FainaValoresFaina />
          </div>
          <div className="">
            <FainaCalculo />
          </div>
          <div className="">
            <FainaValor />
          </div>
          <div className="flex flex-row hover:bg-blue-300 justify-center p-4">
            <div>
              <Button type="submit">
                <IconSave className="" type="submit" size={30} />
                Incluir
              </Button>
            </div>
            <div>
              <Button onButtonClick={handleFormReset}>
                <IconNew />
                Novo Trabalho
              </Button>
            </div>
          </div>
        </div>

        {error.trim() !== "" ? (
          <div className="bg-red-300 text-red-900 flex flex-wrap text-center font-semibold justify-center">
            <Error>{error}</Error>
          </div>
        ) : (
          <span>&nbsp;</span>
        )}
      </div>
    </form>
  );
}

// Check if Date is Valid
//
// const isDateValid = (...val) => !Number.isNaN(new Date( ...val ).valueOf());
// isDateValid("October 17, 2021 03:24:00")

//Find the Day of Year
//
// const dayOfYear = (date) =>
//   Math.floor((date - new Date(date.getFullYear(),
//   0, 0)) / 1000 / 60 / 60 / 24);
//   dayOfYear(new Date());

// Check if A Number is Even or Odd

// const isEven = num => num % 2 === 0;
// console.log(isEven(2));
// //result: true

// Array.from
// ----
// const length = 3;
// const filledArray = Array.from(Array(length), () => {
//   return { value: 0 };
// });
// filledArray; // [{ value: 0 }, { value: 0 }, { value: 0 }]
// filledArray[1].value = 3;
// filledArray; // [{ value: 0 }, { value: 3 }, { value: 0 }]

// Array.map
// ----
// const length = 3;
// const filledArray = [...Array(length)].map(() => {
//   return { value: 0 };
// });
// filledArray; // [{ value: 0 }, { value: 0 }, { value: 0 }]
