export default function projectsItemModalMarkup(data) {
  const { category, title, youtubeKeys, year } = data;
  const url = `"https://www.youtube.com/embed/${youtubeKeys[0]}"`;
  let categoryName = 0;

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
    <div class="modal__body">
      <div class="projects__iframe-wrap">
        <iframe
          class="projects__iframe"
          src=${url}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="project__desc">
        <p class="project__title">${title}</p>
        <p class="project__year">${year}</p>
        <p class="project__category">${categoryName}</p>
      </div>
    </div>
  `;
}

{/* <p class="project__category">${categoryName}</p> */}
