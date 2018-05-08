import * as PIXI from 'pixi.js'

//Aliases
let Application = PIXI.Application,
    Container = PIXI.Container,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Sprite = PIXI.Sprite;

//Create a Pixi Application
let app = new Application({ 
    width: window.innerWidth, 
    height: window.innerHeight,                       
    antialiasing: true, 
    transparent: false, 
    resolution: 1,
    position: "absolute",
    display: "block"
  }
);

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//Use Pixi's built-in `loader` module to load an image
loader
  .add([
    "images/cat.png",
    "images/blob.png",
    "images/explorer.png"
  ])
  .on("progress", loadProgressHandler)
  .load(setup);

function loadProgressHandler(loader, resource) {

  //Display the file `url` currently being loaded
  console.log("loading: " + resource.url); 

  //If you gave your files names with the `add` method, you can access
  //them like this
  //console.log("loading: " + resource.name);

  //Display the precentage of files currently loaded
  console.log("progress: " + loader.progress + "%"); 
}

function setup() {
  console.log("setup"); 

  //Create the sprites
  let cat = new Sprite(resources["images/cat.png"].texture),
      blob = new Sprite(resources["images/blob.png"].texture),
      explorer = new Sprite(resources["images/explorer.png"].texture);

  //Add the sprites to the stage
  app.stage.addChild(cat);
  app.stage.addChild(blob);
  app.stage.addChild(explorer);

  //Position the sprites
  blob.position.set(82, 82);
  explorer.position.set(128, 128);
  
}

