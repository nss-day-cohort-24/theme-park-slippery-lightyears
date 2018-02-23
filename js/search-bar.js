"use strict";

let search = {};
let fetchobjects = require("./fetch"); //REMOVE
let matchobjects = require("./match-obj");// REMOVE

search.captureInput = () => {

// Grabs the search bar element
const searchBar = document.getElementById("nav-search-bar");
console.log("What is searchBar?", searchBar);

// Gets the content of the input field on keyup of the "Enter" key
searchBar.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {

        let userInput = e.target.value.toLowerCase();
        let bucket = [{}];
    

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
                        
                        document.getElementById(`map-area-${bucket[item].area_id}`).style


                        console.log("Found it.");
                        console.log(bucket[item].name);
                    }

                    else{
                        console.log("Nothing");
                    }

                });
            },
            (reject) => { // something failed.
                console.log("Error in the searchbar.");
            }
        );
        
    }
});
};

module.exports = {search};

// Tests to see if this script is properly linked
console.log("search-bar.js is in the haus!");
