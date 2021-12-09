// Write your JavaScript code here!

const { addDestinationInfo, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    let form = document.querySelector("form");
    let faultyItems = document.getElementbyID("faultyItems");
    let launchStatus = document.getElementbyID("launchStatus");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let pilotName = document.getElementbyId("input[name=pilotName]");
        let pilot = pilotName.value;

        let copilotName = document.getElementbyId("input[name=copilotName]");
        let copilot = copilotName.value;

        let fuelLevelInput = document.getElementbyId("input[name=fuelLevel]");
        let fuelLevel = Number(fuelLevelInput.value);

        let cargoInput = document.getElementbyID("input[name=CargoMass]");
        let cargoLevel = Number(cargoInput.value);

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);



    })



   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch ();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
   })
   
});