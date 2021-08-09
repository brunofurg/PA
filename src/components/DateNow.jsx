export default function DateNow() {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = mes + '-' + dia + '-' + ano;

    return (
        <div>
          {dataAtual};
          console.log(dataAtual);
        </div>
    )
}
