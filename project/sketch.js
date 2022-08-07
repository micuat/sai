var s = function (p) {
  let h = 600;
  let w = 600;

  p.setup = function () {
    p.createCanvas(w, h);
    p.frameRate(60);
  }

  p.draw = function () {
    let t = p.millis() * 0.001;

    lastT = t;

    p.circle(p.mouseX, p.mouseY, 10);
  }

  let lastT = 0;
};

var p = new p5(s);
