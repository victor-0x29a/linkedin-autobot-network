// OBS: ESSe aqui não foi feito um stop quando atingir o limite ainda então quando o limite for atingido, tem q atualizar a pagina para o codigo parar de rodar
// IMPORTANTE

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
