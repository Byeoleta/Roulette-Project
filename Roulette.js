let changeBg = document.getElementById("changeBg");
let bgImg = document.getElementById("bgImg");

function changeBackground() {
  let index = changeBg.selectedIndex;
  bgImg.src = changeBg.options[index].value;
  //   console.log(changeBg.selectedIndex);
  //   let rouletteSize = changeBg.selectedIndex + 2;
  //   console.log(rouletteSize);
}

changeBackground();
changeBg.onchange = changeBackground;

function rotateDefault(plus) {
  //   const ran = Math.floor(Math.random() * rouletteSize);
  //   const rotate = ran * arc + 3240 + arc * 3;

  let rotateImage = document.getElementById("bgImg");
  rotateImage.style.transition = "transform 1s";
  rotateImage.style.transform = "rotate(8turn)";
}

function rotateDiverse() {
  let rouletteSize = changeBg.selectedIndex + 2;
  let arc = 360 / rouletteSize;
  rotateDefault();
  let image = document.getElementById("bgImg");
  image.style.transform = "rotate(90deg)";
}

function final() {
  //   rotateDefault();
  rotateDiverse();
  //   alert("test");
}

// document.getElementById("roulette-button").onclick = rotateDefault;
document.getElementById("roulette-button").onclick = final;
// document.getElementById("roulette-button").onclick = rotateDiverse;

// function rotateImg() {
//   document.getElementById("bgImg").getElementsByClassName.transform =
//     "rotate(90deg)";
// }

// function startBtn() {
//   document.getElementsById("bgImg").style.animation = "";
//   var randomRotate = Math.random() * 3000 + 1000;
//   var randomAnimation = Math.random() * 7000 + 2000;

//   document
//     .getElementById("bgImg")
//     .animate(
//       [
//         { transform: "rotate(0deg)" },
//         { transform: "rotate(" + randomRotate + "deg)" },
//       ],
//       { fill: "forwards", duration: randomAnimation, easing: "ease-in-out" }
//     );
// }
