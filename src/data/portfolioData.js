export const personalInfo = {
  name: "Manuel Flores",
  title: "Desarrollador Web Junior",
  description: "Desarrollador web junior con experiencia en Java, JavaScript, PHP y React, orientado a la creación de aplicaciones web escalables. Interés en web mapping y análisis geoespacial.",
  email: "manuelfloresaviles@gmail.com",
  linkedin: "https://www.linkedin.com/in/manuelfloresaviles/",
  github: "https://github.com/manflav",
  instagram: "https://www.instagram.com/manuelflav/"
};

export const sobreMi = {
  title: "Sobre mí",
  description: "Con una sólida formación en arquitectura y un máster en accesibilidad, he pivotado hacia el desarrollo web con un enfoque especial en aplicaciones de mapeo y análisis geoespacial. Mi experiencia en gestión de datos patrimoniales y mi interés por la tecnología me han llevado a adquirir habilidades en Java, JavaScript, PHP y React. Estoy emocionado por seguir creciendo como desarrollador web junior y contribuir a proyectos innovadores que integren mis conocimientos técnicos y mi pasión por el análisis espacial."
};

export const projects = [
  {
    id: 1,
    title: "La Cafetera - Ecommerce",
    description: "Ecommerce de venta de café de especialidad online. Manuejo de produtos, gestion de stock, usuarios y pedidos.",
    tech: ["HTML", "CSS3", "PHP", "MySQL"],
    image: "/images/proyecto1.png",
    url: "https://lacafetera.manuelflores.es"
  },
  {
    id: 2,
    title: "Dónde comer",
    description: "Buscador de restaurantes en Sevilla. Buscador por tipo de comida asociado a mapa Openlayers con localización",
    tech: ["REACT", "TAILWIND", "OPENLAYERS"],
    image: "/images/proyecto2.jpg",
    url: "https://donde-comer.manuelflores.es"
  },
];

export const techStack = [
  { name: "HTML5",       category: "FRONTEND",  bg: "bg-[#E34F26]", label: "H",  labelColor: "text-white" },
  { name: "CSS3",        category: "FRONTEND",  bg: "bg-[#264de4]", label: "C",  labelColor: "text-white" },
  { name: "JavaScript",  category: "FRONTEND",  bg: "bg-[#F7DF1E]", label: "JS", labelColor: "text-black" },
  { name: "PHP",         category: "BACKEND",   bg: "bg-[#777BB4]", label: "Ph", labelColor: "text-white" },
  { name: "React",       category: "FRONTEND",  bg: "bg-[#20232A]", label: "⚛",  labelColor: "text-[#61DAFB]" },
  { name: "Tailwind CSS",category: "STYLING",   bg: "bg-[#0EA5E9]", label: "TW", labelColor: "text-white" },
  { name: "Node.js",     category: "BACKEND",   bg: "bg-[#339933]", label: "N",  labelColor: "text-white" },
  { name: "PostgreSQL",  category: "DATABASE",  bg: "bg-[#336791]", label: "Pg", labelColor: "text-white" },
  { name: "MySQL",       category: "DATABASE",  bg: "bg-[#00758F]", label: "My", labelColor: "text-white" },
  { name: "Git",         category: "TOOLS",     bg: "bg-[#F05032]", label: "G",  labelColor: "text-white" },
  { name: "OpenLayers",  category: "FRONTEND",  bg: "bg-[#1F6B75]", label: "OL", labelColor: "text-white" },
];

export const formacion = [
  {
    id: 1,
    escuela: "Monlau Formación Profesional",
    titulo: "Desarrollo de Aplicaciones Web (DAW)",
    tipo: "Ciclo formativo de grado superior",
    periodo: "01/09/2024 - Actualidad",
    image: "/images/monlau.webp",
  },
    {
    id: 2,
    escuela: "Universidad de Girona - UNIGIS",
    titulo: "Programación de Aplicaciones Web Map",
    tipo: "Curso de especialización",
    periodo: "01/02/2024 - 01/03/2024",
    image: "/images/unigirona.webp",
  },
      {
    id: 3,
    escuela: "Universidad de Girona - UNIGIS",
    titulo: "Profesional en análisis geoespacial",
    tipo: "Diploma de posgrado",
    periodo: "01/11/2022 - 15/07/2023",
    image: "/images/unigirona.webp",
  },
  {
    id: 4,
    escuela: "Universidad de Jaén",
    titulo: "Master en accesibilidad universal y diseño para todos",
    tipo: "Máster universitario",
    periodo: "01/09/2013 - 15/06/2014",
    image: "/images/jaen.png",
  },
          {
    id: 5,
    escuela: "Escuela Técnica Superior de Arquitectura de Sevilla",
    titulo: "Arquitecto",
    tipo: "Licenciatura",
    periodo: "01/09/2003 - 15/06/2013",
    image: "/images/us.png",
  },  
];

export const experiencia = [
  {
    empresa: "Universidad de Burdeos",
    lugar: "Burdeos. Francia",
    puesto: "Responsable del servicio gestión digital del patrimonio.",
    periodo: "Ene 2021 - Enero 2026",
    descripcion: "Gestión de proyecto | Definición de objetivos | Elaboratión y ejecución de presupuestos | Licitaciones | Reporting | Creación de informes en Power BI | Implantación del Sistema de Información Geográfico [SIG] | Análisis de datos patrimoniales |Gestión de equipo.",
  },
  {
    empresa: "Universidad de Burdeos",
    lugar: "Burdeos. Francia",
    puesto: "Gestor de Sistemas de Información Patrimoniales.",
    periodo: "Jul 2019 - Dic 2020",
    descripcion: "Administración funcional del sistema de información patrimonial [SIP] | Inventario del patrimonio inmobiliario universitario | Evolución del SIP en relación con el responsable IT | Reporting de datos patrimoniales | Elaboración de indicadores patrimoniales.",
  },
  {
    empresa: "Universidad de Burdeos",
    lugar: "Burdeos. Francia",
    puesto: "Delineante | Gestor de datos patrimoniales",
    periodo: "Oct 2017 - Jun 2019",
    descripcion: "Delineación de planos | Redacción de reglas gráficas para integración de datos en el sistema | Elaboración de indicadores patrimoniales.",
  },
  {
    empresa: "Arostegui & Rozé Architecture",
    lugar: "París. Francia",
    puesto: "Arquitecto",
    periodo: "Feb 2012 - Jul 2012",
    descripcion: "Concepción, diseño y delineación de proyectos de arquitectura"
  },
  {
    empresa: "Güido Cimadomo Arquitectos",
    lugar: "Sevilla",
    puesto: "Arquitecto",
    periodo: "Abril 2008 - Sept 2009",
    descripcion: "Colaboración en concursos de arquitectura, redacción de proyectos básicos y de ejecución."
  }
];


