const refs = {
  projectsFilterList: document.querySelector('.projects__filter-list'),
  projectsFilterBtn: document.querySelectorAll('.projects__filter-btn'),
  projectsItems: document.querySelectorAll('.projects__item'),
};

window.addEventListener('load', onLoadShowProjectItem);
refs.projectsFilterList.addEventListener('click', onProjectsFilterListClick);

function onProjectsFilterListClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  setClassActiveToFilterBtn(e);
  setClassHideToProjectsItem(e);
}

function setClassActiveToFilterBtn(e) {
  const currentFilterBtn = document.querySelector('.projects__filter-btn.current');

  if (currentFilterBtn) {
    currentFilterBtn.classList.remove('current');
    currentFilterBtn.parentElement.classList.remove('current');
  }

  e.target.classList.add('current');
  e.target.parentElement.classList.add('current');
}

function setClassHideToProjectsItem(e) {
  const currentCategory = e.target.dataset.filter;

  for (const item of refs.projectsItems) {
    if (currentCategory === 'all') {
      item.classList.remove('hide');
      setTimeout(() => {
        item.classList.remove('opacity');
      }, 500)
    } else if (currentCategory !== item.dataset.filter) {
      item.classList.add('opacity');
      setTimeout(() => {
        item.classList.add('hide');
      }, 500);
    } else {
      item.classList.remove('hide');
      setTimeout(() => {
        item.classList.remove('opacity');
      }, 500);
    }
  }
}

function onLoadShowProjectItem() {
  const initialFilterItem = "all";
  let currentFilterItem = initialFilterItem;

  for (const item of refs.projectsFilterBtn) {
    if (item.classList.contains('current')) {
      currentFilterItem = item.dataset.filter;
    }
  }

  for (const item of refs.projectsItems) {
    if (item.dataset.filter === currentFilterItem) {
      item.classList.remove('hide');
    }
  }
}