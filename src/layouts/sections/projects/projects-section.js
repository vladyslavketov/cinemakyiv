import refs, { projectsRefs } from '../../../common/js/refs';
import { projectDataPromise, getCurrentCategory, getFilteredDataByCategory } from './projects-data';
import projectsItemMarkup from '../../../templates/projectsItemMarkup';
import projectsItemModalMarkup from '../../../templates/projectsItemModalMarkup';
import createListMarkup from '../../../common/js/createListMarkup';
import setCurrentClass from '../../../common/js/setCurrentClass';
import setBtnDisabled from '../../../common/js/setBtnDisabled';
import { openModal } from '../../../components/modal/modal';
import { showLoader, hideLoader } from '../../../components/loader/loader';
import { getCurrentPage, getCurrentItemsPerPage, createPaginationBtnListMarkup } from '../../../components/paginations/pagination';
import { slick } from '../../../components/slick-slider/slick-local';

// ===== Початкові параметри ================================================================================
const perPage = window.innerWidth < 768 ? 6 : window.innerWidth < 1200 ? 8 : 12;
let currentItemsPerPage = [];
// ================================================================================
onFirstLoad();

async function onFirstLoad() {
  showLoader();
  const dataToRender = await projectDataPromise;
  const pages = Math.ceil(dataToRender.length / perPage);
  renderContent(dataToRender);
  renderPagination(pages);
  slick()
  hideLoader();
}

async function onFilterBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  showLoader();
  const dataToRender = await projectDataPromise;
  const filteredData = getFilteredDataByCategory(dataToRender, e.target.dataset.filter);
  const newPages = await Math.ceil(filteredData.length / perPage);

  projectsRefs.projectSection.scrollIntoView(true);
  setBtnDisabled(e, '.projects__filter-btn');
  setCurrentClass(e, '.projects__filter-btn.current');
  renderContent(filteredData);
  renderPagination(newPages);
  hideLoader();
}

async function onPaginationBtnClick(e) {
  if (e.target.nodeName !== 'BUTTON') return;
  showLoader();
  const currentPage = getCurrentPage(e);
  const dataToRender = await projectDataPromise;
  const filterData = getFilteredDataByCategory(dataToRender, getCurrentCategory());
  
  projectsRefs.projectSection.scrollIntoView(true);
  setBtnDisabled(e, '.paginationBtn');
  setCurrentClass(e, '.paginationBtn.current');
  renderContent(filterData, currentPage);
  hideLoader();
}

async function onProjectDetailsBtnClick(e) {
  if (!e.target.classList.contains('project__details-btn')) return;
  showLoader();
  const currentProjectId = e.target.dataset.id;
  const currentProjectData = currentItemsPerPage.find(project => project.id === currentProjectId);
  const currentProjectMarkup = projectsItemModalMarkup(currentProjectData);

  refs.modal.innerHTML = currentProjectMarkup;
  openModal();
  hideLoader();
}

// ===== Вішаємо прослуховувачі кліків на кнопки "пагінації", "деталі проекту", "фільту" ================================================================================
projectsRefs.projectsFilterList.addEventListener('click', onFilterBtnClick);
projectsRefs.projectList.addEventListener('click', onProjectDetailsBtnClick);
refs.pagination.addEventListener('click', onPaginationBtnClick); // TODO - придумати як дізнатися чи не відбувся клік на одну й ту ж саму кнопку (можливо по кліку робити її неактивною)

function renderContent(projectToRender, currentPage) {
  currentItemsPerPage = getCurrentItemsPerPage(projectToRender, perPage, currentPage);
  const listMarkup = createListMarkup(currentItemsPerPage, projectsItemMarkup);
  projectsRefs.projectList.innerHTML = listMarkup;
}

async function renderPagination(pages) {
  if (!pages || pages < 2) return (refs.pagination.innerHTML = ''); // TODO -  передивитись блок іф
  refs.pagination.innerHTML = createPaginationBtnListMarkup(pages);
}