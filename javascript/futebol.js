const oddButtons = document.querySelectorAll(".odd-button");
const ticketItems = document.getElementById("ticket-items");
const concluirButton = document.getElementById("concluir-button");
const message = document.getElementById("message");
const valorApostaInput = document.getElementById("valor-aposta");

let bilhete = [];

oddButtons.forEach(button => {
    button.addEventListener("click", () => {
        const odd = parseFloat(button.dataset.odd);
        bilhete.push(odd);

        const li = document.createElement("li");
        li.textContent = `${button.textContent}`;
        ticketItems.appendChild(li);
    });
});

concluirButton.addEventListener("click", () => {
    if (bilhete.length > 0 && valorApostaInput.value > 0) {
        const valorAposta = parseFloat(valorApostaInput.value);
        const valorTotal = (valorAposta * bilhete.reduce((acc, odd) => acc * odd, 1)).toFixed(2);
        message.textContent = `Ganhos Potenciais: R$ ${valorTotal}. 
        Mande print do seu bilhete no nosso whatsapp: 4002-8922. `;
    } else {
        message.textContent = "Selecione as odds e digite o valor da aposta para concluir.";
    }
});
function bloquear (){
    oddButtons.disabled = true
}

const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});
