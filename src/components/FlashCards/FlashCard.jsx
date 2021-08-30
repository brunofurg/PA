import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from 'react-icons/ai';

export default function FlashCard({
  id,
  title = 'Título do card',
  description = 'Descrição do card, que pode conter mais palavras que o título',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
  onDelete = null,
  onEdit = null,
}) {
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }

  function handleDeleteIconClick() {
    if (onDelete) {
      onDelete(id);
    }
  }

  function handleEditIconClick() {
    if (onEdit) {
      onEdit(id);
    }
  }

  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';

  return (
    <>
    <div
      className={`border-2 shadow-lg p-4 m-2 rounded-lg flex flex-row items-center justify-between ${fontSizeClassName}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      
    >
      <div className="border-yellow-400 border-2 align-middle" onClick={handleCardClick}>
         {showFlashCardTitle ? title : description}
      </div>

      <div className="border-2 border-red-400 flex flex-row align-middle space-x-3 p-2">
        <span>
          <EditIcon
            onClick={handleEditIconClick}
            title="Editar Registro"
            className="cursor-pointer"
            size={24}
          />
      </span>
      <span>
          <DeleteIcon
            onClick={handleDeleteIconClick}
            title="Apagar Registro"
            className="cursor-pointer"
            size={24}
          />
      </span>
</div>


    </div>

</>

  );
}
