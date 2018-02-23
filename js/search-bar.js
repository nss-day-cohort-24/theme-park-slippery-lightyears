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
        console.log(userInput);
        
        fetchobjects.getAllAttractions().then(
            (resolve) =>{ // resolve is the array of stuff
                
                let term = `/${userInput}/g`;
                let returnlist = [{}];
                let attractionsarr = [{}];
                attractionsarr = resolve;
                console.log("you get at least here.")
                attractionsarr.forEach(function(item){
                    if(term.test(item.name)){
                        console.log("You are the father!");
                        returnlist.unshift(item);
                    }
                    });
                console.log("Fetched a bunch of stuff according to the search query.");
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
