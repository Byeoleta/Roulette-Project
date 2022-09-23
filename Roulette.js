let changeBg = document.getElementById("changeBg");
let bgImg = document.getElementById("bgImg");

function changeBackground() {
  let index = changeBg.selectedIndex;
  bgImg.src = changeBg.options[index].value;
}

changeBackground();
changeBg.onchange = changeBackground;

function rotateRoulette() {
  let rotateImage = document.getElementById("bgImg");
  let rouletteSize = changeBg.selectedIndex + 2;
  let arc = 360 / rouletteSize;
  let defaultNum = 360 * 8;
  let ran = Math.floor(Math.random() * rouletteSize);
  let totalNum = arc * ran + defaultNum;

  rotateImage.style.transform = "rotate(" + totalNum + "deg)";
  rotateImage.style.transition = "transform 1s";
}

function final() {
  rotateRoulette();
  //   alert("test");
  setTimeout(() => {
    alert("축하"), 1000;
  }, 1500);
}

document.getElementById("roulette-button").onclick = final;
