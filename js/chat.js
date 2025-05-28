// Script para o chat com IA aprimorado
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Base de conhecimento sobre Ayrton Senna
    const sennaKnowledge = {
        "nascimento": "Ayrton Senna nasceu em 21 de março de 1960, em São Paulo, Brasil.",
        "morte": "Ayrton Senna faleceu em 1º de maio de 1994, após um acidente durante o Grande Prêmio de San Marino, em Imola, Itália.",
        "idade": "Ayrton Senna faleceu aos 34 anos de idade.",
        "nome completo": "O nome completo dele era Ayrton Senna da Silva.",
        "família": "Ele era filho de Milton da Silva e Neide Senna da Silva, com dois irmãos: Viviane e Leonardo.",
        "início": "Senna começou no kart aos 13 anos. Sua carreira internacional iniciou em 1981 na Fórmula Ford 1600.",
        "f1": "Senna estreou na Fórmula 1 em 1984 pela Toleman. Correu pela Lotus, McLaren e Williams.",
        "títulos": "Ayrton Senna foi tricampeão mundial de Fórmula 1: 1988, 1990 e 1991, pela McLaren.",
        "vitórias": "Ele conquistou 41 vitórias em Grandes Prêmios.",
        "poles": "Senna fez 65 pole positions na carreira, um recorde na sua época.",
        "pódios": "Ayrton subiu ao pódio 80 vezes na Fórmula 1.",
        "mônaco": "Senna venceu o GP de Mônaco 6 vezes, um recorde até hoje.",
        "capacete": "Seu capacete tinha as cores da bandeira brasileira: amarelo, verde e azul.",
        "rival": "Alain Prost foi seu maior rival na Fórmula 1.",
        "chuva": "Senna era chamado de 'Rei da Chuva' por seu desempenho incrível em pistas molhadas.",
        "estoril": "Sua primeira vitória foi no GP de Portugal em Estoril, 1985, sob forte chuva.",
        "japão": "Senna e Prost tiveram seus confrontos mais marcantes no GP do Japão, em Suzuka, nos anos 1989 e 1990.",
        "religião": "Senna era muito religioso e lia a Bíblia regularmente.",
        "filantropia": "Ele fazia filantropia ainda em vida, muitas vezes anonimamente.",
        "instituto": "O Instituto Ayrton Senna foi fundado em 1994 por sua irmã Viviane, focando em educação para crianças e jovens no Brasil.",
        "frases": "Frases famosas: 'Na adversidade, uns desistem, enquanto outros batem recordes.' e 'Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si.'",
        "legado": "Senna deixou um legado de excelência, inspiração e melhorias na segurança da Fórmula 1."
    };

    // Respostas padrão
    const defaultResponses = [
        "Desculpe, não tenho essa informação. Pergunte sobre sua carreira, títulos ou curiosidades.",
        "Ótima pergunta! Posso falar sobre títulos, vitórias ou sua vida. Pergunte!",
        "Não tenho essa resposta, mas posso contar sobre sua carreira ou o Instituto Ayrton Senna.",
        "Hmm... não sei disso. Que tal saber sobre seu capacete, rivalidades ou vitórias?"
    ];

    // Saudações possíveis
    const greetings = [
        "Olá! O que deseja saber sobre Ayrton Senna?",
        "Oi! Pergunte sobre a vida e carreira de Ayrton Senna.",
        "Seja bem-vindo! Fale comigo sobre Ayrton Senna.",
        "Salve! Quer saber mais sobre o nosso campeão Ayrton Senna?"
    ];

    // Função para normalizar texto, removendo repetições exageradas e acentos
    function normalizeText(text) {
        return text
            .toLowerCase()
            .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove acentos
            .replace(/(.)\1{2,}/g, '$1'); // reduz letras repetidas (boooom -> bom)
    }

    // Adiciona mensagens no chat
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', isUser ? 'user' : 'bot');
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Processa a entrada do usuário
    function processUserInput() {
        const userText = userInput.value.trim();
        if (userText === '') return;

        addMessage(userText, true);
        userInput.value = '';

        setTimeout(() => {
            const response = generateResponse(userText);
            addMessage(response, false);
        }, 500);
    }

    // Gera resposta baseada na entrada
    function generateResponse(input) {
        const lowerInput = normalizeText(input);

        // Verificar saudações
        if (lowerInput.match(/^(oi|ola|olá|e ai|eaee|oie|salve|bom dia|boa tarde|boa noite|hey|hi|hello)/i)) {
            return greetings[Math.floor(Math.random() * greetings.length)];
        }

        // Verificar agradecimento
        if (lowerInput.match(/(obrigado|obrigada|vlw|valeu|thanks|agradeco)/i)) {
            return "De nada! Pergunte-me mais sobre Ayrton Senna se desejar!";
        }

        // Verificar despedida
        if (lowerInput.match(/(tchau|adeus|ate mais|flw|fui|bye|goodbye)/i)) {
            return "Até mais! Sempre que quiser, estarei aqui para falar sobre Ayrton Senna.";
        }

        // Perguntas específicas
        if (lowerInput.includes("quando") && (lowerInput.includes("nasceu") || lowerInput.includes("nascimento"))) {
            return sennaKnowledge["nascimento"];
        }

        if (lowerInput.includes("quando") && (lowerInput.includes("morreu") || lowerInput.includes("faleceu") || lowerInput.includes("morte"))) {
            return sennaKnowledge["morte"];
        }

        if (lowerInput.includes("idade")) {
            return sennaKnowledge["idade"];
        }

        if (lowerInput.includes("nome completo")) {
            return sennaKnowledge["nome completo"];
        }

        if (lowerInput.includes("familia") || lowerInput.includes("pais") || lowerInput.includes("irma")) {
            return sennaKnowledge["família"];
        }

        if (lowerInput.includes("inicio") || lowerInput.includes("começou") || lowerInput.includes("comeco")) {
            return sennaKnowledge["início"];
        }

        if (lowerInput.includes("f1") || lowerInput.includes("formula 1") || lowerInput.includes("carreira")) {
            return sennaKnowledge["f1"];
        }

        if (lowerInput.includes("titulo") || lowerInput.includes("campeao") || lowerInput.includes("campeão")) {
            return sennaKnowledge["títulos"];
        }

        if (lowerInput.includes("vitoria") || lowerInput.includes("venceu") || lowerInput.includes("ganhou")) {
            return sennaKnowledge["vitórias"];
        }

        if (lowerInput.includes("pole")) {
            return sennaKnowledge["poles"];
        }

        if (lowerInput.includes("podio") || lowerInput.includes("pódio")) {
            return sennaKnowledge["pódios"];
        }

        if (lowerInput.includes("monaco")) {
            return sennaKnowledge["mônaco"];
        }

        if (lowerInput.includes("capacete") || lowerInput.includes("cores")) {
            return sennaKnowledge["capacete"];
        }

        if (lowerInput.includes("rival") || lowerInput.includes("prost")) {
            return sennaKnowledge["rival"];
        }

        if (lowerInput.includes("chuva") || lowerInput.includes("molhada")) {
            return sennaKnowledge["chuva"];
        }

        if (lowerInput.includes("estoril")) {
            return sennaKnowledge["estoril"];
        }

        if (lowerInput.includes("japao") || lowerInput.includes("suzuka")) {
            return sennaKnowledge["japão"];
        }

        if (lowerInput.includes("religiao") || lowerInput.includes("fe") || lowerInput.includes("biblia")) {
            return sennaKnowledge["religião"];
        }

        if (lowerInput.includes("filantropia") || lowerInput.includes("doacoes") || lowerInput.includes("ajuda")) {
            return sennaKnowledge["filantropia"];
        }

        if (lowerInput.includes("instituto")) {
            return sennaKnowledge["instituto"];
        }

        if (lowerInput.includes("frase") || lowerInput.includes("citacao") || lowerInput.includes("disse")) {
            return sennaKnowledge["frases"];
        }

        if (lowerInput.includes("legado") || lowerInput.includes("importancia") || lowerInput.includes("impacto")) {
            return sennaKnowledge["legado"];
        }

        // Busca geral por palavra-chave
        for (const [keyword, response] of Object.entries(sennaKnowledge)) {
            if (lowerInput.includes(keyword)) {
                return response;
            }
        }

        // Resposta padrão se não encontrar nada
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    // Event listeners
    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', processUserInput);
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                processUserInput();
            }
        });
    }
});
