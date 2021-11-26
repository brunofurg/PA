import button from "@mui/material/Button";

export default function UploadFile() {
  return (
    <div className="flex flex-col justify-items-center space-y-4">
      <input
        type="file"
        id="file"
        label="Escolha Demonstrativo em .pdf para importar"
        accept="*.pdf"
      />
      <span className="bg-blue-300 border border-blue-500 place-content-center text-center rounded-lg shadow-lg p-2 m-2">
        <button variant="contained" color="bg-terciary" type="submit" />
        Enviar
      </span>
    </div>
  );
}
