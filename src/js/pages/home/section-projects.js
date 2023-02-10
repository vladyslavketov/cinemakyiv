import refs, { projectsRefs } from '../../common/refs';
import projectsLib from '../../../lib/projectsLib.JSON';

import projectsItemMarkup from '../../templates/projectsItemMarkup';
import projectsItemModalMarkup from '../../templates/projectsItemModalMarkup';
import createListMarkup from '../../common/createListMarkup';
import setCurrentClass from '../../common/setCurrentClass';
import { openModal } from '../../components/modal';
import { showLoader, hideLoader } from '../../components/loader';
import { getCurrentPage, getCurrentItemsPerPage, createPaginationBtnListMarkup } from '../../components/pagination';
// ================================================================================
// === Початкові параметри
// ================================================================================
const allProjects = Object.values(projectsLib).flat();
const perPage = 6;
// ================================================================================
// === Вираховуємо данні для рендеру
// ================================================================================
let projectToRender = allProjects;
let pages = Math.ceil(projectToRender.length / perPage);
let currentItemsPerPage = [];
// ================================================================================
// === Запускаємо рендер за початковими параметрами
// ================================================================================
renderContent(projectToRender);
renderPagination(pages);
// ================================================================================
// === Вішаємо прослуховувачі кліків на кнопки "пагінації", "деталі проекту", "фільту"
// ================================================================================
projectsRefs.projectsFilterList.addEventListener('click', onProjectsFilterBtnClick);
projectsRefs.projectList.addEventListener('click', onProjectDetailsBtnClick);
refs.pagination.addEventListener('click', onPagBtnClick); // TODO - придумати як дізнатися чи не відбувся клік на одну й ту ж саму кнопку (можливо по кліку робити її неактивною)
// ================================================================================

function renderContent(projectToRender, currentPage) {
  showLoader();
  // ========== крок 2 - отримуємо поточну частину данних ==============================
  currentItemsPerPage = getCurrentItemsPerPage(projectToRender, perPage, currentPage);
  // ========== крок 3 - створюємо розмітку за шаблоном ==============================
  const listMarkup = createListMarkup(currentItemsPerPage, projectsItemMarkup);
  // ========== крок 4 - рендеримо розмітку ==============================
  projectsRefs.projectList.innerHTML = listMarkup;
  hideLoader();
}

function renderPagination(pages) {
  if (!pages || pages < 2) return (refs.pagination.innerHTML = '');
  const paginationBtnListMarkup = createPaginationBtnListMarkup(pages);
  refs.pagination.innerHTML = paginationBtnListMarkup;
}

function getfilteredData(filterQuery) {
  const filteredData = allProjects.filter(item => item.category === filterQuery);
  if (filteredData.length < 1) return allProjects;
  return filteredData;
}

function getCurrentFilter() {
  const projectsFilterBtnCurrent = document.querySelector('button.projects__filter-btn.current');
  const currentFilter = projectsFilterBtnCurrent.dataset.filter;
  return currentFilter
}

function onProjectsFilterBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  setCurrentClass(e, '.projects__filter-btn.current');
  const filteredData = getfilteredData(e.target.dataset.filter);
  const newPages = Math.ceil(filteredData.length / perPage);

  renderContent(filteredData);
  renderPagination(newPages);
}


function onProjectDetailsBtnClick(e) {
  if (!e.target.classList.contains('project__details-btn')) return;

  showLoader();

  const currentProjectId = e.target.dataset.id;
  const currentProjectData = currentItemsPerPage.find(project => project.id === currentProjectId);
  const currentProjectMarkup = projectsItemModalMarkup(currentProjectData);

  refs.modal.innerHTML = currentProjectMarkup;
  openModal();
  hideLoader();
}

function onPagBtnClick(e) {
  const currentPage = getCurrentPage(e);
  const filterData = getfilteredData(getCurrentFilter());

  renderContent(filterData, currentPage);
  setCurrentClass(e, '.paginationBtn.current');
}

// ================================================================================
// console.log('кількість елементів всього:', projectToRender.length);
// console.log('кількість елементів на сторінці:', perPage);
// console.log("кількість сторінок:", pages);
// ================================================================================
// console.log("renderPagination", "pages", pages);
