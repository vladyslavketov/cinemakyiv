const refs = {
  menuBtnRef: document.querySelector("[data-mobile-menu-btn]"),
  menuContainerRef: document.querySelector("[data-mobile-menu]"),
  menuNavListRef: document.querySelector(".mobile-menu .nav__list"),
};

refs.menuBtnRef.addEventListener("click", toggleClassIsOpen);
refs.menuNavListRef.addEventListener("click", checkNodeName);
// window.addEventListener("orientationchange", removeClassIsOpen);

function toggleClassIsOpen() {
  const expanded = refs.menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
  refs.menuBtnRef.classList.toggle("is-open");
  refs.menuBtnRef.setAttribute("aria-expanded", !expanded);

  refs.menuContainerRef.classList.toggle("is-open");
  document.body.classList.toggle("mobile-menu-is-open");
};

function removeClassIsOpen() {
  const expanded = refs.menuBtnRef.getAttribute("aria-expanded") === "true" || false;
  
  refs.menuBtnRef.classList.remove("is-open");
  refs.menuBtnRef.setAttribute("aria-expanded", !expanded);

  refs.menuContainerRef.classList.remove("is-open");
  document.body.classList.remove("mobile-menu-is-open");
};

function checkNodeName(e) {
  if (e.target.nodeName !== "A") {
    return;
  };

  removeClassIsOpen();
};