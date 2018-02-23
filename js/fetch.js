"use strict";

let callAPI = {};
let infoDesk = "https://slippery-lightyears.firebaseio.com/.json";
let attractionString = `https://slippery-lightyears.firebaseio.com/attractions.json?orderBy="id"&startAt=1`;
callAPI.attractions = []; 
callAPI.areas = [];
callAPI.attraction_types = [];



callAPI.setAllInfo = () => {
    
    console.log("Fetching the parks data for all three arrays");
    
    // makes a request to get api data and is expecting an action 
    
    
    return new Promise((resolve, reject) =>{
        
        let parkObjectsLoader = new XMLHttpRequest(); 
        
        parkObjectsLoader.open("GET", `${infoDesk}`);
        parkObjectsLoader.send();
        
        parkObjectsLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            data.attractions.forEach(function(element){
                callAPI.attractions.push(element);
            });
            data.areas.forEach(function(element){
                callAPI.areas.push(element);
            });
            data.attraction_types.forEach(function(element){
                callAPI.attraction_types.push(element);
            });
         
            resolve(data);
            
        });

    });
};

callAPI.setAttractionObjects = () => {

    return new Promise((resolve, reject) =>{
        
        let attractionsObjectsLoader = new XMLHttpRequest(); 
        
        attractionsObjectsLoader.open("GET", `${attractionString}`);
        attractionsObjectsLoader.send();
        
        attractionsObjectsLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            data.attractions.forEach(function(element){
                callAPI.attractions.push(element);
            });
         
            resolve(data);
            
        });


}


module.exports = {callAPI}; 