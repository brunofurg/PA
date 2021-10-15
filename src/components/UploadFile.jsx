import button from '@mui/material/Button';

export default function UploadFile() {
    return (
        <div className="flex flex-col justify-items-center space-y-4">
          <input type="file" id="file" label="Escolha o arquivo para importar" accept="*.pdf"/>
         <button variant="contained" type="submit">Enviar</button>
        </div>
    )
}
