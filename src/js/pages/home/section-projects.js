import refs from '../../common/refs';
import projectsLib from '../../../lib/projectsLib.JSON';

import projectsItemMarkup from '../../templates/projectsItemMarkup';
import projectsItemModalMarkup from '../../templates/projectsItemModalMarkup';
import createListMarkup from '../../common/createListMarkup';
import { openModal } from '../../components/modal';
import { showLoader, hideLoader } from '../../components/loader';
import { getCurrentPage, getCurrentItemsPerPage, createPaginationBtnListMarkup } from '../../components/pagination';

// ================================================================================
// = варіант 1 - із ПАГІНАЦІЄЮ =
// ================================================================================
// крок 1 - розглажуємо масив данних
const allProjects = Object.values(projectsLib).flat();
// крок 1.2 - вираховуємо вихідні данні для пагінації ===
let perPage = 8; // - кількість елементів на одній сторінці
const pages = Math.ceil(allProjects.length / perPage); // - кількість сторінок виходячи з данних кількості елементів в масиві та параметру "perPage"
console.log('кількість елементів всього:', allProjects.length);
console.log('кількість елементів на сторінці:', perPage);
console.log("кількість сторінок:", pages);
// ================================================================================
// крок 1.3 - обробляємо масив данних за вихідними данними для пагінації


renderContent();

function renderContent(e) {
  showLoader();
  // крок 1 - визначаємо номер поточної сторінки
  const currentPage = getCurrentPage(e);
  // крок 2 - беремо поточну частину данних
  const currentItemsPerPage = getCurrentItemsPerPage(allProjects, perPage, currentPage);
  // крок 3 - створюємо розмітку за шаблоном
  const listMarkup = createListMarkup(currentItemsPerPage, projectsItemMarkup);
  const paginationBtnListMarkup = createPaginationBtnListMarkup(pages);
  // крок 4 - рендеримо розмітку
  refs.projectList.innerHTML = listMarkup;
  refs.pagination.innerHTML = paginationBtnListMarkup;
  hideLoader();
}


// крок 4 - вішаємо прослуховував кліків на кнопку "деталі проекту"
refs.projectList.addEventListener('click', onProjectDetailsBtnClick);
refs.pagination.addEventListener('click', renderContent); // TODO - придумати як дізнатися чи не відбувся клік на одну й ту ж саму кнопку (можливо по кліку робити її неактивною)


function onProjectDetailsBtnClick(e) {
  if (!e.target.classList.contains('project__details-btn')) return;
  showLoader();

  const currentProjectId = e.target.dataset.id;
  const currentProjectData = currentItemsPerPage.find(
    project => project.id === currentProjectId
  );
  const currentProjectMarkup = projectsItemModalMarkup(currentProjectData);
  refs.modal.innerHTML = currentProjectMarkup;

  openModal();
  hideLoader();
}



// ================================================================================

// TODO - replace to projectSlider.js
// import projectsItemSliderMarkup from '../../templates/projectsItemSliderMarkup';
// const filterProjects = arrayOfProjects.filter(item => {
//   if (item.selections.find(i => i === 'hero-slider')) {
//     return true;
//   }
// });
// const sliderlistMarkup = createListMarkup(filterProjects, projectsItemSliderMarkup);
// refs.projectSliderList.insertAdjacentHTML('beforeend', sliderlistMarkup);
// refs.projectSliderList.innerHTML = sliderlistMarkup;

// ================================================================================

// === для фільтрації ===
// console.log(projectsLib.adv);
// console.log(Object.values(projectsLib).flat());
// console.log(Object.values(projectsLib).flat()[0]);
// console.log(Object.values(projectsLib).flat()[0].title);