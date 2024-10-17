// Language data
const languages = {
    en: {
        headline: "Boost Your Innovation with Tailor-Made Apps in Record Time",
        slogan: "Personal. Fast. Adaptive.",
        sloganFooter: "Tailored digital innovation, delivered at the speed of your business.",
        subheadline: "Transform Ideas into Reality: Agile Solutions that Evolve with You",
        aboutUsTitle: "Who We Are: Your Digital Innovation Team",
        aboutUsContent: `Hello!
We are FastDigital, a trio of tech-loving friends turned co-founders with a mission: To transform your ideas into amazing digital solutions, in record time.
Our passion? Creating apps that not only make people's lives easier but revolutionize business efficiency.
What defines us:
• Agility: From concept to launch in weeks, not months.
• Customization: Each solution is unique, just like your business.
• Innovation: We use cutting-edge technology to solve complex challenges.


We're not just developers. We're your innovation partners, turning challenges into digital opportunities.


Ready to accelerate your digital journey?
Let's create the future together!`,
        getStartedBtn: "Accelerate Your Digital Project",
        whatsappText: "WhatsApp",
        emailText: "Send Email",
        additionalText: "From concept to launch in weeks, not months. See how we can accelerate your digital transformation."
    },
    pt: {
        headline: "Impulsione Sua Inovação com Apps Sob Medida em Tempo Recorde",
        slogan: "Personalizado. Ágil. Flexível.",
        sloganFooter: "Inovação digital sob medida, entregue na velocidade do seu negócio.",
        subheadline: "Transforme Ideias em Realidade: Soluções Ágeis que Evoluem com Você",
        aboutUsTitle: "Quem Somos: Sua Equipe de Inovação Digital",
        aboutUsContent: `Olá!
Somos a FastDigital, um trio de amigos apaixonados por tecnologia que se tornaram co-fundadores com uma missão: Transformar suas ideias em soluções digitais incríveis, em tempo recorde.
Nossa paixão? Criar apps que não só facilitam a vida das pessoas, mas revolucionam a eficiência das empresas.
O que nos define:
• Agilidade: Do conceito ao lançamento em semanas, não meses.
• Personalização: Cada solução é única, assim como o seu negócio.
• Inovação: Usamos tecnologia de ponta para resolver desafios complexos.


Não somos apenas desenvolvedores. Somos seus parceiros em inovação, transformando desafios em oportunidades digitais.


Prontos para acelerar sua jornada digital?
Vamos criar o futuro juntos!`,
        getStartedBtn: "Acelere Seu Projeto Digital",
        whatsappText: "WhatsApp",
        emailText: "Enviar E-mail",
        additionalText: "Desde o conceito até o lançamento em semanas, não meses. Veja como podemos acelerar sua transformação digital."
    },
    es: {
        headline: "Impulse Su Innovación con Apps a Medida en Tiempo Récord",
        slogan: "Personal. Rápido. Adaptativo.",
        sloganFooter: "Innovación digital a medida, entregada a la velocidad de tu negocio",
        subheadline: "Transforme Ideas en Realidad: Soluciones Ágiles que Evolucionan con Usted",
        aboutUsTitle: "Quiénes Somos: Su Equipo de Innovación Digital",
        aboutUsContent: `¡Hola!
Somos FastDigital, un trío de amigos apasionados por la tecnología que se convirtieron en cofundadores con una misión: Transformar sus ideas en increíbles soluciones digitales en tiempo récord.
¿Nuestra pasión? Crear aplicaciones que no solo faciliten la vida de las personas, sino que revolucionen la eficiencia de las empresas.
Lo que nos define:
• Agilidad: Del concepto al lanzamiento en semanas, no meses.
• Personalización: Cada solución es única, como su negocio.
• Innovación: Utilizamos tecnología de vanguardia para resolver desafíos complejos.


No somos solo desarrolladores. Somos sus socios en innovación, transformando desafíos en oportunidades digitales.


¿Listos para acelerar su viaje digital?
¡Creemos el futuro juntos!`,
        getStartedBtn: "Acelera Tu Proyecto Digital",
        whatsappText: "WhatsApp",
        emailText: "Enviar Correo",
        additionalText: "Desde el concepto hasta el lanzamiento en semanas, no meses. Vea cómo podemos acelerar su transformación digital."
    }
};

// Initialize the page
function initPage() {
    changeLanguage('pt');
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
    document.getElementById('get-started-btn').textContent = data.getStartedBtn;
    document.getElementById('whatsapp-text').textContent = data.whatsappText;
    document.getElementById('email-text').textContent = data.emailText;
    document.getElementById('footer-slogan').textContent = data.sloganFooter;
    document.getElementById('additional-text').textContent = data.additionalText;

    // Update active state for language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang.toLowerCase());
    });
}

// Toggle contact options
function toggleContactOptions(section) {
    const btnId = 'get-started-btn';
    const  optionsId = 'contact-options';
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

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);
