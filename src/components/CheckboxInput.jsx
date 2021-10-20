export default function CheckboxInput({
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
        autoFocus={autoFocus}
        className="border p-1"
        type="checkbox"
        value={checkboxValue}
        onCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
}
