export default function CheckboxInput({
  labelDescription = 'Descrição do checkbox',
  inputValue = 'Valor padrão do input',
  onCheckboxChange = null,
  autoFocus = false,
}) {
  function handleInputChange() {
    if (onCheckboxChange) {
      onCheckboxChange();
    }
  }

  return (
    <div className="flex flex-row items-center align-middle space-x-2">
      <input
        autoFocus={autoFocus}
        className="border p-1"
        type="checkbox"
        value={inputValue}
        onChange={handleInputChange}
      />

    </div>
  );
}
