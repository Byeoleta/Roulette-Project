let changeBg = document.getElementById("changeBg");
let bgImg = document.getElementById("bgImg");

function changeBackground() {
  let index = changeBg.selectedIndex;
  bgImg.src = changeBg.options[index].value;
}

changeBackground();
changeBg.onchange = changeBackground;
