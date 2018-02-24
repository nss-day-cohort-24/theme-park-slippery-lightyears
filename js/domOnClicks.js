"use strict";

let fetchfunctions = require("./fetch");
let tempstring = "";
let num = 1;
let attractionItem = document.getElementById("list-group");

function getMapSearchResults(){
    console.log("The function getMapSearchResults() is running. ");
    document.getElementById("myBtn").addEventListener("click", function(){
        // The function parameter of "click" is the value of the button pressed which should correspond with "area id" in theme-park.json.
        fetchfunctions.getAllAreasAttractions(num).then( 
            // This is the function that fires on the click of the DOM Map.
            (resolve) => {
                let bucket = resolve;
                let keys = Object.keys(bucket);
                console.log("The getAllAreasAttractions() has passed a successful resolve.");
                
                keys.forEach(function(item){
                    tempstring += `<div class="attractions" onclick = "function()"><h5><a> ${bucket[item].name} </a> ${bucket[item].type_id} 
                    </h5> <p class="attraction-details">${bucket[item].description}</p></div>`; //The function() should be something that activates a slide back to reveal the description content. Phonetip, please review.
                        
                    
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
    console.log("The function getTimeSearchResults() running.");



}


module.exports = {getMapSearchResults, getTimeSearchResults};

