export default function Header({acao}) {
  return (
    <>
    <header className={ acao ? 'ativaCor' : ''}>
      <div className="bg-terciary text-white align-middle flex flex-row justify-between p-2">
       <span>Estiva</span>
       <span><strong>Controle do Trabalho</strong></span>
       <span>Porto do Rio Grande</span>
      </div>
    </header>
    </>
  );
}
