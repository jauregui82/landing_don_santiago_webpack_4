// import axios from 'axios';

// const url = 'http://192.168.1.36';
// const url=  'http://18.232.245.2';
const url = 'http://la-intranet.com';
const urlAPI = `${url}/api`;
const urlStorage = `${url}/storage`;


const urlLocalAPI = `/assets/data`;
const urlStorageLocal = `/assets/storage`;

const urlImageLocal = `/assets/images`;
const urlImageLocalPreview = `${urlImageLocal}/preview.png`;

const configHeader = {
  headers: {
    processData: false,
    contentType: false,
    cache: false,
    'Access-Control-Allow-Origin': '*'
  }
}

export {
  url,
  urlAPI,
  urlStorage,
  urlLocalAPI,
  urlStorageLocal,
  configHeader,
  urlImageLocal,
  urlImageLocalPreview
}
