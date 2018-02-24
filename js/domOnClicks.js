"use strict";

let fetchfunctions = require("./fetch");
let tempstring = "";

function getMapDetails(){


    document.getElementById("display-search-results").addEventListener(function (click){ // click parameter is the value of the button pressed which should correspond with "area id" in theme-park.json.
    fetchfunctions.getAllAreasAttractions(click).then( // This is the function that fires on the click of the DOM Map.
            (resolve) => {
                let bucket = resolve;
                //let keys = Object.keys(bucket);
    
                bucket.forEach(function(item, index){
                    /*this.area_id = bucket[index].id;
                    this.title = bucket[index].name;
                    this.id = bucket[index].id;
                    this.description = bucket[index].description;
                    this.type_id = bucket[index].type_id;*/
    
                    tempstring += `<div class="attractions" onclick = "function()"><h5><a> ${bucket[index].name} </a> ${bucket[index].type_id} 
                    </h5> <p class="attraction-details">${bucket[index].description}</p></div>`; //The function() should be something that activates a slide back to reveal the description content. Phonetip, please review.
    
                });
    
            },
    
            (reject) =>{
    
            }
        );
    });
}

module.exports = {getMapDetails};

