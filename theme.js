document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------
    // 1. Gerenciamento de Navbar Dinâmica (Logado vs Visitante)
    // -----------------------------------------------
    const authContainer = document.querySelector('.auth-links');
    const navContainer = document.querySelector('.navbar-nav');
    const userLogged = localStorage.getItem('mindly_user_logged');
    const logoLink = document.querySelector('.navbar-brand');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Função para verificar se o link deve estar ativo
    const isActive = (path) => {
        if (currentPage === path) return 'active';
        // Caso especial para páginas de matérias individuais
        if (path === 'materias.html' && currentPage.startsWith('materia-')) return 'active';
        return '';
    };

    // Injeção de links principais (navbar-nav)
    if (navContainer) {
        navContainer.innerHTML = ''; // Limpa a navbar atual

        if (userLogged === 'Alex') {
            // Itens para usuário LOGADO
            navContainer.innerHTML = `
                <li class="nav-item"><a class="nav-link ${isActive('dashboard.html')}" href="dashboard.html">Dashboard</a></li>
                <li class="nav-item"><a class="nav-link ${isActive('materias.html')}" href="materias.html">Matérias</a></li>
                <li class="nav-item"><a class="nav-link ${isActive('simulados.html')}" href="simulados.html">Simulados</a></li>
                <li class="nav-item">
                    <a class="nav-link fw-bold ${isActive('chat.html')}" href="chat.html" style="color: var(--primary-color);">
                        <i class="bi bi-robot me-1"></i> Mindly IA
                    </a>
                </li>
            `;
        } else {
            // Itens para VISITANTE
            navContainer.innerHTML = `
                <li class="nav-item"><a class="nav-link ${isActive('ferramentas.html')}" href="ferramentas.html">Ferramentas</a></li>
                <li class="nav-item"><a class="nav-link ${isActive('sobre.html')}" href="sobre.html">Sobre</a></li>
                <li class="nav-item"><a class="nav-link ${isActive('suporte.html')}" href="suporte.html">Suporte</a></li>
                <li class="nav-item">
                    <a class="nav-link fw-bold ${isActive('chat.html')}" href="chat.html" style="color: var(--primary-color);">
                        <i class="bi bi-robot me-1"></i> Mindly IA
                    </a>
                </li>
            `;
        }
    }

    // Injeção de links de autenticação (auth-links)
    if (authContainer) {
        authContainer.innerHTML = '';

        if (userLogged === 'Alex') {
            // Estado: LOGADO
            if (logoLink) logoLink.href = 'dashboard.html';

            const currentAvatar = localStorage.getItem('mindly_avatar') || 'Alex';

            authContainer.innerHTML = `
                <a href="perfil.html" class="d-flex align-items-center text-decoration-none me-3 pe-3 border-end">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${currentAvatar}" alt="Avatar" class="rounded-circle border border-2 border-primary me-2" width="35" height="35" id="navAvatar">
                    <span class="fw-bold small d-none d-lg-inline" style="color: var(--text-main);">Alex</span>
                </a>
                <a href="#" id="btnLogout" class="text-muted small text-decoration-none ms-2">
                    <i class="bi bi-box-arrow-right fs-5"></i>
                </a>
            `;

            const btnLogout = document.getElementById('btnLogout');
            if (btnLogout) {
                btnLogout.addEventListener('click', (e) => {
                    e.preventDefault();
                    localStorage.removeItem('mindly_user_logged');
                    window.location.href = 'index.html';
                });
            }
        } else {
            // Estado: VISITANTE
            if (logoLink) logoLink.href = 'index.html';

            authContainer.innerHTML = `
                <a href="login.html" class="mb-2 mb-lg-0 me-lg-3 text-decoration-none" style="color: var(--text-main);">Entrar</a>
                <a href="cadastro.html" class="btn btn-primary rounded-pill px-4">Começar agora</a>
            `;
        }
        
        // Função Global para atualizar avatares em todas as páginas
        window.setMindlyAvatar = (seed) => {
            localStorage.setItem('mindly_avatar', seed);
            const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`;
            
            // Atualiza Navbar
            const navAvatar = document.getElementById('navAvatar');
            if (navAvatar) navAvatar.src = avatarUrl;
            
            // Atualiza Perfil (se estiver na página de perfil)
            const profileAvatar = document.getElementById('userAvatarProfile');
            if (profileAvatar) profileAvatar.src = avatarUrl;
            
            // Atualiza Dashboard (se estiver na página de dashboard)
            const dashAvatar = document.getElementById('userAvatar');
            if (dashAvatar) dashAvatar.src = avatarUrl;

            // Dispara evento para outros componentes se necessário
            window.dispatchEvent(new CustomEvent('mindlyAvatarChanged', { detail: seed }));
        };

        let btnAlternarTema = document.createElement('button');
        btnAlternarTema.id = 'theme-toggle';
        btnAlternarTema.className = 'btn btn-link ms-lg-3 p-0';
        btnAlternarTema.style.color = 'var(--text-main)';
        btnAlternarTema.style.fontSize = '1.2rem';
        btnAlternarTema.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        authContainer.appendChild(btnAlternarTema);
    }

    // -----------------------------------------------
    // 2. Lógica de Tema (Persistência e Alternância)
    // -----------------------------------------------
    const btnAlternarTema = document.getElementById('theme-toggle');
    const preferenciaSistema = window.matchMedia('(prefers-color-scheme: dark)');

    const aplicarTema = (tema) => {
        if (tema === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (btnAlternarTema) btnAlternarTema.innerHTML = '<i class="bi bi-sun-fill"></i>';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (btnAlternarTema) btnAlternarTema.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        }
    };

    const temaSalvo = localStorage.getItem('theme');
    const temaInicial = temaSalvo || (preferenciaSistema.matches ? 'dark' : 'light');
    aplicarTema(temaInicial);

    if (btnAlternarTema) {
        btnAlternarTema.addEventListener('click', (e) => {
            e.preventDefault();
            const novoTema = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', novoTema);
            aplicarTema(novoTema);
        });
    }
});
