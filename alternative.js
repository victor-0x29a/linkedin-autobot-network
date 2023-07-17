// OBS: ESSe aqui não foi feito um stop quando atingir o limite ainda então quando o limite for atingido, tem q atualizar a pagina para o codigo parar de rodar
// IMPORTANTE


// VERSAO ATUAL não testada

let divs = document.querySelectorAll('.mt2');

divs.forEach((div, index) => {
  let botoes = div.querySelector('button');
  let delay = 7000 // Atraso de 7 segundos
  
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
});

// VERSAO ANTIGA ABAIXO, NAO USE POIS NÂO ESTA CONCLUIDA

setInterval(()=>{
  let divs = document.querySelectorAll('.mt2');

divs.forEach(div => {
  let botoes = div.querySelector('button');
  console.log(
    botoes.ariaLabel
      .toLowerCase()
      .replace("conectar", "")
      .replace("para se", "")
      .replace("convidar", "") + " Enviou solicitação"
  );
  botoes.click();
});
}, 7000)
