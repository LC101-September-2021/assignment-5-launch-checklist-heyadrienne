// Write your JavaScript code here!

window.addEventListener("load", function() {

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
    let pilotName = document.getElementbyId("input[name=pilotName]");
    let copilotName = document.getElementbyId("input[name=copilotName]");
    let faultyItems = document.getElementbyID("faultyItems");
    let fuelLevel = document.getElementbyId("input[name=fuelLevel]");
    let cargoMass = document.getElementbyID("input[name=CargoMass]");
    let launchStatus = document.getElementbyID("launchStatus");



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});