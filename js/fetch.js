"use strict";
let parkObjectsLoader;

function getAllAreas() {

    return new Promise((resolve, reject) =>{
            
        let attractionsObjectsLoader = new XMLHttpRequest(); 
        
        attractionsObjectsLoader.open("GET", `https://slippery-lightyears.firebaseio.com/.json`);
        attractionsObjectsLoader.send();
        
        attractionsObjectsLoader.addEventListener("load", function() {
            
            var data;
            resolve(data);
            
        });
    });
}

function getAllAreasAttractions(areaNum){ // This returns all the areas by id for the side pane

    return new Promise((resolve, reject) =>{
        
        this.parkObjectsLoader = new XMLHttpRequest(); 
        
        parkObjectsLoader.open("GET", `https://slippery-lightyears.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${areaNum}`);
        parkObjectsLoader.send();
        
        parkObjectsLoader.addEventListener("load", function() {
            
            var data;
            resolve(data);
            
        });
});
}

function getAllAttractionTypes(AttractionTypeNum){ // This returns all attractions by areanum



    return new Promise((resolve, reject) =>{
        
        this.parkObjectsLoader = new XMLHttpRequest(); 
        
        parkObjectsLoader.open("GET", `https://slippery-lightyears.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${AttractionTypeNum}`);
        parkObjectsLoader.send();
        
        parkObjectsLoader.addEventListener("load", function() {
            
            var data;
            resolve(data);
            
        });
    });


}

//THIS WORKS
function getAllAttractions(){ 

    return new Promise((resolve, reject) =>{
        
        let parkObjectsLoader = new XMLHttpRequest(); 
        
        parkObjectsLoader.open("GET", 'https://slippery-lightyears.firebaseio.com/attractions.json?orderBy="name"');
        parkObjectsLoader.send();
        
        parkObjectsLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            resolve(data);
            
            
        });

    });
}
//getAllAreas, getAllAreasAttractions, getAllAttractionTypes,
module.exports = {getAllAttractions, getAllAreasAttractions}; 