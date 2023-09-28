const oddButtons = document.querySelectorAll(".odd-button");
const ticketItems = document.getElementById("ticket-items");
const concluirButton = document.getElementById("concluir-button");
const message = document.getElementById("message");
const valorApostaInput = document.getElementById("valor-aposta");

let bilhete = {};

oddButtons.forEach(button => {
    button.addEventListener("click", () => {
        const odd = parseFloat(button.dataset.odd);
        const time = button.value;
        const partida = button.dataset.partida;

        if (!bilhete[partida]) {
            bilhete[partida] = [];
        }

        const partidaApostas = bilhete[partida];

        if (!partidaApostas.some(aposta => aposta.time === time)) {
            partidaApostas.push({ time, odd });

            const li = document.createElement("li");
            li.textContent = `${button.textContent} (${time})`;
            li.dataset.time = time; // Adiciona um atributo "data-time"
            li.dataset.partida = partida; // Adiciona um atributo "data-partida"
            ticketItems.appendChild(li);
        } else {
            alert("Você já apostou neste time nesta partida.");
        }
    });
});

concluirButton.addEventListener("click", () => {
    if (Object.keys(bilhete).length > 0 && valorApostaInput.value > 0) {
        const valorAposta = parseFloat(valorApostaInput.value);
        const valorTotal = (valorAposta * Object.values(bilhete).reduce((acc, apostas) => {
            return acc * apostas.reduce((acc, { odd }) => acc * odd, 1);
        }, 1)).toFixed(2);

        const apostas = Object.entries(bilhete).map(([partida, partidaApostas]) => {
            return partidaApostas.map(({ time, odd }) => `${time} odd ${odd}`);
        }).flat().join(", ");

        message.textContent = `Ganhos Potenciais: R$ ${valorTotal}.
        Apostas Selecionadas: ${apostas}. 
        Mande print do seu bilhete no nosso whatsapp: 4002-8922. `;
    } else {
        message.textContent = "Selecione as odds e digite o valor da aposta para concluir.";
    }
});

function bloquear() {
    oddButtons.forEach(button => {
        button.disabled = true;
    });
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
