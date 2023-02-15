export default function paginationBtnMarkup(number) {
  let current = "";
  if (number === 1) { current = "current" }
  
  return `
    <button class="paginationBtn ${current}" data-page="${number}" aria-label="to open page number ${number}">${number}</button>
  `;
}