const worker = new Worker("worker.js");
const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", () => {
  worker.postMessage('start');
  // how to get data from the worker thread - onmessage
  worker.onmessage = function (event) {
    const sum = event.data;
    alert (`Sum of 1 to 10000000000 is ${sum}`);
  };
});

let colors = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];
// when click the button, change the background color of the body randomly
bgButton.addEventListener("click", () => {
  const colorIndex = parseInt(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[colorIndex];
});
