// Language data
const languages = {
    en: {
        headline: "Boost Your Innovation with Tailor-Made Apps in Record Time",
        slogan: "Personal. Fast. Adaptive.",
        subheadline: "Transform Ideas into Reality: Agile Solutions that Evolve with You",
        description: "We're Fast Digitals, a trio of tech-loving friends turned co-founders. Our passion? Crafting digital solutions that make people's lives easier and businesses more efficient. We're not just coders; we're problem solvers, dreamers, and your partners in innovation. With a blend of cutting-edge tech and a deep understanding of user needs, we're here to transform your ideas into reality. Join us on this exciting journey of fast-paced, user-centered digital evolution!",
        approachTitle: "Our Approach: The Double Diamond",
        approachDescription: "Continuous Discovery & Continuous Delivery",
        processTitle: "Our Process: Iterative Excellence",
        differentiatorTitle: "Why Choose Us?",
        theyChooseUsTitle: "They Choose Us",
        ctaTitle: "Ready to Transform Your Business?",
        ctaDescription: "Let's build your success story together",
        getStartedBtn: "Get Your Solution",
        whatsappText: "WhatsApp",
        emailText: "Send Email",
        additionalText: "From concept to launch in weeks, not months. See how we can accelerate your digital transformation.",
        aboutUsTitle: "Who We Are: Your Digital Innovation Team",
        aboutUsContent: "Hello! We are FastDigital, a trio of tech-loving friends turned co-founders with a mission: To transform your ideas into amazing digital solutions, in record time. Our passion? Creating apps that not only make people's lives easier but revolutionize business efficiency. What defines us: • Agility: From concept to launch in weeks, not months. • Customization: Each solution is unique, just like your business. • Innovation: We use cutting-edge technology to solve complex challenges. We're not just developers. We're your innovation partners, turning challenges into digital opportunities. Ready to accelerate your digital journey? Let's create the future together!"
    },
    pt: {
        headline: "Impulsione Sua Inovação com Apps Sob Medida em Tempo Recorde",
        slogan: "Personalizado. Ágil. Flexível.",
        subheadline: "Transforme Ideias em Realidade: Soluções Ágeis que Evoluem com Você",
        description: "Somos a Fast Digitals, um trio de amigos apaixonados por tecnologia que se tornaram co-fundadores. Nossa paixão? Criar soluções digitais que facilitem a vida das pessoas e tornem as empresas mais eficientes. Não somos apenas programadores; somos solucionadores de problemas, sonhadores e seus parceiros em inovação. Com uma combinação de tecnologia de ponta e uma profunda compreensão das necessidades dos usuários, estamos aqui para transformar suas ideias em realidade. Junte-se a nós nesta emocionante jornada de evolução digital rápida e centrada no usuário!",
        approachTitle: "Nossa Abordagem: O Diamante Duplo",
        approachDescription: "Descoberta Contínua & Entrega Contínua",
        processTitle: "Nosso Processo: Excelência Iterativa",
        differentiatorTitle: "Por Que Nos Escolher?",
        theyChooseUsTitle: "Eles Nos Escolhem",
        ctaTitle: "Pronto para Transformar Seu Negócio?",
        ctaDescription: "Vamos construir sua história de sucesso juntos",
        getStartedBtn: "Receba Sua Solução",
        whatsappText: "WhatsApp",
        emailText: "Enviar E-mail",
        additionalText: "Desde o conceito até o lançamento em semanas, não meses. Veja como podemos acelerar sua transformação digital.",
        aboutUsTitle: "Quem Somos: Sua Equipe de Inovação Digital",
        aboutUsContent: "Olá! Somos a FastDigital, um trio de amigos apaixonados por tecnologia que se tornaram co-fundadores com uma missão: Transformar suas ideias em soluções digitais incríveis, em tempo recorde. Nossa paixão? Criar apps que não só facilitam a vida das pessoas, mas revolucionam a eficiência das empresas. O que nos define: • Agilidade: Do conceito ao lançamento em semanas, não meses. • Personalização: Cada solução é única, assim como o seu negócio. • Inovação: Usamos tecnologia de ponta para resolver desafios complexos. Não somos apenas desenvolvedores. Somos seus parceiros em inovação, transformando desafios em oportunidades digitais. Prontos para acelerar sua jornada digital? Vamos criar o futuro juntos!"
    },
    es: {
        headline: "Impulse Su Innovación con Apps a Medida en Tiempo Récord",
        slogan: "Personal. Rápido. Adaptativo.",
        subheadline: "Transforme Ideas en Realidad: Soluciones Ágiles que Evolucionan con Usted",
        description: "Somos Fast Digitals, un trío de amigos amantes de la tecnología convertidos en cofundadores. ¿Nuestra pasión? Crear soluciones digitales que faciliten la vida de las personas y hagan que las empresas sean más eficientes. No somos solo programadores; somos solucionadores de problemas, soñadores y tus socios en innovación. Con una combinación de tecnología de vanguardia y una profunda comprensión de las necesidades de los usuarios, estamos aquí para transformar tus ideas en realidad. ¡Únete a nosotros en este emocionante viaje de evolución digital rápida y centrada en el usuario!",
        approachTitle: "Nuestro Enfoque: El Doble Diamante",
        approachDescription: "Descubrimiento Continuo & Entrega Continua",
        processTitle: "Nuestro Proceso: Excelencia Iterativa",
        differentiatorTitle: "¿Por Qué Elegirnos?",
        theyChooseUsTitle: "Ellos Nos Eligen",
        ctaTitle: "¿Listo para Transformar Tu Negocio?",
        ctaDescription: "Construyamos juntos tu historia de éxito",
        getStartedBtn: "Obtenga Su Solución",
        whatsappText: "WhatsApp",
        emailText: "Enviar Correo",
        additionalText: "Desde el concepto hasta el lanzamiento en semanas, no meses. Vea cómo podemos acelerar su transformación digital.",
        aboutUsTitle: "Quiénes Somos: Su Equipo de Innovación Digital",
        aboutUsContent: "¡Hola! Somos FastDigital, un trío de amigos apasionados por la tecnología que se convirtieron en cofundadores con una misión: Transformar sus ideas en increíbles soluciones digitales en tiempo récord. ¿Nuestra pasión? Crear aplicaciones que no solo faciliten la vida de las personas, sino que revolucionen la eficiencia de las empresas. Lo que nos define: • Agilidad: Del concepto al lanzamiento en semanas, no meses. • Personalización: Cada solución es única, como su negocio. • Innovación: Utilizamos tecnología de vanguardia para resolver desafíos complejos. No somos solo desarrolladores. Somos sus socios en innovación, transformando desafíos en oportunidades digitales. ¿Listos para acelerar su viaje digital? ¡Creemos el futuro juntos!"
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
    changeLanguage('pt');
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
    document.getElementById('additional-text').textContent = data.additionalText;
    document.getElementById('about-us-title').textContent = data.aboutUsTitle;
    document.getElementById('about-us-content').textContent = data.aboutUsContent;

    renderProcessSteps(lang);
    renderReasons(lang);

    // Update active state for language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
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
    element.classList.toggle('expanded');
}

// Toggle process details
function toggleProcess(element) {
    element.classList.toggle('expanded');
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
