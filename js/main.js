"use strict";
console.log("The main is working.");
let fetchObjects = require("./fetch");
let searchObjects = require("./search-bar");
let domObjects = require("./domOnClicks");
let mapAreas = require("./map");


searchObjects.search.captureInput();
domObjects.getMapSearchResults();
domObjects.getTimeSearchResults();

<<<<<<< HEAD
mapAreas.mapAreaData();
=======
// PH === code for footer time
var date = new Date();
document.getElementById("footer-date").innerHTML = date.toString(); 
console.log("footer date working");
>>>>>>> ph6
