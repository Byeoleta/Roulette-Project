function Roulette(el, config) {
  this.el = el;
  this.config = config;
  this.config.win = config.win - 1;
  this.start = this.config.start || "top";
  this.defaultRotation = this.config.rotate * 360 || 9 * 360;
  this.rotateDuration = this.config.duration || "3000";

  // element 초기값 설정
  this.roulette = $(this.el);
  this.button = this.config.button
    ? $(this.config.button.el)
    : this.roulette.children("#roulette-button");
  this.roulettePointer = this.roulette.children(".roulette-pointer");
  this.rouletteBox = this.roulette.children(".roulette-image");
  this.rouletteImage = this.rouletteBox.children("#roulette-image");
  this.startDeg = 0;

  // 룰렛 세팅
  this.init = function () {
    this.setRoulette();
    this.setStartPoint();
    this.setButton();
  };

  // 룰렛 이미지 변경
  this.setRoulette = function () {
    this.rouletteImage.attr(
      "src",
      "./assets/bg_circle" + this.config.rouletteSize + ".png"
    );
  };

  // 화살표 지점 세팅 start 지점
  this.setStartPoint = function () {
    var angle = 90;
    var startPoint = 0;
    switch (this.start) {
      case "top":
        startPoint = 0;
        break;
      case "right":
        startPoint = 1;
        break;
      case "bottom":
        startPoint = 2;
        break;
      case "left":
        startPoint = 3;
        break;
    }

    this.startDeg = angle * startPoint;

    this.rouletteImage.css("rotate", angle * startPoint + "deg");
    this.roulettePointer.addClass(this.start);
  };

  // 룰레스 어디서 멈출래
  this.getRouletteRotate = function () {
    /** 360도를 룰렛 칸수로 나눔 */
    var arc = 360 / this.config.rouletteSize;

    return arc * this.config.win + this.randomRotate(arc);
  };

  // 랜덤위치에 서라서라
  this.randomRotate = function (arc) {
    /** 룰렛 칸  가운데 기준 반으로 나눈 뒤  랜덤 위치(+ 하면 왼쪽 랜덤, - 하면 오른쪽 랜덤) */
    var randomPlace = Math.floor(Math.random() * (arc / 2));
    var fiftyPercent = Math.random() < 0.5;

    return fiftyPercent ? randomPlace : -randomPlace;
  };

  // 룰렛 돌려돌려
  this.rotateRoulette = function (rotate) {
    this.rouletteImage.animate(
      { rotate: this.defaultRotation - rotate + "deg" },
      this.rotateDuration
    );
  };

  // 룰렛 멈춘뒤 알러트 발생
  this.alertRoulette = function () {
    var selectedData = config.win + 1;
    setTimeout(() => {
      alert(
        `축하합니다 :D 총 ${this.config.rouletteSize}칸 중 ${selectedData}번째 칸에 당첨되었습니다.`
      ),
        1000;
    }, 3500);
  };

  // 룰렛 멈춘 뒤 버튼 텍스트 변경
  this.changeText = function () {
    this.button.html() == "START 🍭( '-' 🍭 )"
      ? this.button.html("( ✋˙࿁˙ ) STOP!")
      : this.button.html("START 🍭( '-' 🍭 )");
  };

  // 버튼 클릭할 때 실행
  this.setButton = function () {
    var thisIs = this;
    this.button.click(function () {
      thisIs.rotateRoulette(thisIs.getRouletteRotate() - thisIs.startDeg);
      thisIs.changeText();
      thisIs.alertRoulette();
    });
  };

  this.init();
}
