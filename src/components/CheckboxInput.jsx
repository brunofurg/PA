import { getNewId } from "../services/idService";

export default function CheckboxInput({
  id = getNewId(),
  labelDescription = "Descrição do checkbox",
  checkboxValue = "Valor padrão do input",
  onCheckboxChange = null,
  autoFocus = false,
}) {
  function handleCheckboxChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }

  return (
    <label>
      <div className="flex flex-col items-center align-middle space-x-2 cursor-pointer">
        <input
          id={id}
          autoFocus={autoFocus}
          type="checkbox"
          value={checkboxValue}
          onChange={handleCheckboxChange}
        />
      </div>
      {labelDescription}
    </label>
  );
}
