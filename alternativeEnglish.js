// CURRENT VERSION
//INFO-EN: Just copy one of the versions, English or Portuguese, edit the time you want the requests to be made, currently it's 7 per second
//PORTUGUESE // tested and working, but errors were not handled

//copy only the code you will use

/**
  The passTheSelectorDivId is the id of the section where all the fields with connection buttons will be located.
  It was a way to limit the area for the selection to work 100%.
*/

// FROM HERE ************
const passTheSelectorDivId = 'ember1642' // pass only the string WITHOUT # // This is just an example value
const sectorId = document.querySelector('#' + passeOIdDaDivSeletora);
var divs;
if (sectorId) {
  divs = sectorId.querySelectorAll('.mt2');
} else {
  divs = document.querySelectorAll('.mt2');
}
let count = 0; // iteration counter
const numMaxIteration = 50; // Maximum number of iterations, I recommend leaving it at 50, if needed, update and run again
const delay = 7000; // Delay of 7 seconds for each request, not recommended values lower than 1000
function executeConnectedMission() {
  if (count < numMaxIteration && count < divs.length) {
    try {
      let div = divs[count];
      let buttons = div.querySelector('button');
      buttons.click();
      count++; // Increment the iteration counter
      console.log(`Sent connection ${count} \n`);
    } catch (error) {
      console.log('UNKNOWN ERROR \n\n');
      console.log(error);
      console.log('\n\n');
    }
    if (count === divs.length) {
      console.log('Finished, the number of divs is less than the maximum limit \n');
      console.log('If needed, refresh the page and re-run the script \n\n');
      console.log(`Execution time: ${(delay * divs.length) / 60} minutes or ${delay * divs.length} seconds - byLogan \n`);
      return;
    } else {
      setTimeout(executeConnectedMission, delay);
    }
  } else {
    console.log(`Limit of ${numMaxIteration} iterations reached \n`);
    console.log(`Approximate execution time: ${Math.round((delay * divs.length) / 60)} minutes - byLogan \n`);
    return; // Stop the execution
  }
}
executeConnectedMission();
// UP TO HERE ***************
