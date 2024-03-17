let bookmarkButton = document.querySelector(".bookmark-button");

// bookmark effect
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark-activated");
});

let backProject = document.querySelector(".back-project-button");
let backProjectinfo = document.querySelector(".back-this-project");
let closeProjectinfo = document.querySelector(".close-project-info");

// add opening effect when button clicked

// improve this code by adding class then add toggle effect on that class

backProject.addEventListener("click", () => {
  backProjectinfo.style.visibility = "visible";
});

closeProjectinfo.addEventListener("click", () => {
  backProjectinfo.style.visibility = "hidden";
});
