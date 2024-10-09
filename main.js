// Language data
const languages = {
    en: {
        headline: "Fast-Delivered Apps for Forward-Thinking Companies",
        subheadline: "Empowering Your Business with Cutting-Edge Technology",
        approachTitle: "Our Approach: The Double Diamond",
        approachDescription: "Continuous Discovery & Continuous Delivery",
        processTitle: "Our Process: Iterative Excellence",
        differentiatorTitle: "Why Choose Us?",
        ctaTitle: "Ready to Transform Your Business?",
        ctaDescription: "Let's build your success story together",
        getStartedBtn: "Get Started",
        whatsappText: "WhatsApp",
        emailText: "Send Email"
    },
    pt: {
        headline: "Aplicativos Rápidos para Empresas Inovadoras",
        subheadline: "Potencializando Seu Negócio com Tecnologia de Ponta",
        approachTitle: "Nossa Abordagem: O Diamante Duplo",
        approachDescription: "Descoberta Contínua & Entrega Contínua",
        processTitle: "Nosso Processo: Excelência Iterativa",
        differentiatorTitle: "Por Que Nos Escolher?",
        ctaTitle: "Pronto para Transformar Seu Negócio?",
        ctaDescription: "Vamos construir sua história de sucesso juntos",
        getStartedBtn: "Começar",
        whatsappText: "WhatsApp",
        emailText: "Enviar E-mail"
    },
    es: {
        headline: "Aplicaciones Rápidas para Empresas Innovadoras",
        subheadline: "Potenciando Tu Negocio con Tecnología de Vanguardia",
        approachTitle: "Nuestro Enfoque: El Doble Diamante",
        approachDescription: "Descubrimiento Continuo & Entrega Continua",
        processTitle: "Nuestro Proceso: Excelencia Iterativa",
        differentiatorTitle: "¿Por Qué Elegirnos?",
        ctaTitle: "¿Listo para Transformar Tu Negocio?",
        ctaDescription: "Construyamos juntos tu historia de éxito",
        getStartedBtn: "Empezar",
        whatsappText: "WhatsApp",
        emailText: "Enviar Correo"
    }
};

// Process steps data
const processSteps = {
    en: [
        { icon: "fas fa-lightbulb", title: "Ideate", description: "Brainstorm innovative solutions" },
        { icon: "fas fa-pencil-alt", title: "Design", description: "Create user-centric interfaces" },
        { icon: "fas fa-code", title: "Develop", description: "Build robust and scalable applications" },
        { icon: "fas fa-rocket", title: "Launch", description: "Deploy and monitor your solution" }
    ],
    pt: [
        { icon: "fas fa-lightbulb", title: "Idealizar", description: "Criar soluções inovadoras" },
        { icon: "fas fa-pencil-alt", title: "Projetar", description: "Criar interfaces centradas no usuário" },
        { icon: "fas fa-code", title: "Desenvolver", description: "Construir aplicações robustas e escaláveis" },
        { icon: "fas fa-rocket", title: "Lançar", description: "Implantar e monitorar sua solução" }
    ],
    es: [
        { icon: "fas fa-lightbulb", title: "Idear", description: "Generar soluciones innovadoras" },
        { icon: "fas fa-pencil-alt", title: "Diseñar", description: "Crear interfaces centradas en el usuario" },
        { icon: "fas fa-code", title: "Desarrollar", description: "Construir aplicaciones robustas y escalables" },
        { icon: "fas fa-rocket", title: "Lanzar", description: "Implementar y monitorear tu solución" }
    ]
};

// Reasons to choose us data
const reasons = {
    en: [
        { icon: "fas fa-bolt", title: "Lightning Fast Delivery", description: "We prioritize speed without compromising quality." },
        { icon: "fas fa-users", title: "Expert Team", description: "Our seasoned professionals bring years of industry experience." },
        { icon: "fas fa-cog", title: "Cutting-edge Technology", description: "We leverage the latest tools and frameworks for optimal results." },
        { icon: "fas fa-handshake", title: "Client-Centric Approach", description: "Your success is our top priority, and we tailor our solutions to your unique needs." }
    ],
    pt: [
        { icon: "fas fa-bolt", title: "Entrega Ultrarrápida", description: "Priorizamos a velocidade sem comprometer a qualidade." },
        { icon: "fas fa-users", title: "Equipe Especializada", description: "Nossos profissionais experientes trazem anos de experiência no setor." },
        { icon: "fas fa-cog", title: "Tecnologia de Ponta", description: "Utilizamos as  ferramentas e estruturas mais recentes para resultados ideais." },
        { icon: "fas fa-handshake", title: "Abordagem Centrada no Cliente", description: "Seu sucesso é nossa prioridade máxima, e adaptamos nossas soluções às suas necessidades únicas." }
    ],
    es: [
        { icon: "fas fa-bolt", title: "Entrega Ultrarrápida", description: "Priorizamos la velocidad sin comprometer la calidad." },
        { icon: "fas fa-users", title: "Equipo Experto", description: "Nuestros profesionales experimentados aportan años de experiencia en la industria." },
        { icon: "fas fa-cog", title: "Tecnología de Vanguardia", description: "Aprovechamos las últimas herramientas y marcos para obtener resultados óptimos." },
        { icon: "fas fa-handshake", title: "Enfoque Centrado en el Cliente", description: "Tu éxito es nuestra máxima prioridad, y adaptamos nuestras soluciones a tus necesidades únicas." }
    ]
};

// Initialize the page
function initPage() {
    changeLanguage('en');
}

// Change language
function changeLanguage(lang) {
    const data = languages[lang];
    document.getElementById('headline').textContent = data.headline;
    document.getElementById('subheadline').textContent = data.subheadline;
    document.getElementById('approach-title').textContent = data.approachTitle;
    document.getElementById('approach-description').textContent = data.approachDescription;
    document.getElementById('process-title').textContent = data.processTitle;
    document.getElementById('differentiators-title').textContent = data.differentiatorTitle;
    document.getElementById('cta-title').textContent = data.ctaTitle;
    document.getElementById('cta-description').textContent = data.ctaDescription;
    document.getElementById('get-started-btn').textContent = data.getStartedBtn;
    document.getElementById('secondary-cta-btn').textContent = data.getStartedBtn;
    document.getElementById('whatsapp-text').textContent = data.whatsappText;
    document.getElementById('email-text').textContent = data.emailText;
    document.getElementById('secondary-whatsapp-text').textContent = data.whatsappText;
    document.getElementById('secondary-email-text').textContent = data.emailText;

    renderProcessSteps(lang);
    renderReasons(lang);

    // Update active state for language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang.toUpperCase());
    });
}

// Render process steps
function renderProcessSteps(lang) {
    const processStepsContainer = document.getElementById('process-steps');
    processStepsContainer.innerHTML = processSteps[lang].map(step => `
        <div class="process-step" onclick="toggleProcess(this)">
            <i class="${step.icon}"></i>
            <h3>${step.title}</h3>
            <div class="process-details">${step.description}</div>
        </div>
    `).join('');
}

// Render reasons to choose us
function renderReasons(lang) {
    const reasonsContainer = document.getElementById('reasons');
    reasonsContainer.innerHTML = reasons[lang].map(reason => `
        <div class="reason-item" onclick="toggleReason(this)">
            <i class="${reason.icon} reason-icon"></i>
            <h3>${reason.title}</h3>
            <div class="reason-details">${reason.description}</div>
        </div>
    `).join('');
}

// Toggle reason details
function toggleReason(element) {
    const reasonsContainer = document.getElementById('reasons');
    const allReasons = reasonsContainer.querySelectorAll('.reason-item');
    const isExpanded = element.classList.contains('expanded');

    allReasons.forEach(reason => {
        reason.classList.toggle('expanded', !isExpanded);
    });
}

// Toggle process details
function toggleProcess(element) {
    const processStepsContainer = document.getElementById('process-steps');
    const allSteps = processStepsContainer.querySelectorAll('.process-step');
    const isExpanded = element.classList.contains('expanded');

    allSteps.forEach(step => {
        step.classList.toggle('expanded', !isExpanded);
    });
}

// Show contact options
function showContactOptions() {
    document.getElementById('get-started-btn').style.display = 'none';
    document.getElementById('contact-options').style.display = 'flex';
    document.getElementById('secondary-cta-btn').style.display = 'none';
    document.getElementById('secondary-contact-options').style.display = 'flex';
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
