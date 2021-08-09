import { getNewId } from '../services/idService';

export default function TextInput({
  labelDescription = 'Descrição do label:',
  inputValue = 'Valor padrão do input',
  onInputChange = null,
  id = getNewId(),
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
      <label className="mb-2" htmlFor={id}>
        {labelDescription}
      </label>

      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-2"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeHolder}
      />
    </div>
  );
}
