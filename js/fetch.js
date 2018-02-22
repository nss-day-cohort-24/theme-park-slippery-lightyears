"use strict";

let callAPI = {};
let infoDesk = "https://slippery-lightyears.firebaseio.com/areas.json";
let attractions = [];


var fillAttraction = (data) => {
    data.attraction.forEach(function(element){
      attractions.push(element);
    });
  };


callAPI.setAllInfo = () => {

    console.log("Running to get park names...");
    
    // makes a request to get api data and is expecting an action 
    
    
    return new Promise((resolve, reject) =>{
        
        let attractionsLoader = new XMLHttpRequest(); 

        attractionsLoader.open("GET", `${infoDesk}`);
        attractionsLoader.send();

        attractionsLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            resolve(data);

        });

    });
};

callAPI.getInfo = () => {
    return attractions;
};


callAPI.setAllInfo().then(

    function(data){
        console.log("Succesful retrieval", data);
    },
    function(data){
        console.log("Big Fail.", data);

    }

);
module.exports = {callAPI}; 