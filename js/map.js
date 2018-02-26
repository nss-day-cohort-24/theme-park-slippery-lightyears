"use strict";

let requirements = require("./fetch");

console.log("map.js is here");

function mapAreaData() {
    return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        let fireBaseURL = "https://slippery-lightyears.firebaseio.com/areas.json";

        request.onload = function() {
            if (request.status === 200) { // If the request is successful...
                let dataObject = JSON.parse(request.responseText);
                // console.log("dataObject", dataObject);

                let mapOne = document.getElementById("map-area-1");
                let mapTwo = document.getElementById("map-area-2");
                let mapThree = document.getElementById("map-area-3");
                let mapFour = document.getElementById("map-area-4");
                let mapEight = document.getElementById("map-area-8");
                let mapFive = document.getElementById("map-area-5");
                let mapSix = document.getElementById("map-area-6");
                let mapSeven = document.getElementById("map-area-7");

                // console.log("What is mapTwo", mapTwo);

                let elementArray = [mapOne, mapTwo, mapThree, mapFour, mapFive, mapSix, mapSeven, mapEight];

                // console.log("what is element Array?", elementArray);

                var outputString = "";

                for (var i = 0; i < dataObject.length; i++) {
                    elementArray[i].innerHTML += dataObject[i].name;
             // ph added +=
                    // var currentArea = dataObject[i].name;
                    //   console.log("what is current area lllllllll", currentArea);


                    //   outputString += currentArea;
                    //   console.log("What is outputstring?", outputString);


                }

                elementArray.forEach(element => {

                });
                //Print to DOM....


                resolve("RESSSOLVED");

            } else {
                reject(new Error("XMLHttpRequest Error you fucking dumbass", request.statusText));

            }
        };
        request.open('GET', fireBaseURL);
        request.send();
    });
}



module.exports = { mapAreaData };