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
  /** 룰렛 칸수(컨텐츠 개수) */
  let rouletteSize = changeBg.selectedIndex + 2;
  /** 360도 룰렛 칸수로 나눔 */
  let arc = 360 / rouletteSize;
  /** 기본으로 돌아가는 바퀴수(곱하기 뒤 숫자 조절 가능, 최소 9바퀴 세팅) */
  let defaultRotation = 360 * 9;
  /** 룰렛 칸  가운데 기준 반으로 나눈 뒤  랜덤 위치(+ 하면 왼쪽 랜덤, - 하면 오른쪽 랜덤   ) */
  let randomPlace = Math.floor(Math.random() * (arc / 2));

  /** 🔥서버에서 보내줄 당첨 설정값🔥 */
  winningNum = 6;

  /** 설정값 기준 중심의 왼쪽 위치 중 랜덤 */
  let leftRandom =
    defaultRotation + arc * (rouletteSize - (winningNum - 1)) + randomPlace;
  /** 설정값 기준 중심의 오른쪽 위치 중 랜덤 */
  let rightRandom =
    defaultRotation + arc * (rouletteSize - (winningNum - 1)) - randomPlace;

  /** 설정값 받은 후, 설정값 칸 내 랜덤위치로 로테이트시키는 함수 */
  function rotation() {
    if (Math.random() < 0.5) {
      bgImg.style.transform = "rotate(" + leftRandom + "deg)";
    } else {
      bgImg.style.transform = "rotate(" + rightRandom + "deg)";
    }
  }
  rotation();
  bgImg.style.transition = "transform 1s";
}

/** START 버튼 클릭할시 동작하는 함수 */
function clickRoulette() {
  rotateRoulette();

  /** 동작시 버튼 내 텍스트 변경(start=>stop)되는 함수 */
  const rouletteBtn = document.getElementById("roulette-button");
  rouletteBtn.innerText = "🌝STOP🌝";

  let rouletteData = changeBg.selectedIndex + 2;
  let pickData = winningNum;
  setTimeout(() => {
    alert(
      `축하합니다 :)
${rouletteData}칸 중 ${pickData} 번째 칸에 당첨되었습니다.`
    ),
      1000;
  }, 1500);
  // 새로고침할 필요 없게 하려고 넣어놓음
  setTimeout(() => {
    location.reload(), 2000;
  }, 2000);
}

document.getElementById("roulette-button").onclick = clickRoulette;
