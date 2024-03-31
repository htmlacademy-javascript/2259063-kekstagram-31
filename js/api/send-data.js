const sendData = (body) => fetch(
  'https://31.javascript.htmlacademy.pro/kekstagram',
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (response.ok) {
      return response.json(); // Возвращаем результат в виде JSON
    } else {
      throw new Error(); // Если запрос не успешен, выбрасываем ошибку
    }
  });

export { sendData };

