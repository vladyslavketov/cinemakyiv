import refs from '../base/refs';

export function showLoader() {
  refs.body.classList.add('isLoading');
  refs.loader.parentElement.classList.remove('isHidden');
}

export function hideLoader() {
  refs.body.classList.remove('isLoading');
  refs.loader.parentElement.classList.add('isHidden');
}