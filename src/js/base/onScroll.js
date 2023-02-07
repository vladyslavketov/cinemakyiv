import refs from './refs';

window.addEventListener('scroll', onWindowScroll);
refs.btnUp.addEventListener('click', onBtnUpClick);

function onWindowScroll() {
  const windowPageYOffset = window.pageYOffset;

  if (windowPageYOffset > 40) {
    refs.header.classList.add('isScrolling');
    refs.body.classList.add('isScrolling');

    if (windowPageYOffset > 500) {
      refs.btnUp.classList.remove('isHidden');
    } else if (windowPageYOffset <= 500) {
      refs.btnUp.classList.add('isHidden');
    }
  } else if (windowPageYOffset <= 40) {
    refs.header.classList.remove('isScrolling');
    refs.body.classList.remove('isScrolling');
  }
}

function onBtnUpClick() {
  window.scrollTo(0, 0);
}
