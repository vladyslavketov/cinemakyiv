const refs = {
  body: document.querySelector('body'),
  header: document.querySelector('header'),

  btnUp: document.querySelector('.btn-up'),
  loader: document.querySelector('.loader'),

  menuBtnRef: document.querySelector('[data-mobile-menu-btn]'),
  menuContainerRef: document.querySelector('[data-mobile-menu]'),
  menuNavListRef: document.querySelector('.mobile-menu .nav__list'),

  projectList: document.querySelector('ul.projects__list'),
  projectsBtnPlay: document.querySelectorAll('.projects__play-btn'),

  // projectsFilterList: document.querySelector('.projects__filter-list'),
  // projectsFilterBtn: document.querySelectorAll('.projects__filter-btn'),
  // projectsItems: document.querySelectorAll('.projects__item'),
};

export default refs;