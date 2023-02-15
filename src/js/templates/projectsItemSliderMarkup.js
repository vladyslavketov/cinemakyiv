export default function projectsItemSliderMarkup(data) {
  const { id, title, category } = data;
  const sizes =
    window.innerWidth < 768
      ? `width="448" height="672"`
      : window.innerWidth < 1200
      ? `width="336" height="504"`
      : `width="368" height="552"`;

  return `
    <li class="projects-slider__item">
      <img class="projects-slider__img" src="./images/projects/${category}/${id}/poster-${id}.webp" alt="${title}" ${sizes}>
    </li>
  `;
}


// `width="448" height="672"`
// `width="336" height="504"`
// `width="368" height="552"`


// `width="332" height="498"`????