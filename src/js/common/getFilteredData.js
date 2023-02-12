export default function getFilteredData(data, filterQuery, options) {
  const filteredData = data.filter(item => item.options === filterQuery);
  if (filteredData.length < 1) return data;
  return filteredData;
}

// TODO - check problem