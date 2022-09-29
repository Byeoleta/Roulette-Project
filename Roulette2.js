function Roulette(el, config) {
  this.el = el;
  this.config = config;
  this.config.win = config.win - 1;
  this.start = this.config.start || "top";
  this.defaultRotate = this.config.rotate * 360 || 10 * 360;
  this.rotateDuration = this.config.duration || "3000";

  //element 초기값 설정
  this.roulette = $(this.el);
  this.button = this.config.button
    ? $(this.config.button.el)
    : this.roulette.children(".roulette-button");
  this.rouletteArrow = this.roulette.children(".arrow");
  this.rouletteBox = this.roulette.children(".roulette-container");
  this.rouletteCircle = this.rouletteBox.children(".circle");
  this.startDeg = 0;

  //룰렛 셋팅
  this.init = function () {
    this.setRoulette();
    this.setStartRoulette();
    this.setButton();
  };

  // 룰렛 설정
  this.setRoulette = function () {
    this.rouletteCircle.attr(
      "src",
      "./assets/bg_circle" + this.config.space + ".png"
    );
  };

  // 버튼 설정
  this.setButton = function () {
    var _self = this;
    this.button.click(function () {
      _self.rotateRoulette(_self.getRouletteRotate() - _self.startDeg);
    });
  };

  //start 지점 셋팅
  this.setStartRoulette = function () {
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

    this.rouletteCircle.css("rotate", angle * startPoint + "deg");
    this.rouletteArrow.addClass(this.start);
  };

  //룰렛 돌리기
  this.rotateRoulette = function (rotate) {
    this.rouletteCircle
      .stop()
      .animate(
        { rotate: this.defaultRotate - rotate + "deg" },
        this.rotateDuration,
        "swing"
      );
  };

  //룰렛 계산식
  this.getRouletteRotate = function () {
    var angle = 360 / this.config.space;
    return angle * this.config.win + this.getRouletteAngle(angle);
  };

  //룰렛 위치 랜덤 호출 (좌, 우)
  this.getRouletteAngle = function (angle) {
    var angleNum = Math.floor((Math.random() * angle) / 2);
    var random = Math.floor(Math.random() * 2);

    return random ? angleNum : -angleNum;
  };

  this.init();
}
