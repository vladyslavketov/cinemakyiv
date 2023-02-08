const refs = {
  body: document.querySelector('body'),
  header: document.querySelector('header'),

  btnUp: document.querySelector('.btn-up'),
  loader: document.querySelector('.loader'),
  modal: document.querySelector('.modal'),

  menuBtnRef: document.querySelector('[data-mobile-menu-btn]'),
  menuContainerRef: document.querySelector('[data-mobile-menu]'),
  menuNavListRef: document.querySelector('.mobile-menu .nav__list'),

  projectList: document.querySelector('ul.projects__list'),
  projectSliderList: document.querySelector('ul.projects-slider'),
  pagination: document.querySelector('div.pagination'),

  // projectsFilterList: document.querySelector('.projects__filter-list'),
  // projectsFilterBtn: document.querySelectorAll('.projects__filter-btn'),
  // projectsItems: document.querySelectorAll('.projects__item'),
};

export default refs;