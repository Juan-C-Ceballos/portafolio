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
          photo: "/easydeptPhoto.jpg",
          longDescription:
            "EasyDept es una aplicación integral para la administración de edificios, diseñada para optimizar la comunicación directa y formal entre administradores, propietarios e inquilinos. Permite a los administradores configurar la distribución de cada edificio, asignar inquilinos y propietarios a cada unidad y definir la ponderación de expensas por unidad, gestionando múltiples edificios bajo un mismo administrador. Los usuarios pueden registrar incidencias, pagos y cargar comprobantes de expensas, mientras que los documentos de liquidación y resúmenes de gastos se generan automáticamente. Todos los reclamos se manejan dentro de la aplicación, dejando un respaldo legal mediante el envío automático de correos electrónicos entre las partes. La comunicación en tiempo real se realiza mediante un chat interno basado en WebSockets. Además, los gastos y expensas se almacenan históricamente por mes y año, presentándose mediante tablas resumen y gráficos visuales. El sistema requiere un proceso de validación y autenticación de usuarios, y para aquellos que desean registrarse como administradores, se verifica la validez de sus credenciales y certificaciones, así como la existencia real del edificio a administrar, garantizando seguridad y confiabilidad en toda la plataforma.",
        },
      ],
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
          photo: "/easydeptPhoto.jpg",
          longDescription:
            "EasyDept is a comprehensive building management application designed to optimize direct and formal communication between administrators, owners, and tenants. It allows administrators to configure the layout of each building, assign tenants and owners to each unit, and define the weighting of expenses per unit, managing multiple buildings under the same administrator. Users can report incidents, make payments, and upload expense receipts, while settlement documents and expense summaries are generated automatically. All claims are handled within the app, leaving a legal record through automatic email notifications between parties. Real-time communication is provided via an internal chat using WebSockets. Additionally, expenses and payments are stored historically by month and year, displayed through summary tables and visual charts. The system requires user validation and authentication, and for those registering as administrators, their credentials and certifications are verified, along with the real existence of the building to manage, ensuring security and reliability throughout the platform.",
        },
      ],
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
          photo: "/easydeptPhoto.jpg",
          longDescription:
            "EasyDept ist eine umfassende Anwendung zur Verwaltung von Gebäuden, die darauf ausgelegt ist, die direkte und formelle Kommunikation zwischen Administratoren, Eigentümern und Mietern zu optimieren. Sie ermöglicht Administratoren, die Aufteilung jedes Gebäudes zu konfigurieren, Mieter und Eigentümer jeder Einheit zuzuweisen und die Gewichtung der Nebenkosten pro Einheit festzulegen, wobei mehrere Gebäude unter demselben Administrator verwaltet werden können. Nutzer können Vorfälle melden, Zahlungen leisten und Belege hochladen, während Abrechnungsdokumente und Ausgabenübersichten automatisch erstellt werden. Alle Reklamationen werden innerhalb der App bearbeitet und hinterlassen einen rechtlichen Nachweis durch automatische E-Mail-Benachrichtigungen zwischen den Parteien. Die Echtzeitkommunikation erfolgt über einen internen Chat auf Basis von WebSockets. Darüber hinaus werden Ausgaben und Zahlungen historisch nach Monat und Jahr gespeichert und in Tabellenübersichten sowie Diagrammen visualisiert. Das System erfordert eine Benutzervalidierung und Authentifizierung, und für diejenigen, die sich als Administrator registrieren, werden ihre Zertifikate und Berechtigungen sowie die tatsächliche Existenz des zu verwaltenden Gebäudes überprüft, um Sicherheit und Zuverlässigkeit der Plattform zu gewährleisten.",
        },
      ],
    },
  },
};

export default translations;
