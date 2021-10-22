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
    <div className="flex flex-col items-center align-middle space-x-2 cursor-pointer">
      {labelDescription}
      <input
        id={id}
        autoFocus={autoFocus}
        type="checkbox"
        value={checkboxValue}
        onChange={handleCheckboxChange}
      />
    </div>
  );
}
