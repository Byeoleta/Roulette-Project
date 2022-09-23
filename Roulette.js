let changeBg = document.getElementById("changeBg");
let bgImg = document.getElementById("bgImg");
/** 룰렛 이미지 바뀌는 함수 */
function changeBackground() {
  let index = changeBg.selectedIndex;
  bgImg.src = changeBg.options[index].value;
}

changeBackground();
changeBg.onchange = changeBackground;

/** 룰렛 돌려주는 함수 */
function rotateRoulette() {
  let rotateImage = document.getElementById("bgImg");
  /** 룰렛 칸수(컨텐츠 개수) */
  let rouletteSize = changeBg.selectedIndex + 2;
  let arc = 360 / rouletteSize;
  /** 기본으로 돌아가는 바퀴수 */
  let defaultNum = 360 * 8;
  let ran = Math.floor(Math.random() * rouletteSize);
  let totalNum = Math.random() * defaultNum + defaultNum;

  rotateImage.style.transform = "rotate(" + totalNum + "deg)";
  rotateImage.style.transition = "transform 1s";
}

/** 룰렛 실행하는 함수 */
function final() {
  rotateRoulette();
  //   alert("test");
  setTimeout(() => {
    alert("축하"), 1000;
  }, 1500);
}

document.getElementById("roulette-button").onclick = final;
