//INFO-ENG: Just copy one of the versions, English or Portuguese, edit the time you want the requests to be made, currently it is 7 per second
//ENGLISH

//just copy the code you are going to use

// CURRENT VERSION tested and working, but errors were not handled 

// FROM HERE ************
let divs = document.querySelectorAll('.mt2');
let count = 0; // iteration counter
const numMaxIteration = 50; // Maximum number of iterations, recommend leaving it as 50, if needed, update and run again
const delay = 5000; // 5-second delay for each request, not recommended values lower than 1000
function executeConnectedMission() {
  if (count < numMaxIteration && count < divs.length) {
    try {
      let div = divs[count];
      let buttons = div.querySelector('button');
      console.log(
        buttons.ariaLabel
          .toLowerCase()
          .replace("connect", "")
          .replace("to", "")
          .replace("to invite", "") + " Sent request"
      );
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
    console.log(`Reached limit of ${numMaxIteration} iterations \n`);
    console.log(`Approximate execution time: ${Math.round((delay * divs.length) / 60)} minutes - byLogan \n`);
    return; // Stop the execution
  }
}
executeConnectedMission();
// UP TO HERE ***************
