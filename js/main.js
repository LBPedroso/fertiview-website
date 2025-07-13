// Fertiview - JavaScript Principal

// Função para enviar mensagem via WhatsApp
function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (!nome || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return;
    }
    
    const texto = `Olá! Meu nome é ${nome}.\n\nTelefone: ${telefone}\n\nMensagem: ${mensagem}`;
    const numeroWhatsApp = '5544999161182';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, '_blank');
    
    // Limpar formulário após envio
    document.getElementById('contatoForm').reset();
    
    // Mostrar mensagem de confirmação
    alert('✅ Redirecionando para o WhatsApp! Sua mensagem será enviada diretamente.');
}

// Função para verificar e configurar o vídeo
function setupVideo() {
    const video = document.querySelector('.video-container video');
    if (video) {
        // Event listeners para debug do vídeo
        video.addEventListener('loadstart', function() {
            console.log('🎥 Vídeo: Iniciando carregamento...');
        });
        
        video.addEventListener('canplay', function() {
            console.log('✅ Vídeo: Pronto para reproduzir!');
        });
        
        video.addEventListener('error', function(e) {
            console.error('❌ Erro no vídeo:', e);
            // Mostrar mensagem de erro amigável
            const container = video.parentElement;
            container.innerHTML = `
                <div class="alert alert-warning text-center p-4">
                    <h5>📹 Vídeo Institucional</h5>
                    <p>O vídeo está carregando ou não está disponível no momento.</p>
                    <small>Verifique sua conexão com a internet.</small>
                </div>
            `;
        });
        
        // Verificar se o arquivo existe
        video.addEventListener('loadedmetadata', function() {
            console.log('📊 Vídeo carregado - Duração:', Math.round(video.duration), 'segundos');
        });
    }
}

// Navbar fixa com efeito de scroll e outras funcionalidades
document.addEventListener('DOMContentLoaded', function() {
    // Configurar vídeo
    setupVideo();
    
    const navbar = document.querySelector('.navbar');
    
    // Função para adicionar/remover classe quando fazer scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Adicionar event listener para scroll
    window.addEventListener('scroll', handleScroll);
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Compensar altura da navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Marcar página ativa na navegação
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
});

// Animação de entrada para elementos
function animateOnScroll() {
    const elements = document.querySelectorAll('.card, .btn');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}

// Event listener para animações no scroll
window.addEventListener('scroll', animateOnScroll);

// Executar animação inicial
document.addEventListener('DOMContentLoaded', animateOnScroll);