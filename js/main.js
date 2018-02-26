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

// PH === code for footer time
var date = new Date();
document.getElementById("footer-date").innerHTML = date.toString(); 
console.log("footer date working");

// PH === bootstrap attractions label and description slide down button

//Bootstrap for Accordion example: Using the card component, you can extend the default collapse behavior to create an accordion.
$('.collapse').collapse();

$('#myCollapsible').collapse({
    toggle: false
  });

$('#myCollapsible').on('hidden.bs.collapse', function () {
    // do something…
});

$('#myCollapse').on('shown.bs.collapse', function (e) {
    // Action to execute once the collapsible area is expanded
});

$(document).ready(function(){
    $(".btn-link").click(function(){
        $(".collapse").collapse('toggle');
    });
});