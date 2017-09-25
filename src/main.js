'use strict';

/*global document*/

// DATA
const timelineData = require('./data/timelinedata.js');

const timelineModule = require('./modules/timeline.js');
// SETTINGS
const selectors = require('./selectors')(document);

timelineModule.init(selectors, timelineData);
