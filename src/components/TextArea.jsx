import { getNewId } from "../services/idService";

export default function TextArea({
  id = getNewId(),
  labelDescription = "Descrição do label:",
  textAreaValue = "Valor padrão do text area",
  onTextAreaChange = null,
  maxLength = 230,
  rows = 4,
}) {
  function handleInputChange({ currentTarget }) {
    if (onTextAreaChange) {
      const newValue = currentTarget.value;
      onTextAreaChange(newValue);
    }
  }

  const currentCharacterCount = textAreaValue.length;

  return (
    <div className="flex flex-col my-4">
      {labelDescription}
      <textarea
        id={id}
        className="border p-1"
        maxLength={maxLength}
        rows={rows}
        value={textAreaValue}
        onChange={handleInputChange}
      />

      <div className="text-right mr-1">
        <span>
          {currentCharacterCount} / {maxLength}
        </span>
      </div>
    </div>
  );
}
