const filters = [...document.querySelectorAll('.filter')];
const projectCards = [...document.querySelectorAll('.project-card')];
const filterStatus = document.querySelector('#filter-status');

for (const filter of filters) {
  filter.addEventListener('click', () => {
    const selected = filter.dataset.filter;
    for (const otherFilter of filters) {
      otherFilter.setAttribute('aria-pressed', String(filter === otherFilter));
    }
    let visibleCount = 0;
    for (const card of projectCards) {
      const matches = selected === 'all' || card.dataset.area.split(' ').includes(selected);
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    }
    filterStatus.textContent = `${visibleCount} proyectos visibles`;
  });
}
