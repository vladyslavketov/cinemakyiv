function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},i=t.parcelRequire6b66;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var i={id:e,exports:{}};return a[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},t.parcelRequire6b66=i),i("c8xut");var o=i("9nYnP");window.addEventListener("scroll",(function(){const e=window.pageYOffset;e>40?(o.default.header.classList.add("isScrolling"),o.default.body.classList.add("isScrolling"),e>500?o.default.btnUp.classList.remove("isHidden"):e<=500&&o.default.btnUp.classList.add("isHidden")):e<=40&&(o.default.header.classList.remove("isScrolling"),o.default.body.classList.remove("isScrolling"))})),o.default.btnUp.addEventListener("click",(function(){window.scrollTo(0,0)}));var r;o=i("9nYnP");function l(e){const{category:t,title:a,youtubeKeys:s}=e,i=`"https://www.youtube.com/embed/${s[0]}"`;let o=0;switch(t){case"films":o="Фільм";break;case"serials":o="Серіал";break;case"clips":o="Кліп";break;case"adv":o="Реклама";break;default:o="Проект"}return`\n    <div class="modal__body">\n      <div class="projects__iframe-wrap">\n        <iframe\n          class="projects__iframe"\n          src=${i}\n          frameborder="0"\n          allowfullscreen\n        ></iframe>\n      </div>\n      <div class="projects__modal-dec">\n        <p class="project__title">${a}</p>\n        <p class="project__category">${o}</p>\n      </div>\n    </div>\n  `}r=JSON.parse('{"films":[{"id":"f00001","title":"Захар Беркут","youtubeKeys":["fDoCoiiNqRc","6l4ojdgfHhA"],"category":"films","year":"2019","tag":[]},{"id":"f00002","title":"Ціна правди","youtubeKeys":["at21Noa_9kE","VjlSDlqWiFw"],"category":"films","year":"2019","tag":[]},{"id":"f00003","title":"Віддана","youtubeKeys":["WZvWQWM-tdE"],"category":"films","year":"2020","tag":[]},{"id":"f00004","title":"Чорний Ворон","youtubeKeys":["aVh1VAqga2g"],"category":"films","year":"2019","tag":[]},{"id":"f00005","title":"Пульс","youtubeKeys":["wOig9fG6vlI"],"category":"films","year":"2021","tag":[]},{"id":"f00006","title":"Незламна","youtubeKeys":["BKwLVm5RUg0"],"category":"films","year":"2015","tag":[]}],"serials":[{"id":"s00001","title":"Чорнобиль (HBO)","youtubeKeys":["s9APLXM9Ei8"],"category":"serials","year":"2019","tag":[]},{"id":"s00002","title":"Кріпосна","youtubeKeys":["OOx-FbkKFgU"],"category":"serials","year":"2019","tag":[]},{"id":"s00003","title":"Слов\'яни","youtubeKeys":["1ww3CaRR--A"],"category":"serials","year":"2021","tag":[]},{"id":"s00004","title":"Козаки. Абсолютно брехлива історія","youtubeKeys":["0ReVqVGGT-4"],"category":"serials","year":"2020","tag":[]},{"id":"s00005","title":"Нюхач 4","youtubeKeys":["WDduvLu3j2E"],"category":"serials","year":"2019","tag":[]},{"id":"s00006","title":"Le Bureau des Légendes (Франція)","youtubeKeys":["Ky3U8S8GNAM"],"category":"serials","year":"2020","tag":[]}],"clips":[{"id":"c00001","title":"Paolo Nutini - Iron Sky","youtubeKeys":["WoCSeIY0xdo"],"category":"clips","year":"2014","tag":[]},{"id":"c00002","title":"twenty one pilots - Nico And The Niners","youtubeKeys":["hMAPyGoqQVw"],"category":"clips","year":"2018","tag":[]},{"id":"c00003","title":"MØ - Kamikaze","youtubeKeys":["eVD9j36Ke94"],"category":"clips","year":"2015","tag":[]},{"id":"c00004","title":"DANTES - ГРУСТНЫЕ ТАНЦЫ","youtubeKeys":["vwAg1gLJikI"],"category":"clips","year":"2021","tag":[]},{"id":"c00005","title":"Океан Ельзи - Не твоя війна","youtubeKeys":["eOtEC4wCA40"],"category":"clips","year":"2015","tag":[]},{"id":"c00006","title":"DJ Shadow - Rocket Fuel ft. De La Soul","youtubeKeys":["8XK7nzAW_b0"],"category":"clips","year":"2019","tag":[]}],"adv":[{"id":"a00001","title":"Samsung \'The Marketplace\'","youtubeKeys":["XB1LYchC8uY"],"category":"adv","year":"aaaaa","tag":[]},{"id":"a00002","title":"Ladbrokes \'Balloon\'","youtubeKeys":["-qBCO9c6mSM"],"category":"adv","year":"aaaaa","tag":[]},{"id":"a00003","title":"Formula E \'No Turning Back\'","youtubeKeys":["TgDmx2Sh5fk"],"category":"adv","year":"aaaaa","tag":[]},{"id":"a00004","title":"OnePlus \'Nord 2 5G\'","youtubeKeys":["xigsoT3SW30"],"category":"adv","year":"aaaaa","tag":[]},{"id":"a00005","title":"Samsung Galaxy Book \'Welcome to the Museum of Laptops\'","youtubeKeys":["aasCzlwQJe3JYaaa"],"category":"adv","year":"aaaaa","tag":[]},{"id":"a00006","title":"Instacart \'Your Mom\'s Short Ribs\'","youtubeKeys":["6-HSVExLyy8"],"category":"adv","year":"aaaaa","tag":[]}]}');const c=(o=i("9nYnP")).default.modal.parentElement;function n(e){e.currentTarget===e.target&&u()}function d(e){c.classList.contains("isHidden")||"Escape"===e.code&&u()}function u(){c.classList.add("isHidden"),o.default.body.classList.remove("modalIsOpen"),o.default.modal.innerHTML="",c.removeEventListener("click",n),window.removeEventListener("keydown",d)}var y=i("adAgQ");const g=Object.values(e(r)).flat(),f=(p=function(e){const{category:t,title:a,id:s}=e;let i=0;switch(t){case"films":i="Фільм";break;case"serials":i="Серіал";break;case"clips":i="Кліп";break;case"adv":i="Реклама";break;default:i="Проект"}return`\n    <li class="projects__item" data-filter=${t}>\n        <img\n          class="projects__img-cover js-coverPlay"\n          src="./images/projects/cover/${t}/${a}.webp"\n          alt=${a}\n          width="320"\n          height="280"\n        />\n        <svg class="projects__play-svg" width="60" height="60">\n          <use href="./images/icons/icons.svg#youtube-2"></use>\n        </svg>\n        <p class="project__title">${a}</p>\n        <p class="project__category">${i}</p>\n        <button type="button" class="project__details-btn" data-id=${s}></button>\n    </li>\n  `},g.map((e=>p(e))).join(""));var p;o.default.projectList.insertAdjacentHTML("beforeend",f),o.default.projectList.addEventListener("click",(function(e){if(!e.target.classList.contains("project__details-btn"))return;(0,y.showLoader)();const t=e.target.dataset.id,a=l(g.find((e=>e.id===t)));o.default.modal.innerHTML=a,c.classList.remove("isHidden"),o.default.body.classList.add("modalIsOpen"),c.addEventListener("click",n),window.addEventListener("keydown",d),(0,y.hideLoader)()}));const m={projectsFilterList:document.querySelector(".projects__filter-list"),projectsFilterBtn:document.querySelectorAll(".projects__filter-btn"),projectsItems:document.querySelectorAll(".projects__item")};window.addEventListener("load",(function(){let e="all";for(const t of m.projectsFilterBtn)t.classList.contains("current")&&(e=t.dataset.filter);for(const t of m.projectsItems)t.dataset.filter===e&&t.classList.remove("hide")})),m.projectsFilterList.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;(function(e){const t=document.querySelector(".projects__filter-btn.current");t&&(t.classList.remove("current"),t.parentElement.classList.remove("current"));e.target.classList.add("current"),e.target.parentElement.classList.add("current")})(e),function(e){const t=e.target.dataset.filter;for(const e of m.projectsItems)"all"===t?(e.classList.remove("hide"),setTimeout((()=>{e.classList.remove("opacity")}),500)):t!==e.dataset.filter?(e.classList.add("opacity"),setTimeout((()=>{e.classList.add("hide")}),500)):(e.classList.remove("hide"),setTimeout((()=>{e.classList.remove("opacity")}),500))}(e)}));
//# sourceMappingURL=projects.b6635078.js.map
