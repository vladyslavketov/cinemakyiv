import projectsLib from '../../lib/projectsLib.JSON';

export const allProjects = Object.values(projectsLib).flat();
export const sortedAllProjectByPriority = [...allProjects].sort(
  (first, second) => second.priority - first.priority
);

export function getCurrentCategory() {
  const currentFilterBtn = document.querySelector('button.projects__filter-btn.current');
  return currentFilterBtn.dataset.filter;
}

export function getFilteredDataByCategory(data, filterQuery) {
  const filteredData = data.filter(item => item.category === filterQuery);
  if (filteredData.length < 1) return data; // TODO - прибрати умови і перенести у місце використання
  return filteredData;
}