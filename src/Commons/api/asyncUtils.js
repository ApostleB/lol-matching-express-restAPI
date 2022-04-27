
const axios = require('axios');

export const customAsync = (api, minute) => {
  return new Promise((resolve) => 
  setTimeout(() => {resolve(api)},minute));
}