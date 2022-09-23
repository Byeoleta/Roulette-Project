let changeBg = document.getElementById("changeBg");
let bgImg = document.getElementById("bgImg");
/** 룰렛 이미지 바뀌는 함수 */
function changeBackground() {
  let index = changeBg.selectedIndex;
  bgImg.src = changeBg.options[index].value;
  console.log(changeBg.selectedIndex);
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
  /** 랜덤한 위치에서 멈추는 함수 */
  let totalNum = Math.random() * defaultNum + defaultNum;
  /** 마지막 룰렛에서 멈추는 함수 */
  let lastNum = arc + defaultNum;

  let index = changeBg.selectedIndex;
  let orderDefault = index + 2;

  /** 1번째 칸 당첨 */
  let Num1 = defaultNum + arc * orderDefault;
  /** 2번째 칸 당첨 */
  let Num2 = defaultNum + arc * (orderDefault - 1);
  /** 3번째 칸 당첨 */
  let Num3 = defaultNum + arc * (orderDefault - 2);
  /** 4번째 칸 당첨 */
  let Num4 = defaultNum + arc * (orderDefault - 3);
  /** 5번째 칸 당첨 */
  let Num5 = defaultNum + arc * (orderDefault - 4);
  /** 6번째 칸 당첨 */
  let Num6 = defaultNum + arc * (orderDefault - 5);

  // rotateImage.style.transform = "rotate(" + lastNum + "deg)";
  rotateImage.style.transform = "rotate(" + Num3 + "deg)";
  // rotateImage.style.transform = "rotate(2900deg)";
  rotateImage.style.transition = "transform 1s";
}

/** 룰렛 실행하는 함수 */
function final() {
  rotateRoulette();
  //   alert("test");
  setTimeout(() => {
    alert("💜당첨되셨습니다💜"), 1000;
  }, 1500);
}

document.getElementById("roulette-button").onclick = final;
