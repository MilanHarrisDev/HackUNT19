let type = "WebGL";
video.play();
let videoTexture = PIXI.Texture.from(video);

if(!PIXI.utils.isWebGLSupported()){
  type = "canvas"
}

PIXI.utils.sayHello(type)

let app = new PIXI.Application({width: window.innerWidth, height: window.innerHeight});
var videoSprite = new PIXI.Sprite(videoTexture);
videoSprite.anchor.set(0.5);

videoSprite.x = app.screen.width / 2;
videoSprite.y = app.screen.height / 2;

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);
