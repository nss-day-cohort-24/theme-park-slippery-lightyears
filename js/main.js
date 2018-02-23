"use strict";

let fetchobjects = require("./fetch");
let matchobjects = require("./match-obj");
let search = require("./search-bar");

let passID = 3;

// In the promise in setAllInfo(), do that operation, then make available the scoped objects (which is contained within the resolve variable, which is passed into setObjects.)
function setstuff(){

function getArrayData(){
    fetchobjects.callAPI.setAllInfo().then(
        (resolve) =>{
            let localpark = new matchobjects.ParkHandler();
            localpark.setObjects(resolve);
            let testthis = localpark.compareID(passID);
            console.log(testthis);
            
        },

        (reject) => {

        }
    );
}
function grabAttractionNames(sQuery){

    fetchobjects.callAPI.setAttractionsObjects().then(
        (resolve) =>{
            let attractionsList = new matchobjects.ParkHandler();
            attractionsList.setObjects(resolve);
            let liveList= attractionsList.searchBar(sQuery);
            console.log(liveList);
            
        },

        (reject) => {

        }
    );

}


