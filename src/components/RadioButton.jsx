import { getNewId } from "../services/idService";

export default function RadioButton({
  id = getNewId(),
  name = "radioButtonName",
  labelDescription = "Descrição do botão",
  buttonChecked = false,
  onButtonClick = null,
}) {
  function handleRadioButtonChange() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <div className="flex flex-col text-center place-content-center place-items-center">
      {labelDescription}
      <input
        id={id}
        type="radio"
        name={name}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
    </div>
  );
}
