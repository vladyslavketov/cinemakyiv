export default function projectsItemMarkup(data) {
  if (!data) return;

  const { id, title, category, year } = data;
  const src = data.img.includes('cover')
    ? `./images/projects/${category}/${id}/cover-${id}.webp`
    : `./images/poster-1620x1080.webp`;
  let categoryName = 0;

  // onerror="this.src='images/blankPic.jpg'"

  switch (category) {
    case 'films':
      categoryName = 'Фільм';
      break;

    case 'serials':
      categoryName = 'Серіал';
      break;

    case 'clips':
      categoryName = 'Кліп';
      break;

    case 'adv':
      categoryName = 'Реклама';
      break;

    default:
      categoryName = 'Проект';
  }

  return `
    <li class="projects__item animate__animated animate__fadeInUp" data-filter=${category}>
        <img
          class="projects__img-cover"
          src=${src}
          alt=${title}
          width="320"
          height="280"
        />
        <div class="project__desc">
          <p class="project__title">${title}</p>
          <svg class="projects__play-svg" width="40" height="40">
            <use href="./images/icons/icons.svg#youtube-2"></use>
          </svg>
          <p class="project__category">${categoryName}</p>
          <p class="project__year">${year}</p>
        </div>
        <button type="button" class="project__details-btn" data-id=${id} aria-label="to open project details"></button>
    </li>
  `;
}