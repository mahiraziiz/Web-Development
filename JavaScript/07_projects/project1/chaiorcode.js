const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "black") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    // } else if (e.target.id === "green") {
    //   body.style.backgroundColor = e.target.id;
    // } else {
    //   body.style.backgroundColor = e.target.id;
    // }

    const color = e.target.id;
    switch (color) {
      case "white":
        body.style.backgroundColor = color;
        break;
      case "black":
        body.style.backgroundColor = color;
        break;
      case "yellow":
        body.style.backgroundColor = color;
        break;
      case "green":
        body.style.backgroundColor = color;
        break;
      case "purple":
        body.style.backgroundColor = color;
        break;
      default:
        console.log("Invalid color:", color);
    }
  });
});
