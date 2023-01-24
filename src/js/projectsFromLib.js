// === import ===
import libProjects from '../lib/libProjects.JSON';

// === const ===
const refs = {
  projectList: document.querySelector("ul.projects__list"),
  projectsBtnPlay: document.querySelectorAll(".projects__play-btn"),
}
const projectsGalleryMarkup = createlibProjectsMarkup(libProjects);

// === action ===
// window.addEventListener('load', () => {
//   refs.projectList.insertAdjacentHTML('beforeend', projectsGalleryMarkup);
// })

refs.projectList.insertAdjacentHTML('beforeend', projectsGalleryMarkup);
refs.projectList.addEventListener('click', playProjectVideo);

// === funcion ===
function createlibProjectsMarkup(libProjects) {
  // let nameOfCategory = 0;
  console.log(libProjects[1]);

  return libProjects
    .map(({ projectName, category }) => {
      let nameOfCategory = 0;
      if (category === 'films') {
        nameOfCategory = "Фільм"
      } else if (category === 'serials') {
        nameOfCategory = "Серіал"
      } else if (category === 'clips') {
        nameOfCategory = "Кліп"
      } else if (category === 'adv') {
        nameOfCategory = "Реклама"
      };
    
      return ` 
        <li class="projects__item hide" data-filter="${category}">
          <img class="projects__img-cover js-coverPlay" src="../static/projects/cover/${category}/${projectName}.webp" alt="${projectName}" width="320" height="280"/>
          <svg class="projects__play-svg" width="60" height="60">
            <use href="./images/icons/icons.svg#youtube-2"></use>
          </svg>
          <p class="project__title">${projectName}</p>
          <p class="project__category">${nameOfCategory}</p>
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
    if (item.projectName === projectName) {
      projectEmbedSrc = item.embedSrc;

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
  // console.log(projectName);
  // console.log(projectEmbedSrc);
  
  const instance = basicLightbox.create(`
    <iframe class="projects__play-iframe" src="${projectEmbedSrc}" frameborder="0" allowfullscreen></iframe>
    `, {
    onShow: (instance) => {
      document.addEventListener('keydown', function(e){
	      if(e.key === "Escape"){
          // console.log('this is ESCAPE')
          instance.close();
	      }
        });
      }
    });

  instance.show(); 
};

function getCurrentCategory() {
  console.log('f');
};