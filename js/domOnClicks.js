"use strict";

let fetchfunctions = require("./fetch");
let tempstring = "";
let num = 1;
let attractionItem = document.getElementById("list-group");
let selectedTime = "";
let mapSelector;
let bucket; // --
let keys;
let timeSlot = {}; // Needs to be connected to the dom by an eventListener to assume the value of a case option.
// Grabs element where the date will be outputted
let dateElement = document.getElementById("footer-date");
console.log(dateToday);



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
            // This is the function that fires on the click of the DOM Map.
            (resolve) => {
                bucket = resolve;
                keys = Object.keys(bucket);
                console.log("The getAllAttractions() has passed a successful resolve.");
                console.log(resolve);
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
    /*<== TESTS (Delete later) ==> */
    console.log("The function sortTimeofAttractions() is running");
    // console.log("Type of collection is an...");
    // console.log(typeof collection);
    // console.log("Type of keys is an...");
    // console.log(typeof keys);
    let localTime = [{}];
    let tempArr = [];
    let testArr = [];
    /*<== ^^TESTS (Delete later) ==> */
    let itemsByTimeSearch = [{}];
    keys.forEach(function(item){
        if(collection[item].times !== undefined ){
            localTime.unshift(collection[item].times);
            //console.log(tempArr); && (collection[item].times )

        }
    });

    for(var i = 0; i< localTime.length; i++){
        for(var j = 0; j < localTime[i].length; j++)
        {
            //console.log("Item of Times------------");
            
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
                console.log("Met the condition: Between 9 - 11:59 PM. Insert into Array");
                console.log(localTime[i][j] + "-- INSERTED");
            }

            if (hour >= 12  && ampm.includes("PM")){ //&& hour < 3
                console.log("Met the condition: Between 9 - 11:59 PM. Insert into Array");
                console.log(localTime[i][j] + "-- INSERTED");
            }

            if (hour >= 2 && hour < 5 && ampm.includes("PM")){
                console.log("Met the condition: Between 2 - 4:59 PM. Insert into Array");
                console.log(localTime[i][j] + "-- INSERTED");
            }

        
    }

}     
            
        
        /*
        if((collection[item].times !== undefined) && (collection[item].times))
        {
            itemsByTimeSearch.unshift(collection[item].times);
            console.log("Found items that filter!");
        }

        <== TESTS (Delete later) ==> */
        //console.log("localTime is a type of...");
        //console.log(typeof localTime);
        //console.log(collection[item].times);
    /*<== ^^TESTS (Delete later) ==> */

        //switch (){



        //console.log(itemsByTimeSearch);
        //if (collection[item].times === ) maybe a switch??
        // For each item in the keys...
        /*collection[item].times.forEach(function(time){ // and for each item within the property time...
            if(time.includes(selectedTime)) // NOTE this probably needs to be more specific.
                bucketOfTimes.shift(item); // collect the applicable items with time slots
        });*/
   // });

    /*-->

    printTimeResults();


    -->*/
    //return bucketOfTimes;
    
}

function printTimeResults(){


    // helpful function should occur here to print a string to the DOM.
}

module.exports = {getMapSearchResultsOnLoad, getTimeSearchResults, getSearchBarResults};

