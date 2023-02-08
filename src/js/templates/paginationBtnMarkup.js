export default function paginationBtnMarkup(number) {
  return `
    <button class="paginationBtn" data-page="${number}">${number}</button>
  `;
}