// Language data
const languages = {
    en: {
        headline: "Fast-Delivered Apps for Forward-Thinking Companies",
        slogan: "Fast. Tailored. Connected.",
        subheadline: "Empowering Your Business with Cutting-Edge Technology",
        description: "We're Fast Digitals, a trio of tech-loving friends turned co-founders. Our passion? Crafting digital solutions that make people's lives easier and businesses more efficient. We're not just coders; we're problem solvers, dreamers, and your partners in innovation. With a blend of cutting-edge tech and a deep understanding of user needs, we're here to transform your ideas into reality. Join us on this exciting journey of fast-paced, user-centered digital evolution!",
        approachTitle: "Our Approach: The Double Diamond",
        approachDescription: "Continuous Discovery & Continuous Delivery",
        processTitle: "Our Process: Iterative Excellence",
        differentiatorTitle: "Why Choose Us?",
        theyChooseUsTitle: "They Choose Us",
        ctaTitle: "Ready to Transform Your Business?",
        ctaDescription: "Let's build your success story together",
        getStartedBtn: "Get Started",
        whatsappText: "WhatsApp",
        emailText: "Send Email"
    },
    pt: {
        headline: "Aplicativos Rápidos para Empresas Inovadoras",
        slogan: "Rápido. Personalizado. Conectado.",
        subheadline: "Potencializando Seu Negócio com Tecnologia de Ponta",
        description: "Somos a Fast Digitals, um trio de amigos apaixonados por tecnologia que se tornaram co-fundadores. Nossa paixão? Criar soluções digitais que facilitem a vida das pessoas e tornem as empresas mais eficientes. Não somos apenas programadores; somos solucionadores de problemas, sonhadores e seus parceiros em inovação. Com uma combinação de tecnologia de ponta e uma profunda compreensão das necessidades dos usuários, estamos aqui para transformar suas ideias em realidade. Junte-se a nós nesta emocionante jornada de evolução digital rápida e centrada no usuário!",
        approachTitle: "Nossa Abordagem: O Diamante Duplo",
        approachDescription: "Descoberta Contínua & Entrega Contínua",
        processTitle: "Nosso Processo: Excelência Iterativa",
        differentiatorTitle: "Por Que Nos Escolher?",
        theyChooseUsTitle: "Eles Nos Escolhem",
        ctaTitle: "Pronto para Transformar Seu Negócio?",
        ctaDescription: "Vamos construir sua história de sucesso juntos",
        getStartedBtn: "Começar",
        whatsappText: "WhatsApp",
        emailText: "Enviar E-mail"
    },
    es: {
        headline: "Aplicaciones Rápidas para Empresas Innovadoras",
        slogan: "Rápido. Personalizado. Conectado.",
        subheadline: "Potenciando Tu Negocio con Tecnología de Vanguardia",
        description: "Somos Fast Digitals, un trío de amigos amantes de la tecnología convertidos en cofundadores. ¿Nuestra pasión? Crear soluciones digitales que faciliten la vida de las personas y hagan que las empresas sean más eficientes. No somos solo programadores; somos solucionadores de problemas, soñadores y tus socios en innovación. Con una combinación de tecnología de vanguardia y una profunda comprensión de las necesidades de los usuarios, estamos aquí para transformar tus ideas en realidad. ¡Únete a nosotros en este emocionante viaje de evolución digital rápida y centrada en el usuario!",
        approachTitle: "Nuestro Enfoque: El Doble Diamante",
        approachDescription: "Descubrimiento Continuo & Entrega Continua",
        processTitle: "Nuestro Proceso: Excelencia Iterativa",
        differentiatorTitle: "¿Por Qué Elegirnos?",
        theyChooseUsTitle: "Ellos Nos Eligen",
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
        { icon: "fas fa-cog", title: "Tecnologia de Ponta", description: "Utilizamos as ferramentas e estruturas mais recentes para resultados ideais." },
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
    initTestimonialCarousel();
}

// Change language
function changeLanguage(lang) {
    const data = languages[lang];
    document.getElementById('headline').textContent = data.headline;
    document.getElementById('header-slogan').textContent = data.slogan;
    document.getElementById('subheadline').textContent = data.subheadline;
    document.getElementById('description').textContent = data.description;
    document.getElementById('approach-title').textContent = data.approachTitle;
    document.getElementById('approach-description').textContent = data.approachDescription;
    document.getElementById('process-title').textContent = data.processTitle;
    document.getElementById('differentiators-title').textContent = data.differentiatorTitle;
    document.getElementById('they-choose-us-title').textContent = data.theyChooseUsTitle;
    document.getElementById('cta-title').textContent = data.ctaTitle;
    document.getElementById('cta-description').textContent = data.ctaDescription;
    document.getElementById('get-started-btn').textContent = data.getStartedBtn;
    document.getElementById('secondary-cta-btn').textContent = data.getStartedBtn;
    document.getElementById('whatsapp-text').textContent = data.whatsappText;
    document.getElementById('email-text').textContent = data.emailText;
    document.getElementById('secondary-whatsapp-text').textContent = data.whatsappText;
    document.getElementById('secondary-email-text').textContent = data.emailText;
    document.getElementById('footer-slogan').textContent = data.slogan;

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

// Toggle contact options
function toggleContactOptions(section) {
    const btnId = section === 'primary' ? 'get-started-btn' : 'secondary-cta-btn';
    const optionsId = section === 'primary' ? 'contact-options' : 'secondary-contact-options';
    const btn = document.getElementById(btnId);
    const options = document.getElementById(optionsId);

    if (options.style.display === 'none') {
        options.style.display = 'flex';
        btn.classList.add('disabled');
    } else {
        options.style.display = 'none';
        btn.classList.remove('disabled');
    }
}

// Initialize testimonial carousel
function initTestimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
