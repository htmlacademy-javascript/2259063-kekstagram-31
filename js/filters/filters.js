const showFiltersPanel = () => {
  const filters = document.querySelector('.img-filters');
  filters.classList.remove('img-filters--inactive');
};

export { showFiltersPanel };
