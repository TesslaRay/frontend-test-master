// You don't have to use `fetch` btw, use whatever you want
const getCounters = () =>
  fetch('/api/v1/counter', {method: 'get'}).then((res) => res.json());

export default getCounters;
