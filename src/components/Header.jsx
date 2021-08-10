//import './Header.css';

export default function Header({acao}) {
  return (
    <>
    <header className={ acao ? 'ativaCor' : ''}>
      <div className="bg-terciary text-white flex flex-row justify-around p-2">
       <span className="align-middle justify-start">Estiva</span>
       <span className="align-middle text-center justify-center"><strong>Controle de Remuneração</strong></span>
       <span className="align-middle justify-end text-right right-0">Porto do Rio Grande</span>
      </div>
    </header>
    </>
  );
}
