export default function RadioButton({
  name = 'radioButtonName',
  children: labelDescription = 'Descrição do botão',
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
