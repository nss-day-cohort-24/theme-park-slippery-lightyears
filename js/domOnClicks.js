"use strict";

let fetchfunctions = require("./fetch");
let tempstring = "";
let num = 1;
let attractionItem = document.getElementById("accordion");
let selectedTime = "";
let mapSelector;
let bucket;
let keys;
let collapse = [];

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

function getSearchBarResults(resolve, bucket, userInput){

    console.log("Finding comparisons in getSearchBarResults().");
                bucket = resolve;
                
                let keys = Object.keys(bucket);
                
                // Clear input area. 
                attractionItem.innerHTML = "";

                // Go through the array and print the found items to the DOM.

                keys.forEach(function(item){
                    let i = 0; // PH trying to put counter for collapse options
                    let input = (bucket[item].name).toLowerCase();
                    if(input.includes(userInput)){
                        
                        //document.getElementById(`map-area-${bucket[item].area_id}`).style
                    //     tempstring += `<div class="attractions" onclick = "function()"><h5><a> ${bucket[item].name} </a> ${bucket[item].type_id} 
                    // </h5> <p class="attraction-details">${bucket[item].description}</p></div>`;

                // PH === Bootstrap code for accordion card;  <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                   tempstring += `<div class="card">
                   <div class="card-header" id="headingOne">
                        <h5 class="mb-0">
                       <button class="btn btn-link" data-toggle="collapse" data-target="#${bucket[item].id}" aria-expanded="true" aria-controls="${bucket[item].id}">
                            ${bucket[item].name}(${bucket[item].type_id}) </button>
                        </h5>
                    </div>
             
                 <div id="${bucket[item].id}" class="collapse show" aria-labelledby="${bucket[item].id}" data-parent="#accordion">
                   <div class="card-body">${bucket[item].description}</div>
                   </div>
                 </div>`;

                        
                        console.log("Found an item.");
                        console.log(bucket[item].name);

                        attractionItem.innerHTML += tempstring;
                    }
                    
                    else{
                        console.log("Nothing");
                    }
                    
                });
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
                console.log("The getAllAreasAttractions() has passed a successful resolve.");
                
                keys.forEach(function(item){
                    //  tempstring += `<div class="attractions" onclick = "function()"><h5><a> ${bucket[item].name} </a> ${bucket[item].type_id} </h5> <p class="attraction-details">${bucket[item].description}</p></div>`;
                    
                    //The function() should be something that activates a slide back to reveal the description content. 
                    //PH === added bootstrap styling for the card.
                   

                   tempstring += `<div class="card">
                   <div class="card-header" id="headingOne" onclick = "function()"><h5 class="mb-0">
                       <button class="btn btn-link" data-toggle="collapse" data-target="#${bucket[item].id}" aria-expanded="true" aria-controls="${bucket[item].id}"> ${bucket[item].name} (${bucket[item].type_id})</button></h5></div>
                                
                     <div id="${bucket[item].id}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
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

function getTimeSearchResults(){
    document.getElementById("dropdownMenuButton").addEventListener("click", function(){ // when the value is selected from the drop down menu
        // upon the click of the selected time, I want the results to be filtered by appropriate times.
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

    let bucketOfTimes = [{}];
    keys.forEach(function(item){ // For each item in the keys...
        collection[item].times.forEach(function(time){ // and for each item within the property time...
            if(time.includes(selectedTime)) // NOTE this probably needs to be more specific.
                bucketOfTimes.shift(item); // collect the applicable items with time slots
        });
    });

    /*-->

    printTimeResults();


    -->*/
    return bucketOfTimes;
}

function printTimeResults(){


    // helpful function should occur here to print a string to the DOM.
}

module.exports = {getMapSearchResults, getTimeSearchResults, getSearchBarResults};

