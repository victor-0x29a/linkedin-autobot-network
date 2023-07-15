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