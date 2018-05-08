import * as PIXI from 'pixi.js'

//Aliases
let Application = PIXI.Application,
    // Container = PIXI.Container,
    loader = PIXI.loader,
    // resources = PIXI.loader.resources,
    // TextureCache = PIXI.utils.TextureCache,
    // Sprite = PIXI.Sprite,
    Text = PIXI.Text;

//Create a Pixi Application
let app = new Application({ 
    // width: window.innerWidth, 
    // height: window.innerHeight,   
    width: 512,
    height: 512,                    
    antialiasing: true, 
    transparent: false, 
    resolution: 1
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document

document.body.appendChild(app.view);

export let makeUsername = (name, id) => {
  let style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440
});

  let userName = new Text(`Username: ${name}`, style);
      userName.x = 30;
      userName.y = 90;

  let player = new Text(`Player ID: ${id}`, style);
  player.x = 30;
  player.y = 30;
      
  app.stage.addChild(userName);
  app.stage.addChild(player);

}
//Use Pixi's built-in `loader` module to load an image
loader
  // .on("progress", loadProgressHandler)
  .load(setup);

// function loadProgressHandler(loader, resource) {
//   console.log("loading: " + resource.url); 
//   console.log("progress: " + loader.progress + "%"); 
// }

function setup() {
  console.log("setup"); 
  // makeUsername('te');
  
}

