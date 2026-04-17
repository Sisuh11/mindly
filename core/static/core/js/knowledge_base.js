/**
 * knowledge_base.js — O "Cérebro" do Mindly 3.0 (Versão Cérebro Absoluto)
 * 
 * Este arquivo foi massivamente treinado com o conteúdo absoluto do ENEM.
 * Contém informações institucionais, mentalidade, neurociência de estudos e 
 * uma densidade colossal de tópicos das 4 grandes áreas e redação.
 */

const MINDLY_KB = {
    institucional: {
        nome: "Mindly",
        missao: "Democratizar a aprovação no ENEM através de IA de ponta e metodologia ativa. Sou o Mindly Brain, sua IA mentora de elite 24/7.",
        funcionalidades: {
            "Simulados": "Banco de dados com milhares de questões reais e correção instantânea.",
            "Matérias": "Grade de conteúdos organizada por peso e recorrência no ENEM.",
            "Mindly Brain": "Sua IA pessoal treinada para tirar dúvidas, resumir textos e criar planos de estudo.",
            "Pomodoro": "Gestão de tempo baseada na técnica científica de concentração."
        }
    },

    resumo_geral_materias: {
        keywords: [
            "matéria", "materias", "matérias", "assunto", "assuntos", "o que cai", "cai no enem", "estudar", "resumo", "geral", "tudo", "cronograma"
        ],
        info: "📚 **Mapeamento de Assuntos do ENEM:**\n\n" +
              "O ENEM é dividido em 4 grandes áreas e a Redação. Posso te dar aulas profundas sobre qualquer uma delas. Quer um raio-X rápido?\n\n" +
              "• **Matemática:** O que mais cai é Matemática Básica (Razão, Proporção, Porcentagem, Escala), Estatística (Média, Moda e Mediana) e Geometria (Plana e Espacial).\n" +
              "• **Natureza:** Ecologia (as relações entre os seres) domina a Biologia. Em Química, vá fundo em Físico-Química (Estequiometria) e Orgânica. Em Física, foca em Eletrodinâmica (Circuitos/Resistores) e Termologia.\n" +
              "• **Humanas:** Em História, Brasil República (Vargas e Ditadura) não falha. Em Geografia, Meio Ambiente, Agrária e Globalização. A Sociologia/Filosofia cobra muito contratualistas (Hobbes/Locke) e teóricos clássicos (Marx, Weber, Durkheim).\n" +
              "• **Linguagens:** Interpretação pura! Funções da Linguagem, Figuras da Linguagem, Modernismo (Geração de 30 e 45) e Vanguardas Europeias.\n\n" +
              "💡 **Dica da IA:** Se quiser se aprofundar, me peça: *'Me dê os assuntos de matemática'* ou *'Quais os principais filósofos?'*"
    },

    conteudo_enem: {
        matematica: {
            keywords: [
                "matemática", "conta", "número", "fórmula", "geometria", "estatística", "progred", "log", "seno", "cosseno", "tangente", 
                "probabilidade", "matriz", "equação", "álgebra", "aritmética", "fração", "porcentagem", "juros", "simples", "compostos", 
                "pitágoras", "área", "volume", "cilindro", "esfera", "cone", "pirâmide", "prisma", "polígono", "triângulo", "função", 
                "afim", "quadrática", "exponencial", "logarítmica", "progressão", "pa", "pg", "arranjos", "combinação", "permutação", 
                "fatorial", "média", "mediana", "moda", "desvio padrão", "variância", "razão", "proporção", "escala", "regra de três",
                "analítica", "reta", "circunferência", "determinante", "complexos", "polinômios", "conjuntos", "venn", "cilindro reto",
                "tronco", "inequação", "módulo", "logaritmo neperiano"
            ],
            info: "📊 **Matemática Absoluta - O Guia do 900+**\n\n" +
                  "• **Aritmética e Matemática Básica (40% da Prova):**\n" +
                  "  - *Razão, Proporção e Escala:* Escala Lineares = D/R. Escala de Áreas = (D/R)². Escala de Volumes = (D/R)³.\n" +
                  "  - *Regra de Três Composta:* Isole quem tem a incógnita cruzando as grandezas diretas e inversas.\n" +
                  "  - *Matemática Financeira:* Fator de Aumento = (1 + i). Fator de Desconto = (1 - i). Juros Compostos: M = C.(1+i)^t.\n\n" +
                  "• **Álgebra e Funções:**\n" +
                  "  - *Função Afim (1º Grau):* f(x) = ax + b. 'a' é a taxa de crescimento. Gráfico é reta.\n" +
                  "  - *Função Quadrática (2º Grau):* f(x) = ax² + bx + c. Vértice é vital (Xv = -b/2a; Yv = -Δ/4a). Valor máximo/mínimo da função é sempre o Yv.\n" +
                  "  - *Logaritmos:* Propriedades Salvadoras: log(A*B) = log A + log B; log(A/B) = log A - log B; log(A^b) = b * log A. E a regra da base: base elevada ao resultado = logaritmando.\n\n" +
                  "• **Geometria Plana, Espacial e Analítica:**\n" +
                  "  - *Triângulos:* Altura do Equilátero: L√3/2. Área: L²√3/4. Semelhança de triângulos cai todo ano.\n" +
                  "  - *Círculos e Setores:* Área da coroa = π(R² - r²). Comprimento = 2πR. Setor circular: faz regra de 3 com os graus.\n" +
                  "  - *Volumes:* Prisma e Cilindro (V = Ab * h). Pirâmide e Cone (V = Ab * h / 3). Esfera (V = 4/3 * π * R³).\n" +
                  "  - *Geometria Analítica:* Distância entre 2 pontos: d² = (Δx)² + (Δy)². Equação da Reta: y = mx + q (m = Δy/Δx).\n\n" +
                  "• **Análise Combinatória e Probabilidade:**\n" +
                  "  - *Combinação (A ordem NÃO importa:* C = n! / (p!(n-p)!). *Arranjo (A ordem IMPORTA):* A = n! / (n-p)!.\n" +
                  "  - *Probabilidade:* P = F/T (Favoráveis / Totais). 'E' (Eventos independentes) = Multiplica. 'OU' (Eventos mutuamente exclusivos) = Soma.\n\n" +
                  "• **Estatística:**\n" +
                  "  - *Média Ponderada:* (Piso1*Peso1 + Piso2*Peso2) / Soma dos Pesos.\n" +
                  "  - *Mediana:* Organize em Rol (ordem crescente). Se for ímpar, pegue o do meio. Se par, a média dos dois centrais.\n" +
                  "  - *Variância e Desvio Padrão:* Medem dispersão. Quanto mais baixo (perto de zero), mais REGULAR E UNIFORME são os dados."
        },
        natureza: {
             keywords: [
                "natureza", "ciências", "biologia", "física", "química", "átomo", "vida", "energia", "célula", "dna", "evolução", "eletricidade", 
                "cinemática", "óptica", "calor", "reação", "ácido", "base", "ecologia", "botânica", "zoologia", "fisiologia", "sangue", "coração", 
                "respiração", "fotossíntese", "genética", "mendel", "vírus", "bactéria", "vacina", "soro", "imunidade", "dinâmica", "newton", 
                "trabalho", "potência", "termodinâmica", "circuitos", "resistores", "ohm", "ondas", "refração", "reflexão", "difração", 
                "estequiometria", "mol", "tabela periódica", "ligações", "iônica", "covalente", "metálica", "orgânica", "carbono", "isomeria", 
                "oxidação", "redução", "pilha", "eletrólise", "le chatelier", "equilíbrio", "radioatividade", "hess", "termoquímica", 
                "cinemática vetorial", "magnetismo", "espelhos", "lentes", "angiospermas", "gimnospermas", "digestório", "endócrino", "neurônio"
             ],
             info: "🔬 **Ciências da Natureza - Alta Densidade (O Raio-X)**\n\n" +
                   "🧬 **Biologia:**\n" +
                   "• *Ecologia (Tema VIP):* Magnificação Trófica (toxinas não degradáveis acumulam e o SUPER PREDADOR sofre mais). Ciclo do Nitrogênio: Bactérias Rhizobium fixam e Nitrossomonas/Nitrobacter nitrificam. Eutrofização (excesso de esgoto -> proliferação de algas -> bloqueia luz -> falta de O2 -> peixes morrem).\n" +
                   "• *Fisiologia Humana:* Sangue Venoso vs Arterial. Lado Esquerdo do coração bombeia o sangue arterial (RICO em O2) pela aorta para o corpo. Hormônios: Insulina (baixa glicose) vs Glucagon (aumenta glicose no sangue).\n" +
                   "• *Botânica e Genética:* Angiospermas (Flor e Fruto = sucesso reprodutivo). Alelos e Leis de Mendel. Grupos Sanguíneos: Sangue O é doador universal (não tem antígenos), AB é receptor universal (não tem anticorpos).\n\n" +
                   "🧲 **Física:**\n" +
                   "• *Eletrodinâmica:* Tensão (V), Corrente (i), Resistência (R). U = R.i. Potência: P = U.i (Pio) ou P = R.i². Energia = Potência x Tempo. Chuveiro Elétrico: Resistência alta = corrente baixa = esquenta POUCO; Resistência baixa = esquenta MUITO.\n" +
                   "• *Termologia:* Q = m.c.Δθ (Calor Sensível). Mudança de Estado (Calor Latente: Q = m.L). Garrafa Térmica: Vácuo (evita condução e convecção), Espelhada (evita irradiação).\n" +
                   "• *Ondulatória e Óptica:* Equação Fundamental: v = λ.f. Som não propaga no vácuo. Luz sim. Efeito Doppler (ambulância aproximando: onda comprime, frequência sobe, som agudo). Miopia (olho longo = lente divergente). Hipermetropia (lente convergente).\n" +
                   "• *Mecânica:* Impulso e Quantidade de Movimento (I = ΔQ). Cinto de segurança/Airbag: aumenta o TEMPO de contato, diminuindo a FORÇA do impacto.\n\n" +
                   "🧪 **Química:**\n" +
                   "• *Físico-Química:* Eletroquímica: MACETE -> CRAO (Cátodo Reduz, Ânodo Oxida). Quem reduz ganha elétrons, quem oxida perde. Termoquímica: ΔH > 0 (Endotérmico, absorve calor), ΔH < 0 (Exotérmico, libera calor). Lei de Hess: Soma as equações. Equilíbrio (Le Chatelier): Desloca para aliviar a perturbação externa.\n" +
                   "• *Química Orgânica:* Cadeias Carbonicas. Funções: Fenol (OH ligado ao Carbono do Anel), Éster (Saborizantes/Aromas), Amidas (Ligações peptídicas das proteínas). Isomeria Óptica exige Carbono Quiral (assimétrico, 4 ligantes diferentes).\n" +
                   "• *Separação de Misturas:* Destilação Fracionada (Petróleo, baseada no Ponto de Ebulição). Decantação e Floculação (Tratamento de água)."
        },
        humanas: {
            keywords: [
                "humanas", "história", "geografia", "sociologia", "filosofia", "sociedade", "brasil", "mundo", "globalização", "ética", 
                "cidadania", "política", "economia", "clima", "vargas", "ditadura", "colônia", "império", "escravidão", "revolução", 
                "industrial", "francesa", "guerras", "guerra fria", "nazismo", "fascismo", "idade média", "feudalismo", "renascimento", 
                "iluminismo", "capitalismo", "socialismo", "brics", "mercosul", "solo", "relevo", "biomas", "amazônia", "cerrado", 
                "caatinga", "urbanização", "migração", "demografia", "indústria", "agropecuária", "marx", "durkheim", "weber", "bauman", 
                "foucault", "sócrates", "platão", "aristóteles", "kant", "nietzsche", "contratualistas", "hobbes", "locke", "rousseau",
                "absolutismo", "mercantilismo", "guerra mundial", "totalitarismo", "fordismo", "toyotismo", "malthus", "clima", "hidrografia",
                "escola de frankfurt", "bourdieu", "hegel", "helênico", "pré-socráticos"
            ],
            info: "🌍 **Ciências Humanas - O Mestrado em Contexto**\n\n" +
                  "📜 **História:**\n" +
                  "• *Brasil Colonial e Império:* Economia de Plantations (Latifúndio, Monocultura, Exportação, Escravidão). Ciclos: Ouro (interiorizou o Brasil), Café (desenvolveu São Paulo e ferrovias). 1889: República da Espada.\n" +
                  "• *República Velha e Era Vargas:* Política do Café com Leite, Coronelismo (voto de cabresto), Revolta da Vacina. Vargas assume em 1930: Criação da CLT (Direitos Trabalhistas mas sidos usados como controle social), Consolidação da Indústria de Base (CSN, Vale).\n" +
                  "• *Ditadura e Modernidade:* Milagre Econômico gerou inflação monstruosa (" + "Dívida crescendo" + ") e extrema desigualdade. AI-5 instaurou terrorismo de Estado e censura absoluta.\n" +
                  "• *Geral:* O Absolutismo caiu pela foice da Revolução Francesa (Iluminismo). 1ª Guerra (Imperialismo na África/Ásia). 2ª Guerra (Totalitarismo, Holocausto). Guerra Fria: Cortina de Ferro, Muro de Berlim (1989 cai), Plano Marshall (EUA) vs Comecon (URSS).\n\n" +
                  "🗺️ **Geografia:**\n" +
                  "• *Geografia Agrária e Demografia:* Transição Demográfica (Mortalidade cai 1º, Natalidade cai depois -> Bônus Demográfico). Revolução Verde (Tecnologia no campo -> gerou êxodo rural e dependência química). MATOPIBA: nova fronteira agrícola (soja no cerrado).\n" +
                  "• *Geografia Econômica:* Fordismo (Linha de montagem, estoque alto, consumo em massa). Toyotismo (Just-in-Time, Terceirização, Polivalência do operário). Globalização e Neoliberalismo: Estado Mínimo, Privatizações.\n" +
                  "• *Geografia Física / Ambiental:* Chuva Orográfica (relevo bloqueia nuvem). El Niño (Aquece Pacífico, seca Nordeste, chove Sul). Ilhas de Calor Urbanas (concreto absorve radiação). Inversão Térmica aprisiona poluentes no Inverno.\n\n" +
                  "🧠 **Sociologia e Filosofia:**\n" +
                  "• *Sociologia:* Pierre Bourdieu (Violência Simbólica e Capital Cultural - o pobre entra em desvantagem na escola). Escola de Frankfurt (Adorno, Habermas) critica a Razão Instrumental e a 'Indústria Cultural' (Arte vira lixo vendável).\n" +
                  "• *A Tríade:* Durkheim (Fato Social, exterior e coercitivo), Marx (Luta de classes é o motor da história, infraestrutura determina superestrutura), Weber (Ação Social, Ética Protestante criou o Capitalismo).\n" +
                  "• *Filosofia Antiga:* Platão (Mito da Caverna: Mundo Sensível x Mundo Ideais). Aristóteles (A eudaimonia/felicidade é o foco da polis, virtude é o meio-termo). \n" +
                  "• *Filosofia Moderna:* Descartes (Penso logo existo, Racionalismo). Kant (Imperativo Categórico: age de forma que sua ação possa virar uma lei universal)."
        },
        linguagens: {
            keywords: [
                "português", "linguagem", "gramática", "interpretação", "modernismo", "literatura", "escrita", "vanguardas", "arte", 
                "mídia", "digital", "função", "texto", "poema", "romantismo", "realismo", "machado de assis", "semana de 22", 
                "clarice lispector", "guimarães rosa", "figuras de linguagem", "metáfora", "ironia", "hipérbole", "eufemismo", "paradoxo", 
                "coesão", "coerência", "conjunção", "pronome", "crase", "vírgula", "educação física", "esporte", "corpo", "espanhol", "inglês",
                "arcadismo", "parnasianismo", "simbolismo", "naturalismo", "concordância", "sintaxe", "tipologia"
            ],
            info: "📖 **Linguagens e Códigos - Sociolinguística e Sentido**\n\n" +
                  "• **A Regra de Ouro:** O ENEM prega o Preconceito Linguístico. Variações linguísticas (gírias, sotaques) SÃO válidas em seus contextos (adequação). A norma culta é apenas UMA das roupas da linguagem, exigida em ambientes formais.\n\n" +
                  "• **Tipos e Gêneros Textuais:**\n" +
                  "  - *Tipos (Estrutura):* Narrativo, Descritivo, Dissertativo, Injutivo (ordens, receitas, manuais).\n" +
                  "  - *Gêneros (Função Social):* Carta, Crônica, Charge, Manifesto, Artigo de Opinião. (O ENEM sempre quer saber a *FUNÇÃO SOCIAL* daquele texto).\n\n" +
                  "• **Literatura Brasileira: As Reviravoltas:**\n" +
                  "  - *Arcadismo:* Fuga das cidades (Fugere urbem). *Romantismo:* 1ª Geração (Índio herói), 2ª (Mal do século/Morte), 3ª (Abolicionismo - Castro Alves).\n" +
                  "  - *Realismo/Naturalismo:* Cai Máscara. Machado de Assis usa a Ironia para criticar a elite hipócrita. O Naturalismo tenta provar teses biológicas (o homem é animal no cio e no conflito).\n" +
                  "  - *Parnasianismo / Simbolismo:* Olavo Bilac queria rima rica e Arte pela Arte (Sendo inútil e bela). Simbolismo focava na transcendência e misticismo (Cruz e Sousa).\n" +
                  "  - *Modernismo (Brasil):* Destruir o passado! Semana de Arte de 1922 (Oswald/Mário de Andrade). 2ª Fase é a Era de Ouro: Carlos Drummond (Existencialismo), Graciliano Ramos (Seca), Jorge Amado (Bahia).\n\n" +
                  "• **Gramática Aplicada (Estratégias de Leitura):**\n" +
                  "  - Atenção mortal às Conjunções Adversativas (Mas, Porém, Contudo) e Concessivas (Embora, Ainda que). Elas invertem a polaridade do argumento e a maioria erra a questão da prova por não percebê-las!\n" +
                  "  - *Figuras de Linguagem:* Metonímia (Troca parte pelo todo, autor pela obra: Ler Machado). Paradoxo (Contradição sem saída lógica: 'Ferida que dói e não se sente'). Prosopopeia (Atribuir vida a coisas)."
        },
        redacao: {
            keywords: [
                "redação", "escrever", "texto", "dissertativo", "argumento", "repertório", "introdução", "conclusão", "título", 
                "competência", "tema", "conectivo", "intervenção", "agente", "proposta", "desenvolvimento", "tese", "contextualização", 
                "citação", "filme", "livro", "constituição", "direitos humanos", "coesão", "1000", "projeto de texto", "parágrafo"
            ],
            info: "✍️ **Redação ENEM - A Máquina do 1000**\n\n" +
                  "A Redação do ENEM é um código fechado. Se você entregar o que o corretor espera em cada competência, você tira mais de 900 mesmo sem vocabulário rebuscado.\n\n" +
                  "• **Competências Desmistificadas:**\n" +
                  "  1. **Norma Culta:** Não peque nos fáceis! Diferencie Onde (lugar físico) de Aonde (movimento) de Na qual (situação abs).\n" +
                  "  2. **Abordagem e Repertório:** Use seu conhecimento de mundo MAS EXPLIQUE A RELAÇÃO. Não jogue o repertório e saia correndo. Isso zera o aspecto da produtividade.\n" +
                  "  3. **Projeto de Texto:** A competência do Planejamento. Se na Introdução você promete falar falar de 'A' e 'B', o Desenvolvimeto 1 DEVE ser de 'A' e o Desenvolvimento 2 DEVE ser de 'B'. Nenhuma surpresa no final.\n" +
                  "  4. **Coesão Encavalada:** O corretor caça conectivos. Comece o Parágrafo 2 com 'Nesse viés,'. Comece o 3 com 'Ademais,'. Comece o 4 com 'Portanto,'. E coloque conectivos DENTRO do parágrafo ('Desse modo', 'Haja vista', 'Com efeito').\n  5. **Proposta Plena:** Não inventar a roda! Resolva os 2 problemas que você citou no desenvolvimento se possível.\n\n" +
                  "• **Macetes de Tese (Sempre funciona):**\n" +
                  "  - *Tese de Omissão State:* O Estado falha em garantir os direitos básicos (Art. 144, Art. 5, etc).\n" +
                  "  - *Tese de Silenciamento Midiático:* A sociedade e a mídia invisibilizam e não debatem o problema.\n" +
                  "  - *Tese de Herança Histórica:* O problema é reflexo colonial do passado do Brasil (Racismo Estrutural, Desigualdade).\n\n" +
                  "• **Check-list GOMIFES da C5 (Pode salvar 200 pts em 4 linhas):**\n" +
                  "  *Portanto, cabe ao (G.overno)*, em parceria com as (ONGS), *criar um grande programa nacional de conscientização* (Ação), *por intermédio de campanhas televisivas e verbas federais direcionadas* (Modo/Meio). *Isso terá a finalidade de atenuar o problema na base* (Efeito), *tornando a sociedade mais equânime, como sonhava Aristóteles* (Detalhamento do Efeito)."
        }
    },

    repertorio_cultural: {
        keywords: [
            "repertório", "citação", "autor", "filósofo", "sociólogo", "base", "argumento", "livro", "filme", "série", "coringa", 
            "universais", "constituição", "leis", "documentário", "literatura", "dados", "ibge"
        ],
        info: "💡 **Repertórios Socioculturais Universais Explicados:**\n\n" +
              "📜 **Diplomacia e Estado:**\n" +
              "• *Contrato Social (Rousseau / Locke / Hobbes):* Os indivíduos abrem mão de liberdade natural em troca de segurança e ordem do Estado. Na redação: Se o Estado não entrega saúde/educação/ambiente limpo, há quebra do Contrato Social.\n" +
              "• *Milton Santos (As Cidadanias Mutiladas):* O geógrafo brasileiro afirma que a pobreza e a exclusão social criam pessoas 'mutiladas' de seus plenos direitos cívicos.\n\n" +
              "🧠 **Teóricos Pop-Comportamento:**\n" +
              "• *Michel Foucault (Vigiar e Punir e o Biopoder):* O poder não está só na polícia; está diluído. Panóptico (a prisão virtual): as pessoas agem de forma moldada achando que estão sendo vigiadas. (Ótimo para internet).\n" +
              "• *Djamila Ribeiro e o Lugar de Fala:* Para falar da experiência de minorias oprimidas, é preciso que a própria minoria seja prestigiada no debate público para fugir do eurocentrismo branco.\n" +
              "• *Ailton Krenak (Ideias para Adiar o Fim do Mundo):* O modelo econômico exploratório atual trata a natureza como despensa (consumismo), acelerando a morte ecológica da humanidade.\n\n" +
              "🎬 **Ficção Aplicada (Melhor que Citação Decoreba):**\n" +
              "• *O Mito da Caverna (Platão):* Pessoas vivem amarradas olhando para sombras, achando que é a realidade. Na redação: Alienação, fakenews, câmara de ecos das bolhas de internet.\n" +
              "• *Parasita (Bong Joon-ho):* A divisão arquitetônica em classes sociais na Coreia, onde a tragédia do pobre é invisível aos olhos do rico.\n" +
              "• *Matrix:* Ilusão de escolha, controle das massas pelas big techs e o conformismo."
    },

    atualidades_geopolitica: {
        keywords: [
            "atualidades", "guerra", "rússia", "ucrânia", "israel", "palestina", "gaza", "brics", "inteligência artificial", 
            "chatgpt", "tecnologia", "clima", "aquecimento", "el nino", "pandemia", "bolsonaro", "lula", "geopolítica", "china", "eua"
        ],
        info: "🔥 **Radar de Atualidades (O que impacta as provas):**\n\n" +
              "• **A Nova Ordem Multipolar:** Os EUA deixaram de ser hegemonia unânime. A ascensão assustadora da China (tecnologia 5G, nova rota da seda) criou a 'Guerra Comercial'.\n" +
              "• **Expansão dos BRICS (BRICS+):** Originalmente Brasil, Rússia, Índia, China e África do Sul. Inclui agora poderio petrolífero do Oriente Médio (Arábia Saudita, Irã, EAU) e África (Egito e Etiópia), sinalizando um projeto anti-dólar chamado *Sul Global*.\n" +
              "• **Conflitos Violentos:** \n" +
              "  - Rússia x Ucrânia: Conflito pelo controle da Otan e zonas de influência geopolítica e acesso ao Mar Negro.\n" +
              "  - Israel x Hamas (Palestina): Guerra assimétrica devastadora, debate imenso sobre resoluções falhas da ONU e Direito Internacional.\n" +
              "• **Colapso Climático:** O El Niño agravou extremos: secas severas rasgaram a Amazônia (Rios secos) e ondas de calor massivas e enchentes mortais destruíram o Rio Grande do Sul em 2024. Urgência do debate sobre *Transição Energética*.\n" +
              "• **Inteligência Artificial (IA):** O impacto brutal de modelos generativos (ChatGPT) na automação do trabalho, desemprego estrutural, plágio, fakenews e Deepfakes ameaçando eleições globais."
    },

    neurociencia_e_foco: {
        keywords: [
            "produtividade", "estudar", "foco", "concentração", "pomodoro", "cansaço", "método", "técnica", "memorização", 
            "plano", "motivação", "disciplina", "burnout", "saúde mental", "tri", "chute", "pontuação", "sono", "revisão", 
            "dopamina", "huberman", "luz solar", "café", "celular", "tela", "vício"
        ],
        info: "⚡ **Protocolo Neurocientífico de Foco Supremo (Hacks Ocultos):**\n\n" +
              "🧠 **O Ciclo da Dopamina (Seu motivador químico):**\n" +
              "A Dopamina não dá 'prazer', ela dá VONTADE de fazer coisas. \n" +
              "O TikTok e Instagram liberam muita dopamina com zero esforço (Cheap Dopamine). Quando você tenta estudar depois, o cérebro rejeita, achando chato. \n" +
              "• *Regra de Ouro:* ESTUDE ANTES. Deixe as telas, doces e vícios APÓS O ESTUDO como recompensa. Se inverter a ordem, você queima a ignição do seu cérebro e não conseguirá focar.\n\n" +
              "☀️ **Protocolo Huberman (Luz do Dia):**\n" +
              "Nos primeiros 30 minutos em que você acordar, OLHE PARA O SOL DIRETAMENTE (sem janelas e luz do celular). A luz no nervo óptico diz ao hipotálamo para parar a Melatonina e liberar Cortisol saudável. Isso agenda o seu relógio biológico garantindo que você terá sono denso 14h depois.\n\n" +
              "☕ **Delay da Cafeína:**\n" +
              "Não tome café logo ao acordar! Espere de 90 a 120 minutos. Se tomar muito cedo, a Adenosina (que dá sono) não é depurada, e você tem o 'Crash do Café' caindo de sono no início da tarde.\n\n" +
              "📱 **Engenharia de Ambiente:**\n" +
              "Se o seu celular estiver visível, com a tela ligada, parte do seu córtex pré-frontal está usando bateria neural apenas IGNORANDO ele. O simples fato de jogar o celular EM OUTRO CÔMODO aumenta a sua performance bruta de estudo em 20%. Mude seu ambiente para vencer a força de vontade."
    },

    estrategia_tri_chute: {
        keywords: [
            "tri", "chute", "gabarito", "marcar", "alternativa", "não sei", "estratégia", "tempo", "dificuldade"
        ],
        info: "🎯 **Engenharia Reversa da Prova (Selo TRI Hacker):**\n\n" +
              "A Teoria de Resposta ao Item não calcula quantas você acertou, mas QUAIS você acertou. É um algoritmo que cruza seus acertos procurando um perfil coeso.\n\n" +
              "• **O Chute Otimizado:** Se você ACUMULOU no final da prova 10 questões de matemática monstruosas que não sabe fazer.\n" +
              "  1. O MEC tenta equilibrar o gabarito. Historicamente fica entre 16 a 22 letras B, C, etc por cor de prova.\n" +
              "  2. CONTE seu gabarito. Se você marcou muito poucas opções de letra 'E', e precisa chutar cegamente 10 questões impossíveis... Chute a mesma alternativa nas 10 (exemplo Tudo E). A chance matemática de salvar de 2 a 3 pontos sem destruir sua coerência é matematicamente maior do que o 'chute mosaico' (A,C,B,E,D).\n\n" +
              "• **Os Distratores do Inep:**\n" +
              "  - O ENEM não erra enunciado. Ele desenha alternativas *VERDADEIRAS* sobre a matéria, MAS que *NÃO respondem* à pergunta feita no comando.\n" +
              "  - O 'Comando da Questão' (aquela frase exata antes das alternativas) é rei absoluto. Lige a alternativa DIRETAMENTE a essa frase.\n  - Termos Extremos (Sempre, Nunca, Unicamente, Exclusivamente, Totalmente) nas alternativas de Humanas e Linguagens estão errados 95% das vezes. A História/Ciênca abomina totalitarismos lógicos."
    },

    macetes_memorizacao: {
        keywords: [
            "macete", "macetes", "memorizar", "decorar", "bizu", "frase", "dica", "truque", "fórmulas físicas", "piolho", "sorvete"
        ],
        info: "🧠 **Enciclopédia de Macetes Milenares (Os Bizus Supremos):**\n\n" +
              "🧬 **Biologia e Química:**\n" +
              "• *Fases da Mitose:* **P**rometa **A**na **T**elefonar -> **P**rófase, **M**etáfase, **A**náfase, **T**elófase.\n" +
              "• *Bases Nitrogenadas do DNA:* **A**gnaldo **T**imóteo, **G**al **C**osta -> **A**denina com **T**imina / **G**uanina com **C**itosina.\n" +
              "• *Eletroquímica:* **CRAO** -> **C**átodo **R**eduz, **Â**nodo **O**xida.\n" +
              "• *Nomenclatura de Ácidos (Oso/Ico):* M**os**quito teim**os**o, te mat**o** te pic**o**, te meto no vidr**idrico**.\n\n" +
              "🧲 **Física (A Salvação das Fórmulas):**\n" +
              "• *Cinemática (Equação Horária da Posição):* S = So + V.t -> **S**or**v**e**t**e.\n" +
              "• *Cinemática (Posição no MRUV):* S = So + Vot + a.t²/2 -> **S**or**v**etão.\n" +
              "• *Equação de Torricelli:* V² = Vo² + 2.a.ΔS -> **V**ovô e **V**ovó **m**ais **2** **a**migos num **triângulo** amoroso.\n" +
              "• *Segunda Lei de Newton:* Fr = m.a -> A **F**orça é **M**á.\n" +
              "• *Calorimetria:* Q = m.c.ΔT -> **Q**ue **m**a**c**e**t**e!.\n" +
              "• *Pressão e Volume (Gases):* P.V = n.R.T -> **P**or **V**ocê **n**unca **R**ezei **T**anto.\n" +
              "• *Lentes (Equação de Gauss):* 1/f = 1/p + 1/p' -> Uma flor é igual a um pelicano mais uma pelicana.\n\n" +
              "📏 **Matemática:**\n" +
              "• *Seno e Cosseno (Trigonometria):* Seno = Cateto Oposto/Hipotenusa (SÓ). Cosseno = Cateto Adjacente/Hipotenusa (CA). Tangente = Oposto/Adjacente (TOA). Formando a palavra mística: **SOHCAHTOA**.\n" +
              "• *Determinantes de Matriz (Regra de Sarrus):* Copia as duas primeiras colunas pro lado de fora, multiplica descendo cruzado (+). Multiplica subindo cruzado mudando o sinal (-)."
    },

    historia_brasil_avancada: {
        keywords: [
            "história do brasil", "colônia", "império", "república", "vargas", "getúlio", "ditadura", "militar", "café com leite", 
            "escravidão", "revoltas", "inconfidência", "canudos", "coronelismo", "constituição"
        ],
        info: "📜 **Dossiê: História do Brasil para Arrebentar na Prova:**\n\n" +
              "O ENEM cobra a História do Brasil focando quase totalmente nas lutas sociais, escravidão e transições políticas de Regime.\n\n" +
              "• **Colônia e Rebeliões:**\n" +
              "  - A Inconfidência Mineira (1789) era *ELITISTA* (quem devia muito imposto e temia a Derrama). A Conjuração Baiana (1798) era *POPULAR* (alfaiates, pediam fim da escravidão).\n" +
              "  - Pacto Colonial excludente: O Brasil só podia negociar com Portugal gerando atraso secular estrutural.\n\n" +
              "• **Império:**\n" +
              "  - D. Pedro I (1822-1831): Outorgou a 1ª Constituição (1824) com o **Poder Moderador** (ele estava acima de todos os outros poderes, absolutismo disfarçado).\n" +
              "  - 2º Reinado (D. Pedro II): Pax Monárquica garantida pelo Café. Escravidão foi acabando dolorosamente a conta-gotas pelas Leis para 'Inglês ver' (Eusébio de Queirós -> Ventre Livre -> Sexagenário -> Áurea) sem *nenhum* projeto de inclusão do negro liberto.\n\n" +
              "• **Era Vargas (A Era das Massas):**\n" +
              "  - Chegou ao poder quebrando a oligarquia de SP/MG na Rev. de 30. O Pai dos Pobres e Mãe dos Ricos.\n" +
              "  - *A Grande Jogada (CUIDADO):* Vargas deu as leis trabalhistas (CLT), MAS não foi de bonzinho. Ele atrelou os sindicatos ao Estado (Peleguismo) para controlar o trabalhador e impedir revoltas comunistas.\n" +
              "  - Estado Novo (37-45): Ditadura nua e crua, DIP (Departamento de Imprensa) fazendo propaganda e censura. Foco na Indústria de Base (Vale do Rio Doce).\n\n" +
              "• **Regime Militar (1964-1985):**\n" +
              "  - Começou amparado pela Classe Média e EUA com a desculpa da 'Ameaça Comunista'.\n  - AI-5 (1968): O golpe dentro do golpe. Fechou congresso, censura prévia, repressão violenta institucionalizada.\n  - *Milagre Econômico:* A economia cresceu a 10% ao ano, mas não foi distribuída (O 'Bolo que cresceu mas não foi repartido'). Deixou uma inflação galopante que destruiria os anos 80 (A Década Perdida)."
    },

    citacoes_redacao_1000: {
        keywords: [
            "citação", "citações", "frase", "frases", "modelo", "pronto", "kant", "bauman", "foucault", "filósofo", "sociólogo", "parágrafo", "redação nota 1000", "coringa"
        ],
        info: "✍️ **Fábrica de Redação 1000 (Citações Coringas Prontas):**\n\n" +
              "Você quer o modelo exato para encaixar no seu texto? Pegue e use:\n\n" +
              "🧠 **TEMA: Internet, Redes Sociais, Fake News, Exposição Técnica:**\n" +
              "• *Zygmunt Bauman (Sociólogo Moderno):* 'As redes sociais são uma armadilha, não promovem o diálogo, são feitas para criar um eco das próprias vozes.'\n" +
              "• *Pierre Lévy (Filósofo da Tecnologia):* 'Toda nova tecnologia cria seus excluídos.' (Perfeito para temas de inclusão digital).\n\n" +
              "⚖️ **TEMA: Direitos Humanos, Omissão do Estado, Desigualdade:**\n" +
              "• *Thomas Hobbes (Filósofo):* 'É função do Estado garantir a segurança e a ordem da sociedade através do Contrato Social.' (Se o Estado falha, ocorre quebra desse contrato).\n" +
              "• *Gilberto Dimenstein (Jornalista):* 'O Brasil possui Cidadãos de Papel, que possuem direitos garantidos pela Constituição Federal, mas que não se efetivam na prática.'\n" +
              "• *Immanuel Kant (Iluminismo):* 'O ser humano é aquilo que a educação faz dele.' / 'Aja como se a máxima de tua ação devesse tornar-se lei universal.'\n\n" +
              "😷 **TEMA: Meio Ambiente, Saúde Pública, Violência:**\n" +
              "• *Hannah Arendt (Filósofa):* Conceito de *Banalidade do Mal*. 'A maldade se torna banal quando a sociedade não a questiona e passa a aceitá-la como uma engrenagem comum da vida.' (Use para acidentes de transito, preconceito, descaso com a natureza).\n" +
              "• *Hans Jonas (Princípio Responsabilidade):* 'Aja de forma que os efeitos de sua ação não destruam a possibilidade futura de vida humana na Terra.'"
    },

    exatas_hardcore: {
        keywords: [
            "polinômios", "logaritmo", "matrizes", "sistemas lineares", "números complexos", "empuxo", "termodinâmica", "difícil", "avançado", "elite"
        ],
        info: "☄️ **Exatas Modo Hardcore (O Diferencial do 850+):**\n\n" +
              "Acertar as fáceis garante o 700. Acertar as médias leva ao 800. Estas aqui te levam a Medicina:\n\n" +
              "📐 **Matemática Avançada:**\n" +
              "• *Logaritmos Infernais:* Mudança de Base: Log_A(B) = Log_C(B) / Log_C(A). Consequência vital: Log_A(B) = 1 / Log_B(A).\n" +
              "• *Matrizes e Sistemas:* Classificação de Sistemas Lineares (SPD - Determinante ≠ 0. SPI e SI - Determinante = 0). Multiplicação de matrizes só ocorre se o número de colunas da 1ª foi igual ao de linhas da 2ª.\n" +
              "• *Polinômios (Relações de Girard):* As raízes de ax² + bx + c = 0. A soma delas é -b/a. O produto é c/a. Se for de 3º grau (ax³+bx²+cx+d), a soma das três raízes é sempre -b/a, e o produto delas é -d/a.\n\n" +
              "🧲 **Física Assassina:**\n" +
              "• *Hidrostática (Empuxo):* Arquimedes descobriu que todo corpo submerso recebe uma força VERTICAL para CIMA igual ao Peso do líquido que ele deslocou. E = Densidade do Líquido * Volume Submerso * Gravidade (Pelego de Vagar).\n" +
              "• *Termodinâmica (2ª Lei):* Nenhuma máquina térmica pode ter 100% de rendimento. Parte do calor sempre vai para a fonte fria para gerar entropia (desordem).\n" +
              "• *Circuitos Complexos:* Ponte de Wheatstone. Quando 4 resistores estão em 'H', se o produto dos cruzados for igual, o do meio não passa corrente! (Pode arrancar ele da conta)."
    },

    historia_da_arte: {
        keywords: [
            "arte", "história da arte", "pintura", "escultura", "renascimento", "barroco", "modernismo", "cubismo", "surrealismo", "futurismo", "dadaísmo", "expressionismo", "impressionismo", "vanguardas", "semana de 22", "patrimônio", "cultura"
        ],
        info: "🎨 **História da Arte e Patrimônio Cultural (O Guia para Linguagens):**\n\n" +
              "O ENEM cobra arte não como técnica, mas como reflexo social e político.\n\n" +
              "• **Renascimento e Barroco:**\n" +
              "  - *Renascimento:* Valorização do homem (Antropocentrismo), equilíbrio, perspectiva e racionalidade (Da Vinci, Michelangelo).\n" +
              "  - *Barroco:* Dualidade (Céu x Inferno), contraste luz e sombra, emoção exagerada e rebuscamento (Aleijadinho no Brasil - o barroco mineiro).\n\n" +
              "• **Impressionismo e Vanguardas Europeias (Ruptura Total):**\n" +
              "  - *Impressionismo:* Captura da luz e do momento, pinceladas soltas (Monet, Renoir).\n" +
              "  - *Vanguardas:* \n" +
              "    - *Expressionismo:* Deformação da realidade para expressar sentimentos (O Grito de Munch).\n" +
              "    - *Cubismo:* Geometrização e múltiplos ângulos (Picasso).\n" +
              "    - *Surrealismo:* O mundo dos sonhos e o inconsciente (Dalí).\n" +
              "    - *Futurismo:* Velocidade, máquinas e tecnologia.\n\n" +
              "• **Modernismo Brasileiro:**\n" +
              "  - *Semana de Arte Moderna (1922):* Busca por uma identidade brasileira real, abandonando a cópia dos modelos europeus. Anita Malfatti, Tarsila do Amaral (Abaporu) e Portinari.\n\n" +
              "• **Patrimônio Cultural:**\n" +
              "  - Diferença entre *Material* (prédios, estátuas, documentos) e *Imaterial* (danças, festas, saberes, culinária como o acarajé ou o queijo minas)."
    },

    biotecnologia_e_genetica_avancada: {
        keywords: [
            "biotecnologia", "genética molecular", "dna", "pcr", "crispr", "clonagem", "transgênicos", "células-tronco", "bioética", "engenharia genética", "vacinologia"
        ],
        info: "🧬 **Biotecnologia e Genética Molecular (O Futuro na Prova):**\n\n" +
              "• **Engenharia Genética:**\n" +
              "  - *Transgênicos (OGMs):* Organismos que recebem genes de outra espécie para ganhar novas características (ex: milho resistente a pragas).\n" +
              "  - *PCR (Reação em Cadeia da Polimerase):* Técnica para amplificar (copiar milhões de vezes) um pequeno pedaço de DNA. Usado em testes de paternidade e diagnóstico de doenças.\n" +
              "  - *CRISPR-Cas9:* A 'tesoura molecular'. Permite editar o genoma com precisão cirúrgica, abrindo portas para a cura de doenças genéticas.\n\n" +
              "• **Células-tronco:**\n" +
              "  - *Embrionárias (Totipotentes):* Podem se transformar em qualquer tipo de célula do corpo. Grande potencial regenerativo.\n" +
              "  - *Adultas (Multipotentes):* Limitadas a certos tecidos (como a medula óssea).\n\n" +
              "• **Bioética:**\n" +
              "  - Discussão sobre os limites da manipulação da vida. O que é ético na edição genética e no uso de embriões?"
    },

    fisico_quimica_e_cinetica: {
        keywords: [
            "cinética química", "velocidade de reação", "catalisador", "entalpia", "entropia", "meia-vida", "radioatividade", "equilíbrio químico", "le chatelier"
        ],
        info: "🧪 **Físico-Química e Cinética (Onde a conta encontra a ciência):**\n\n" +
              "• **Cinética Química:**\n" +
              "  - *Velocidade de Reação:* Depende da Temperatura (aumenta colisões), Concentração (mais moléculas), Superfície de Contato (ex: comprimido triturado reage mais rápido) e Catalisadores.\n" +
              "  - *Catalisadores:* Diminuem a Energia de Ativação, fazendo a reação ser mais rápida SEM serem consumidos no final.\n\n" +
              "• **Radioatividade e Meia-vida:**\n" +
              "  - *Meia-vida (t1/2):* O tempo necessário para que metade da massa de uma amostra radioativa se desintegre. Fundamental para datação por Carbono-14.\n\n" +
              "• **Termodinâmica Química:**\n" +
              "  - *Entropia (S):* O grau de desorganização do sistema. O universo tende à desorganização!"
    },

    filosofia_e_sociologia_contemporanea: {
        keywords: [
            "sociologia contemporânea", "filosofia contemporânea", "modernidade líquida", "bauman", "foucault", "biopoder", "panóptico", "bourdieu", "habermas", "sociedade do espetáculo", "guy debord", "hipermodernidade"
        ],
        info: "🧠 **Filosofia e Sociologia Contemporânea (Para a Redação 1000):**\n\n" +
              "• **Zygmunt Bauman (Modernidade Líquida):** As relações humanas e instituições agora são fluidas, precárias e mudam rapidamente. O consumo substituiu a cidadania.\n\n" +
              "• **Michel Foucault (Biopoder e Microfísica do Poder):** O poder não está só no topo. Ele está nos hospitais, escolas e prisões (O Panóptico: ser vigiado por todos e por ninguém).\n\n" +
              "• **Pierre Bourdieu (Capital Cultural e Habitus):** A desigualdade não é só dinheiro; é também o conhecimento e as posturas que herdamos. Isso explica por que o sistema educacional favorece as elites.\n\n" +
              "• **Guy Debord (Sociedade do Espetáculo):** A vida social virou uma sucessão de imagens. O que importa é parecer, não ser."
    },

    redacao_eixos_tematicos: {
        keywords: [
            "tema", "eixo", "educação", "saúde", "segurança", "meio ambiente", "tecnologia", "cultura", "minorias", "mulher", "idoso", "criança", "deficientes", "repertório para saúde", "repertório para educação"
        ],
        info: "🎯 **Repertórios Estratégicos por Eixo Temático:**\n\n" +
              "Para ser exato, aqui estão os repertórios que mais pontuam por área:\n\n" +
              "📚 **Eixo Educação:**\n" +
              "• *Paulo Freire:* 'Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda.'\n" +
              "• *Malala Yousafzai:* 'Um livro, uma caneta, uma criança e um professor podem mudar o mundo.'\n\n" +
              "🏥 **Eixo Saúde:**\n" +
              "• *Constituição Federal (Art. 196):* 'A saúde é direito de todos e dever do Estado.'\n" +
              "• *Oswaldo Cruz:* O pai da saúde pública no Brasil (ótimo para falar de vacinação e saneamento).\n\n" +
              "🌿 **Eixo Meio Ambiente:**\n" +
              "• *Modernidade Líquida (Bauman):* O consumismo exagerado gera o descarte desenfreado e a degradação ambiental.\n" +
              "• *Ailton Krenak:* 'A humanidade está se descolando da Terra.'\n\n" +
              "👮 **Eixo Segurança e Violência:**\n" +
              "• *Thomas Hobbes:* 'O homem é o lobo do homem.' (A ausência do Estado leva ao caos).\n" +
              "• *Zigmunt Bauman (Sociedade de Consumo):* A exclusão gera ressentimento e violência."
    },

    redacao_passo_a_passo: {
        keywords: [
            "passo a passo", "introdução", "desenvolvimento", "conclusão", "c5", "como começar", "como fazer", "estrutura redação", "esqueleto"
        ],
        info: "🏗️ **Estrutura Passo a Passo da Redação Nota 1000:**\n\n" +
              "1️⃣ **Introdução (O Cartão de Visitas):**\n" +
              "• Repertório (apresente o tema com um dado, citação ou fato histórico).\n" +
              "• Tese (sua opinião clara sobre o problema).\n" +
              "• Encaminhamento Argumentativo (cite as duas causas que você vai explicar no desenvolvimento).\n\n" +
              "2️⃣ **Desenvolvimentos (O Corpo do Texto):**\n" +
              "• Tópico Frasal (resumo do parágrafo).\n" +
              "• Repertório Legitimado (prove que sua ideia faz sentido).\n" +
              "• Análise Crítica (explique a relação do repertório com o problema).\n\n" +
              "3️⃣ **Conclusão/C5 (A Solução):**\n" +
              "• Deve conter os 5 elementos: **Agente** (quem faz?), **Ação** (o que faz?), **Meio/Modo** (como faz?), **Efeito** (para que faz?) e **Detalhamento** (explicação extra)."
    },

    conectivos_redacao: {
        keywords: [
            "conectivo", "conectivos", "coesão", "palavras de ligação", "entretanto", "ademais", "portanto", "visto que", "por outro lado"
        ],
        info: "🔗 **Manual de Conectivos (Para garantir os 200 pontos na C4):**\n\n" +
              "📌 **Para Adicionar Ideias:** Além disso, Ademais, Outrossim, Somado a isso.\n" +
              "📌 **Para Contrastar Ideias:** Entretanto, Todavia, Contudo, No entanto, Por outro lado.\n" +
              "📌 **Para Explicar/Causar:** Visto que, Haja vista, Já que, Dado que, Pois.\n" +
              "📌 **Para Concluir:** Portanto, Logo, Por conseguinte, Em suma, Dessa forma."
    }
};

/**
 * Função de busca inteligente super-rápida e exata.
 */
function buscarNaKnowledgeBase(query) {
    // Normaliza acentos e joga pra minúscula (ex: "matéria" vira "materia")
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    // Tratamento de saudações curtas
    const saudacoes = ["oi", "olá", "ola", "eae", "bom dia", "boa tarde", "boa noite", "tudo bem"];
    if (saudacoes.some(s => q === s || q === s + "!" || q === s + "?")) {
       return `Olá! Eu sou o Mindly Brain 3.0, a Inteligência Artificial Absoluta da plataforma. Respondo sobre TUDO que cai no ENEM, além de produtividade científica. Mande sua dúvida sobre alguma matéria!`;
    }

    // PRIORIDADE 1: Redação Temática (Exatidão por matéria)
    if (q.includes("redacao") || q.includes("escrever")) {
        if (q.includes("saude")) return MINDLY_KB.redacao_eixos_tematicos.info;
        if (q.includes("educacao")) return MINDLY_KB.redacao_eixos_tematicos.info;
        if (q.includes("ambiente")) return MINDLY_KB.redacao_eixos_tematicos.info;
        if (q.includes("comecar") || q.includes("intro")) return MINDLY_KB.redacao_passo_a_passo.info;
    }

    // Varredura Linear nas Metacategorias
    for (const key in MINDLY_KB) {
        if (key === 'institucional' || key === 'conteudo_enem') continue;
        const item = MINDLY_KB[key];
        if (item.keywords && item.keywords.some(kw => {
            const kwNormalizada = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            // Match exato tem peso maior
            if (q === kwNormalizada) return true;
            // Match parcial
            return q.includes(kwNormalizada) || (kwNormalizada.includes(q) && q.length > 4);
        })) {
            return item.info;
        }
    }

    // Varredura Intensa nas Matérias
    for (const subKey in MINDLY_KB.conteudo_enem) {
        const subItem = MINDLY_KB.conteudo_enem[subKey];
        if (subItem.keywords && subItem.keywords.some(kw => {
            const kwNormalizada = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            if (q === kwNormalizada) return true;
            return q.includes(kwNormalizada) || (kwNormalizada.includes(q) && q.length > 4);
        })) {
            return subItem.info;
        }
    }

    // Quedas (Fallbacks)
    if (q.includes("mindly") || q.includes("quem é") || q.includes("quem e") || q.includes("o que é") || q.includes("ia") || q.includes("você")) {
        return `Olá! Eu sou o Mindly Brain 3.0, a Inteligência Artificial Absoluta da plataforma. Respondo sobre TUDO que cai no ENEM, além de produtividade científica. ${MINDLY_KB.institucional.missao}`;
    }

    return "No momento, o Mindly Brain está focado nas competências do ENEM. Não tenho uma aula pronta sobre essa palavra exata.\n\nTente perguntar de forma mais direta: **'Estrutura da Redação'**, **'Repertório para Saúde'**, **'Conectivos'** ou **'O que cai em Biologia?'**.";
}

if (typeof window !== 'undefined') {
    window.MINDLY_KB = MINDLY_KB;
    window.buscarNaKnowledgeBase = buscarNaKnowledgeBase;
}
