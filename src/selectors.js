'use strict';

module.exports = function(document) {
	return {
    timeline: document.querySelector('#timeline'),
    textContainer: document.querySelector('#text-container'),
    airstrip: document.querySelector('#airstrip'),
    scene: document.querySelector('#a-scene'),
    skybox: document.querySelector('#skybox'),
    camera: document.querySelector('#camera')
	};
};
