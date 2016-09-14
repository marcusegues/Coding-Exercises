import Router from './router.js';

document.addEventListener("DOMContentLoaded", () => {
  let elements = document.querySelectorAll(".sidebar-nav li");
  elements.forEach((el) => el.addEventListener("click", () => {
    let location = el.innerText.toLowerCase();
    window.location.hash = location;
  }));

  let contentNode = document.querySelector('.content');
  let router = new Router(contentNode);
  router.start();
});
