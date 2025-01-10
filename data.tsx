import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Computer, Rocket, Speech,Unplug,AirVent, GitBranch } from "lucide-react";

export const socialNetworks = [

    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/williamjose-rodriguezrojas/",
    },
    {
        id: 2,
        logo: <GitBranch size={30} strokeWidth={1} />,
        src: "https://github.com/WILLIAMJRR",
    },


];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio-web",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {

        id: 0,
        title: "Tecnico electrico",
        subtitle: "Yours Electric Company",
        description: "Colabora con un equipo dinámico para desarrollar soluciones eléctricas seguras y eficientes que impulsen el éxito de la empresa, adaptándote a las normativas actuales y asegurando instalaciones de calidad en el mundo moderno.",
        date: "Nov 2024 ",

    },
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "Escalab Tech",
        description: "Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de la empresa en el mundo digital.",
        date: "Nov 2022 ",
    },
    {
        id: 2,
        title: "Tecnico en mantenimiento",
        subtitle: "Engie",
        description: "Responsable de la instalación, mantenimiento y reparación de sistemas de aire acondicionado y equipos eléctricos. Realiza diagnósticos, reparaciones y mantenimiento preventivo, asegurando el cumplimiento de normativas de seguridad y calidad.",
        date: "May 2021",
    },
    {
        id: 3,
        title: "Tecnico electrico tipo II",
        subtitle: "Narcal Ingenieria Y Construccion Limitada",
        description: "Responsable de la instalación, mantenimiento y reparación de sistemas eléctricos en proyectos residenciales y comerciales. Realiza tendido de cables, diagnósticos y reparaciones eléctricas, y colabora con el equipo para asegurar el cumplimiento de normativas y estándares de calidad.",
        date: "Ago 2018",
    },
    {
        id: 4,
        title: "Ayudante electrico",
        subtitle: "DCC servicios electricos.",
        description: "Como ayudante eléctrico en DCC Servicios Eléctricos, apoyo en la instalación, mantenimiento y reparación de sistemas eléctricos residenciales y comerciales. Mis responsabilidades incluyen el tendido de cables, la instalación de interruptores y tomas de corriente, y la asistencia en pruebas de funcionamiento. Trabajo bajo la supervisión de electricistas calificados, asegurando que todas las tareas se realicen conforme a las normativas de seguridad y calidad.",
        date: "Jul 2017",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 120,
        text: "Proyectos finalizados en el desarrollo",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Unplug />,
        title: "Electricista",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <AirVent/>,
        title: "Instalador de AA",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Tecnico mantenimiento",
        description: "Servicios de mantenimiento eléctrico especializado, con enfoque en seguridad y eficiencia."
    },
    {
        icon: <CodeSquare />,
        title: "Developer web",
        description: "Desarrollo de aplicaciones web funcionales y optimizadas que mejoran la experiencia del usuario.",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Pro",
        image: "/assets/developer/Portfolio-William - Brave 31_12_2024 01_38_45 p. m..png",
        urlGithub: "https://github.com/WILLIAMJRR/portafolio",
        urlDemo: "https://portafoliowilliam.netlify.app/",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/assets/developer/Vite + React - Brave 30_12_2024 06_52_24 p. m..png",
        urlGithub: "https://github.com/WILLIAMJRR/rickAndMorty",
        urlDemo: "https://williamjrr.netlify.app/",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/assets/developer/william electricidad - Brave 31_12_2024 02_01_34 p. m..png",
        urlGithub: "https://github.com/WILLIAMJRR/escalab-evento-next",
        urlDemo: "https://escalab-evento-next-5o11v4xo4-williamjrr.vercel.app/",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/assets/developer/Vite + React - Brave 30_12_2024 07_02_09 p. m..png",
        urlGithub: "https://github.com/WILLIAMJRR/prueba",
        urlDemo: "https://moonlit-kitsune-4233ab.netlify.app/",
    },
    {
        id: 5,
        title: "E-commerce web",
        image: "/assets/developer/Vite + React - Brave 30_12_2024 06_58_33 p. m..png",
        urlGithub: "https://github.com/WILLIAMJRR/pageDemoNIke",
        urlDemo: "https://demoshopingcart.netlify.app/",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/assets/developer/Vite + React - Brave 30_12_2024 06_54_37 p. m..png",
        urlGithub: "https://github.com/WILLIAMJRR/pokeapiReact",
        urlDemo: "https://pokeapi-react-william.vercel.app/#/pokedex",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];

export const dataProjects = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];
