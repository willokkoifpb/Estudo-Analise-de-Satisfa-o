const slideData = [
  { slide: "1", title: "Título", content: "Análise de Dados de Pesquisas de Satisfação com os Serviços de TI. GESTÃO DA TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO." },
  { slide: "2", title: "Cenário Atual: Crescimento", content: "Brasil acelera crescimento no setor de TI, mantém posição no Top 10 global e se destaca na América Latina. Crescimento de 13,9% em 2024, impulsionado por IA, digitalização, nuvem e cibersegurança." },
  { slide: "3", title: "Cenário Atual: Fator de Sucesso", content: "A Satisfação dos Usuários com a infraestrutura, serviços e suporte é um fator determinante de sucesso. A TI aparece como provedora de soluções para alcançar metas e objetivos." },
  { slide: "4", title: "Problemática", content: "Diante da evolução e do fortalecimento dos serviços de TI, de que forma as empresas podem utilizar os dados de satisfação para orientar suas estratégias?" },
  { slide: "5", title: "Objetivo", content: "Apresentar a importância das pesquisas de satisfação em TI, destacar indicadores utilizados e analisar artigos sobre o tema." },
  { slide: "7", title: "O que são Pesquisas de Satisfação?", content: "É um sistema de administração de informações que continuamente capta a voz do cliente, através da avaliação da performance da empresa a partir do ponto de vista do cliente, indicando caminhos para decisões futuras." },
  { slide: "8", title: "Estágios da Lucratividade", content: "Há uma relação indireta que liga a satisfação à lucratividade. A sequência é: Qualidade → Satisfação → Lealdade → Lucratividade." },
  { slide: "9", title: "Indicador: CSAT", content: "Customer Satisfaction Score (CSAT) mensura a satisfação com a experiência geral (produto, atendimento, suporte). Geralmente solicitado após uma venda, medido por notas, porcentagem ou escala de percepção." },
  { slide: "10", title: "Indicador: NPS", content: "Net Promoter Score (NPS) mensura a disposição de um consumidor em indicar os produtos/serviços. Classifica clientes em Detratores (0-6), Passivos (7-8) e Promotores (9-10) para medir a lealdade." },
  { slide: "11", title: "Importância das Pesquisas", content: "Identificação de pontos de melhoria, tomada de decisão mais assertiva, redução de custos operacionais, inovação orientada pelo cliente, aumento da fidelização e retenção." },
  { slide: "12-19", title: "Caso TRT-12: Visão Geral", subtitle: "Objetivo e Metodologia", content: "Objetivo: Analisar a satisfação dos usuários de TI no TRT-12. Metodologia: Pesquisa quantitativa (questionários) com usuários internos, usando práticas ITIL para gestão de serviços." },
  { slide: "12-19", title: "Caso TRT-12: Resultados", subtitle: "O 'KPI Melancia'", content: "Resultado geral foi alto (93,33% satisfeitos), mas mascarou problemas críticos. Este é o 'KPI Melancia': verde por fora, vermelho por dentro." },
  { slide: "12-19", title: "Caso TRT-12: Ponto Crítico", subtitle: "O Problema do PJe", content: "O principal ponto de insatisfação foi o Processo Judicial Eletrônico (PJe), seguido pela infraestrutura tecnológica." },
  { slide: "12-19", title: "Caso TRT-12: Conclusão", subtitle: "Ações e Sugestões", content: "A pesquisa foi vital para a melhoria. Sugestões: criar uma base de conhecimento, tutoriais e FAQs para ajudar os usuários." },
  { slide: "20-26", title: "Caso Jordram: Visão Geral", subtitle: "Objetivo e Metodologia", content: "Objetivo: Analisar a satisfação com o produto 'Guardian'. Metodologia: Questionário baseado no SUMI, focado em 5 fatores de usabilidade: gosto, eficiência, ajuda, controle e aprendizagem." },
  { slide: "20-26", title: "Caso Jordram: Resultados", subtitle: "A Contradição", content: "Clientes estavam muito insatisfeitos (75%) com as informações e mensagens de ajuda do sistema." },
  { slide: "20-26", title: "Caso Jordram: O Fator 'Uau!'", subtitle: "Lealdade Extrema", content: "Apesar da insatisfação com a ajuda, 100% dos clientes recomendariam o produto, indicando um NPS de +100 e uma lealdade extrema." },
  { slide: "20-26", title: "Caso Jordram: Conclusão", subtitle: "Usabilidade Gera Lealdade", content: "O caso demonstra uma forte ligação entre a usabilidade do produto (eficiência, controle) e a lealdade do cliente, mesmo com falhas no suporte/ajuda." }
];

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('cards-content').querySelector('.grid');
    const accordionContainer = document.getElementById('accordion-container');
    
    // Gerar Cards
    slideData.forEach(data => {
        const cardHTML = `
            <div class="card-container h-64">
                <div class="card" onclick="this.classList.toggle('is-flipped')">
                    <div class="card-face card-front">
                        <span class="slide-ref">Slide ${data.slide}</span>
                        <h2 class="card-title">${data.title}</h2>
                        ${data.subtitle ? `<p class="card-subtitle">${data.subtitle}</p>` : ''}
                    </div>
                    <div class="card-face card-back">
                        <span class="slide-ref">Slide ${data.slide}</span>
                        <h3 class="card-back-title">${data.subtitle || data.title}</h3>
                        <ul>
                            ${data.content.split('. ').map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHTML;
    });

    // Gerar Acordeão
    slideData.forEach(data => {
        const accordionHTML = `
            <div class="accordion-item">
                <div class="accordion-header">
                    <span><strong>Slide ${data.slide}:</strong> ${data.title}</span>
                    <i class="fas fa-chevron-down icon"></i>
                </div>
                <div class="accordion-content">
                    <div class="accordion-content-inner prose max-w-none">
                        <p>${data.content}</p>
                    </div>
                </div>
            </div>
        `;
        accordionContainer.innerHTML += accordionHTML;
    });

    // Lógica do Acordeão
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const content = header.nextElementSibling;
            
            if (item.classList.contains('open')) {
                content.style.maxHeight = null;
                item.classList.remove('open');
            } else {
                document.querySelectorAll('.accordion-item.open').forEach(openItem => {
                    openItem.classList.remove('open');
                    openItem.querySelector('.accordion-content').style.maxHeight = null;
                });
                content.style.maxHeight = content.scrollHeight + "px";
                item.classList.add('open');
            }
        });
    });

    // Configuração do Tema
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const html = document.documentElement;
    
    // Verificar preferência salva
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        html.classList.add('dark-mode');
        updateThemeButton(true);
    }

    // Event listeners para botões
    themeToggleDesktop.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);

    function toggleTheme() {
        html.classList.toggle('dark-mode');
        const isDark = html.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeButton(isDark);
    }

    function updateThemeButton(isDark) {
        themeToggleDesktop.innerHTML = isDark 
            ? '<i class="fas fa-sun mr-2"></i> Modo Claro' 
            : '<i class="fas fa-moon mr-2"></i> Modo Escuro';
            
        themeToggleMobile.innerHTML = isDark 
            ? '<i class="fas fa-sun text-xl"></i>' 
            : '<i class="fas fa-moon text-xl"></i>';
    }
});

// Lógica das Abas
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    document.getElementById(tabId + '-content').classList.add('active');
    document.querySelector(`button[onclick="switchTab('${tabId}')"]`).classList.add('active');
}
