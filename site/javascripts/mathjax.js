window.MathJax = {
  tex: {
    inlineMath: [["$", "$"]],
    displayMath: [["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    processHtmlClass: "arithmatex|jp-RenderedText"
  }
};

document.addEventListener("DOMContentLoaded", function() {
  if (typeof MathJax !== "undefined") {
    MathJax.typesetPromise();
  }
});

if (typeof app !== "undefined") {
  app.document$.subscribe(function() {
    if (typeof MathJax !== "undefined") {
      MathJax.typesetPromise();
    }
  });
}
// /* 🔧 FIX: typeset math when a flashcard (<details>) is opened */
// document.addEventListener("toggle", function (event) {
//   if (event.target.tagName === "DETAILS") {
//     if (window.MathJax) {
//       MathJax.typesetPromise([event.target]);
//     }
//   }
// });
