const Uppy = require('@uppy/core')
const FileInput = require('@uppy/file-input')
const StatusBar = require('@uppy/status-bar')
const Tus = require('@uppy/tus')

const uppyOne = new Uppy({debug: true, autoProceed: true})
uppyOne
  .use(FileInput, { target: '.UppyInput', pretty: false })
  .use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
  .use(StatusBar, {
    target: '.UppyInput-Progress',
    hideUploadButton: true,
    hideAfterFinish: false
  })


  <link rel="stylesheet" href="/uppy/uppy.min.css">

<div class="grid">
  <div class="column-full">
    <div class="UppyInput"></div>
    <div class="UppyInput-Progress"></div>
  </div>
</div>








https://app.pdf.co/dashboard

https://app.docparser.com/field/get/dsxzegohjfvp/2201638/

https://www.youtube.com/watch?v=jkfuCy9YvIc

https://apidocs.pdf.co/13-pdf-to-json-javascript-convert-pdf-to-json-from-file-node-js-async-api

https://www.npmjs.com/package/pdf-to-text