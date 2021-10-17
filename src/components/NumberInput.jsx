export default function NumberInput({
    labelDescription = 'Descrição do label:',
    inputValue = 'Valor padrão do input',
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
          autoFocus={autoFocus}
          className="border p-2"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeHolder}
        />
      </div>
    );
  }