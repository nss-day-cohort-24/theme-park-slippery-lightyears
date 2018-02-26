"use strict";
let parkObjectsLoader;


// THIS WORKS
function getAllAreasAttractions(areaNum){ // This returns all the areas by id for the side pane

    return new Promise((resolve, reject) =>{
        
        let parkObjectsLoader = new XMLHttpRequest(); 
        
        parkObjectsLoader.open("GET", `https://slippery-lightyears.firebaseio.com/attractions.json?orderBy="area_id"&equalTo=${areaNum}`);
        parkObjectsLoader.send(); 
        
        parkObjectsLoader.addEventListener("load", function() {
            
            var data = JSON.parse(this.responseText);
            resolve(data);
            
        });
});
}

function getAllAttractions(){ // This returns all attractions by areanum



    return new Promise((resolve, reject) =>{
        
        let parkObjectsLoader = new XMLHttpRequest(); 
        
        parkObjectsLoader.open("GET", `https://slippery-lightyears.firebaseio.com/attractions.json`);
        parkObjectsLoader.send();
        
        parkObjectsLoader.addEventListener("load", function() {
            
            var data = JSON.parse(this.responseText);
            resolve(data);
            
        });
    });


}

//THIS WORKS
/*function getAllAttractions(){ 

    return new Promise((resolve, reject) =>{
        
        let parkObjectsLoader = new XMLHttpRequest(); 
        
        parkObjectsLoader.open("GET", 'https://slippery-lightyears.firebaseio.com/attractions.json?orderBy="name"');
        parkObjectsLoader.send();
        
        parkObjectsLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            resolve(data);
            
            
        });

    });
}*/
//getAllAreas, getAllAreasAttractions, getAllAttractionTypes,
module.exports = {getAllAttractions, getAllAreasAttractions}; 