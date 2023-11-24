document.addEventListener("DOMContentLoaded", () => {
    const inputCor = document.querySelector("#input-cor");
    const botaoAdivinhar = document.querySelector("#botao-adivinhar");
    const mensagem = document.querySelector("#mensagem");
    const coresContainer = document.querySelector("#cores-container");
  
    const allColors = [
      "red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "gray", "black",
      // Adicione mais cores conforme necessário
    ];
  
    const subvetor = allColors.slice(0, 10);
    let corSorteada;
  
    // Criar elementos de cor dinamicamente
    subvetor.forEach(color => {
      const corElement = document.createElement("div");
      corElement.className = "cor";
      corElement.style.backgroundColor = color;
      corElement.addEventListener("click", () => checkGuess(color));
      coresContainer.appendChild(corElement);
    });
  
    // Função para obter uma cor aleatória da matriz
    function getRandomColor() {
      return allColors[Math.floor(Math.random() * allColors.length)];
    }
  
    // Função para verificar o palpite do usuário
    function checkGuess(guess) {
      if (guess === corSorteada) {
        mensagem.innerText = "Parabéns! Você acertou a cor!";
        document.body.style.backgroundColor = guess;
      } else {
        mensagem.innerText = "Tente novamente. A cor está incorreta.";
      }
    }
  
    const sortearCor = () => {
      corSorteada = getRandomColor();
      return corSorteada;
    };
  
    // Chama a função sortearCor imediatamente após a definição
    sortearCor();
  
    botaoAdivinhar.addEventListener("click", () => {
      const palpite = inputCor.value.toLowerCase();
      const acertou = adivinharCor(palpite);
      if (acertou) {
        mensagem.innerText = "Parabéns! Você acertou a cor!";
        document.body.style.backgroundColor = palpite;
      } else {
        mensagem.innerText = "Tente novamente. A cor está incorreta.";
      }
    });
  
    const adivinharCor = (cor) => {
      return cor === corSorteada;
    };
  });
  