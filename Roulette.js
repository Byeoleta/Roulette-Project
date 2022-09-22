let changeBg = document.getElementById("changeBg");
let bgImg = document.getElementById("bgImg");

function changeBackground() {
  let index = changeBg.selectedIndex;
  bgImg.src = changeBg.options[index].value;
}

changeBackground();
changeBg.onchange = changeBackground;

function rotateDefault() {
  let rotateImage = document.getElementById("bgImg");
  rotateImage.style.transition = "transform 1s";

  let rouletteSize = changeBg.selectedIndex + 2;
  let arc = 360 / rouletteSize;
  let defaultNum = 360 * 8;
  let totalNum = defaultNum + arc;
  rotateImage.style.transform = "rotate(" + totalNum + "deg)";
}

function final() {
  rotateDefault();
  //   alert("test");
}

document.getElementById("roulette-button").onclick = final;
