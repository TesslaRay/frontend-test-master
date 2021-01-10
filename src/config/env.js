const url = process.env.REACT_APP_URL;
if (url === undefined) {
  console.log(
    '[frontend-test-master][Error] No URL specified in the env variables',
  );
}

export default url;
