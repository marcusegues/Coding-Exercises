document.addEventListener("DOMContentLoaded", () => {
  let elements = document.querySelectorAll(".sidebar-nav li");
  elements.forEach((el) => el.addEventListener("click", () => {
    let location = el.innerText.toLowerCase();
    debugger;
    window.location.hash = location;
  }));
});
