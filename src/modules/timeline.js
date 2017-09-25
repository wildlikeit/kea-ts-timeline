'use strict';

const helpers = require('./helpers');

module.exports = {
  init,
}

function init(selectors, timelineData){
  // Init camera
  let camPos = '0 -1.5 4';
  selectors.camera.setAttribute('position', camPos);

  // Init timeline
  let timelinePos = -((timelineData.length/2) - 1/2) + ' 0 0';
  selectors.timeline.setAttribute('position', timelinePos);

  // Init airstrip
  let airstripWidth = timelineData.length;
  let airstrip = helpers.createElement('a-box', {
		'id': 'airstrip',
		'width': airstripWidth,
		'height': '0.2',
		'depth': '2',
		'color': 'red',
		'position': ((airstripWidth/2) + ' -1 1'),
	});

  selectors.timeline.appendChild(airstrip);

  // Init text
  for (var i = 0; i < timelineData.length; i++) {
    let textBox = helpers.createElement('a-plane', {
      'width': '0.75',
      'height': '0.2',
  		'depth': '0',
  		'position': i + ' 0 0',
      'cursor-listener': '',
    });

    let pos = '0 0.5 0';
    let text = helpers.createElement('a-text', {
      'value': timelineData[i].year,
      'align': 'center',
      'position': pos,
    })

    // Check if index is 0, if it is make bigger
    if (i == 0) {
      text.setAttribute('width', 10);
      text.setAttribute('opacity', 1);

      textBox.setAttribute('opacity', 1);
      textBox.dataset.active = true;
    } else {
      text.setAttribute('width', 3);
      text.setAttribute('opacity', 0.75);

      textBox.setAttribute('opacity', 0.75);
      textBox.dataset.active = false;
    }


    textBox.appendChild(text);
    selectors.textContainer.appendChild(textBox);
  }
}



let currentActive = document.querySelector('[data-active="true"]');

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    let currentActive = document.querySelector('[data-active="true"]');
    let animateOut = document.createElement('a-animation');
    animateOut.setAttribute('attribute', 'opacity');
    animateOut.setAttribute('from', '1');
    animateOut.setAttribute('to', '0.75');
    animateOut.setAttribute('fill', 'forwards');
    animateOut.setAttribute('dur', '1000');

    this.el.addEventListener('click', function (evt) {
      currentActive.dataset.active = false;
      this.dataset.active = true;

      this.setAttribute('opacity', '1');
      currentActive.appendChild(animateOut);
    });
    this.el.addEventListener('mouseenter', function (e){
      this.setAttribute('opacity', '1');
    });
    this.el.addEventListener('mouseleave', function (e){
        this.setAttribute('opacity', '0.75');
    });
  },
});
