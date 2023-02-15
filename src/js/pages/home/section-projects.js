import refs, { projectsRefs } from '../../common/refs';
import { sortedAllProjectByPriority, getCurrentCategory, getFilteredDataByCategory } from '../../components/projects';
import projectsItemMarkup from '../../templates/projectsItemMarkup';
import projectsItemModalMarkup from '../../templates/projectsItemModalMarkup';
import createListMarkup from '../../common/createListMarkup';
import setCurrentClass from '../../common/setCurrentClass';
import setBtnDisabled from '../../common/setBtnDisabled';
import { openModal } from '../../components/modal';
import { showLoader, hideLoader } from '../../components/loader';
import { getCurrentPage, getCurrentItemsPerPage, createPaginationBtnListMarkup } from '../../components/pagination';
// ================================================================================
// === Початкові параметри
// ================================================================================
const perPage = window.innerWidth < 768 ? 6 : window.innerWidth < 1200 ? 8 : 12;
// ================================================================================
// === Вираховуємо данні для рендеру
// ================================================================================
let projectToRender = sortedAllProjectByPriority;
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

function onProjectsFilterBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;

  const filteredData = getFilteredDataByCategory(projectToRender, e.target.dataset.filter);
  const newPages = Math.ceil(filteredData.length / perPage);

  setBtnDisabled(e, '.projects__filter-btn');
  setCurrentClass(e, '.projects__filter-btn.current');
  renderContent(filteredData);
  renderPagination(newPages);
}

function onProjectDetailsBtnClick(e) {
  if (!e.target.classList.contains('project__details-btn')) return;
  // showLoader();
  const currentProjectId = e.target.dataset.id;
  const currentProjectData = currentItemsPerPage.find(project => project.id === currentProjectId);
  const currentProjectMarkup = projectsItemModalMarkup(currentProjectData);
  
  refs.modal.innerHTML = currentProjectMarkup;
  openModal();
  // hideLoader();
}

function onPagBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  const currentPage = getCurrentPage(e);
  const filterData = getFilteredDataByCategory(projectToRender, getCurrentCategory());
  
  setBtnDisabled(e, '.paginationBtn');
  setCurrentClass(e, '.paginationBtn.current');
  renderContent(filterData, currentPage);
  projectsRefs.projectSection.scrollIntoView(true);
}

// ================================================================================
// console.log('кількість елементів всього:', projectToRender.length);
// console.log('кількість елементів на сторінці:', perPage);
// console.log("кількість сторінок:", pages);
// ================================================================================