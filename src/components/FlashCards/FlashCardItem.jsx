import { RiDeleteBin3Line as DeleteIcon } from 'react-icons/ri';
//RiEdit2Line as EditIcon,
import { FaEdit as EditIcon } from 'react-icons/fa';

export default function FlashCardItem({
  children: flashCard,
  onDelete = null,
  onEdit = null,
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

  return (
    <div className="border border-gray-500 shadow-lg rounded-lg p-2 mt-2 mb-4 hover:shadow-inline hover:border-opacity-5">
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
