// import refs from '../base/refs';

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
    } else if (currentCategory !== item.dataset.filter) {
      item.classList.add('hide');
    } else {
      item.classList.remove('hide');
    }
  }
}

function onLoadShowProjectItem() {
  const initialFilterItem = "all";
  let currentFilterItem = initialFilterItem;

  for (const item of refs.projectsFilterBtn) {
    if (item.classList.contains('current')) {
      currentFilterItem = item.dataset.filter;
      console.log(currentFilterItem);
    }
  }

  for (const item of refs.projectsItems) {
    if (item.dataset.filter === currentFilterItem) {
      item.classList.remove('hide');
    }
  }
}