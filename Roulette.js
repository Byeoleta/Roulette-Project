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

function rotateBackground() {
  let rouletteSize = changeBg.selectedIndex + 2;
  console.log(rouletteSize);
}

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
