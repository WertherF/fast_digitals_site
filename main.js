// Language data
const languages = {
    en: {
        headline: "Boost Your Innovation with Tailor-Made Apps in Record Time",
        slogan: "Personal. Fast. Adaptive.",
        subheadline: "Transform Ideas into Reality: Agile Solutions that Evolve with You",
        aboutUsTitle: "Who We Are: Your Digital Innovation Team",
        aboutUsContent: "Hello! We are FastDigital, a trio of tech-loving friends turned co-founders with a mission: To transform your ideas into amazing digital solutions, in record time. Our passion? Creating apps that not only make people's lives easier but revolutionize business efficiency. What defines us: • Agility: From concept to launch in weeks, not months. • Customization: Each solution is unique, just like your business. • Innovation: We use cutting-edge technology to solve complex challenges. We're not just developers. We're your innovation partners, turning challenges into digital opportunities. Ready to accelerate your digital journey? Let's create the future together!",
        approachTitle: "Our Approach: The Double Diamond",
        approachDescription: "Continuous Discovery & Continuous Delivery",
        processTitle: "Our Process: Agile Innovation in Action",
        processIntro: "At FastDigital, each step of our process is an opportunity to innovate and deliver value. We combine agility and customization to transform your ideas into digital solutions that evolve with your business.",
        differentiatorTitle: "Why FastDigital? Your Competitive Advantage",
        theyChooseUsTitle: "Success Partners: Stories that Inspire",
        logoCarouselSubtitle: "Innovative companies that trust Fast Digitals",
        ctaTitle: "Ready to Transform Your Business?",
        ctaDescription: "Let's build your success story together",
        getStartedBtn: "Get Your Solution",
        whatsappText: "WhatsApp",
        emailText: "Send Email",
        additionalText: "From concept to launch in weeks, not months. See how we can accelerate your digital transformation.",
        testimonialCtaBtn: "Want to be the next success story? Contact us!"
    },
    pt: {
        headline: "Impulsione Sua Inovação com Apps Sob Medida em Tempo Recorde",
        slogan: "Personalizado. Ágil. Flexível.",
        subheadline: "Transforme Ideias em Realidade: Soluções Ágeis que Evoluem com Você",
        aboutUsTitle: "Quem Somos: Sua Equipe de Inovação Digital",
        aboutUsContent: "Olá! Somos a FastDigital, um trio de amigos apaixonados por tecnologia que se tornaram co-fundadores com uma missão: Transformar suas ideias em soluções digitais incríveis, em tempo recorde. Nossa paixão? Criar apps que não só facilitam a vida das pessoas, mas revolucionam a eficiência das empresas. O que nos define: • Agilidade: Do conceito ao lançamento em semanas, não meses. • Personalização: Cada solução é única, assim como o seu negócio. • Inovação: Usamos tecnologia de ponta para resolver desafios complexos. Não somos apenas desenvolvedores. Somos seus parceiros em inovação, transformando desafios em oportunidades digitais. Prontos para acelerar sua jornada digital? Vamos criar o futuro juntos!",
        approachTitle: "Nossa Abordagem: O Diamante Duplo",
        approachDescription: "Descoberta Contínua & Entrega Contínua",
        processTitle: "Nosso Processo: Inovação Ágil em Ação",
        processIntro: "Na FastDigital, cada etapa do nosso processo é uma oportunidade de inovar e entregar valor. Combinamos agilidade e personalização para transformar suas ideias em soluções digitais que evoluem com o seu negócio.",
        differentiatorTitle: "Por Que a FastDigital? Sua Vantagem Competitiva",
        theyChooseUsTitle: "Parceiros de Sucesso: Histórias que Inspiram",
        logoCarouselSubtitle: "Empresas inovadoras que confiam na Fast Digitals",
        ctaTitle: "Pronto para Transformar Seu Negócio?",
        ctaDescription: "Vamos construir sua história de sucesso juntos",
        getStartedBtn: "Receba Sua Solução",
        whatsappText: "WhatsApp",
        emailText: "Enviar E-mail",
        additionalText: "Desde o conceito até o lançamento em semanas, não meses. Veja como podemos acelerar sua transformação digital.",
        testimonialCtaBtn: "Quer ser o próximo caso de sucesso? Fale conosco!"
    },
    es: {
        headline: "Impulse Su Innovación con Apps a Medida en Tiempo Récord",
        slogan: "Personal. Rápido. Adaptativo.",
        subheadline: "Transforme Ideas en Realidad: Soluciones Ágiles que Evolucionan con Usted",
        aboutUsTitle: "Quiénes Somos: Su Equipo de Innovación Digital",
        aboutUsContent: "¡Hola! Somos FastDigital, um trío de amigos apaixonados por la tecnología que se convirtieron en cofundadores con una misión: Transformar sus ideas en increíbles soluciones digitales en tiempo récord. ¿Nuestra pasión? Crear aplicaciones que no solo faciliten la vida de las personas, sino que revolucionen la eficiencia de las empresas. Lo que nos define: • Agilidad: Del concepto al lanzamiento en semanas, no meses. • Personalización: Cada solución es única, como su negocio. • Innovación: Utilizamos tecnología de vanguardia para resolver desafíos complejos. No somos solo desarrolladores. Somos sus socios en innovación, transformando desafíos en oportunidades digitales. ¿Listos para acelerar su viaje digital? ¡Creemos el futuro juntos!",
        approachTitle: "Nuestro Enfoque: El Doble Diamante",
        approachDescription: "Descubrimiento Continuo & Entrega Continua",
        processTitle: "Nuestro Proceso: Innovación Ágil en Acción",
        processIntro: "En FastDigital, cada etapa de nuestro proceso es una oportunidad para innovar y entregar valor. Combinamos agilidad y personalización para transformar sus ideas en soluciones digitales que evolucionan con su negocio.",
        differentiatorTitle: "¿Por Qué FastDigital? Tu Ventaja Competitiva",
        theyChooseUsTitle: "Socios de Éxito: Historias que Inspiran",
        logoCarouselSubtitle: "Empresas innovadoras que confían en Fast Digitals",
        ctaTitle: "¿Listo para Transformar Tu Negocio?",
        ctaDescription: "Construyamos juntos tu historia de éxito",
        getStartedBtn: "Obtenga Su Solución",
        whatsappText: "WhatsApp",
        emailText: "Enviar Correo",
        additionalText: "Desde el concepto hasta el lanzamiento en semanas, no meses. Vea cómo podemos acelerar su transformación digital.",
        testimonialCtaBtn: "¿Quieres ser el próximo caso de éxito? ¡Contáctanos!"
    }
};

// Process steps data
const processSteps = {
    en: [
        { icon: "fas fa-lightbulb", title: "Create Tailored Solutions", description: "We transform your ideas into innovative concepts that meet your business's unique needs." },
        { icon: "fas fa-pencil-alt", title: "Design Intuitive Experiences", description: "We create user-centered interfaces that delight and simplify the digital journey." },
        { icon: "fas fa-code", title: "Build with Agility and Precision", description: "We transform concepts into code, delivering robust and scalable applications in record time." },
        { icon: "fas fa-rocket", title: "Deliver Value Continuously", description: "We implement your solution and constantly evolve it, ensuring immediate and lasting results." }
    ],
    pt: [
        { icon: "fas fa-lightbulb", title: "Criar soluções sob medida", description: "Transformamos suas ideias em conceitos inovadores que atendem às necessidades únicas do seu negócio." },
        { icon: "fas fa-pencil-alt", title: "Desenhar experiências intuitivas", description: "Criamos interfaces centradas no usuário que encantam e simplificam a jornada digital." },
        { icon: "fas fa-code", title: "Construir com agilidade e precisão", description: "Transformamos conceitos em código, entregando aplicações robustas e escaláveis em tempo recorde." },
        { icon: "fas fa-rocket", title: "Entregar valor continuamente", description: "Implementamos sua solução e a evoluímos constantemente, garantindo resultados imediatos e duradouros." }
    ],
    es: [
        { icon: "fas fa-lightbulb", title: "Crear soluciones a medida", description: "Transformamos sus ideas en conceptos innovadores que satisfacen las necesidades únicas de su negocio." },
        { icon: "fas fa-pencil-alt", title: "Diseñar experiencias intuitivas", description: "Creamos interfaces centradas en el usuario que encantan y simplifican el viaje digital." },
        { icon: "fas fa-code", title: "Construir con agilidad y precisión", description: "Transformamos conceptos en código, entregando aplicaciones robustas y escalables en tiempo récord." },
        { icon: "fas fa-rocket", title: "Entregar valor continuamente", description: "Implementamos su solución y la evolucionamos constantemente, garantizando resultados inmediatos y duraderos." }
    ]
};

// Reasons to choose us data
const reasons = {
    en: [
        { icon: "fas fa-bolt", title: "Speed", description: "From concept to launch in weeks. Your idea comes to life while the competition is still planning." },
        { icon: "fas fa-users", title: "Personalization", description: "Every business is unique. We develop flexible apps that adapt and evolve with your market needs." },
        { icon: "fas fa-cog", title: "Innovation", description: "Our tech-passionate team uses cutting-edge tools to transform complex challenges into elegant and scalable solutions." },
        { icon: "fas fa-handshake", title: "Evolving Partnership", description: "More than developers, we are your innovation partners. Your success is our mission, ensuring long-term ROI." }
    ],
    pt: [
        { icon: "fas fa-bolt", title: "Velocidade que Transforma", description: "Do conceito ao lançamento em semanas. Sua ideia ganha vida enquanto a concorrência ainda está planejando." },
        { icon: "fas fa-users", title: "Soluções Sob Medida", description: "Cada negócio é único. Desenvolvemos apps flexíveis que se adaptam e evoluem com as necessidades do seu mercado." },
        { icon: "fas fa-cog", title: "Inovação na Prática", description: "Nossa equipe apaixonada por tecnologia utiliza ferramentas de ponta para transformar desafios complexos em soluções elegantes e escaláveis." },
        { icon: "fas fa-handshake", title: "Parceria que Evolui", description: "Mais que desenvolvedores, somos seus parceiros em inovação. Seu sucesso é nossa missão, gerando valor imediato e crescente para o seu negócio." }
    ],
    es: [
        { icon: "fas fa-bolt", title: "Velocidad que Transforma", description: "Del concepto al lanzamiento en semanas. Tu idea cobra vida mientras la competencia aún está planificando." },
        { icon: "fas fa-users", title: "Soluciones a Medida", description: "Cada negocio es único. Desarrollamos aplicaciones flexibles que se adaptan y evolucionan con las necesidades de tu mercado." },
        { icon: "fas fa-cog", title: "Innovación en la Práctica", description: "Nuestro equipo apasionado por la tecnología utiliza herramientas de vanguardia para transformar desafíos complejos en soluciones elegantes y escalables." },
        { icon: "fas fa-handshake", title: "Asociación que Evoluciona", description: "Más que desarrolladores, somos tus socios en innovación. Tu éxito es nuestra misión, generando valor inmediato y creciente para su negocio." }
    ]
};

// Testimonials data
const testimonials = {
    en: [
        {
            text: "Fast Digitals revolutionized our business. Their rapid delivery and exceptional quality allowed us to launch our app months ahead of schedule, gaining a crucial competitive advantage.",
            author: "Michael Silva, Founder of TechNova"
        },
        {
            text: "Fast Digitals' personalized approach made all the difference. They not only understood our unique needs but also created a solution that perfectly adapts to our growth.",
            author: "Anna Rodriguez, CEO of Inova Health"
        },
        {
            text: "Choosing Fast Digitals was the best decision we made. Their innovative team transformed our complex idea into an intuitive and efficient app, exceeding all our expectations.",
            author: "Charles Mendes, CTO of EcoTech"
        }
    ],
    pt: [
        {
            text: "A Fast Digitals revolucionou nosso negócio. Sua entrega rápida e qualidade excepcional nos permitiram lançar nosso app meses antes do previsto, ganhando uma vantagem competitiva crucial.",
            author: "Miguel Silva, Fundador da TechNova"
        },
        {
            text: "A abordagem personalizada da Fast Digitals fez toda a diferença. Eles não apenas entenderam nossas necessidades únicas, mas também criaram uma solução que se adapta perfeitamente ao nosso crescimento.",
            author: "Ana Rodrigues, CEO da Inova Saúde"
        },
        {
            text: "Escolher a Fast Digitals foi a melhor decisão que tomamos. Sua equipe inovadora transformou nossa ideia complexa em um app intuitivo e eficiente, superando todas as nossas expectativas.",
            author: "Carlos Mendes, Diretor de Tecnologia da EcoTech"
        }
    ],
    es: [
        {
            text: "Fast Digitals revolucionó nuestro negocio. Su rápida entrega y calidad excepcional nos permitieron lanzar nuestra aplicación meses antes de lo previsto, ganando una ventaja competitiva crucial.",
            author: "Miguel Silva, Fundador de TechNova"
        },
        {
            text: "El enfoque personalizado de Fast Digitals marcó la diferencia. No solo entendieron nuestras necesidades únicas, sino que también crearon una solución que se adapta perfectamente a nuestro crecimiento.",
            author: "Ana Rodrigues, CEO de Inova Salud"
        },
        {
            text: "Elegir Fast Digitals fue la mejor decisión que tomamos. Su equipo innovador transformó nuestra idea compleja en una aplicación intuitiva y eficiente, superando todas nuestras expectativas.",
            author: "Carlos Mendes, Director de Tecnología de EcoTech"
        
        }
    ]
};

// Initialize the page
function initPage() {
    changeLanguage('pt');
    initTestimonialCarousel();
}

// Change language
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    const data = languages[lang];
    document.getElementById('headline').textContent = data.headline;
    document.getElementById('header-slogan').textContent = data.slogan;
    document.getElementById('subheadline').textContent = data.subheadline;
    document.getElementById('about-us-title').textContent = data.aboutUsTitle;
    document.getElementById('about-us-content').textContent = data.aboutUsContent;
    document.getElementById('approach-title').textContent = data.approachTitle;
    document.getElementById('approach-description').textContent = data.approachDescription;
    document.getElementById('process-title').textContent = data.processTitle;
    document.getElementById('process-intro').textContent = data.processIntro;
    document.getElementById('differentiators-title').textContent = data.differentiatorTitle;
    document.getElementById('they-choose-us-title').textContent = data.theyChooseUsTitle;
    document.getElementById('logo-carousel-subtitle').textContent = data.logoCarouselSubtitle;
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
    document.getElementById('testimonial-cta-btn').textContent = data.testimonialCtaBtn;
    document.getElementById('testimonial-whatsapp-text').textContent = data.whatsappText;
    document.getElementById('testimonial-email-text').textContent = data.emailText;

    renderProcessSteps(lang);
    renderReasons(lang);
    renderTestimonials(lang);

    // Update active state for language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang.toLowerCase());
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

// Render testimonials
function renderTestimonials(lang) {
    const testimonialContainer = document.querySelector('.testimonial-carousel');
    testimonialContainer.innerHTML = testimonials[lang].map(testimonial => `
        <div class="testimonial-slide">
            <p>"${testimonial.text}"</p>
            <p class="author">- ${testimonial.author}</p>
        </div>
    `).join('');
    initTestimonialCarousel();
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
    const btnId = section === 'primary' ? 'get-started-btn' : (section === 'secondary' ? 'secondary-cta-btn' : 'testimonial-cta-btn');
    const optionsId = section === 'primary' ? 'contact-options' : (section === 'secondary' ? 'secondary-contact-options' : 'testimonial-contact-options');
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
