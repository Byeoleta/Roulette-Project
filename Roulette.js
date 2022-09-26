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
  let defaultRotation = 360 * 9;
  /** 랜덤한 위치에서 멈추는 함수 */
  let randomRotate = Math.random() * defaultRotation + defaultRotation;

  let index = changeBg.selectedIndex;
  let orderDefault = index + 2;

  // 0 ~ 90 사이 난수 만들기 테스트용
  let ff = Math.floor(Math.random() * 90);
  // 마이너스 0 ~ 90 사이 난수 만들기
  let ff2 = Math.floor(Math.random() * -90);

  /** 룰렛 칸  가운데 기준 반으로 나눈 뒤  랜덤 위치(+ 하면 왼쪽 랜덤, - 하면 오른쪽 랜덤   ) */
  let randomPlace = Math.floor(Math.random() * (arc / 2));

  /** 1번째 칸 당첨 */
  let Num1 = defaultRotation + arc * orderDefault + randomPlace;
  let Num11 = defaultRotation + arc * orderDefault - randomPlace;
  /** 2번째 칸 당첨 */
  let Num2 = defaultRotation + arc * (orderDefault - 1) + randomPlace;
  /** 3번째 칸 당첨 */
  let Num3 = defaultRotation + arc * (orderDefault - 2) + randomPlace;
  /** 4번째 칸 당첨 */
  let Num4 = defaultRotation + arc * (orderDefault - 3) + randomPlace;
  /** 5번째 칸 당첨 */
  let Num5 = defaultRotation + arc * (orderDefault - 4) + randomPlace;
  /** 6번째 칸 당첨 */
  let Num6 = defaultRotation + arc * (orderDefault - 5) + randomPlace;

  /** 50% 반반 확률 만들기 */
  function half() {
    if (Math.random() < 0.5) {
      defaultRotation + arc * (orderDefault - 1) + randomPlace;
      console.log("test");
    } else {
      defaultRotation + arc * (orderDefault - 1) - randomPlace;
      console.log("test!!");
    }
  }

  // rotateImage.style.transform = "rotate(" + Num1 + "deg)";
  rotateImage.style.transform = "rotate(" + half + "deg)";
  rotateImage.style.transition = "transform 1s";
}

/** 룰렛 실행하는 함수 */
function clickRoulette() {
  rotateRoulette();

  const rouletteBtn = document.getElementById("roulette-button");
  rouletteBtn.innerText = "🌝STOP🌝";

  let testData = changeBg.selectedIndex + 2;
  let winNum = 1;
  setTimeout(() => {
    // 이런 식으로 값 구해서 아래에 넣어주기
    alert(`두근두근 ${testData}칸 중  ${winNum}에 당첨되었습니다.`), 1000;
  }, 1500);
  // 새로고침할 필요 없게 하려고 넣어놓음
  setTimeout(() => {
    location.reload(), 2000;
  }, 2000);
}

document.getElementById("roulette-button").onclick = clickRoulette;
