'use strict';

// OBJECTS

// STATIC PRIMITIVES
var staticPrimitives = {
  scene: document.querySelector('#a-scene'),
  skybox: document.querySelector('#skybox'),
  camera: document.querySelector('#camera')
}

// DYNAMIC PRIMITIVES
var dynamicPrimitives = {
  timeline: document.querySelector('#timeline')
};

// DATA
var timelineData = [
  {
    year: 1955,
    description: 'He said this one thing',
    objSrc: '#lampObj'
  },
  {
    year: 1985,
    description: 'He said this two thing',
    objSrc: '#lampObj'
  },
  {
    year: 2005,
    description: 'He said this three thing',
    objSrc: '#lampObj'
  }
];

// FUNCTIONS
function animateTimeline() {

}

// INITIALIZE CAMERA N STUFF
staticPrimitives.camera.setAttribute('position', (timelineData.length * 6.6667) + ' 0.5 4');
staticPrimitives.camera.setAttribute('rotation', '-5 0 0');

// Setting attributes of stuff
for (var i = 0; i < timelineData.length; i++) {

  // Elements
  var dataContainer = document.createElement('a-entity');
  var ground = document.createElement('a-box');
  var cylinder = document.createElement('a-cylinder');
  var text = document.createElement('a-text');
  var lamp = document.createElement('a-entity');

  // Animation creation
  var timelineAnimation = document.createElement('a-animation');

  // constants
  var posX = i * 2;
  var cylHeight = timelineData.length * 6.6667;

  // Attributes

  // Container
  dataContainer.setAttribute('id', timelineData[i].year);
  dataContainer.setAttribute('position', posX + '0 0');

  // Timeline animation
  timelineAnimation.setAttribute('attribute', 'position');
  timelineAnimation.setAttribute('dur', '5000');
  timelineAnimation.setAttribute('fill', 'forwards');
  timelineAnimation.setAttribute('ease', 'ease-cubic');
  timelineAnimation.setAttribute('to', cylHeight + ' 0 0');

  // Text
  text.setAttribute('value', timelineData[i].description);
  text.setAttribute('position', '0 1 0.8');
  text.setAttribute('color', 'white');
  text.setAttribute('align', 'center');

  // Ground
  // Attributes
  ground.setAttribute('height', '0.05');
  ground.setAttribute('width', '3');
  ground.setAttribute('depth', '1');
  ground.setAttribute('class', 'tl-ground');
  ground.setAttribute('color', '#ffffff');

  // Cylinder
  cylinder.setAttribute('rotation', '0 0 90');
  cylinder.setAttribute('height', cylHeight);
  cylinder.setAttribute('radius', '0.05');
  cylinder.setAttribute('color', '#777777');

  // Lamp
  lamp.setAttribute('scale', '0.0005 0.0005 0.0005');
  lamp.setAttribute('material', 'color: blue');
  lamp.setAttribute('obj-model', 'obj: ' + timelineData[i].objSrc);
  lamp.setAttribute('position', '-1 0 0');

  // Appending to container
  dataContainer.appendChild(ground);
  dataContainer.appendChild(cylinder);
  dataContainer.appendChild(text);
  dataContainer.appendChild(lamp);
  dynamicPrimitives.timeline.appendChild(dataContainer);
}
