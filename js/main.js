"use strict";
console.log("The main is working.");
let fetchObjects = require("./fetch");
let searchObjects = require("./search-bar");
let domObjects = require("./domOnClicks");
let mapAreas = require("./map");


searchObjects.search.captureInput();
domObjects.getMapSearchResults();
domObjects.getTimeSearchResults();

mapAreas.mapAreaData();