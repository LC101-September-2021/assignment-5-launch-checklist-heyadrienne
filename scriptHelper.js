// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
   let numberInput = Number(testInput);
   if (testInput === "") {
       return "Empty";
   } else if (isNaN(numberInput)) {
       return "Not a Number";
   } else if (isNaN(numberInput) === false) {
       return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   let pilotStatus = document.getElementbyId("pilotStatus");
   let copilotStatus = document.getElementbyId("copilotStatus");
   let faultyItems = document.getElementbyID("faultyItems");
   let fuelStatus = document.getElementbyId("fuelStatus");
   let cargoStatus = document.getElementbyID("cargoStatus");
   let launchStatus = document.getElementbyID("launchStatus");

   //perform check of empty
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel === "Empty") || validateInput(cargoLevel) === "Empty") {
       alert = "All Fields Required!"
    //perform NaN check
   } else if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number" || validateInput(fuelLevel === "Not a Number") || validateInput(cargoLevel) === "Not a Number") {
        alert = "Confirm data is valid for ALL fields!"
   } else {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            //not enough fuel & acceptable cargo
        if (fuelLevel < 10000 && cargoLevel <= 10000){
            fuelStatus.innerHTML = "Not enough fuel for the journey.";
            launchStatus.innerHTML = "Shuttle NOT ready for launch!";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Cargo mass in acceptable range for launch.";
           // enough fuel & too much cargo
          } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            fuelStatus.innerHTML = "Fuel level acceptable for launch.";
            launchStatus.innerHTML = "Shuttle NOT ready for launch!";
            launchStatus.style.color = "red";
            cargoStatus.innerHTML = "Too much mass for the shuttle to launch!";
            //enough fuel & acceptable cargo aka ready for launch
          } else {
            fuelStatus.innerHTML = "Fuel level acceptable for launch.";
            launchStatus.innerHTML = "Shuttle is ready for launch!";
            launchStatus.style.color = "green";
            cargoStatus.innerHTML = "Cargo mass is an acceptable range for launch.";
          }
   }
}

/*If the user submits a fuel level that is too low (less than 10,000 liters), change faultyItems to visible with an updated fuel status stating that there is not enough fuel for the journey. The text of the h2 element, launchStatus, should also change to "Shuttle not ready for launch" and the color should change to red.

If the user submits a cargo mass that is too large (more than 10,000 kilograms), change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off. The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red.

If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch".
*/


/*
async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) );

    planetsReturned = await fetch().then(function(response) {
        return response.json();
        });

    return planetsReturned;
}
*/
async function myFetch() {
    let planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        return response.json())
        }
    return planetsReturned;
}

function pickPlanet(planets) {
    let random = Math.floor(Math.random() * planets.length);
    return planets[random];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
