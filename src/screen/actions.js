// You don't have to use `fetch` btw, use whatever you want
export const getCounters = () =>
  fetch('/api/v1/counter', {method: 'get'}).then((res) => res.json());

export const addCounter = async (title) =>
  await fetch('/api/v1/counter', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title: title}),
  }).then((res) => res.json());

export const incrementValueCounter = async (item) =>
  await fetch('/api/v1/counter/inc', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: item.id}),
  }).then((res) => res.json());

export const decrementValueCounter = async (item) =>
  await fetch('/api/v1/counter/dec', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: item.id}),
  }).then((res) => res.json());
