// Função para reescrever o texto
function rewriteText() {
    const textContainer = document.getElementById("typed-text");
    const cursor = document.createElement("span");
    cursor.id = "cursor";
    cursor.textContent = "_";
    const texts = ["SEJA BEM-VINDO(A) AO MEU SITE", "PRAZER, SOU VICTOR MARK"];
    let textIndex = 0;
    let charIndex = 0;
    
    function typeNextCharacter() {
        if (textIndex < texts.length) {
            const currentText = texts[textIndex];
            if (charIndex < currentText.length) {
                textContainer.textContent += currentText.charAt(charIndex);
                charIndex++;
                setTimeout(typeNextCharacter, 100); // Intervalo de digitação em milissegundos
            } else {
                // Inserir o cursor no final do texto
                textContainer.appendChild(cursor);
                setInterval(function () {
                    cursor.style.display = cursor.style.display === "none" ? "inline" : "none";
                }, 1000); // Intervalo de piscagem do cursor em milissegundos
                
                // Reiniciar após 10 segundos
                setTimeout(function () {
                    textContainer.textContent = "";
                    cursor.style.display = "inline";
                    charIndex = 0;
                    textIndex++;
                    typeNextCharacter();
                }, 10000); // 10 segundos em milissegundos
            }
        } else {
            // Reiniciar do início após digitar todos os textos
            textIndex = 0;
            charIndex = 0;
            typeNextCharacter();
        }
    }

    // Iniciar o processo de digitação
    typeNextCharacter();
}

// Iniciar a animação quando a página estiver pronta
document.addEventListener("DOMContentLoaded", rewriteText);
