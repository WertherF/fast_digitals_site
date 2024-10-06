const translations = {
    en: {
        headline: "Fast-Delivered Apps for Forward-Thinking Companies",
        subheadline: "Empowering Your Business with Cutting-Edge Technology",
        approach: "Our Approach: The Double Diamond",
        continuousDiscovery: "Continuous Discovery & Continuous Delivery",
        whyChooseUs: "Why Choose Us?",
        ourProcess: "Our Process: Iterative Excellence",
        readyToTransform: "Ready to Transform Your Business?",
        buildSuccessStory: "Let's build your success story together",
        getStarted: "Get Started",
        emailLabel: "Email address",
        emailPlaceholder: "you@example.com",
        scheduleChat: "Schedule a Chat",
        formDescription: "Enter your email and we'll get in touch to schedule a quick chat about your needs.",
        close: "Close",
        reasons: [
            {
                icon: "👥",
                text: "Customer-Centered Approach",
                description: "We prioritize our customers' needs and feedback, ensuring that our solutions are tailored to their specific requirements and continuously evolve to meet their changing needs."
            },
            {
                icon: "⚡",
                text: "Expert Solutions",
                description: "Our team of seasoned professionals brings years of experience and cutting-edge knowledge to deliver top-tier, innovative solutions that stand out in the market."
            },
            {
                icon: "✨",
                text: "Simplicity in Complexity",
                description: "We excel at distilling complex problems into user-friendly solutions, focusing on intuitive interfaces and streamlined processes that enhance efficiency and user satisfaction."
            },
            {
                icon: "🎧",
                text: "Continuous Support",
                description: "Our commitment doesn't end at delivery. We provide ongoing support, regular updates, and proactive improvements to ensure your solution remains effective and up-to-date."
            }
        ],
        processSteps: ["Fast Delivery", "User Feedback", "Continuous Improvement", "Business Growth"]
    },
    es: {
        headline: "Aplicaciones de Entrega Rápida para Empresas Visionarias",
        subheadline: "Potenciando su Negocio con Tecnología de Vanguardia",
        approach: "Nuestro Enfoque: El Doble Diamante",
        continuousDiscovery: "Descubrimiento Continuo y Entrega Continua",
        whyChooseUs: "¿Por Qué Elegirnos?",
        ourProcess: "Nuestro Proceso: Excelencia Iterativa",
        readyToTransform: "¿Listo para Transformar su Negocio?",
        buildSuccessStory: "Construyamos juntos su historia de éxito",
        getStarted: "Comenzar",
        emailLabel: "Dirección de correo electrónico",
        emailPlaceholder: "usted@ejemplo.com",
        scheduleChat: "Programar una Charla",
        formDescription: "Ingrese su correo electrónico y nos pondremos en contacto para programar una breve charla sobre sus necesidades.",
        close: "Cerrar",
        reasons: [
            {
                icon: "👥",
                text: "Enfoque Centrado en el Cliente",
                description: "Priorizamos las necesidades y comentarios de nuestros clientes, asegurando que nuestras soluciones estén adaptadas a sus requisitos específicos y evolucionen continuamente para satisfacer sus necesidades cambiantes."
            },
            {
                icon: "⚡",
                text: "Soluciones Expertas",
                description: "Nuestro equipo de profesionales experimentados aporta años de experiencia y conocimientos de vanguardia para ofrecer soluciones innovadoras de primer nivel que destacan en el mercado."
            },
            {
                icon: "✨",
                text: "Simplicidad en la Complejidad",
                description: "Nos destacamos en simplificar problemas complejos en soluciones fáciles de usar, centrándonos en interfaces intuitivas y procesos optimizados que mejoran la eficiencia y la satisfacción del usuario."
            },
            {
                icon: "🎧",
                text: "Soporte Continuo",
                description: "Nuestro compromiso no termina con la entrega. Proporcionamos soporte continuo, actualizaciones regulares y mejoras proactivas para garantizar que su solución siga siendo efectiva y actualizada."
            }
        ],
        processSteps: ["Entrega Rápida", "Retroalimentación del Usuario", "Mejora Continua", "Crecimiento del Negocio"]
    },
    pt: {
        headline: "Aplicativos de Entrega Rápida para Empresas Inovadoras",
        subheadline: "Capacitando seu Negócio com Tecnologia de Ponta",
        approach: "Nossa Abordagem: O Diamante Duplo",
        continuousDiscovery: "Descoberta Contínua e Entrega Contínua",
        whyChooseUs: "Por Que Nos Escolher?",
        ourProcess: "Nosso Processo: Excelência Iterativa",
        readyToTransform: "Pronto para Transformar seu Negócio?",
        buildSuccessStory: "Vamos construir sua história de sucesso juntos",
        getStarted: "Começar",
        emailLabel: "Endereço de e-mail",
        emailPlaceholder: "voce@exemplo.com",
        scheduleChat: "Agendar um Bate-papo",
        formDescription: "Digite seu e-mail e entraremos em contato para agendar uma rápida conversa sobre suas necessidades.",
        close: "Fechar",
        reasons: [
            {
                icon: "👥",
                text: "Abordagem Centrada no Cliente",
                description: "Priorizamos as necessidades e feedback de nossos clientes, garantindo que nossas soluções sejam adaptadas aos seus requisitos específicos e evoluam continuamente para atender às suas necessidades em constante mudança."
            },
            {
                icon: "⚡",
                text: "Soluções Especializadas",
                description: "Nossa equipe de profissionais experientes traz anos de experiência e conhecimento de ponta para oferecer soluções inovadoras de alto nível que se destacam no mercado."
            },
            {
                icon: "✨",
                text: "Simplicidade na Complexidade",
                description: "Nós nos destacamos em simplificar problemas complexos em soluções fáceis de usar, focando em interfaces intuitivas e processos otimizados que aumentam a eficiência e a satisfação do usuário."
            },
            {
                icon: "🎧",
                text: "Suporte Contínuo",
                description: "Nosso compromisso não termina na entrega. Fornecemos suporte contínuo, atualizações regulares e melhorias proativas para garantir que sua solução permaneça eficaz e atualizada."
            }
        ],
        processSteps: ["Entrega Rápida", "Feedback do Usuário", "Melhoria Contínua", "Crescimento do Negócio"]
    }
};

let currentLanguage = 'en';

function changeLanguage() {
    currentLanguage = document.getElementById('language-select').value;
    updateContent();
}

function updateContent() {
    const t = translations[currentLanguage];
    document.getElementById('headline').textContent = t.headline;
    document.getElementById('subheadline').textContent = t.subheadline;
    document.getElementById('approach-title').textContent = t.approach;
    document.getElementById('approach-description').textContent = t.continuousDiscovery;
    document.getElementById('differentiators-title').textContent = t.whyChooseUs;
    document.getElementById('process-title').textContent = t.ourProcess;
    document.getElementById('cta-title').textContent = t.readyToTransform;
    document.getElementById('cta-description').textContent = t.buildSuccessStory;
    document.getElementById('get-started-btn').textContent = t.getStarted;
    document.getElementById('email-label').textContent = t.emailLabel;
    document.getElementById('email').placeholder = t.emailPlaceholder;
    document.getElementById('submit-btn').textContent = t.scheduleChat;
    document.getElementById('form-description').textContent = t.formDescription;
    document.getElementById('close-dialog-btn').textContent = t.close;

    updateReasons();
    updateProcessSteps();
}

function updateReasons() {
    const reasonsContainer = document.getElementById('reasons');
    reasonsContainer.innerHTML = '';
    translations[currentLanguage].reasons.forEach(reason => {
        const button = document.createElement('button');
        button.className = 'reason';
        button.onclick = () => showDialog(reason.text, reason.description);
        button.innerHTML = `<span class="icon">${reason.icon}</span>${reason.text}`;
        reasonsContainer.appendChild(button);
    });
}

function updateProcessSteps() {
    const stepsContainer = document.getElementById('process-steps');
    stepsContainer.innerHTML = '';
    translations[currentLanguage].processSteps.forEach((step, index) => {
        const div = document.createElement('div');
        div.className = 'step';
        div.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <p>${step}</p>
        `;
        stepsContainer.appendChild(div);
    });
}

function showDialog(title, description) {
    document.getElementById('dialog-title').textContent = title;
    document.getElementById('dialog-description').textContent = description;
    document.getElementById('dialog').style.display = 'flex';
}

function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}

function showForm() {
    const form = document.getElementById('contact-form');
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    console.log('Email submitted:', email);
    alert('Thank you! We will get in touch soon.');
    this.reset();
});

// Initialize content
document.addEventListener('DOMContentLoaded', function() {
    updateContent();
});