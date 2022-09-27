function Roulette(el, config) {
  this.el = el;
  this.config = config;
  this.config.win = config.win - 1;

  //element 초기값 설정
  this.button = null;
  this.roulette = $(this.el);
  this.rouletteBox = this.roulette.children(".roulette-container");
  this.rouletteCircle = this.rouletteBox.children(".circle");

  this.defaultRotate = 10 * 360;
  this.rotateDuration = 4000;

  //룰렛 셋팅
  this.init = function () {
    this.setRoulette();
    this.config.button !== undefined && this.setButton();
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
    this.button = $(this.config.button.el);
    this.button.on("click", function () {
      _self.rotateRoulette(_self.getRouletteRotate());
    });
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
