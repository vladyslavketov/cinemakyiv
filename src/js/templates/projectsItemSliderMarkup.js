export default function projectsItemSliderMarkup(data) {
  const { id, title, category } = data;

  return `
    <li class="projects-slider__item">
      <img class="projects-slider__img" src="./images/projects/${category}/${id}/poster-${id}.webp" alt="${title}" width="332" height="498">
    </li>
  `;
}

// data-lazy="./images/projects/${category}/${id}/poster-${id}.webp"
// <img class="projects-slider__img" data-lazy="./images/projects/${category}/${id}/poster.webp" src="./images/projects/${category}/${id}/poster.webp" alt="${title}" width="420">
