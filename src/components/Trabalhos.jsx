import Uppy from '@uppy/core';
import FileInput from '@uppy/file-input';
import StatusBar from '@uppy/status-bar';
import Tus from '@uppy/tus';


export default function Trabalhos() {
  const uppyOne = new Uppy({debug: true, autoProceed: true})
  uppyOne
    .use(FileInput, { target: '.UppyInput', pretty: false })
    .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
    .use(StatusBar, {
      target: '.UppyInput-Progress',
      hideUploadButton: true,
      hideAfterFinish: false
    })
return (
  <>
    <div className=".UppyInput">I</div>
    <div className=".UppyInput-Progress">...</div>
  </>
)
}





// https://app.pdf.co/dashboard

// https://app.docparser.com/field/get/dsxzegohjfvp/2201638/

// https://www.youtube.com/watch?v=jkfuCy9YvIc

// https://apidocs.pdf.co/13-pdf-to-json-javascript-convert-pdf-to-json-from-file-node-js-async-api

// https://www.npmjs.com/package/pdf-to-text