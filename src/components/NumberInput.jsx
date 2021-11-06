import { getNewId } from "../services/idService";

export default function NumberInput({
  id = getNewId(),
  labelDescription = "Descrição do label:",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  autoFocus = false,
  placeHolder,
  size = null,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col">
      {labelDescription}
      <input
        id={id}
        autoFocus={autoFocus}
        className={`border p-2 place-self-center ${size}`}
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeHolder}
        fullWidth="false"
      />
    </div>
  );
}
