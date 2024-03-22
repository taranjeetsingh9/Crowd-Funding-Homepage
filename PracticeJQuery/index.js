// // $(document).ready(function () {
// //   $("#cross").click(function () {
// //     $(".knowMe").show();
// //     $(".hello").hide();
// //   });
// // });

// // $(document).ready(function () {
// //   $(".knowMe").click(function () {
// //     $(".hello").show();
// //     $(".knowMe").hide();
// //   });

//   // hover effect

// //   $(".best").hover(
// //     function () {
// //       alert("Mouse entered in a paragraph");
// //     },
// //     function () {
// //       alert("Bye you leave p tag");
// //     }
//   );

//   // form blur and focus event

//   $("input[type='text']").focus(function () {
//     $(this).css("background-color", "aqua");
//   });

//   $("input[type='password']").focus(function () {
//     $(this).css("background-color", "red");
//   });

//   // use "on" for adding one or more events
//   $("input").on({
//     hover: function () {
//       alert("please enter values carefully");
//     },
//     focus: function () {
//       $("input").css("color", "white");
//     },
//     focus: function () {
//       $("input[type='submit'").css("color", "white");
//       $("input[type='submit'").css("background-color", "green");
//     },
//   });

//   // need to practice on event one more time as it is not clear
//   $("p").on({
//     mouseenter: function () {
//       $(this).css("background-color", "black");
//       $(this).css("color", "white");
//     },
//     mouseleave: function () {
//       $(this).css("background-color", "white");
//       $(this).css("color", "black");
//     },
//   });
//     // hover not working in "on" as it is not event

//   // end of document ready
// });

// practice JQuery Effects

$(document).ready(function () {
  //   $(".heading").click(function () {
  //     $(this).hide(4000);
  //     $(this).show(2000);
  //   });

  //   $("button").click(function () {
  //     $(".para").toggle();
  //     $(".target").css("font-size", "36px");
  //     $(".target").css("color", "red");
  //     $(".heading").animate(
  //       { fontSize: "120px", opacity: "0.1" },
  //       5000,
  //       "linear",
  //       function () {
  //         alert("Animation Complete");
  //       }
  //     );
  //   });

  // how to show the text inside html tags
  //   $("button").click(function () {
  //     alert("Text in para: " + $(".para").text());
  //   });
  $(".showPassword").click(function () {
    let pass = $(".password");
    pass.attr("type", pass.attr("type") === "password" ? "text" : "password");
  });

  $(".change").click(function () {
    $(".para").text(function (i, origText) {
      let origTextarr = [];
      origTextarr[i];
      console.log(origText);
      return " old text is" + origText + " new: Hello World";
    });
  });

  $(".change").click(function () {
    $(".heading").load("demo.txt");
  });
});
