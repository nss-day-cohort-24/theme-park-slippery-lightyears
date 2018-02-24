"use strict";
console.log("The main is working.");
let fetchObjects = require("./fetch");
let searchObjects = require("./search-bar");
let domObjects = require("./domOnClicks");



searchObjects.search.captureInput();
domObjects.getMapSearchResults();