// TODO 1 - add inforation in answer
export default function createListMarkup(arrayOfData, createItemMarkup) {
  if (!Array.isArray(arrayOfData) || !arrayOfData.length > 0)
    return 'Нажаль данні не завантажились( Спробуйте пізніше'; // TODO 1
  return arrayOfData.map(data => createItemMarkup(data)).join('');
}