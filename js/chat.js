// Script para o chat com IA
document.addEventListener('DOMContentLoaded', function() {
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    
    // Base de conhecimento sobre Ayrton Senna
    const sennaKnowledge = {
        // Informações biográficas
        "nascimento": "Ayrton Senna nasceu em 21 de março de 1960, em São Paulo, Brasil.",
        "morte": "Ayrton Senna faleceu em 1º de maio de 1994, após um acidente durante o Grande Prêmio de San Marino, em Imola, Itália.",
        "idade": "Ayrton Senna faleceu aos 34 anos de idade.",
        "nome completo": "O nome completo dele era Ayrton Senna da Silva.",
        "família": "Ayrton Senna era filho de Milton da Silva e Neide Senna da Silva. Ele tinha uma irmã mais velha, Viviane, e um irmão mais novo, Leonardo.",
        
        // Carreira
        "início": "Senna começou no kart aos 13 anos e sua carreira internacional começou em 1981, quando se mudou para a Inglaterra para competir na Fórmula Ford 1600.",
        "f1": "Senna estreou na Fórmula 1 em 1984 pela equipe Toleman. Depois correu pela Lotus (1985-1987), McLaren (1988-1993) e Williams (1994).",
        "títulos": "Ayrton Senna conquistou três títulos mundiais de Fórmula 1: 1988, 1990 e 1991, todos pela McLaren.",
        "vitórias": "Senna conquistou 41 vitórias em Grandes Prêmios de Fórmula 1.",
        "poles": "Senna conquistou 65 poles positions, sendo considerado o 'Rei da Classificação'.",
        "pódios": "Senna subiu ao pódio 80 vezes em sua carreira na Fórmula 1.",
        "mônaco": "Senna venceu seis vezes o GP de Mônaco, um recorde que permanece até hoje, sendo conhecido como 'Rei de Mônaco'.",
        
        // Curiosidades
        "capacete": "O capacete de Senna tinha as cores da bandeira brasileira: amarelo, verde e azul. O design se tornou icônico no mundo do automobilismo.",
        "rival": "Alain Prost foi o maior rival de Senna na Fórmula 1. A rivalidade entre os dois é considerada uma das maiores da história do esporte.",
        "chuva": "Senna era conhecido como 'Rei da Chuva' por suas habilidades excepcionais em condições de pista molhada.",
        "estoril": "Sua primeira vitória na F1 foi no GP de Portugal em Estoril, em 1985, sob forte chuva.",
        "japão": "Os confrontos mais famosos entre Senna e Prost ocorreram no Japão, em Suzuka, nos anos de 1989 e 1990.",
        "religião": "Senna era um homem muito religioso e frequentemente falava sobre sua fé. Ele costumava ler a Bíblia regularmente.",
        "filantropia": "Mesmo antes de sua morte, Senna já realizava trabalhos filantrópicos, muitas vezes de forma anônima.",
        
        // Instituto Senna
        "instituto": "O Instituto Ayrton Senna foi fundado em 1994 por desejo do próprio piloto. É presidido por sua irmã, Viviane Senna, e já beneficiou milhões de crianças e jovens brasileiros através da educação.",
        
        // Frases famosas
        "frases": "Algumas frases famosas de Senna incluem: 'Se você quer ser bem-sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si.', 'Não tenho ídolos. Admiro o trabalho, a dedicação e a competência.', 'Na adversidade, uns desistem, enquanto outros batem recordes.'",
        
        // Legado
        "legado": "O legado de Senna vai muito além das pistas. Ele se tornou um símbolo de excelência, determinação e patriotismo para os brasileiros. Após sua morte, a segurança na F1 melhorou significativamente."
    };
    
    // Respostas padrão para perguntas não reconhecidas
    const defaultResponses = [
        "Desculpe, não tenho essa informação específica sobre Ayrton Senna. Você pode perguntar sobre sua carreira, conquistas ou vida pessoal.",
        "Essa é uma ótima pergunta, mas não tenho detalhes sobre isso. Posso falar sobre as vitórias, poles, ou momentos marcantes da carreira de Senna.",
        "Não tenho essa informação no momento. Que tal perguntar sobre os títulos mundiais, recordes ou curiosidades sobre Ayrton Senna?",
        "Não consigo responder a isso com precisão. Você gostaria de saber sobre o Instituto Ayrton Senna ou sobre sua carreira na Fórmula 1?"
    ];
    
    // Mensagens de boas-vindas
    const greetings = [
        "Olá! Como posso ajudar com informações sobre Ayrton Senna?",
        "Oi! Estou aqui para falar sobre o legado de Ayrton Senna. O que gostaria de saber?",
        "Olá! Pergunte-me sobre a vida e carreira do tricampeão Ayrton Senna!",
        "Bem-vindo! Estou pronto para compartilhar informações sobre o ídolo Ayrton Senna."
    ];
    
    // Função para adicionar mensagem ao chat
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user' : 'bot');
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Função para processar a entrada do usuário e gerar resposta
    function processUserInput() {
        const userText = userInput.value.trim();
        if (userText === '') return;
        
        // Adicionar mensagem do usuário ao chat
        addMessage(userText, true);
        
        // Limpar input
        userInput.value = '';
        
        // Simular processamento (opcional)
        setTimeout(() => {
            // Gerar resposta
            const response = generateResponse(userText);
            addMessage(response, false);
        }, 500);
    }
    
    // Função para gerar resposta com base na entrada do usuário
    function generateResponse(input) {
        // Converter para minúsculas para facilitar a comparação
        const lowerInput = input.toLowerCase();
        
        // Verificar se é uma saudação
        if (lowerInput.match(/^(oi|olá|ola|hey|e aí|e ai|hi|hello)/i)) {
            return greetings[Math.floor(Math.random() * greetings.length)];
        }
        
        // Verificar se é um agradecimento
        if (lowerInput.match(/(obrigado|obrigada|valeu|thanks)/i)) {
            return "De nada! Estou aqui para ajudar com informações sobre Ayrton Senna. Tem mais alguma pergunta?";
        }
        
        // Verificar se é uma despedida
        if (lowerInput.match(/(tchau|adeus|até mais|ate mais|bye|goodbye)/i)) {
            return "Até mais! Se tiver mais perguntas sobre Ayrton Senna, estarei aqui!";
        }
        
        // Verificar perguntas específicas sobre nascimento
        if ((lowerInput.includes("quando") || lowerInput.includes("que dia") || lowerInput.includes("data")) && 
            (lowerInput.includes("nasc") || lowerInput.includes("nasceu"))) {
            return sennaKnowledge["nascimento"];
        }
        
        // Verificar perguntas sobre morte
        if ((lowerInput.includes("quando") || lowerInput.includes("que dia") || lowerInput.includes("data")) && 
            (lowerInput.includes("morreu") || lowerInput.includes("faleceu") || lowerInput.includes("morte"))) {
            return sennaKnowledge["morte"];
        }
        
        // Verificar perguntas sobre títulos
        if (lowerInput.includes("quantos") && 
            (lowerInput.includes("título") || lowerInput.includes("titulos") || lowerInput.includes("campeão") || lowerInput.includes("campeao"))) {
            return sennaKnowledge["títulos"];
        }
        
        // Verificar perguntas sobre vitórias
        if (lowerInput.includes("quantas") && 
            (lowerInput.includes("vitória") || lowerInput.includes("vitorias") || lowerInput.includes("ganhou") || lowerInput.includes("venceu"))) {
            return sennaKnowledge["vitórias"];
        }
        
        // Verificar perguntas sobre instituto
        if (lowerInput.includes("instituto")) {
            return sennaKnowledge["instituto"];
        }
        
        // Verificar perguntas sobre frases
        if (lowerInput.includes("frase") || lowerInput.includes("citação") || lowerInput.includes("disse")) {
            return sennaKnowledge["frases"];
        }
        
        // Verificar perguntas sobre rival
        if (lowerInput.includes("rival") || lowerInput.includes("prost")) {
            return sennaKnowledge["rival"];
        }
        
        // Verificar perguntas sobre chuva
        if (lowerInput.includes("chuva") || lowerInput.includes("molhada")) {
            return sennaKnowledge["chuva"];
        }
        
        // Verificar perguntas sobre capacete
        if (lowerInput.includes("capacete") || lowerInput.includes("cores")) {
            return sennaKnowledge["capacete"];
        }
        
        // Verificar perguntas sobre legado
        if (lowerInput.includes("legado") || lowerInput.includes("importância") || lowerInput.includes("importancia")) {
            return sennaKnowledge["legado"];
        }
        
        // Procurar palavras-chave na base de conhecimento
        for (const [keyword, response] of Object.entries(sennaKnowledge)) {
            if (lowerInput.includes(keyword)) {
                return response;
            }
        }
        
        // Se não encontrar correspondência, retornar uma resposta padrão
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
