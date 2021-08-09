import { Button } from '@material-ui/core';

export default function Trabalhos() {
    return (
      <>
        <div>
            Fainas Realizadas
            <div className="flex justify-center">
                <span>
                  <Button color="primary" variant="contained" >
                    Inserir
                  </Button>
                </span>
                <span>
                  <Button color="default" variant="contained">
                    Editar
                  </Button>
                </span>
              </div>

        </div>
      </>
    )
}
