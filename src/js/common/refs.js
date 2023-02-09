const refs = {
  body: document.querySelector('body'),
  header: document.querySelector('header'),

  btnUp: document.querySelector('.btn-up'),
  loader: document.querySelector('.loader'),
  modal: document.querySelector('.modal'),
  pagination: document.querySelector('div.pagination'),

  menuBtnRef: document.querySelector('[data-mobile-menu-btn]'),
  menuContainerRef: document.querySelector('[data-mobile-menu]'),
  menuNavListRef: document.querySelector('.mobile-menu .nav__list'),
};
export default refs;

export const projectsRefs = {
  projectList: document.querySelector('ul.projects__list'),
  projectsFilterList: document.querySelector('ul.projects__filter-list'),
  projectSliderList: document.querySelector('ul.projects-slider'),
};