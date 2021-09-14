import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from 'react-icons/ai';

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
    <div className="border border-gray-500 shadow-lg rounded-lg p-4 m-2">
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
          className="cursor-pointer"
          size={24}
        />

        <DeleteIcon
          onClick={handleDeleteIconClick}
          className="cursor-pointer"
          size={24}
        />
      </div>
    </div>
  );
}
