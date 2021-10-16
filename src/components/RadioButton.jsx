export default function RadioButton({
  name = 'radioButtonName',
  children: buttonDescription = 'Descrição do botão',
  buttonChecked = false,
  onButtonClick = null,
}) {
  function handleRadioButtonChange() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <div >
      {buttonDescription}
      <input
        type="radio"
        name={name}
        checked={buttonChecked}
        onChange={handleRadioButtonChange}
      />
      
    </div>
  );
}
