// VERSAO ATUAL 

#IMPORTANTE
INFO-PT: Apenas copie uma das versoes, ingles ou portugues, editar o tempo que voce quer que seja feito as requisicoes, atualmente é 7 por segundo
INFO-ENG: Just copy one of the versions, English or Portuguese, edit the time you want the requests to be made, currently it is 7 per second

PORTUGUES // testado e funcionando, porem não foi tratado os erros

copie apenas o código que você vai usar

// DAQ ************
let divs = document.querySelectorAll('.mt2');
let count = 0; // contador de iterações
const numMaxIteration = 50; // Numero maximo de iterações, recomendo deixar 50, se precisar atualize e faça de novo
const delay = 7000; // Atraso de 7 segundos para cada requisição, não recomendado valores menores que 1000
function executaMissaoDosConectados() {
  if (count < numMaxIteration && count < divs.length) {
    try {
      let div = divs[count];
      let botoes = div.querySelector('button');
      console.log(
        botoes.ariaLabel
          .toLowerCase()
          .replace("conectar", "")
          .replace("para se", "")
          .replace("convidar", "") + " Enviou solicitação"
      );
      botoes.click();
      count++; // Incrementa o contador de iterações
      console.log(`Enviou conexao ${count} \n`);
    } catch (error) {
      console.log('ERRO DESCONHECIDO \n\n');
      console.log(error);
      console.log('\n\n');
    }
    if (count === divs.length) {
      console.log('Acabou, a quantidade de divs é menor que o limite maximo \n');
      console.log('Se precisar, atualize a pagina e reexecute o script \n\n');
      console.log(`Tempo que levou a execução: ${(delay * divs.length) / 60} minutos ou ${delay * divs.length} segundos - byLogan \n`);
      return;
    } else {
      setTimeout(executaMissaoDosConectados, delay);
    }
  } else {
    console.log(`Limite de ${numMaxIteration} iterações atingido \n`);
    console.log(`Tempo que levou a execução aproximadamente: ${Math.round((delay * divs.length) / 60)} minutos - byLogan \n`);
    return; // Interrompe a execução
  }
}
executaMissaoDosConectados();
// ATE AQUI ***************

################################################################################
ENGLISH
just copy the code you are going to use

// CURRENT VERSION tested and working, but errors were not handled 

// FROM HERE ************
let divs = document.querySelectorAll('.mt2');
let count = 0; // iteration counter
const numMaxIteration = 50; // Maximum number of iterations, recommend leaving it as 50, if needed, update and run again
const delay = 7000; // 7-second delay for each request, not recommended values lower than 1000
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
          .replace("invite", "") + " Sent request"
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
