let url = process.env.REACT_APP_URL;

// TODO (ca): eliminate hardcoded
if (url === undefined) {
  console.log(
    '[frontend-test-master][Error] No URL specified in the env variables, hardcoded',
  );
  url = 'https://api-test-cornershop-dot-cristian-valdivia.ue.r.appspot.com';
}

export default url;
