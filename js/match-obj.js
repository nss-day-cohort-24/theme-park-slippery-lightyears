"use strict";

let parkObjects = require ("./fetch.js");
let id;
let attractionsarr = [], attraction_typesarr = [], areasarr = [];




function ParkHandler (resolve) {
    this.parkInfo = {

        // Here, I'm setting the local arrays to the properties of ParkHandler.

        areas : areasarr[id],
        attractions: attractionsarr[id],
        attraction_types: attraction_typesarr[id] 
       };
    
}
// Here is a constructor of ParkHandler, in that ParkHandler is being defined as an Object.
ParkHandler.prototype.constructor = ParkHandler;

// Here is a method of sayName that, when called, will say the information of the park.
ParkHandler.prototype.sayName = () => {
    console.log(this.parkInfo);

};

// Here is a method of setObjects, which when called in the Promise, takes the argument of the promise scope, and assigns it to local objects.
ParkHandler.prototype.setObjects = function (objectofResolve){

    areasarr = objectofResolve.areas;
    attraction_typesarr = objectofResolve.attraction_types;
    attractionsarr = objectofResolve.attractions;

};
// Here is a method of compareID, which when called in the Promise, compares the input to the ID properties of each array.
ParkHandler.prototype.compareID = function(ID1){
    
    let passArea = {}, passAttraction_types = {} , passAttraction = {};
    
    areasarr.forEach(function(item){ // For each item of areasarr...
        
        if (ID1 === item.id){ // make a comparison between ID1 and the item at the given iteration.
            console.log("Found a hit.");
            passArea = item;
        }
    });

    attraction_typesarr.forEach(function(item){ // make a comparison between ID1 and the item at the given iteration.
        
        if (ID1 === item.id){
            console.log("Found a hit.");
            passAttraction_types = item;
        }
    });

    attractionsarr.forEach(function(item){ // make a comparison between ID1 and the item at the given iteration.
        
        if (ID1 === item.id){
            console.log("Found a hit.");
            passAttraction = item;
    }
    });

    return {passArea, passAttraction, passAttraction_types}; // every object obtained is now returned to the function call


};








module.exports = {ParkHandler};