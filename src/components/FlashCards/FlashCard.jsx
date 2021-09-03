import {
  RiPencilLine as EditIcon,
  RiDeleteBin7Line as DeleteIcon,
} from 'react-icons/ri';

export default function FlashCard({
  children: workCard,
  id,
  // keyId,
  title = 'Título do card',
  description = 'Descrição do card, que pode conter mais palavras que o título',
  showFlashCardTitle = true,
  onToggleFlashCard = null,
  onDelete = null,
  onEdit = null,
}) {

  //const { title, description } = workCard;

  function handleCardClick() {
    if (onToggleFlashCard) {
      console.log(id);
      onToggleFlashCard(id);
    }
  }

  function handleDeleteIconClick() {
    if (onDelete) {
      console.log(workCard.id);
      onDelete(workCard.id);

    }
  }

  function handleEditIconClick() {
    if (onEdit) {
      console.log(workCard);
      onEdit(workCard);
    }
  }

  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';

  return (
    <>
    <div
      className={`border-2 border-green-400 shadow-lg p-4 m-2 rounded-lg flex flex-row items-center justify-between ${fontSizeClassName}`}
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
