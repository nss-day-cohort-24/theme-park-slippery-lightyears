"use strict";

let callAPI = {};
let infoDesk = "https://slippery-lightyears.firebaseio.com/.json";
let attractions = [], areas = [], attraction_types = [];


var fillObjects = (data) => {
    data.attractions.forEach(function(element){
        attractions.push(element);
    });
    data.areas.forEach(function(element){
        areas.push(element);
    });
    data.attraction_types.forEach(function(element){
        attraction_types.push(element);
    });
  };


callAPI.setAllInfo = () => {

    console.log("Running to get park names...");
    
    // makes a request to get api data and is expecting an action 
    
    
    return new Promise((resolve, reject) =>{
        
        let parkObjectsLoader = new XMLHttpRequest(); 

        parkObjectsLoader.open("GET", `${infoDesk}`);
        parkObjectsLoader.send();

        parkObjectsLoader.addEventListener("load", function() {
            var data = JSON.parse(this.responseText);
            resolve(data);

        });

    });
};

callAPI.getInfo = () => {
    return {attractions, attraction_types, areas};
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