"use strict";
//Will handle the output request.  It will display the relevant times in the "product list"....
console.log("DISPLAY MY FUCKING AREA IS HERE");

let targetDomElement = document.getElementById("attractions-details");
console.log("what is the elemenr", targetDomElement);

let fetchedData = require("./fetch");
console.log("whats fetched data????", fetchedData);


let jesiesDataVariable = fetchedData.getAllAttractions();
console.log("THIS IS YOUR VARIBBLEEE", jesiesDataVariable);

var areaArray = [];

let AreaObject = function(name, description, type_id, area_id, id) {
    this.name = name;
    this.description = description;
    this.type_id = type_id;
    this.area_id = area_id;
    this.id = id;

    targetDomElement.innerHTML += `<div class="${this.area_id}"><p id="${this.name}">${name}</p><p id="${this.type_id}">${description}</p></div>`;

};

jesiesDataVariable.then(function(array) {
    areaArray = array;
    for (var i = 0; i < areaArray.length; i++) {
        var itemName = areaArray[i].name;
        var itemDesc = areaArray[i].description;
        var itemType = areaArray[i].type_id;
        var itemArea = areaArray[i].area_id;
        var itemID = areaArray[i].id;

        var newArea = new AreaObject(itemName, itemDesc, itemType, itemArea, itemID);
    }

    return areaArray;
});






function buildShit(obj, key, val) {
    console.log("Made it this far into building sit");
}

module.exports = { buildShit };