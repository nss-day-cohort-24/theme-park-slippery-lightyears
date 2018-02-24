"use strict";

// Initializes an empty object to contain the function that will be exported to "main.js"
let search = {};
let fetchobjects = require("./fetch"); //REMOVE
let matchobjects = require("./match-obj");// REMOVE

// Arrow function gets input from user on keyup for the "Enter" key 
search.captureInput = () => {

// Grabs the search bar element from index.html
const searchBar = document.getElementById("nav-search-bar");

// Gets the content of the input field on keyup of the "Enter" key
searchBar.addEventListener("keyup", function(e) {
    if (e.keyCode === 13 && e.target.value != "")  {

        let userInput = e.target.value.toLowerCase();
        let bucket = [{}];
        
        // The call gets the attractions from the database, then presents the data as 'resolve'. It compares the array's property "name" data against the search term.
        console.log(userInput);
        fetchobjects.getAllAttractions().then(
            (resolve) =>{ // resolve is the array of stuff
                
                console.log("Finding comparisons.");
                bucket = resolve;
                
                let keys = Object.keys(bucket);
                
                keys.forEach(function(item){
                    let input = (bucket[item].name).toLowerCase();
                    if(input.includes(userInput)){
                        
                        //Then, we need to get an area ${bucket[item].area_id}
                        
                        //document.getElementById(`map-area-${bucket[item].area_id}`).style
                        
                        
                        console.log("Found it.");
                        console.log(bucket[item].name);
                    }
                    
                    else{
                        console.log("Nothing");
                    }
                    
                });
            },
            (reject) => { // A reject was returned, so something failed.
                console.log("Error in the searchbar.");
            }
        );
        // If the input is empty and the enter key is pressed, an alert will display asking for input from the user
            } else if (e.keyCode === 13) {
                window.alert("Please enter something to search for.");
         }
        
    });
    
    
};

module.exports = {search};

// Tests to see if this script is properly linked
console.log("search-bar.js is in the haus!");
