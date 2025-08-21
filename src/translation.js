// En este archivo se encuentra el JSON con el contenido traducido del portafolio en
// Español, Ingles y Aleman

const translations = {
  es: {
    navbar: {
      contactBtn: "Contáctame",
      sectionSelector: {
        home: "Inicio",
        aboutMe: "Sobre Mí",
        work: "Trabajo",
        academic: "Académico",
      },
    },
    footer: {
      name: "Juan Cruz Ceballos",
      copyright: "Mi Portafolio. Todos los derechos reservados.",
    },
    contact: {
      title: "Si estas interesado en contactarme, aquí tienes mis datos:",
      copied: "Copiado al portapapeles",
      linkedin: {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/juan-cruz-ceballos/",
      },
      github: {
        name: "Github",
        link: "https://github.com/Juan-C-Ceballos",
      },
      mail: {
        name: "Mail",
        link: "juancruzceballos0@gmail.com",
      },
      phone: {
        name: "Telefono",
        link: "+54 9 388 4665015",
      },
    },
    home: {
      title: "Hola, Soy Juan Cruz Ceballos",
      description: {
        student: "Estudiante de Ingeniería en Sistemas",
        analyst: "Analista de Sistemas",
        developer: "Desarrollador Frontend & Backend",
      },
    },
    aboutMe: {
      personal: {
        title: "Quien Soy",
        content: {
          brain:
            "Soy un desarrollador en formación, curioso, creativo y apasionado por aprender de todo lo que me rodea. Me motiva comprender cómo funcionan las cosas y transformar ese conocimiento en soluciones útiles y prácticas.",
          art: "Disfruto del arte y el diseño, que alimentan mi creatividad y me permiten aplicarla en mis proyectos y aplicaciones.",
          sport:
            "Fuera del código, practico vóley y entreno en el gimnasio, actividades que han fortalecido mi disciplina y capacidad de trabajo en equipo.",
          gaming:
            "El gaming fue mi puerta de entrada al mundo de la tecnología, impulsándome a dedicarme a la ingeniería de software y la investigación informática.",
          target:
            "Actualmente, busco seguir ampliando mis conocimientos y desarrollar proyectos que integren innovación, utilidad y diversión.",
        },
      },
      technology: {
        title: "Tecnología",
        content: {
          react: "React con Tailwind CSS",
          java: "Java con Spring Boot",
          python: "Python con FastAPI",
          github: "GitHub",
          databases: "Bases de Datos SQL",
          javascript: "JavaScript con Express.js",
          postman: "Postman",
        },
      },
      softSkills: {
        title: "Habilidades Blandas",
        content: {
          communication: "Comunicación efectiva",
          teamwork: "Trabajo en equipo",
          adaptability: "Adaptabilidad y Responsabilidad",
          timeManagement: "Gestión del tiempo",
          analyticalThinking: "Pensamiento analítico y resolutivo",
          leadership: "Liderazgo y toma de decisiones",
        },
      },
    },
    work: {
      seeMore: "Click para ver más",

      projects: [
        {
          title: "EasyDept",
          description:
            "Aplicación para la administración de edificios, contempla registro y gestión de reclamos y gastos, liquidación automatica de expensas, chat en tiempo real entre usuarios, notificaciones, carga de comprobantes y generación automatica de documentos.",
          date: "Ago 2024 - Dic 2024",
          pills: [
            { label: "Proyecto de Tesis" },
            { label: "Equipo de 4 Miembros" },
            { label: "Desarrollador Fullstack" },
          ],
          technology: [
            { label: "Java", icon: "FaJava" },
            { label: "Spring Boot", icon: "SiSpringboot" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
            { label: "Supabase", icon: "SiSupabase" },
          ],
          photo: "easydeptPhoto.jpg",
          photoCarousel: [
            "easydept/easydept-1.jpg",
          ],
          longDescription:
            "EasyDept es una aplicación integral para la administración de edificios, diseñada para optimizar la comunicación directa y formal entre administradores, propietarios e inquilinos. Permite a los administradores configurar la distribución de cada edificio, asignar inquilinos y propietarios a cada unidad y definir la ponderación de expensas por unidad, gestionando múltiples edificios bajo un mismo administrador. Los usuarios pueden registrar incidencias, pagos y cargar comprobantes de expensas, mientras que los documentos de liquidación y resúmenes de gastos se generan automáticamente. Todos los reclamos se manejan dentro de la aplicación, dejando un respaldo legal mediante el envío automático de correos electrónicos entre las partes. La comunicación en tiempo real se realiza mediante un chat interno basado en WebSockets. Además, los gastos y expensas se almacenan históricamente por mes y año, presentándose mediante tablas resumen y gráficos visuales. El sistema requiere un proceso de validación y autenticación de usuarios, y para aquellos que desean registrarse como administradores, se verifica la validez de sus credenciales y certificaciones, así como la existencia real del edificio a administrar, garantizando seguridad y confiabilidad en toda la plataforma.",
          language: "Español",
        },
        {
          title: "Simulador Sistema de Colas",
          description:
            "Aplicación para realizar simulaciones de un sistema de cola complejo, contempla parametrización completa y dinamica, multiples condiciones de corte, estimación de valores con integración numérica, generación de vector estado de eventos y apartado de resumen stadístico.",
          date: "Jun 2025",
          pills: [
            { label: "Proyecto Académico" },
            { label: "Equipo de 8 Miembros" },
            { label: "Desarrollador Frontend" },
          ],
          technology: [
            { label: "Python", icon: "FaPython" },
            { label: "FastAPI", icon: "SiFastapi" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
          ],
          photo: "queueingSystemPhoto.jpg",
          photoCarousel: [
            "queueingSystem/queueingSystem-1.jpg",
          ],
          longDescription:
            "El 'Simulador' es una aplicación desarrollada como proyecto académico para la materia de Simulación en la universidad, siguiendo un enunciado específico que planteaba la representación detallada del funcionamiento de un sistema de colas con múltiples servidores, clientes e interrupciones. El sistema permite una parametrización completa de todos los aspectos de la simulación, incluyendo tasas de llegada, tiempos de servicio, condiciones de corte y configuración de eventos.   Para la estimación del tiempo de ocurrencia y duración de los eventos se utilizan distribuciones de probabilidad y ecuaciones diferenciales, aplicando el método de integración numérica de Runge-Kutta. La aplicación cuenta con un apartado descriptivo que explica paso a paso cómo se realizó dicho cálculo. Además, gestiona el estado individual de cada cliente y servidor, registra un vector de eventos en el tiempo, y presenta los resultados de forma paginada para facilitar su análisis. Al finalizar, se genera un resumen estadístico con métricas clave del desempeño del sistema, permitiendo evaluar el comportamiento bajo diferentes configuraciones y condiciones de operación.",
          language: "Español",
        },
        {
          title: "Ecommerce",
          description:
            "Aplicación de compra y venta de multiples productos, contempla carga y gestión de productos y ofertas de venta, definición de descuentos, manejo de carrito de compra, puntuación de productos, multiples usuarios y permisos, notificaciones automatizadas, generación de link de pago y seguimiento simulado de envio.",
          date: "En proceso",
          pills: [
            { label: "Proyecto Personal" },
            { label: "1 Miembro" },
            { label: "Desarrollador Fullstack" },
          ],
          technology: [
            { label: "Java", icon: "FaJava" },
            { label: "Spring Boot", icon: "SiSpringboot" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
            { label: "Supabase", icon: "SiSupabase" },
          ],
          photo: "ecommercePhoto.jpg",
          photoCarousel: [
            "ecommerce/ecommerce-1.jpg",
          ],
          longDescription:
            "Este Ecommerce es una plataforma de compra y venta de múltiples productos, diseñada para permitir que un mismo usuario pueda actuar como vendedor y comprador. El sistema contempla la carga y gestión de productos, creación de ofertas de venta que pueden incluir uno o varios productos, aplicación de descuentos y visualización de información detallada para cada oferta. Los compradores pueden explorar las ofertas mediante navegación y filtros avanzados, añadir productos a un carrito de compra y completar el pago mediante la generación de un enlace seguro. El sistema incluye un esquema de valoración y puntuación para vendedores, permitiendo que otros usuarios evalúen la calidad de sus transacciones. La gestión del carrito y las operaciones de compra pueden ejecutarse en modo persistente o simulado según el perfil activo de la aplicación, facilitando tanto la demostración como el aprendizaje técnico. Además, se simula un flujo de envío y seguimiento de pedidos para brindar una experiencia más realista.",
          language: "Español",
        },
        {
          title: "Mejora Stoller Arg.",
          description:
            "Análisis y diseño de un plan estratégico para optimizar el proceso productivo, expandir la organización y modernizar la infraestructura tecnológica, incluyendo evaluaciones, oportunidades, colaboración entre areas y planificación presupuestaria.",
          date: "May 2025 - Jun 2025",
          pills: [
            { label: "Proyecto de Académico" },
            { label: "Equipo de 5 Miembros" },
            { label: "Plan de Mejora" },
          ],
          technology: [
            { label: "Miro", icon: "SiMiro" },
            { label: "Google Drive", icon: "FaGoogleDrive" },
            { label: "Figma", icon: "FaFigma" },
            { label: "Canva", icon: "SiCanva" },
          ],
          photo: "stollerPhoto.jpg",
          photoCarousel: [
            "stoller/stoller-1.jpg",
          ],
          longDescription:
            "Consistió en un proyecto académico enfocado en el análisis y diseño de un plan de mejora integral para Stoller Argentina, orientado a optimizar el proceso productivo, ampliar la capacidad operativa y modernizar la infraestructura tecnológica de la empresa. El trabajo incluyó un diagnóstico detallado mediante herramientas como análisis FODA, matriz CAME y mapeo de procesos, identificando oportunidades de crecimiento y áreas críticas de mejora. Se desarrolló una propuesta estratégica basada en tres ejes: incorporación de tecnologías de automatización y trazabilidad, implementación de sistemas de análisis y predicción de demanda, y transición hacia un modelo de producción proactiva. Además, se planificó la coordinación organizacional, el esquema de red industrial y la proyección presupuestaria, junto con un cronograma de implementación y tableros de control para el seguimiento de indicadores clave.",
          language: "Español",
        },
      ],
    },
    academic: {
      academicInfo: {
        title: "Formación académica",
        items: [
          {
            title: "Ingeniería en Sistemas de Información",
            institution: "Universidad Tecnologica Nacional",
            date: "Mar 2022 - Presente",
            location: "Córdoba, Córdoba, Argentina",
            icon: "utnLogo.png",
            photo: "comingSoonPhoto.jpg",
            inverted: false,
          },
          {
            title: "Analista Universitario de Sistemas de Información",
            institution: "Universidad Tecnologica Nacional",
            date: "Mar 2022 - Dic 2024",
            location: "Córdoba, Córdoba, Argentina",
            icon: "utnLogo.png",
            photo: "analystPhoto.jpg",
            inverted: true,
          },
          {
            title: "Curso de Idioma Aleman Nivel A1",
            institution: "Instituto Goethe",
            date: "Ago 2023 - Dic 2023",
            location: "Córdoba, Córdoba, Argentina",
            icon: "goetheInstituteLogo.png",
            photo: "deutschlandPhoto.jpg",
            inverted: false,
          },
        ],
      },
      languageInfo: {
        title: "Idiomas",
        level: "Nivel",
        data: [
          { name: "2004", spanish: 6 },
          { name: "2009", spanish: 6, english: 0 },
          { name: "2023", spanish: 6, english: 1, german: 0 },
          { name: "2024", spanish: 6, english: 2, german: 0.4 },
          { name: "2025", spanish: 6, english: 2.7, german: 0.9 },
        ],
        languages: {
          spanish: {
            name: "Español",
            color: "#f59e0b",
            description:
              "Es mi lengua materna, crecí y me desarrollé con ella naturalmente.",
          },
          english: {
            name: "Inglés",
            color: "#3b82f6",
            description:
              "He aprendido de manera autodidacta y siempre busco seguir mejorando.",
          },
          german: {
            name: "Alemán",
            color: "#10b981",
            description:
              "Hace muy poco comencé a estudiarlo y me entusiasma cada paso nuevo que doy.",
          },
        },
      },
    },
  },
  en: {
    navbar: {
      contactBtn: "Contact Me",
      sectionSelector: {
        home: "Home",
        aboutMe: "About Me",
        work: "Work",
        academic: "Academic",
      },
    },
    footer: {
      name: "Juan Cruz Ceballos",
      copyright: "My Portfolio. All rights reserved.",
    },
    contact: {
      title: "If you are interested in contacting me, here are my details:",
      copied: "Copied to clipboard",
      linkedin: {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/juan-cruz-ceballos/",
      },
      github: {
        name: "Github",
        link: "https://github.com/Juan-C-Ceballos",
      },
      mail: {
        name: "Email",
        link: "juancruzceballos0@gmail.com",
      },
      phone: {
        name: "Phone",
        link: "+54 9 388 4665015",
      },
    },
    home: {
      title: "Hi, I'm Juan Cruz Ceballos",
      description: {
        student: "Systems Engineering Student",
        analyst: "Systems Analyst",
        developer: "Frontend & Backend Developer",
      },
    },
    aboutMe: {
      personal: {
        title: "Who I Am",
        content: {
          brain:
            "I am a developing software engineer, curious, creative, and passionate about learning everything around me. I’m motivated to understand how things work and turn that knowledge into useful and practical solutions.",
          art: "I enjoy art and design, which feed my creativity and allow me to apply it in my projects and applications.",
          sport:
            "Outside of coding, I play volleyball and work out at the gym—activities that have strengthened my discipline and teamwork skills.",
          gaming:
            "Gaming was my gateway into technology, inspiring me to pursue software engineering and computer science research.",
          target:
            "Currently, I aim to continue expanding my knowledge and develop projects that integrate innovation, utility, and fun.",
        },
      },
      technology: {
        title: "Technology",
        content: {
          react: "React with Tailwind CSS",
          java: "Java with Spring Boot",
          python: "Python with FastAPI",
          github: "GitHub",
          databases: "SQL Databases",
          javascript: "JavaScript with Express.js",
          postman: "Postman",
        },
      },
      softSkills: {
        title: "Soft Skills",
        content: {
          communication: "Effective Communication",
          teamwork: "Teamwork",
          adaptability: "Adaptability and Responsibility",
          timeManagement: "Time Management",
          analyticalThinking: "Analytical and Problem-Solving Thinking",
          leadership: "Leadership and Decision Making",
        },
      },
    },
    work: {
      seeMore: "Click to see more",

      projects: [
        {
          title: "EasyDept",
          description:
            "Application for building management, including recording and managing claims and expenses, automatic expense settlement, real-time chat between users, notifications, uploading receipts, and automatic document generation.",
          date: "Aug 2024 - Dec 2024",
          pills: [
            { label: "Thesis Project" },
            { label: "Team of 4 Members" },
            { label: "Fullstack Developer" },
          ],
          technology: [
            { label: "Java", icon: "FaJava" },
            { label: "Spring Boot", icon: "SiSpringboot" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
            { label: "Supabase", icon: "SiSupabase" },
          ],
          photo: "easydeptPhoto.jpg",
          photoCarousel: [
            "easydept/easydept-1.jpg",
          ],
          longDescription:
            "EasyDept is a comprehensive building management application designed to optimize direct and formal communication between administrators, owners, and tenants. It allows administrators to configure the layout of each building, assign tenants and owners to each unit, and define the weighting of expenses per unit, managing multiple buildings under the same administrator. Users can report incidents, make payments, and upload expense receipts, while settlement documents and expense summaries are generated automatically. All claims are handled within the app, leaving a legal record through automatic email notifications between parties. Real-time communication is provided via an internal chat using WebSockets. Additionally, expenses and payments are stored historically by month and year, displayed through summary tables and visual charts. The system requires user validation and authentication, and for those registering as administrators, their credentials and certifications are verified, along with the real existence of the building to manage, ensuring security and reliability throughout the platform.",
          language: "Spanish",
        },
        {
          title: "Queueing System Simulator",
          description:
            "Application for simulating a complex queueing system, featuring full and dynamic parameterization, multiple stop conditions, value estimation with numerical integration, event state vector generation, and a statistical summary section.",
          date: "Jun 2025",
          pills: [
            { label: "Academic Project" },
            { label: "8-Member Team" },
            { label: "Frontend Developer" },
          ],
          technology: [
            { label: "Python", icon: "FaPython" },
            { label: "FastAPI", icon: "SiFastapi" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
          ],
          photo: "queueingSystemPhoto.jpg",
          photoCarousel: [
            "queueingSystem/queueingSystem-1.jpg",
          ],
          longDescription:
            "The 'Queueing System Simulator' is an application developed as an academic project for the university's Simulation course, following a specific assignment that required a detailed representation of the operation of a queueing system with multiple servers, clients, and interruptions. The system allows complete parameterization of all simulation aspects, including arrival rates, service times, stop conditions, and event configuration. To estimate the occurrence time and duration of events, probability distributions and differential equations are used, applying the Runge-Kutta numerical integration method. The application includes a descriptive section explaining step-by-step how the calculations were carried out. Additionally, it manages the individual state of each client and server, records an event vector over time, and presents results in a paginated format for easier analysis. At the end, a statistical summary is generated with key performance metrics, enabling evaluation of the system’s behavior under different configurations and operating conditions.",
          language: "Spanish",
        },
        {
          title: "Ecommerce",
          description:
            "E-commerce platform for buying and selling multiple products, featuring product and offer management, discount definitions, shopping cart handling, product ratings, multiple users and permissions, automated notifications, payment link generation, and simulated shipping tracking.",
          date: "In progress",
          pills: [
            { label: "Personal Project" },
            { label: "1 Member" },
            { label: "Fullstack Developer" },
          ],
          technology: [
            { label: "Java", icon: "FaJava" },
            { label: "Spring Boot", icon: "SiSpringboot" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
            { label: "Supabase", icon: "SiSupabase" },
          ],
          photo: "ecommercePhoto.jpg",
          photoCarousel: [
            "ecommerce/ecommerce-1.jpg",
          ],
          longDescription:
            "This Ecommerce platform is designed for the buying and selling of multiple products, allowing the same user to act as both seller and buyer. The system supports product upload and management, creation of sales offers that may include one or several products, application of discounts, and detailed offer information display. Buyers can browse offers using advanced navigation and filters, add products to a shopping cart, and complete purchases through the generation of a secure payment link. The platform includes a seller rating and review system, allowing other users to assess the quality of their transactions. Cart management and purchase operations can be executed in either persistent or simulated mode depending on the application's active profile, making it suitable for both demonstrations and technical learning. Additionally, a simulated order shipping and tracking flow is provided for a more realistic experience.",
          language: "Spanish",
        },
        {
          title: "Stoller Argentina Improvement",
          description:
            "Analysis and design of a strategic plan to optimize the production process, expand the organization, and modernize technological infrastructure, including evaluations, opportunity identification, interdepartmental collaboration, and budget planning.",
          date: "May 2025 - Jun 2025",
          pills: [
            { label: "Academic Project" },
            { label: "5-Member Team" },
            { label: "Improvement Plan" },
          ],
          technology: [
            { label: "Miro", icon: "SiMiro" },
            { label: "Google Drive", icon: "FaGoogleDrive" },
            { label: "Figma", icon: "FaFigma" },
            { label: "Canva", icon: "SiCanva" },
          ],
          photo: "stollerPhoto.jpg",
          photoCarousel: [
            "stoller/stoller-1.jpg",
          ],
          longDescription:
            "This academic project focused on analyzing and designing a comprehensive improvement plan for Stoller Argentina, aimed at optimizing the production process, expanding operational capacity, and modernizing the company’s technological infrastructure. The work included a detailed diagnosis using tools such as SWOT analysis, CAME matrix, and process mapping, identifying growth opportunities and critical areas for improvement. The strategic proposal was based on three main pillars: the incorporation of automation and traceability technologies, the implementation of demand analysis and forecasting systems, and the transition toward a proactive production model. In addition, organizational coordination, industrial network design, and budget projection were planned, along with an implementation timeline and control dashboards for monitoring key performance indicators.",
          language: "Spanish",
        },
      ],
    },
    academic: {
      academicInfo: {
        title: "Academic Background",
        items: [
          {
            title: "Information Systems Engineering",
            institution: "National Technological University",
            date: "Mar 2022 - Present",
            location: "Córdoba, Córdoba, Argentina",
            icon: "utnLogo.png",
            photo: "comingSoonPhoto.jpg",
            inverted: false,
          },
          {
            title: "University Analyst in Information Systems",
            institution: "National Technological University",
            date: "Mar 2022 - Dec 2024",
            location: "Córdoba, Córdoba, Argentina",
            icon: "utnLogo.png",
            photo: "analystPhoto.jpg",
            inverted: true,
          },
          {
            title: "German Language Course Level A1",
            institution: "Goethe Institute",
            date: "Aug 2023 - Dec 2023",
            location: "Córdoba, Córdoba, Argentina",
            icon: "goetheInstituteLogo.png",
            photo: "deutschlandPhoto.jpg",
            inverted: false,
          },
        ],
      },
      languageInfo: {
        title: "Languages",
        level: "Level",
        data: [
          { name: "2004", spanish: 6 },
          { name: "2009", spanish: 6, english: 0 },
          { name: "2023", spanish: 6, english: 1, german: 0 },
          { name: "2024", spanish: 6, english: 2, german: 0.4 },
          { name: "2025", spanish: 6, english: 2.7, german: 0.9 },
        ],
        languages: {
          spanish: {
            name: "Spanish",
            color: "#f59e0b",
            description:
              "It is my native language; I grew up and developed with it naturally.",
          },
          english: {
            name: "English",
            color: "#3b82f6",
            description:
              "I have learned it autodidactically and always strive to keep improving.",
          },
          german: {
            name: "German",
            color: "#10b981",
            description:
              "I only recently started studying it, and I’m excited with every new step I take.",
          },
        },
      },
    },
  },
  de: {
    navbar: {
      contactBtn: "Kontaktiere mich",
      sectionSelector: {
        home: "Startseite",
        aboutMe: "Über mich",
        work: "Arbeit",
        academic: "Akademisch",
      },
    },
    footer: {
      name: "Juan Cruz Ceballos",
      copyright: "Mein Portfolio. Alle Rechte vorbehalten.",
    },
    contact: {
      title:
        "Wenn Sie daran interessiert sind, mich zu kontaktieren, finden Sie hier meine Kontaktdaten:",
      copied: "In die Zwischenablage kopiert",
      linkedin: {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/juan-cruz-ceballos/",
      },
      github: {
        name: "Github",
        link: "https://github.com/Juan-C-Ceballos",
      },
      mail: {
        name: "E-Mail",
        link: "juancruzceballos0@gmail.com",
      },
      phone: {
        name: "Telefon",
        link: "+54 9 388 4665015",
      },
    },
    home: {
      title: "Hallo, ich bin Juan Cruz Ceballos",
      description: {
        student: "Student der Systemtechnik",
        analyst: "Systemanalytiker",
        developer: "Frontend- & Backend-Entwickler",
      },
    },
    aboutMe: {
      personal: {
        title: "Wer Ich Bin",
        content: {
          brain:
            "Ich bin ein angehender Softwareentwickler, neugierig, kreativ und leidenschaftlich darin, alles um mich herum zu lernen. Ich bin motiviert zu verstehen, wie Dinge funktionieren, und dieses Wissen in nützliche und praktische Lösungen umzusetzen.",
          art: "Ich genieße Kunst und Design, die meine Kreativität fördern und es mir ermöglichen, diese in meinen Projekten und Anwendungen anzuwenden.",
          sport:
            "Außerhalb des Programmierens spiele ich Volleyball und trainiere im Fitnessstudio – Aktivitäten, die meine Disziplin und Teamfähigkeit gestärkt haben.",
          gaming:
            "Gaming war mein Einstieg in die Welt der Technologie und hat mich dazu inspiriert, Softwareentwicklung und Informatikforschung zu verfolgen.",
          target:
            "Derzeit strebe ich danach, mein Wissen weiter zu vertiefen und Projekte zu entwickeln, die Innovation, Nutzen und Spaß vereinen.",
        },
      },
      technology: {
        title: "Technologie",
        content: {
          react: "React mit Tailwind CSS",
          java: "Java mit Spring Boot",
          python: "Python mit FastAPI",
          github: "GitHub",
          databases: "SQL-Datenbanken",
          javascript: "JavaScript mit Express.js",
          postman: "Postman",
        },
      },
      softSkills: {
        title: "Soziale Kompetenzen",
        content: {
          communication: "Effektive Kommunikation",
          teamwork: "Teamarbeit",
          adaptability: "Anpassungsfähigkeit und Verantwortungsbewusstsein",
          timeManagement: "Zeitmanagement",
          analyticalThinking: "Analytisches und problemlösendes Denken",
          leadership: "Führung und Entscheidungsfähigkeit",
        },
      },
    },
    work: {
      seeMore: "Klicken für mehr Infos",

      projects: [
        {
          title: "EasyDept",
          description:
            "Anwendung zur Verwaltung von Gebäuden, einschließlich der Erfassung und Verwaltung von Reklamationen und Ausgaben, automatischer Abrechnung von Nebenkosten, Echtzeit-Chat zwischen Nutzern, Benachrichtigungen, Hochladen von Belegen und automatische Dokumentenerstellung.",
          date: "Aug 2024 - Dez 2024",
          pills: [
            { label: "Abschlussprojekt" },
            { label: "Team aus 4 Mitgliedern" },
            { label: "Fullstack-Entwickler" },
          ],
          technology: [
            { label: "Java", icon: "FaJava" },
            { label: "Spring Boot", icon: "SiSpringboot" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
            { label: "Supabase", icon: "SiSupabase" },
          ],
          photo: "easydeptPhoto.jpg",
          photoCarousel: [
            "easydept/easydept-1.jpg",
          ],
          longDescription:
            "EasyDept ist eine umfassende Anwendung zur Verwaltung von Gebäuden, die darauf ausgelegt ist, die direkte und formelle Kommunikation zwischen Administratoren, Eigentümern und Mietern zu optimieren. Sie ermöglicht Administratoren, die Aufteilung jedes Gebäudes zu konfigurieren, Mieter und Eigentümer jeder Einheit zuzuweisen und die Gewichtung der Nebenkosten pro Einheit festzulegen, wobei mehrere Gebäude unter demselben Administrator verwaltet werden können. Nutzer können Vorfälle melden, Zahlungen leisten und Belege hochladen, während Abrechnungsdokumente und Ausgabenübersichten automatisch erstellt werden. Alle Reklamationen werden innerhalb der App bearbeitet und hinterlassen einen rechtlichen Nachweis durch automatische E-Mail-Benachrichtigungen zwischen den Parteien. Die Echtzeitkommunikation erfolgt über einen internen Chat auf Basis von WebSockets. Darüber hinaus werden Ausgaben und Zahlungen historisch nach Monat und Jahr gespeichert und in Tabellenübersichten sowie Diagrammen visualisiert. Das System erfordert eine Benutzervalidierung und Authentifizierung, und für diejenigen, die sich als Administrator registrieren, werden ihre Zertifikate und Berechtigungen sowie die tatsächliche Existenz des zu verwaltenden Gebäudes überprüft, um Sicherheit und Zuverlässigkeit der Plattform zu gewährleisten.",
          language: "Spanisch",
        },
        {
          title: "Warteschlangensystem-Simulator",
          description:
            "Anwendung zur Simulation eines komplexen Warteschlangensystems mit vollständiger und dynamischer Parametrisierung, mehreren Abbruchbedingungen, Wertschätzung mittels numerischer Integration, Erstellung eines Ereignisstatusvektors und statistischem Übersichtsbereich.",
          date: "Jun 2025",
          pills: [
            { label: "Akademisches Projekt" },
            { label: "Team mit 8 Mitgliedern" },
            { label: "Frontend-Entwickler" },
          ],
          technology: [
            { label: "Python", icon: "FaPython" },
            { label: "FastAPI", icon: "SiFastapi" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
          ],
          photo: "queueingSystemPhoto.jpg",
          photoCarousel: [
            "queueingSystem/queueingSystem-1.jpg",
          ],
          longDescription:
            "Der 'Warteschlangensystem-Simulator' ist eine Anwendung, die als akademisches Projekt für den Universitätskurs Simulation entwickelt wurde. Sie basiert auf einer spezifischen Aufgabenstellung, die eine detaillierte Darstellung des Betriebs eines Warteschlangensystems mit mehreren Servern, Kunden und Unterbrechungen verlangte. Das System ermöglicht eine vollständige Parametrisierung aller Simulationsaspekte, einschließlich Ankunftsraten, Bearbeitungszeiten, Abbruchbedingungen und Ereigniskonfiguration. Zur Schätzung der Auftretenszeit und Dauer von Ereignissen werden Wahrscheinlichkeitsverteilungen und Differentialgleichungen verwendet, wobei das numerische Integrationsverfahren nach Runge-Kutta angewandt wird. Die Anwendung enthält einen beschreibenden Abschnitt, der Schritt für Schritt erklärt, wie die Berechnungen durchgeführt wurden. Darüber hinaus verwaltet sie den individuellen Status jedes Kunden und Servers, zeichnet einen Ereignisvektor im Zeitverlauf auf und präsentiert die Ergebnisse in paginierter Form für eine einfachere Analyse. Am Ende wird eine statistische Zusammenfassung mit wichtigen Leistungskennzahlen erstellt, um das Verhalten des Systems unter verschiedenen Konfigurationen und Betriebsbedingungen zu bewerten.",
          language: "Spanisch",
        },
        {
          title: "E-Commerce",
          description:
            "E-Commerce-Plattform für den Kauf und Verkauf mehrerer Produkte mit Produkt- und Angebotsverwaltung, Rabattdefinitionen, Warenkorbverwaltung, Produktbewertungen, mehreren Benutzern und Berechtigungen, automatisierten Benachrichtigungen, Zahlungslinkerstellung und simuliertem Versandtracking.",
          date: "In Arbeit",
          pills: [
            { label: "Persönliches Projekt" },
            { label: "1 Mitglied" },
            { label: "Fullstack-Entwickler" },
          ],
          technology: [
            { label: "Java", icon: "FaJava" },
            { label: "Spring Boot", icon: "SiSpringboot" },
            { label: "React", icon: "FaReact" },
            { label: "Tailwind CSS", icon: "SiTailwindcss" },
            { label: "Supabase", icon: "SiSupabase" },
          ],
          photo: "ecommercePhoto.jpg",
          photoCarousel: [
            "ecommerce/ecommerce-1.jpg",
          ],
          longDescription:
            "Diese E-Commerce-Plattform ist für den Kauf und Verkauf mehrerer Produkte konzipiert und ermöglicht es demselben Benutzer, sowohl als Verkäufer als auch als Käufer zu agieren. Das System unterstützt das Hochladen und Verwalten von Produkten, die Erstellung von Verkaufsangeboten, die ein oder mehrere Produkte enthalten können, die Anwendung von Rabatten und die Anzeige detaillierter Angebotsinformationen. Käufer können Angebote mithilfe erweiterter Navigation und Filter durchsuchen, Produkte in einen Warenkorb legen und den Kauf über einen sicheren Zahlungslink abschließen. Die Plattform enthält ein Bewertungssystem für Verkäufer, mit dem andere Benutzer die Qualität ihrer Transaktionen beurteilen können. Die Warenkorbverwaltung und Kaufvorgänge können je nach aktivem Anwendungsprofil im persistenten oder simulierten Modus ausgeführt werden, was sie sowohl für Demonstrationen als auch für technisches Lernen geeignet macht. Zusätzlich wird ein simulierter Versand- und Tracking-Prozess bereitgestellt, um ein realistischeres Erlebnis zu bieten.",
          language: "Spanisch",
        },
        {
          title: "Verbesserung Stoller Arg.",
          description:
            "Analyse und Entwicklung eines strategischen Plans zur Optimierung des Produktionsprozesses, Erweiterung der Organisation und Modernisierung der technologischen Infrastruktur, einschließlich Bewertungen, Chancenanalyse, bereichsübergreifender Zusammenarbeit und Budgetplanung.",
          date: "Mai 2025 - Jun 2025",
          pills: [
            { label: "Akademisches Projekt" },
            { label: "Team mit 5 Mitgliedern" },
            { label: "Verbesserungsplan" },
          ],
          technology: [
            { label: "Miro", icon: "SiMiro" },
            { label: "Google Drive", icon: "FaGoogleDrive" },
            { label: "Figma", icon: "FaFigma" },
            { label: "Canva", icon: "SiCanva" },
          ],
          photo: "stollerPhoto.jpg",
          photoCarousel: [
            "stoller/stoller-1.jpg",
          ],
          longDescription:
            "Dieses akademische Projekt konzentrierte sich auf die Analyse und Entwicklung eines umfassenden Verbesserungsplans für Stoller Argentina, mit dem Ziel, den Produktionsprozess zu optimieren, die Betriebskapazität zu erweitern und die technologische Infrastruktur des Unternehmens zu modernisieren. Die Arbeit umfasste eine detaillierte Diagnose mithilfe von Werkzeugen wie SWOT-Analyse, CAME-Matrix und Prozessmapping, um Wachstumschancen und kritische Verbesserungsbereiche zu identifizieren. Der strategische Vorschlag basierte auf drei Hauptsäulen: der Einführung von Automatisierungs- und Rückverfolgbarkeitstechnologien, der Implementierung von Systemen zur Analyse und Prognose der Nachfrage sowie dem Übergang zu einem proaktiven Produktionsmodell. Darüber hinaus wurden die organisatorische Koordination, das industrielle Netzwerkschema und die Budgetprognose geplant, zusammen mit einem Implementierungszeitplan und Kontroll-Dashboards zur Überwachung wichtiger Leistungsindikatoren.",
          language: "Spanisch",
        },
      ],
    },
    academic: {
      academicInfo: {
        title: "Akademische Ausbildung",
        items: [
          {
            title: "Informatikingenieurwesen",
            institution: "Nationale Technologische Universität",
            date: "Mär 2022 - Gegenwart",
            location: "Córdoba, Córdoba, Argentinien",
            icon: "utnLogo.png",
            photo: "comingSoonPhoto.jpg",
            inverted: false,
          },
          {
            title: "Universitätsanalyst für Informationssysteme",
            institution: "Nationale Technologische Universität",
            date: "Mär 2022 - Dez 2024",
            location: "Córdoba, Córdoba, Argentinien",
            icon: "utnLogo.png",
            photo: "analystPhoto.jpg",
            inverted: true,
          },
          {
            title: "Deutschsprachkurs Level A1",
            institution: "Goethe-Institut",
            date: "Aug 2023 - Dez 2023",
            location: "Córdoba, Córdoba, Argentinien",
            icon: "goetheInstituteLogo.png",
            photo: "deutschlandPhoto.jpg",
            inverted: false,
          },
        ],
      },
      languageInfo: {
        title: "Sprachen",
        level: "Niveau",
        data: [
          { name: "2004", spanish: 6 },
          { name: "2009", spanish: 6, english: 0 },
          { name: "2023", spanish: 6, english: 1, german: 0 },
          { name: "2024", spanish: 6, english: 2, german: 0.4 },
          { name: "2025", spanish: 6, english: 2.7, german: 0.9 },
        ],
        languages: {
          spanish: {
            name: "Spanisch",
            color: "#f59e0b",
            description:
              "Es ist meine Muttersprache; ich bin natürlich damit aufgewachsen und habe mich entwickelt.",
          },
          english: {
            name: "Englisch",
            color: "#3b82f6",
            description:
              "Ich habe es autodidaktisch gelernt und bemühe mich stets, mich weiter zu verbessern.",
          },
          german: {
            name: "Deutsch",
            color: "#10b981",
            description:
              "Ich habe erst vor Kurzem angefangen, es zu lernen, und freue mich über jeden neuen Schritt.",
          },
        },
      },
    },
  },
};

export default translations;
