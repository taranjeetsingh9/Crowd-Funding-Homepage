let bookmarkButton = document.querySelector(".bookmark-button");

// bookmark effect
bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmark-activated");
});

let backProject = document.querySelector(".back-project-button");
let backProjectinfo = document.querySelector(".back-this-project");
let closeProjectinfo = document.querySelector(".close-project-info");

backProject.addEventListener("click", () => {
  backProjectinfo.style.visibility = "visible";
});

closeProjectinfo.addEventListener("click", () => {
  backProjectinfo.style.visibility = "hidden";
});

// plan to hide rewards entrance amount until it get selected

$(".back-project-button").click(function () {
  $(".main , aside, .navbar-default").addClass("blur");
  $(".back-this-project").addClass("fullOpacity");
});

$(closeProjectinfo).click(function () {
  $(".main , aside , .navbar-default").removeClass("blur");
});

// showing input for entering pledge amount

// $(".rewardsPledge").change(function () {
//   let isChecked = $(this).is(":checked");

//   if (isChecked) {
//     console.log("changed event if  triggered");
//     $(this)
//       .closest(".rewards")
//       .find(".beforeSelect")
//       .removeClass("beforeSelect");
//   } else {
//     // never occurred
//     console.log("changed event else statment triggered");
//     $(this).closest(".rewards").find(".beforeSelect").addClass("beforeSelect");
//   }
// });

// try to do with javaScript as jquery
