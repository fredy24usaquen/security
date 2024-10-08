const levels = [
    {
        number: 1,
        questions: [
            { question: "¿Qué es el phishing?", options: ["Ataque físico", "Robo de identidad", "Captura de contraseñas", "Instalación de software"], answer: 2 },
            { question: "¿Qué es un firewall?", options: ["Un tipo de malware", "Una barrera de seguridad", "Un ataque a la red", "Un método de hacking"], answer: 1 },
            { question: "¿Qué es una contraseña segura?", options: ["123456", "Tu nombre", "Una combinación de letras, números y símbolos", "Tu fecha de nacimiento"], answer: 2 },
            { question: "¿Qué es un ataque de fuerza bruta?", options: ["Hacer muchas solicitudes simultáneas a un servidor", "Intentar adivinar una contraseña probando muchas combinaciones", "Modificar un archivo sin permiso", "Interceptar el tráfico de red"], answer: 1 },
            { question: "¿Qué significa VPN?", options: ["Virtual Private Network", "Very Private Network", "Virtual Public Network", "Very Protected Network"], answer: 0 },
            { question: "¿Qué es un malware?", options: ["Software malicioso", "Actualización de sistema", "Protección antivirus", "Un archivo seguro"], answer: 0 },
            { question: "¿Cuál de los siguientes es un método de autenticación?", options: ["Cifrado", "Doble factor", "Firewall", "IP pública"], answer: 1 },
            { question: "¿Qué es una vulnerabilidad de software?", options: ["Una función nueva", "Una falla de seguridad", "Un nuevo parche", "Una mejora de velocidad"], answer: 1 },
            { question: "¿Cuál de los siguientes protege contra accesos no autorizados?", options: ["Antivirus", "Firewall", "Cifrado de datos", "Puertos abiertos"], answer: 1 },
            { question: "¿Qué es el spoofing?", options: ["Robar información", "Simular una identidad falsa", "Instalar software sin permiso", "Cifrar datos"], answer: 1 }
        ],
        background: 'nivel1.gif',
        sound: 'nivel1.mp3'
    },
    {
        number: 2,
        questions: [
            { question: "¿Qué significa HTTPS?", options: ["Protocolo de transferencia de archivos", "Protocolo seguro de transferencia de hipertexto", "Protocolo de red local", "Protocolo de acceso remoto"], answer: 1 },
            { question: "¿Qué es un ataque DDoS?", options: ["Denegación de servicio", "Robo de información", "Acceso no autorizado", "Control remoto de dispositivos"], answer: 0 },
            { question: "¿Cuál es el propósito del cifrado?", options: ["Hacer más rápida la transmisión de datos", "Proteger la información haciéndola ilegible para terceros", "Eliminar archivos", "Crear copias de seguridad"], answer: 1 },
            { question: "¿Qué es el ransomware?", options: ["Un tipo de malware que bloquea archivos a cambio de un rescate", "Un programa para proteger la red", "Un virus que ralentiza el sistema", "Un firewall avanzado"], answer: 0 },
            { question: "¿Qué es un ataque de intermediario (Man-in-the-Middle)?", options: ["Un ataque donde el atacante intercepta la comunicación entre dos partes", "Un ataque donde se cambia el contenido de un archivo", "Un ataque donde se roba información bancaria", "Un ataque donde se cierra un servidor"], answer: 0 },
            { question: "¿Qué es un certificado digital?", options: ["Un software antivirus", "Un documento que autentica la identidad de un sitio web", "Una clave de acceso", "Un tipo de firewall"], answer: 1 },
            { question: "¿Qué es la ingeniería social?", options: ["El uso de algoritmos de seguridad", "El engaño a personas para obtener información confidencial", "La programación de sistemas seguros", "El cifrado de datos"], answer: 1 },
            { question: "¿Qué es la autenticación de dos factores?", options: ["Una contraseña larga", "Un método que utiliza dos formas de verificación", "Un tipo de virus", "Un firewall"], answer: 1 },
            { question: "¿Cuál de los siguientes es un ejemplo de malware?", options: ["Worm", "WiFi", "VPN", "Firewall"], answer: 0 },
            { question: "¿Qué se debe hacer para proteger un sistema?", options: ["Instalar solo antivirus", "Mantener actualizado el software", "No usar contraseñas", "No instalar firewalls"], answer: 1 }
        ],
        background: 'nivel2.gif',
        sound: 'nivel2.mp3'
    
    },
    {
        number: 3,
        questions: [
            { question: "¿Qué es la autenticación biométrica?", options: ["Autenticación con contraseña", "Autenticación con características físicas únicas", "Autenticación con PIN", "Autenticación con tokens"], answer: 1 },
            { question: "¿Cuál es el propósito de un honeypot?", options: ["Atraer y detectar ataques cibernéticos", "Bloquear el acceso a redes", "Cifrar los datos de usuarios", "Asegurar la autenticación"], answer: 0 },
            { question: "¿Qué significa SQLi?", options: ["SQL Injection", "Secure Query Logic", "Script Quality Level", "Secure Queue Logging"], answer: 0 },
            { question: "¿Qué es un exploit?", options: ["Un software antivirus", "Una vulnerabilidad que puede ser aprovechada", "Un sistema de autenticación", "Un tipo de malware"], answer: 1 },
            { question: "¿Qué significa MFA?", options: ["Multiple Factor Authentication", "Main Firewall Authentication", "Multi-Factor Authentication", "Medium File Access"], answer: 2 },
            { question: "¿Qué es el hashing?", options: ["Un método para cifrar datos", "Una técnica para generar una huella digital única de datos", "Un sistema de autenticación", "Una clave de cifrado"], answer: 1 },
            { question: "¿Qué es la suplantación de DNS?", options: ["Un ataque que altera las direcciones IP en caché para redirigir a usuarios", "Un ataque de fuerza bruta", "Un firewall", "Un sistema de cifrado"], answer: 0 },
            { question: "¿Qué es OWASP?", options: ["Una organización que promueve la seguridad de aplicaciones web", "Un software de antivirus", "Un tipo de ataque de red", "Un firewall avanzado"], answer: 0 },
            { question: "¿Qué es un ataque por inyección de código?", options: ["Un ataque donde se inserta código malicioso en una aplicación", "Un ataque por denegación de servicio", "Un ataque a la infraestructura física", "Un ataque de ingeniería social"], answer: 0 },
            { question: "¿Qué hace un antivirus?", options: ["Detecta y elimina software malicioso", "Instala software no autorizado", "Modifica archivos", "Desactiva la conexión a Internet"], answer: 0 }
        ],
        background: 'nivel3.gif',
        sound: 'nivel3.mp3'
    },
    {
        number: 4,
        questions: [
            { question: "¿Qué es un ataque de día cero?", options: ["Un ataque que explota una vulnerabilidad recién descubierta", "Un ataque planificado para el primer día del mes", "Un tipo de malware", "Una actualización de seguridad"], answer: 0 },
            { question: "¿Qué es una VPN?", options: ["Una red privada virtual", "Un tipo de malware", "Un firewall", "Un antivirus"], answer: 0 },
            { question: "¿Qué es un ataque de fuerza bruta distribuido?", options: ["Un ataque que se realiza desde múltiples ubicaciones para adivinar contraseñas", "Un ataque que se realiza a una sola computadora", "Un tipo de phishing", "Un firewall distribuido"], answer: 0 },
            { question: "¿Qué es el cifrado de extremo a extremo?", options: ["Un método de cifrado que asegura que solo el remitente y el destinatario puedan leer el mensaje", "Un ataque de red", "Un sistema de autenticación", "Un tipo de virus"], answer: 0 },
            { question: "¿Qué es la autenticación de múltiples factores?", options: ["Un sistema de autenticación que usa más de una verificación", "Una clave de cifrado", "Una vulnerabilidad en el software", "Un ataque a la red"], answer: 0 },
            { question: "¿Qué es el spear phishing?", options: ["Un tipo de phishing dirigido a un individuo o una organización específica", "Un ataque de fuerza bruta", "Una técnica de cifrado", "Un sistema de autenticación"], answer: 0 },
            { question: "¿Qué es la suplantación de identidad?", options: ["Hacerse pasar por alguien más para obtener información", "Un ataque de denegación de servicio", "Un sistema de autenticación", "Un tipo de firewall"], answer: 0 },
            { question: "¿Qué significa IDS?", options: ["Intrusion Detection System", "Internet Data Security", "Information Data Storage", "Internal Digital Security"], answer: 0 },
            { question: "¿Qué es la suplantación de correo electrónico?", options: ["El envío de correos desde una dirección falsa para engañar a los destinatarios", "Un ataque de fuerza bruta", "Una técnica de cifrado", "Un tipo de phishing"], answer: 0 },
            { question: "¿Qué es la seguridad perimetral?", options: ["La protección de los bordes de una red o sistema", "Un tipo de cifrado", "Una clave de autenticación", "Un firewall avanzado"], answer: 0 }
        ],
        background: 'nivel4.gif',
        sound: 'nivel4.mp3'
    }
    
];

let currentLevel = 0;
let quizContainer = document.getElementById('questions');
let levelTitle = document.getElementById('level-title');
const ambientSound = document.getElementById('ambientSound');

function loadLevel(levelIndex) {
    const level = levels[levelIndex];
    document.body.style.backgroundImage = `url(${level.background})`;
    ambientSound.src = level.sound;
    ambientSound.load();  
ambientSound.play().catch(error => {
    console.log('Reproducción automática bloqueada:', error);
});

    levelTitle.innerText = `Nivel ${level.number}`;
    quizContainer.innerHTML = '';

    level.questions.forEach((questionObj, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<p>${index + 1}. ${questionObj.question}</p>`;

        questionObj.options.forEach((option, i) => {
            questionElement.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${i}" />
                    ${option}
                </label><br />
            `;
        });
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    const level = levels[currentLevel];
    let score = 0;

    level.questions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === questionObj.answer) {
            score++;
        }
    });

    const percentage = (score / level.questions.length) * 100;
    
    if (percentage >= 70) {
        if (currentLevel < levels.length - 1) {
            currentLevel++;
            alert(`¡Felicidades! Has pasado al nivel ${currentLevel + 1}.`);
            loadLevel(currentLevel);
        } else {
            alert('¡Felicidades! Has completado todos los niveles.');
        }
    } else {
        alert(`Lo siento, no pasaste el nivel. Tu puntaje fue ${score}/${level.questions.length}.`);
        window.location.href = `result.html?score=${score}&total=${level.questions.length}`;
    }
}

window.onload = function() {
    loadLevel(currentLevel);
}
