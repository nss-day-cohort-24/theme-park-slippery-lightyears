"use strict";
console.log("The main is working.");
let fetchObjects = require("./fetch");
let searchObjects = require("./search-bar");
let domObjects = require("./domOnClicks");
let mapAreas = require("./map");
let attractionDetails = require("./display-area");

searchObjects.search.captureInput();
domObjects.getMapSearchResults();
domObjects.getTimeSearchResults();


//Adding These, Jesie...
mapAreas.mapAreaData(); //Enables Map area printing by parsing the data, sorting, and printing the areas to the DOM....
attractionDetails.printCardsToList(); // Prints the card elements to the targeted output DOM element...