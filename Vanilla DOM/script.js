document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });

  // adding SF places as list items

  const processInput = (e) => {
    e.preventDefault();
    let input = document.getElementById("favorite-input");
    let ul = document.getElementById("sf-places");
    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  };

  let form = document.querySelector("#favorite-places");
  form.addEventListener("submit", processInput);


  // adding new photos
  const togglePhotoForm = () => {
    let div = document.getElementById("photo-form-container");
    div.classList.toggle("hidden");
  };

  let photoButton = document.getElementById("photo-show-button");

  photoButton.addEventListener("click", togglePhotoForm);

  const addPhoto = (e) => {
    e.preventDefault();
    let urlInput = document.getElementsByClassName("photo-url-input")[0];
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = urlInput.value;
    li.appendChild(img);
    document.getElementsByClassName("dog-photos")[0].appendChild(li);
    urlInput.value = "";
  };

  let photoForm = document.getElementById("photo-submit");
  photoForm.addEventListener("submit", addPhoto)

});
