// VERSAO ATUAL 
//INFO-PT: Apenas copie uma das versoes, ingles ou portugues, editar o tempo que voce quer que seja feito as requisicoes, atualmente é 7 por segundo
//PORTUGUES // testado e funcionando, porem não foi tratado os erros

//copie apenas o código que você vai usar

/**
 * O passeOIdDaDivSeletora é o id da section onde vai estar todos os campos com botão para fazer conexão
 * foi uma forma de limitar a area para que funcione 100% a seleção
 */

// DAQ ************
const passeOIdDaDivSeletora = 'ember388' // passe apenas a string SEM # // Esse é apenas um valor de exemplo
const sectorId = document.querySelector('#' + passeOIdDaDivSeletora);
var divs;
if (sectorId) {
  divs = sectorId.querySelectorAll('.mt2');
} else {
  divs = document.querySelectorAll('.mt2');
}
let count = 0; // contador de iterações
const numMaxIteration = 50; // Numero maximo de iterações, recomendo deixar 50, se precisar atualize e faça de novo
const delay = 7000; // Atraso de 7 segundos para cada requisição, não recomendado valores menores que 1000
function executaMissaoDosConectados() {
  if (count < numMaxIteration && count < divs.length) {
    try {
      let div = divs[count];
      let botoes = div.querySelector('button');
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