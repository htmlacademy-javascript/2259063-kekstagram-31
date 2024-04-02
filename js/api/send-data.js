const sendData = (body) => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram/',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error();
    }
  });

export { sendData };

