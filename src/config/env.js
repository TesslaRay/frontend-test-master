const local = false;

const urlDev = 'http://localhost:3001';

const urlProd =
  'https://api-test-cornershop-dot-cristian-valdivia.ue.r.appspot.com';

let url = local ? urlDev : urlProd;

export default url;
