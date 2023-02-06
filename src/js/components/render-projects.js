import refs from '../base/refs';
// import libProjects from '../../lib/libProjects.JSON';

import Allprojects from '../../lib/Allprojects.JSON';
// console.log(Allprojects.adv);
// console.log(Object.values(Allprojects).flat());
// console.log(Object.values(Allprojects).flat()[0]);
// console.log(Object.values(Allprojects).flat()[0].title);
const libProjects = Object.values(Allprojects).flat();

const basicLightbox = require('basiclightbox');
const projectsGalleryMarkup = createlibProjectsMarkup(libProjects);

// === action ===
// window.addEventListener('load', () => {
//   refs.projectList.insertAdjacentHTML('beforeend', projectsGalleryMarkup);
// })

refs.projectList.insertAdjacentHTML('beforeend', projectsGalleryMarkup);
refs.projectList.addEventListener('click', playProjectVideo);

// === funcion ===
function createlibProjectsMarkup(libProjects) {
  return libProjects
    .map(({ title, category, id }) => {
      let nameOfCategory = 0;
      if (category === 'films') {
        nameOfCategory = 'Фільм';
      } else if (category === 'serials') {
        nameOfCategory = 'Серіал';
      } else if (category === 'clips') {
        nameOfCategory = 'Кліп';
      } else if (category === 'adv') {
        nameOfCategory = 'Реклама';
      }
      // /Users/vladyslavketov/IT/GitHub/cinemakyiv/dist/projects/f00001.html
      const src = `./images/projects/cover/${category}/${title}.webp`;
      const href = `./projects_${id}.html`;

      return ` 
        <li class="projects__item" data-filter=${category}>
          <a href="${href}">
            <img class="projects__img-cover js-coverPlay" src="${src}" alt="${title}" width="320" height="280"/>
            <svg class="projects__play-svg" width="60" height="60">
              <use href="./images/icons/icons.svg#youtube-2"></use>
            </svg>
            <p class="project__title">${title}</p>
            <p class="project__category">${nameOfCategory}</p>
          </a>
        </li>
      `;
    })
    .join('');
};

function getProjectNameFromCoverImg(e) { 
  return e.target.getAttribute('alt');
};

function getProjectEmbedSrc(projectName) {
  let projectEmbedSrc;

  for (const item of libProjects) {
    if (item.title === projectName) {
      itemYoutubeKey = item.youtubeKeys[0];
      projectEmbedSrc = `https://www.youtube.com/embed/${itemYoutubeKey}`;
      return projectEmbedSrc;
    }
  };
}

function playProjectVideo (e) {
  if (!e.target.classList.contains("js-coverPlay")) {
    return;
  }

  const projectName = getProjectNameFromCoverImg(e);
  const projectEmbedSrc = getProjectEmbedSrc(projectName);
  
  const instance = basicLightbox.create(`
    <iframe class="projects__play-iframe" src="${projectEmbedSrc}" frameborder="0" allowfullscreen></iframe>
    `, {
    onShow: (instance) => {
      document.addEventListener('keydown', function(e){
	      if(e.key === "Escape"){
          instance.close();
	      }
        });
      }
    });

  instance.show(); 
};