"use strict";

let search = {};

search.captureInput = () => {

// Grabs the search bar element
const searchBar = document.getElementById("nav-search-bar");
console.log("What is searchBar?", searchBar);

// Gets the content of the input field on keyup of the "Enter" key
searchBar.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
    let userInput = e.target.value.toLowerCase();
    console.log(userInput);
    }
});
};

module.exports = {search};
// Tests to see if this script is properly linked
console.log("search-bar.js is in the haus!");