// import projectsLib from '../../../lib/projectsLib.JSON';
// import projectsLib from '../../../static/lib/projectsLib.JSON';
// ============================================================
export const projectDataPromise = fetchProjectsData().then(getProjectsToRender);

async function fetchProjectsData() {
  const response = await fetch('../../../lib/projectsLib.JSON');
  return response.json(); 
}

function getProjectsToRender(dataObject) {
  const allProjects = Object.values(dataObject).flat();
  const sortedProjectsByPriority = [...allProjects].sort(
    (first, second) => second.priority - first.priority
  );

  return sortedProjectsByPriority;
}

// === fn from projects filter btn === [start] ============================================================================= 
export function getCurrentCategory() {
  const currentFilterBtn = document.querySelector(
    'button.projects__filter-btn.current'
  );
  return currentFilterBtn.dataset.filter;
}

export function getFilteredDataByCategory(data, filterQuery) {
  const filteredData = data.filter(item => item.category === filterQuery);
  if (filteredData.length < 1) return data; // TODO - прибрати умови і перенести у місце використання
  return filteredData;
}
// === fn from projects filter btn === [end] ================================================================================ 

// template
// {
//   "id": "temp",
//   "title": "temp",
//   "youtubeKeys": ["temp"],
//   "img": ["temp", "temp"],
//   "category": "temp",
//   "year": "",
//   "tag": [],
//   "priority": 0,
//   "selections": [],
//   "newKey": null
// }