import { projectsRefs } from '../../../common/js/refs';
import { projectDataPromise } from './projects-data';
import projectsItemSliderMarkup from '../../../templates/projectsItemSliderMarkup';
import createListMarkup from '../../../common/js/createListMarkup';

onSliderLoad();

async function onSliderLoad() {
  const dataToRender = await projectDataPromise;

  const filteredProjects = dataToRender.filter(item => {
    if (item.selections.find(i => i === 'hero-slider')) return true;
  });

  const sliderlistMarkup = createListMarkup(
    filteredProjects,
    projectsItemSliderMarkup
  );
  projectsRefs.projectSliderList.innerHTML = sliderlistMarkup;
}

import '../../../components/slick-slider/slick-min';
import '../../../components/slick-slider/slick-local';