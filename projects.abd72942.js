!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},r=e.parcelRequire6b66;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in s){var r=s[e];delete s[e];var i={id:e,exports:{}};return t[e]=i,r.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},e.parcelRequire6b66=r),r("XI1Kg");var i=r("cdW4A");window.addEventListener("scroll",(function(){const e=window.pageYOffset;e>40?(i.default.header.classList.add("isScrolling"),i.default.body.classList.add("isScrolling"),e>500?i.default.btnUp.classList.remove("isHidden"):e<=500&&i.default.btnUp.classList.add("isHidden")):e<=40&&(i.default.header.classList.remove("isScrolling"),i.default.body.classList.remove("isScrolling"))})),i.default.btnUp.addEventListener("click",(function(){window.scrollTo(0,0)}));const o={projectsFilterList:document.querySelector(".projects__filter-list"),projectsFilterBtn:document.querySelectorAll(".projects__filter-btn"),projectsItems:document.querySelectorAll(".projects__item")};window.addEventListener("load",(function(){let e="all";for(const t of o.projectsFilterBtn)t.classList.contains("current")&&(e=t.dataset.filter);for(const t of o.projectsItems)t.dataset.filter===e&&t.classList.remove("hide")})),o.projectsFilterList.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;(function(e){const t=document.querySelector(".projects__filter-btn.current");t&&(t.classList.remove("current"),t.parentElement.classList.remove("current"));e.target.classList.add("current"),e.target.parentElement.classList.add("current")})(e),function(e){const t=e.target.dataset.filter;for(const e of o.projectsItems)"all"===t?(e.classList.remove("hide"),setTimeout((()=>{e.classList.remove("opacity")}),500)):t!==e.dataset.filter?(e.classList.add("opacity"),setTimeout((()=>{e.classList.add("hide")}),500)):(e.classList.remove("hide"),setTimeout((()=>{e.classList.remove("opacity")}),500))}(e)}))}();
//# sourceMappingURL=projects.abd72942.js.map
