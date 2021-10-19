import { RiDeleteBin3Line as DeleteIcon } from 'react-icons/ri';
//RiEdit2Line as EditIcon,
import { FaEdit as EditIcon } from 'react-icons/fa';
//import WindowWork from '../WindowWork';


export default function FlashCardItem({
  children: flashCard,
  onDelete = null,
  onEdit = null,

  //onClick = null,
}) {
  const { title, description } = flashCard;

  function handleDeleteIconClick() {
    if (onDelete) {
      console.log(flashCard.id);
      onDelete(flashCard.id);
    }
  }

  function handleEditIconClick() {
    if (onEdit) {
      console.log(flashCard);
      onEdit(flashCard);
    }
  }
  // function handleClickFlashCard() {
  //     console.log(flashCard);
  //    // <WindowWork value={flashCard} />

  // }

  // bg-red-200  bg-green-100  bg-yellow-100
  return (
    <div className={`bg-white border border-gray-400 flex shadow-lg rounded-lg hover:bg-blue-50 items-stretch p-2`}>
      <ul className="flex flex-col space-y-4">
        <li>
          <span>
            {title}
          </span>
        </li>

        <li>
          <span>
            {description}
          </span>
        </li>
      </ul>

      <div className="mt-4 flex flex-row items-center justify-end space-x-4">
        <EditIcon

          onClick={handleEditIconClick}
          className="cursor-pointer hover:text-yellow-500"
          size={20}
        />

        <DeleteIcon
  
          onClick={handleDeleteIconClick}
          className="cursor-pointer hover:text-red-500"
          size={24}
        />
      </div>
    </div>
  );
}
