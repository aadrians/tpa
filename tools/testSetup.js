/* eslint-disable no-var */
process.env.NODE_ENV = 'test';

require('babel-register')();

require.extensions['.css'] = function() {return null;};
require.extensions['.png'] = function() {return null;};
require.extensions['.jpg'] = function() {return null;};

//var jsdom = require('jsdom').jsdom;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

//global.document = jsdom('');
global.document = new JSDOM('');
global.window = document.window;
Object.keys(document.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.window.property;
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;  //eslint-disable-line no-undef
