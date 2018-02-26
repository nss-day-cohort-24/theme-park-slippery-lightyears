"use strict";

let fetchfunctions = require("./fetch");
let tempstring = "";
let num = 1;
let attractionItem = document.getElementById("accordion");
let selectedTime = "";
let mapSelector;
let bucket; // --
let keys;
let timeSlot = {}; // Needs to be connected to the dom by an eventListener to assume the value of a case option.
// Grabs element where the date will be outputted
let dateElement = document.getElementById("footer-date");
console.log(dateToday);
let collapse = [];



// Initializes a new variable that grabs the current date and time
let fullDate = new Date();
let currentHour = fullDate.getHours();
if(currentHour > 12) // Convert from 24 to 12 hour stipulation.
    {
        currentHour = fullDate.getHours() - 12;
    }
 else {
     currentHour = fullDate.getHours();
    }
let currentSecond = fullDate.getSeconds();
let currentMinute = fullDate.getMinutes();
let currentDay = fullDate.getDay();
let currentMonth = fullDate.getMonth();
let currentDate = fullDate.getDate();
let currentYear = fullDate.getFullYear();
var dateToday = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
console.log(currentHour);
var dropdown911AM = document.getElementById("dropdown-911AM");
var dropdown122 = document.getElementById("dropdown-122");
var dropdown35 = document.getElementById("dropdown-35");
var dropdown68 = document.getElementById("dropdown-68");
var dropdown911PM = document.getElementById("dropdown-911PM");



dateElement.innerHTML += dateToday;

/// EVENT HANDLERS ACCORDING TO AREA CLICKED ON THE MAP ///


document.getElementById("map-area-1").addEventListener("click", function(){
    mapSelector = 1;
    console.log(mapSelector);
});
document.getElementById("map-area-2").addEventListener("click", function(){
    mapSelector = 2;
    console.log(mapSelector);
});
document.getElementById("map-area-3").addEventListener("click", function(){
    mapSelector = 3;
    console.log(mapSelector);
});
document.getElementById("map-area-4").addEventListener("click", function(){
    mapSelector = 4;
    console.log(mapSelector);
});
document.getElementById("map-area-5").addEventListener("click", function(){
    mapSelector = 5;
    console.log(mapSelector);
});
document.getElementById("map-area-6").addEventListener("click", function(){
    mapSelector = 6;
    console.log(mapSelector);
});
document.getElementById("map-area-7").addEventListener("click", function(){
    mapSelector = 7;
    console.log(mapSelector);
});
document.getElementById("map-area-8").addEventListener("click", function(){
    mapSelector = 8;
    console.log(mapSelector);
});

function getMapSearchResultsOnLoad(){ // The initial On Load function
    console.log("The function getMapSearchResultsOnLoad() is running. ");
    
        fetchfunctions.getAllAttractions().then( 
        
            (resolve)=> {
                bucket = resolve;
                let keys = Object.keys(bucket);
                console.log("The getAllAttractions() has passed a successful resolve.");
                console.log(resolve);
                // Clear input area. 
                attractionItem.innerHTML = "";

                // Go through the array and print the found items to the DOM.
                keys.forEach(function(item){
                    let i = 0; // PH trying to put counter for collapse options
                    let input = (bucket[item].name).toLowerCase();   
                    // DELETE ALL THESE NOTES BEFORE FINAL---
                    //document.getElementById(`map-area-${bucket[item].area_id}`).style
                    // tempstring += `<div class="attractions" onclick = "function()"><h5><a> ${bucket[item].name} </a> ${bucket[item].type_id} 
                    // </h5> <p class="attraction-details">${bucket[item].description}</p></div>`;
                // PH === Bootstrap code for accordion card;  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                    tempstring += `<div class="card">
                    <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#${collapse[i]}" aria-expanded="true" aria-controls="#${collapse[i]}">
                    ${bucket[item].name}(${bucket[item].type_id}) </button>
                    </h5>
                    </div>
                
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div class="card-body">${bucket[item].description}</div>
                    </div>
                    </div>`;

                    attractionItem.innerHTML += tempstring;   
        });
    },

        (reject)=>{
            console.log ("Big Reject.");
        }
    );
}

function getMapSearchResults(){ // 
    console.log("The function getMapSearchResults() is running. ");
    document.getElementById("park-map-grid").addEventListener("click", function(){
        // The function parameter of "click" is the value of the button pressed which should correspond with "area id" in theme-park.json.
        fetchfunctions.getAllAreasAttractions(mapSelector).then( 
            // This is the function that fires on the click of the DOM Map.
            (resolve) => {
                bucket = resolve;
                keys = Object.keys(bucket);
                console.log("The getAllAttractions() has passed a successful resolve.");
                console.log(resolve);
                keys.forEach(function(item){
                    //  tempstring += `<div class="attractions" onclick = "function()"><h5><a> ${bucket[item].name} </a> ${bucket[item].type_id} </h5> <p class="attraction-details">${bucket[item].description}</p></div>`;
                    
                    //The function() should be something that activates a slide back to reveal the description content. 
                    //PH === added bootstrap styling for the card.
                   

                   tempstring += `<div class="card">
                   <div class="card-header" id="headingOne" onclick = "function()"><h5 class="mb-0">
                       <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne}" aria-expanded="true" aria-controls="##collapseOne"> ${bucket[item].name} (${bucket[item].type_id})</button></h5></div>
                                
                     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                       <div class="card-body">
                            ${bucket[item].description}
                        </div>
                    </div>
                    </div>`;
                    
                    attractionItem.innerHTML += tempstring;
                    });
                },
            (reject) => {
                console.log("Reject from getMapSearchResults().");
                }
        );
    });
    
}

function getSearchBarResults(resolve, bucket, userInput){

    console.log("Finding comparisons in getSearchBarResults().");
    bucket = resolve;
    
    let keys = Object.keys(bucket);
    
    // Clear input area. 

    attractionItem.innerHTML = " ";

    // Go through the array and print the found items to the DOM.

    keys.forEach(function(item){
        let input = (bucket[item].name).toLowerCase();
        if(input.includes(userInput)){
            
            //document.getElementById(`map-area-${bucket[item].area_id}`).style
            tempstring += `<div class="attractions" onclick = "function()"><h5><a> ${bucket[item].name} </a> ${bucket[item].type_id} 
        </h5> <p class="attraction-details">${bucket[item].description}</p></div>`;
            
            console.log("Found an item.");
            console.log(bucket[item].name);

            //highlightThis = bucket[item].area_id
            attractionItem.innerHTML += tempstring;
        }
        
        else{
            console.log("Nothing");
        }
        
    });
}


function getTimeSearchResults(){
    document.getElementById("dropdownMenuButton").addEventListener("click", function(){ // When the value is selected from the drop down menu,
        // upon the click of the selected time, we want the results to be filtered by appropriate times.
        console.log("The function getTimeSearchResults() is running.");
        fetchfunctions.getAllAreasAttractions(num).then(
            (resolve)=>{
                console.log("The getAllAreasAttractions() passed a successful resolve within the getTimeSearchResults().");
                attractionItem.innerHTML = "";
                let bucket = resolve;
                let keys = Object.keys(bucket);
                console.log("The getAllAreasAttractions() has passed a successful resolve.");
                
                let readyTimes = sortTimeOfAttractions(bucket, keys);
            },
            (reject)=>{}
        );
    });
}

function sortTimeOfAttractions(collection, keys){
 
    console.log("The function sortTimeofAttractions() is running");

    let localTime = [{}];
    let tempArr = [];
    let testArr = [];
    /*<== ^^TESTS (Delete later) ==> */
    let itemsByTimeSearch = [{}];
    keys.forEach(function(item){
        if(collection[item].times !== undefined ){
            localTime.unshift(collection[item].times);
            
            for(var i = 0; i< collection[item].times.length; i++){
                for(var j = 0; j < collection[item].times[i].length; j++)
                {
                    // Here we parse the time by hour, minute and AMPM 
                    
                    let strDate = localTime[i][j];
                    let arr = strDate.split(':');
                    let hour = arr[0];
                    let min = arr[1];
                    let ampm = arr[1];
                    console.log(hour + ":" + ampm);
                    console.log(typeof ampm);
                    if (ampm.includes("PM")){
                        console.log("This is a PM time.");
                    }
                    if (ampm.includes("AM")){
                        console.log("This is a AM time.");
                    }
                    
                    if (hour >= 9 && hour < 12 && ampm.includes("AM")){
                       //testArr.shift(localTime[i][j]);
                        console.log("Met the condition: Between 9 - 11:59 PM. INSERTED TO THE DOM.");
                        console.log(localTime[i][j] + "-- INSERTED");
                        dropdown911AM.addEventListener("click", function(){
                            attractionItem.innerHTML = "";
                            tempstring += `<div class="card">
                           <div class="card-header" id="headingOne" onclick = "function()"><h5 class="mb-0">
                               <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne}" aria-expanded="true" aria-controls="##collapseOne"> ${collection[i].name} (${collection[i].type_id})</button></h5></div>
                                        
                             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                               <div class="card-body">
                                    ${collection[i].description}
                                </div>
                            </div>
                            </div>`;
                            attractionItem.innerHTML += tempstring;
        
        
                        });
        
                    }
        
                    if (hour >= 12  && ampm.includes("PM")){ //&& hour < 3
                        console.log("Met the condition: Between 9 - 11:59 PM. INSERTED TO THE DOM");
                        console.log(localTime[i][j] + "-- INSERTED");
                        dropdown122.addEventListener("click", function(){
                            attractionItem.innerHTML = "";
                            tempstring += `<div class="card">
                           <div class="card-header" id="headingOne" onclick = "function()"><h5 class="mb-0">
                               <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne}" aria-expanded="true" aria-controls="##collapseOne"> ${collection[i].name} (${collection[i].type_id})</button></h5></div>
                                        
                             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                               <div class="card-body">
                                    ${collection[i].description}
                                </div>
                            </div>
                            </div>`;
                            attractionItem.innerHTML += tempstring;
        
        
                        });
                    }
        
                    if (hour >= 2 && hour < 5 && ampm.includes("PM")){
                        console.log("Met the condition: Between 2 - 4:59 PM. INSERTED TO THE DOM");
                        console.log(localTime[i][j] + "-- INSERTED");
                        dropdown35.addEventListener("click", function(){
                            attractionItem.innerHTML = "";
                            tempstring += `<div class="card">
                           <div class="card-header" id="headingOne" onclick = "function()"><h5 class="mb-0">
                               <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne}" aria-expanded="true" aria-controls="##collapseOne"> ${collection[i].name} (${collection[i].type_id})</button></h5></div>
                                        
                             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                               <div class="card-body">
                                    ${collection[i].description}
                                </div>
                            </div>
                            </div>`;
                            attractionItem.innerHTML += tempstring;
        
        
                        });
                    }
        
                    if (hour >= 6 && hour < 8 && ampm.includes("PM")){
                        console.log("Met the condition: Between 6 - 8:59 PM. INSERTED TO THE DOM");
                        console.log(localTime[i][j] + "-- INSERTED");
                        dropdown68.addEventListener("click", function(){
                            attractionItem.innerHTML = "";
                            tempstring += `<div class="card">
                           <div class="card-header" id="headingOne" onclick = "function()"><h5 class="mb-0">
                               <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne}" aria-expanded="true" aria-controls="##collapseOne"> ${collection[i].name} (${collection[i].type_id})</button></h5></div>
                                        
                             <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                               <div class="card-body">
                                    ${collection[i].description}
                                </div>
                            </div>
                            </div>`;
                            attractionItem.innerHTML += tempstring;
                                });
                            }      
            
                    } // END OF 2ND FOR LOOP
                } // END OF 1ST FOR LOOP
            } // END OF IF UNDEFINED STATEMENT


        } // ANON FUNCTION
    
    );// END OF FOREACH LOOP 
}// END OF FUNCTION

function printTimeResults(){


    // helpful function should occur here to print a string to the DOM.
}

module.exports = {getMapSearchResultsOnLoad, getTimeSearchResults, getSearchBarResults};

