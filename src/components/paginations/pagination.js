import paginationBtnMarkup from '../../templates/paginationBtnMarkup';

// === дізнаємось номер поточної сторінки з дата атрибуту на кнопці, по на якій відбувся евент===
export function getCurrentPage(e) {
  if (!e) return 1;
  return e.target.dataset.page;
}

export function getCurrentItemsPerPage(arrayOfData, perPage, currentPage = 1) {
  if (!Array.isArray(arrayOfData)) return [];

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const itemsPerPage = arrayOfData.slice(start, end);

  return itemsPerPage;
}

// === створюємо розмітку списку кнопок пагінації з шаблону === //
// TODO - додати перевірку і якщо 1 сторінка, то не запускати функцію
export function createPaginationBtnListMarkup(pages) {
  if (pages < 2) return '';
  let arrayOfBtn = [];

  for (let i = 0; i < pages; i += 1) {
    arrayOfBtn.push(i + 1);
  }

  return arrayOfBtn.map(item => paginationBtnMarkup(item)).join('');
}