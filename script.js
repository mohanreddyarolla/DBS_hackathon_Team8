function bookFlight()
{
    console.log('sdkfnsdj');
    let flightName = document.getElementById('flightName').value ;
    let flightID =document.getElementById('flightId').value ;
    let startPoint=document.getElementById('dep-from').value ;
    let destination = document.getElementById('dep-to').value ;

    let flightObject = {
        flightName:flightName,
        flightID: flightID,
        startPoint:startPoint,
        destination:destination
    }

    let currentFlights={};
    if(localStorage.bookedFlightData)
    {
        currentFlights=JSON.parse(localStorage.bookedFlightData);
    }

    currentFlights[flightID] = flightObject;
    console.log(currentFlights);
    localStorage.bookedFlightData = JSON.stringify(currentFlights);

   
    displayCurrentFlights();

}

function displayCurrentFlights()
{
    let allCurrentFlights = JSON.parse(localStorage.bookedFlightData);
console.log('kfkjsdkfk');
    for(const key in allCurrentFlights)
    {
        addFlight(allCurrentFlights[key]);
        console.log(allCurrentFlights[key]);
    }
}

function addFlight(currentFlightData)
{
    let currentBookesFlights = document.getElementById("currentBookedFlights");
    //currentBookesFlights.innerHTML='';

    let currentFlight = document.createElement('div');
    currentFlight.id = currentFlightData.flightID;
    currentFlight.className = 'flightBox';

    let flightId=  document.createElement('div');
    flightId.innerText = currentFlightData.flightID;

    let flightName = document.createElement('div');
    flightName.innerText = currentFlightData.flightName;

    currentFlight.appendChild(flightId);
    currentFlight.appendChild(flightName);

    currentBookesFlights.appendChild(currentFlight);
    console.log(currentBookesFlights);

    // let edit = document.createElement('button');
    // edit.setAttribute('onclick','edit(this.id)')

}

function edit(flightId)
{
    let allCurrentFlights = Json.parse(localStorage.bookedFlightData);

    let cuurentFlight = allCurrentFlights[flightId];



}
