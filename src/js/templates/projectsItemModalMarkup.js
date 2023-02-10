export default function projectsItemModalMarkup(data) {
  const { category, title, youtubeKeys } = data;
  const url = `"https://www.youtube.com/embed/${youtubeKeys[0]}"`;
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
    <div class="modal__body">
      <div class="projects__iframe-wrap">
        <iframe
          class="projects__iframe"
          src=${url}
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="projects__modal-dec">
        <p class="project__title">${title}</p>
      </div>
    </div>
  `;
}

{/* <p class="project__category">${nameOfCategory}</p> */}
