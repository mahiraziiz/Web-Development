console.log("Getting started with Events");

// document.getElementById("flower").onclick = function () {
//   alert("flower clicked");
// };

// document.getElementById("flower").addEventListener("click", function (e) {
//   alert("flower clicked again");
// });

// document.getElementById("images").addEventListener(
//   "click",
//   function (e) {
//     console.log("Clicked Inside the UL");
//   },
//   false
// );
// document.getElementById("flower").addEventListener(
//   "click",
//   function (e) {
//     console.log("Flower clicked");
//     e.stopPropagation();
//   },
//   false
// );
// document.getElementById("google").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Google clicked");
//   },
//   false
// );

document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e);
    console.log(e.target.id);
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      let removeIt = e.target.parentNode;
      removeIt.remove();
    }
    // console.log(e.target.parentNode);
    // let removeIt = e.target.parentNode;
    // // removeIt.remove();
    // removeIt.parentNode.removeChild(removeIt)
  },
  false
);
// ++++++++ NOTES ++++++++++++
//attachEvent
//jQuery - on
//types, timestamp, defaultPrevented
// target, toElement, srcElement, currentElement
//clientX, clientY, screenX, screenY
//altKey, ctrlKey, shiftKey, keyCode
