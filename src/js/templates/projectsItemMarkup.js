export default function projectsItemMarkup(data) {
  if (!data) return;
  const { id, title, category } = data;
  let nameOfCategory = 0;

  switch (category) {
    case 'films':
      nameOfCategory = 'Фільм';
      break;

    case 'serials':
      nameOfCategory = 'Серіал';
      break;

    case 'clips':
      nameOfCategory = 'Кліп';
      break;

    case 'adv':
      nameOfCategory = 'Реклама';
      break;

    default:
      nameOfCategory = 'Проект';
  }

  return `
    <li class="projects__item animate__animated animate__fadeInUp" data-filter=${category}>
        <img
          class="projects__img-cover"
          src="./images/projects/${category}/${id}/cover-${id}.webp"
          alt=${title}
          width="320"
          height="280"
        />
        <div class="project__desc">
          <p class="project__title">${title}</p>
          <svg class="projects__play-svg" width="40" height="40">
            <use href="./images/icons/icons.svg#youtube-2"></use>
          </svg>
        </div>
        <p class="project__category">${nameOfCategory}</p>
        <button type="button" class="project__details-btn" data-id=${id}></button>
    </li>
  `;
}

// src = './images/projects/${category}/${id}/cover.webp';
// data-lazy="./images/projects/${category}/${id}/cover.webp"


// === інший синтаксис ===
  // if (category === 'films') {
  //   nameOfCategory = 'Фільм';
  // } else if (category === 'serials') {
  //   nameOfCategory = 'Серіал';
  // } else if (category === 'clips') {
  //   nameOfCategory = 'Кліп';
  // } else if (category === 'adv') {
  //   nameOfCategory = 'Реклама';
  // } else {nameOfCategory = 'Проект';}
  // ===  ===