export default function Button({
  children: description = "Descrição do botão",
  onButtonClick = null,
  colorClass = "bg-terciary",
  textClass = "text-white",
  hoverColor = "bg-secondary",
  type = "button",
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      className={`p-2 m-1 rounded-md ${colorClass} hover:${hoverColor} ${textClass}`}
      onClick={handleButtonClick}
      type={type}
    >
      {description}
    </button>
  );
}
