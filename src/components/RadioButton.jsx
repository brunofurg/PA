import { getNewId } from "../services/idService";

export default function RadioButton({
  id = getNewId(),
  labelDescription = "Descrição do botão",
  radioGroupName = "RadioButton",
  buttonChecked = false,
  onRadioChange = null,
}) {
  return (
    // <div className="flex flex-col text-center place-content-center place-items-center">

    <label htmlFor={id}>
      <div className="bg-terciary text-white border hover:bg-primary rounded-lg place-items-center place-content-center flex flex-row flex-wrap shadow-lg p-2">
        <input
          id={id}
          type="radio"
          name={radioGroupName}
          checked={buttonChecked}
          onChange={onRadioChange}
        />
        {labelDescription}
      </div>
    </label>
  );
}
