const addDataError = () => {
  const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const dataError = errorTemplate.cloneNode(true);
  document.body.append(dataError);

  setTimeout(() => {
    dataError.remove();
  }, 5000);
};

export { addDataError };
