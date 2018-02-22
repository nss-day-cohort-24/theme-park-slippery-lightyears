"use strict";

let parkObjects = require ("./fetch.js");
let id;
let attractionsarr = [], attraction_typesarr = [], areasarr = [];

parkObjects.callAPI.setAllInfo().then(

    //put another promise here, and 
    function(data){
        
        attractionsarr = parkObjects.callAPI.attractions;
        attraction_typesarr = parkObjects.callAPI.attraction_types;
        areasarr = parkObjects.callAPI.areas;
        
    }).catch(
        function(data){
            console.log("Big Fail.", parkObjects.callAPI);
    
        }

);


function ParkHandler (id) {
    this.parkInfo = {
        areas : areasarr[id],
        attractions: attractionsarr[id],
        attraction_types: attraction_typesarr[id] 
       };
    console.log(parkObjects.callAPI);
}

ParkHandler.prototype.constructor = ParkHandler;

ParkHandler.prototype.sayName = () => {
    console.log(this.parkInfo);

};

ParkHandler.prototype.compareID = function(id){
    let passArea, passAttraction_types, passAttraction;
    
    areasarr.forEach(function(item){
        if (id === item.id){
            passArea = item;
        }
    });

    attraction_typesarr.forEach(function(item){
        if (id === item.id){
            passAttraction_types = item;
        }
    });

    attractionsarr.forEach(function(item){
        if (id === item.id){
        passAttraction = item;
    }
    });

    return {passArea, passAttraction, passAttraction_types};
};








module.exports = {ParkHandler};