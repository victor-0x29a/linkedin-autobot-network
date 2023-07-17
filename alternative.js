// VERSAO ATUAL não testada ainda...

let divs = document.querySelectorAll('.mt2');
function executaMissaoDosConectados() {
  let count = 0; // contador de iterações
  const numMaxIteration = 100; // Numero maximo de iterações, recomendo deixar 100
  divs.forEach((div, index) => {
    if (count < numMaxIteration) { // Verifica se o limite de 100 iterações ainda não foi atingido
      let botoes = div.querySelector('button');
      const delay = 7000; // Atraso de 7 segundos
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
      console.log(`Enviou conexao ${count}`);
      if(divs.length === count){
        console.log('Acabou, a quantidade de divs é menor que o limite maximo \n');
        console.log('Se precisar, atualize a pagina e reexecute o script');
        return
      }
    } else {
      console.log(`Limite de ${numMaxIteration} iterações atingido`);
      return; // Interrompe o loop forEach
    }
  });
}
executaMissaoDosConectados();