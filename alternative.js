// VERSAO ATUAL não testada ainda...

PORTUGUES

copie apenas o código que você vai usar

let divs = document.querySelectorAll('.mt2');
function executaMissaoDosConectados() {
  let count = 0; // contador de iterações
  const numMaxIteration = 100; // Numero maximo de iterações, recomendo deixar 100
  divs.forEach((div, index) => {
    if (count < numMaxIteration) { // Verifica se o limite de 100 iterações ainda não foi atingido
      try {
        let botoes = div.querySelector('button');
        const delay = 7000; // Atraso de 7 segundos para cada requisição, não recomendado valores menores que 1000
        setTimeout(() => {
          console.log(
            botoes.ariaLabel
              .toLowerCase()
              .replace("conectar", "")
              .replace("para se", "")
              .replace("convidar", "") + " Enviou solicitação"
          );
          botoes.click();
        }, delay);
        count++; // Incrementa o contador de iterações
        console.log(`Enviou conexao ${count} \n`);
      } catch (error) {
        console.log('ERRO DESCONHECIDO \n\n');
      }
      if(divs.length == count){
        console.log('Acabou, a quantidade de divs é menor que o limite maximo \n');
        console.log('Se precisar, atualize a pagina e reexecute o script \n\n');
        console.log(`Tempo que levou a execução: ${(delay*divs.length)/60}minutos ou ${delay*divs.length} segundos - byLogan \n`);
        return
      }
    } else {
      console.log(`Limite de ${numMaxIteration} iterações atingido \n`);
      console.log(`Tempo que levou a execução aproximadamente: ${Math.round((delay * divs.length) / 60)} minutos - byLogan \n`);
      return; // Interrompe o loop forEach
    }
  });
}
executaMissaoDosConectados();

################################################################################


ENGLISH

just copy the code you are going to use

// CURRENT VERSION not yet tested...

let divs = document.querySelectorAll('.mt2');
function executeConnectedMission() {
  let count = 0; // iteration counter
  const maxIterations = 100; // Maximum number of iterations, recommend leaving it as 100
  divs.forEach((div, index) => {
    if (count < maxIterations) { // Checks if the limit of 100 iterations has not been reached yet
      try {
        let buttons = div.querySelector('button');
        const delay = 7000; // 7-second delay for each request, values lower than 1000 are not recommended
        setTimeout(() => {
          console.log(
            buttons.ariaLabel
              .toLowerCase()
              .replace("connect", "")
              .replace("to", "")
              .replace("to invite", "") + " Sent request"
          );
          buttons.click();
        }, delay);
        count++; // Increment the iteration counter
        console.log(`Sent connection ${count} \n`);
      } catch (error) {
        console.log('UNKNOWN ERROR \n\n');
      }
      if (divs.length == count) {
        console.log('Finished, the number of divs is less than the maximum limit \n');
        console.log('If needed, refresh the page and re-run the script \n\n');
        console.log(`Execution time: ${(delay * divs.length) / 60} minutes or ${delay * divs.length} seconds - byLogan \n`);
        return;
      }
    } else {
      console.log(`Limit of ${maxIterations} iterations reached \n`);
      console.log(`Approximate execution time: ${Math.round((delay * divs.length) / 60)} minutes - byLogan \n`);
      return; // Stop the forEach loop
    }
  });
}
executeConnectedMission();
