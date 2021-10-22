//import { compareAsc, format } from 'date-fns'
import { getNewId } from "../services/idService";

export default function DateInput({
  id = getNewId(),
  labelDescription = "Descrição do label:",
  inputValue = "2021-04-30",
  onInputChange = null,
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      //console.log(format(newValue, 'dd/mm/yyyy'));
      onInputChange(newValue);
      console.log(newValue);
      //console.log(newValue.toLocaleTimeString());
    }
  }

  return (
    <div className="flex flex-col my-4">
      {labelDescription}
      <input
        id={id}
        autoFocus={autoFocus}
        className="border p-1"
        type="date"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
