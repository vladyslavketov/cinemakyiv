const refs = {
  body: document.querySelector('body'),
  header: document.querySelector('header'),
  btnUp: document.querySelector('.btn-up'),
};

window.addEventListener('scroll', onWindowScroll);
refs.btnUp.addEventListener('click', onBtnUpClick);

function onWindowScroll() {
  const windowPageYOffset = window.pageYOffset;

  if (windowPageYOffset > 40) {
    // console.log('windowPageYOffset: ', windowPageYOffset);
    refs.header.classList.add('scrolling');
    refs.body.classList.add('scrolling');

    if (windowPageYOffset > 500) {
      refs.btnUp.classList.remove('is-hide');
    } else if (windowPageYOffset <= 500) {
      refs.btnUp.classList.add('is-hide');
    };

  } else if (windowPageYOffset <= 40) {
    refs.header.classList.remove('scrolling');
    refs.body.classList.remove('scrolling');
  };
};

function onBtnUpClick() {
  window.scrollTo(0, 0);
};