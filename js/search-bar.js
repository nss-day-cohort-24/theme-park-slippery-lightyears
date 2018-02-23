"use strict";

// Initializes an empty object to contain the function that will be exported to "main.js"
let search = {};

// Arrow function gets input from user on keyup for the "Enter" key 
search.captureInput = () => {

// Grabs the search bar element from index.html
const searchBar = document.getElementById("nav-search-bar");

// Gets the content of the input field on keyup of the "Enter" key
searchBar.addEventListener("keyup", function(e) {
    if (e.keyCode === 13 && e.target.value != "") {
// Stores the value from the input area into a new variable on "Enter" as long as it is not empty
    let userInput = e.target.value.toLowerCase();
    console.log(userInput);
// If the input is empty and the enter key is pressed, an alert will display asking for input from the user
    } else if (e.keyCode === 13) {
        window.alert("Please enter something to search for.");
    }
});
};

module.exports = {search};
// Tests to see if this script is properly linked
console.log("search-bar.js is in the haus!");