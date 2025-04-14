"use strict";
let ROLL = document.getElementById("ROLL");
let result = document.getElementById("result");
let game = document.getElementById("hari");
let tap = new Audio("tap.wav");
let finished = new Audio("completed.wav");
let gifts = [
  "toy car ",
  "toy bike ",
  "try next time",
  "100rs",
  "500rs",
  "10rs",
  "chocalate",
  "center fresh",
  "goli soda",
  "0rs",
];
ROLL.addEventListener("click", function () {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
    document.getElementById(i).classList.remove("winningbox");
  }
  result.textContent = `please wait......`;
  let secondscount = 0;
  let intervalid = setInterval(() => {
    tap.currentTime = 0;
    tap.play();
    secondscount = secondscount + 1;
    let random1 = Math.random() * 10;
    let randomnum = Math.floor(random1) + 1;
    console.log(randomnum);
    for (let i = 1; i <= 10; i++) {
      if (randomnum === i) {
        document.getElementById(i).classList.add("highlighted");
      } else {
        document.getElementById(i).classList.remove("highlighted");
      }
    }

    if (secondscount == 5) {
      let random = Math.random() * 10;
      let nodecimals = Math.floor(random) + 1;
      let gift = gifts[nodecimals - 1];
      if (gift != "try next time") {
        console.log(gift);
        result.textContent = `You won "${gift.toUpperCase()}"`;
      } else {
        result.textContent = `${gift.toUpperCase()}`;
      }
      document.getElementById(randomnum).classList.remove("highlighted");
      document.getElementById(nodecimals).classList.add("winningbox");
      tap.pause();
      finished.currentTime = 0;
      finished.play();
      clearInterval(intervalid);
    }
  }, 1000);
});
gifts.forEach(function (value, i) {
  let boxelement = `<div class="box" id=${i + 1}>${value.toUpperCase()}</div>`;
  game.insertAdjacentHTML("beforeend", boxelement);
});
