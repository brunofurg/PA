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

  const [dayWork, setDayWork] = useState(flashCard?.inputedValues.data || "");
  const [typeFaina, setTypeFaina] = useState(
    flashCard?.inputedValues.tipo || ""
  );
  const [radioValue, setRadioValue] = useState(
    flashCard?.inputedValues.periodo || ""
  );

  const [error, setError] = useState("");

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
  function handleDayWork(newDescription) {
    setDayWork(newDescription);
  }
  function handleTypeFaina(newTipo) {
    setTypeFaina(newTipo);
  }
  function handleAChange(AChange) {
    console.log(AChange);
    setRadioValue(AChange);
  }
  function handleBChange(BChange) {
    console.log(BChange);
    setRadioValue(BChange);
  }
  function handleCChange(CChange) {
    console.log(CChange);
    setRadioValue(CChange);
  }
  function handleDChange(DChange) {
    console.log(DChange);
    setRadioValue(DChange);
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
          <div className="bg-topic1 border border-border1 text-white rounded-lg shadow-lg p-2">
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
                    <RadioButton
                      labelDescription="A"
                      radioValue={radioValue === "A"}
                      onRadioChange={handleAChange}
                    />
                  </div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">
                    <RadioButton
                      labelDescription="B"
                      radioValue={radioValue === "B"}
                      onRadioChange={handleBChange}
                    />
                  </div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">
                    <RadioButton
                      labelDescription="C"
                      radioValue={radioValue === "C"}
                      onRadioChange={handleCChange}
                    />
                  </div>
                  <div className="bg-terciary text-white border hover:bg-primary rounded-lg text-center place-content-center flex flex-wrap shadow-lg p-2">
                    <RadioButton
                      labelDescription="D"
                      radioValue={radioValue === "D"}
                      onRadioChange={handleDChange}
                    />
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
                  inputValue={typeFaina}
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
            {typeFaina === "A1T" ? (
              ""
            ) : (
              <FainaSelectOptions childOptions={flashCard} />
            )}
          </div>

          <div className="">
            {typeFaina === "A1T" ? "" : <PesoMovimentado />}
          </div>
          <div className="">
            {typeFaina === "A1T" ? (
              ""
            ) : (
              <FainaPorCaminhao childOptions={flashCard} />
            )}
          </div>
          <div className="">
            {typeFaina === "A1T" ? (
              ""
            ) : (
              <FainaTipoTaxa childOptions={flashCard} />
            )}
          </div>
          <div className="">
            <FainaSelectFuncao />
          </div>
          <div className="">{typeFaina === "A1T" ? "" : <FainaCotas />}</div>
          <div className="">{typeFaina === "A1T" ? <FainaA1t /> : ""}</div>
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
