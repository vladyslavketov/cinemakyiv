export default function projectsItemMarkup(data) {
  const { category, title, id} = data;
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
    <li class="projects__item" data-filter=${category}>
        <img
          class="projects__img-cover js-coverPlay"
          src="./images/projects/cover/${category}/${title}.webp"
          alt=${title}
          width="320"
          height="280"
        />
        <svg class="projects__play-svg" width="60" height="60">
          <use href="./images/icons/icons.svg#youtube-2"></use>
        </svg>
        <p class="project__title">${title}</p>
        <p class="project__category">${nameOfCategory}</p>
        <button type="button" class="project__details-btn" data-id=${id}></button>
    </li>
  `;
}


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