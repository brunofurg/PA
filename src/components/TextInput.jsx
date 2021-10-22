import { getNewId } from "../services/idService";

export default function TextInput({
  id = getNewId(),
  labelDescription = "Descrição do label:",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  autoFocus = false,
  placeHolder,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="flex flex-col my-4">
      {labelDescription}
      <input
        id={id}
        autoFocus={autoFocus}
        className="border p-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeHolder}
      />
    </div>
  );
}
