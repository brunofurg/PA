export default function RadioButton({
  name = 'radioButtonName',
  labelDescription = 'Descrição do botão',
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
        type="radio"
        name={name}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
      
    </div>
  );
}
