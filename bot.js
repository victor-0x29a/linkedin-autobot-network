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
    i++;
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
