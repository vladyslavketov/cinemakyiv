import refs from '../common/refs';
import paginationBtnMarkup from '../templates/paginationBtnMarkup';
import projectsItemMarkup from '../templates/projectsItemMarkup';
import createListMarkup from '../common/createListMarkup';

// === дізнаємось номер поточної сторінки з дата атрибуту на кнопці, по на якій відбувся евент===
export function getCurrentPage(e) {
  if (!e) return 1;
  const currentPage = e.target.dataset.page;
  return currentPage;
}

export function getCurrentItemsPerPage(arrayOfData, perPage, currentPage = 1) {
  if (!Array.isArray(arrayOfData)) return [];
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const itemsPerPage = arrayOfData.slice(start, end);

  return itemsPerPage;
}

// === створюємо розмітку списку кнопок пагінації з шаблону === //

// TODO - треба запустити функцію і зарендерети одночасно з рендом елементів
// TODO - додати перевірку і якщо 1 сторінка, то не запускати функцію
export function createPaginationBtnListMarkup(pages) {
  let arrayOfBtn = [];

  for (let i = 0; i < pages; i += 1) {
    arrayOfBtn.push(i + 1);
  }

  return arrayOfBtn.map(item => paginationBtnMarkup(item)).join('');
}

// TODO - придумати як дізнатися чи не відбувся клік на одну й ту ж саму кнопку (можливо по кліку робити її неактивною)
// export function onPaginationBtnClick(e, arrayOfProjects, perPage) {
//   showLoader();
//   const currentPage = getCurrentPage(e);
//   // const currentItemsPerPage = getItemsPerPage(
//   //   arrayOfProjects, // - як передати?
//   //   perPage, // - як передати?
//   //   currentPage
//   // );

//   const currentListMarkup = createListMarkup(
//     currentItemsPerPage,
//     projectsItemMarkup
//   );

//   refs.projectList.innerHTML = currentListMarkup; // перевірити правельніть рефу???
//   hideLoader();
// }

// ================================================================================
// = для копіювання у поточний файл =
// ================================================================================
// import projectsLib from '../../../src/lib/projectsLib.JSON';
// === масив данних ===
// const arrayOfProjects = Object.values(projectsLib).flat(); // масив данних

// === вихідні данні для пагінації ===
// let perPage = 3; // - кількість елементів на одній сторінці
// const pages = Math.ceil(arrayOfProjects.length / perPage); // - кількість сторінок виходячи з данних кількості елементів в масиві та параметру "perPage"

// ========================================================
// console.log('кількість елементів всього:', arrayOfProjects.length);
// console.log('кількість елементів на сторінці:', perPage);
// console.log("кількість сторінок:", pages);
