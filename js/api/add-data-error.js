const ERROR_DISPLAY_DURATION = 5000;

const addDataError = () => {
  const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
  const dataError = errorTemplate.cloneNode(true);
  document.body.append(dataError);

  setTimeout(() => {
    dataError.remove();
  }, ERROR_DISPLAY_DURATION);
};

export { addDataError };
