"use strict";

let callAPI = {};
let infoDesk = "https://slippery-lightyears.firebaseio.com/.json";
callAPI.attractions = []; 
callAPI.areas = [];
callAPI.attraction_types = [];



callAPI.setAllInfo = () => {
    
    console.log("Running to set all park names...");
    
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


module.exports = {callAPI}; 