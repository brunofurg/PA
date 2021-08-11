import { Button } from '@material-ui/core';
import { Fragment } from 'react';

export default function Trabalhos() {
    return (
      <Fragment>
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
      </Fragment>
    )
}
