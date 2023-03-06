/* PT-BR */
let [i, limite, conteudo] = [
    520,
    99999,
    document.querySelector(".scaffold-finite-scroll__content"),
  ];
  let intervalo = setInterval(() => {
    if (i >= limite) {
      console.log("Finalizou a automacao " + limite);
      clearInterval(intervalo);
    }
    i = i + 5;
    try {
      let botao = document.querySelector(`#ember${i}`);
      if (botao.ariaLabel.toLowerCase().includes("conectar")) {
        console.log(
          botao.ariaLabel
            .toLowerCase()
            .replace("conectar", "")
            .replace("para se", "")
            .replace("convidar", "") + " Enviou solicitacao"
        );
        botao.click();
      }
    } catch (e) {
      console.log("Erro - Botao nao encontrado");
      try {
    document.querySelector('button[aria-label="Entendi"]').click();
      } catch (e) {
        conteudo.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        // Skip
      }
      // Erro
    }
  }, 400);


/* EN */
let [i, limite, conteudo] = [
    520,
    99999,
    document.querySelector(".scaffold-finite-scroll__content"),
  ];
  let intervalo = setInterval(() => {
    if (i >= limite) {
      console.log("Finalizou a automacao " + limite);
      clearInterval(intervalo);
    }
    i = i + 5;
    try {
      let botao = document.querySelector(`#ember${i}`);
      if (botao.ariaLabel.toLowerCase().includes("connect")) {
        console.log(
          botao.ariaLabel
            .toLowerCase()
            .replace("connect", "")
            .replace("to", "")
            .replace("to invite", "") + " Send"
        );
        botao.click();
      }
    } catch (e) {
      console.log("Error - Not found button");
      try {
    document.querySelector('button[aria-label="I understood"]').click();
      } catch (e) {
        conteudo.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
        // Skip
      }
      // Erro
    }
  }, 400);
