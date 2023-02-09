import { projectsRefs } from '../../common/refs';
import projectsLib from '../../../lib/projectsLib.JSON';

import projectsItemSliderMarkup from '../../templates/projectsItemSliderMarkup';
import createListMarkup from '../../common/createListMarkup';

const allProjects = Object.values(projectsLib).flat();
const filterProjects = allProjects.filter(item => {
  if (item.selections.find(i => i === 'hero-slider')) return true;
});

const sliderlistMarkup = createListMarkup(
  filterProjects,
  projectsItemSliderMarkup
);
projectsRefs.projectSliderList.insertAdjacentHTML('beforeend', sliderlistMarkup);
// projectsRefs.projectSliderList.innerHTML = sliderlistMarkup;

// ================================================================================
// === імпортуємо JS для слайдеру
// ================================================================================
import '../../components/slick-slider/slick-min';
import '../../components/slick-slider/slick-local';
