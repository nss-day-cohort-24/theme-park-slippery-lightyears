//for footer live date
"use strict";

console.log("testing date js");

function footerTime() {
    
    let realTime, time, attraction;
    realTime = document.getElementById("display-realtime-events");
    time = new Date();
    attraction = "";

    console.log (Date());
}



var listGroupSearh = document.getElementsByClassName("list-group-search");

for (let i = 0; i < listGroupSearh.length; i++) {
    listGroupSearh[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//Bootstrap for Accordion example: Using the card component, you can extend the default collapse behavior to create an accordion.
// $('.collapse').collapse();

// $('#myCollapsible').collapse({
//     toggle: false
//   });

//   $('#myCollapsible').on('hidden.bs.collapse', function () {
//     // do something…
//   });

//   $('#myCollapse').on('shown.bs.collapse', function (e) {
//     // Action to execute once the collapsible area is expanded
//   });
  
$(document).ready(function(){
    $(".btn-primary").click(function(){
        $(".collapse").collapse('toggle');
    });
});





module.exports = {footerTime};
