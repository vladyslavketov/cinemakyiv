import refs from '../../base/refs';
import Allprojects from '~src/lib/Allprojects.JSON';
// /Users/vladyslavketov/IT/GitHub/cinemakyiv/src/lib/AllProjects.JSON
import projectsItemMarkup from '../../../templates/projectsItemMarkup';
import projectsItemModalMarkup from '../../../templates/projectsItemModalMarkup';
import { openModal } from '../modal';
import { showLoader, hideLoader } from '../loader';

const arrayOfProjects = Object.values(Allprojects).flat();
const listMarkup = createListMarkup(arrayOfProjects, projectsItemMarkup);

refs.projectList.insertAdjacentHTML('beforeend', listMarkup);
refs.projectList.addEventListener('click', onProjectDetailsBtnClick);

function createListMarkup(arrayOfData, itemMarkup) {
  return arrayOfData
    .map(data => itemMarkup(data))
    .join('');
};

function onProjectDetailsBtnClick(e) {
  if (!e.target.classList.contains('project__details-btn')) return;
  showLoader();

  const currentProjectId = e.target.dataset.id;
  const currentProjectData = arrayOfProjects.find(project => project.id === currentProjectId);
  const currentProjectMarkup = projectsItemModalMarkup(currentProjectData);
  refs.modal.innerHTML = currentProjectMarkup;
  
  openModal();
  hideLoader();
}


// для фільтрації
// console.log(Allprojects.adv);
// console.log(Object.values(Allprojects).flat());
// console.log(Object.values(Allprojects).flat()[0]);
// console.log(Object.values(Allprojects).flat()[0].title);


// ===
// setTimeout(() => {
//   openModal();
//   hideLoader();
// }, 500);