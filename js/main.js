"use strict";
console.log("The main is working.");
let fetchObjects = require("./fetch");
let searchObjects = require("./search-bar");
let domObjects = require("./domOnClicks");



searchObjects.search.captureInput();
domObjects.getMapSearchResults();

// PH === code for footer time
var date = new Date();
document.getElementById("footer-date").innerHTML = date.toString(); 
console.log("footer date working");