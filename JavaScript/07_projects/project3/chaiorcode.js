const clock = document.getElementById("clock");
// document.querySelector('#clock');

setInterval(function () {
  const date = new Date();
  //   console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
  // clock.innerHTML = date.toLocaleDateString();
}, 1000);
