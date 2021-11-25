import { getNewId } from "../services/idService";

export default function RadioButton({
  id = getNewId(),
  labelDescription = "Descrição do botão",
  radioValue = false,
  onRadioChange = null,
}) {
  return (
    // <div className="flex flex-col text-center place-content-center place-items-center">
    <label>
      <input
        id={id}
        type="radio"
        checked={radioValue}
        onChange={onRadioChange}
      />
      {labelDescription}
    </label>
  );
}
