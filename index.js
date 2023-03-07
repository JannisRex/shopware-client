require('dotenv').config()
const url = process.env.SHOPWARE_URL
const key = process.env.KEY_ID
const secret = process.env.KEY_SECRET

// const axios = require('axios')

// axios
//   .get(url + '/api/articles/1')
//   .then((response) => {
//     console.log(response.data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

import axios from 'axios'

const options = {
  method: 'POST',
  url: 'http://localhost/store-api/product',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'sw-access-key': key,
  },
  data: { associations: { media: {} }, includes: { media: ['url'] } },
}

axios
  .request(options)
  .then(function (response) {
    console.log(response.data)
  })
  .catch(function (error) {
    console.error(error)
  })


  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'sw-access-key': 'SWSCDZH3WULKMDGXTMNQS2VRVG'
    }
  };
  
  fetch('http://localhost/store-api/context', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));