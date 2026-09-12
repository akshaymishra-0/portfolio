export const personalInfo = {
  name: "Akshay Mishra",
  role: "Computer Science Student & Full Stack Developer",
  tagline: "B.Sc. Computer Science Undergraduate specializing in Full Stack Web Development (MERN) and Machine Learning.",
  location: "Saltora, West Bengal, India",
  phone: "+91-7679721123",
  email: "akshaymishra2004s@gmail.com",
  github: "https://github.com/akshaymishra-0",
  linkedin: "https://www.linkedin.com/in/akshay-mishra-922331284/",
  status: "Seeking Opportunities",
  bio: [
    "I am a Computer Science undergraduate at Trivenidevi Bhalotia College (2023–2027) with an 8.07 CGPA, passionate about software engineering, web development, and applied machine learning.",
    "Experienced in building full-stack applications with React.js, Node.js, Express.js, and MongoDB, as well as integrating machine learning models using Python and Flask. Strong foundation in Data Structures, Algorithms, DBMS, and Object-Oriented Programming."
  ],
  stats: [
    { label: "DSA Problems Solved", value: "50+" },
    { label: "Math Tools Built", value: "50+" },
    { label: "Academic CGPA", value: "8.07" },
    { label: "Higher Secondary", value: "92.4%" }
  ],
  achievements: [
    "Solved 50+ Data Structures & Algorithms problems on LeetCode and GeeksforGeeks, focusing on pattern-based problem solving.",
    "Practiced DSA in Java, covering Two Pointers, Fast & Slow Pointers, and Sliding Window algorithmic patterns."
  ]
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

export const skillCategories = [
  {
    category: "Languages & Core CS",
    description: "Foundational computer science principles and programming languages.",
    skills: [
      { name: "Java", level: "Proficient", icon: "Code" },
      { name: "JavaScript", level: "Moderate", icon: "Code2" },
      { name: "Python", level: "Basic", icon: "Terminal" },
      { name: "C", level: "Basic", icon: "Cpu" },
      { name: "Data Structures & Algorithms", level: "Basic", icon: "Layers" },
      { name: "OOP & DBMS", level: "Core", icon: "Database" },
      { name: "Computer Networks", level: "Core", icon: "Globe" },
      { name: "Software Engineering", level: "Basic", icon: "CheckSquare" }
    ]
  },
  {
    category: "Web Development & Databases",
    description: "Building responsive, modern, full-stack web applications and robust databases.",
    skills: [
      { name: "React.js", level: "Basic", icon: "Code2" },
      { name: "Node.js", level: "Basic", icon: "Server" },
      { name: "Express.js", level: "Basic", icon: "Share2" },
      { name: "HTML5 & CSS3", level: "Proficient", icon: "Layout" },
      { name: "Tailwind CSS", level: "Moderate", icon: "Palette" },
      { name: "MongoDB", level: "Basic", icon: "Database" },
      { name: "SQL", level: "Basic", icon: "HardDrive" },
      { name: "JWT Authentication", level: "Basic", icon: "Shield" }
    ]
  },
  {
    category: "Tools, Platforms & ML",
    description: "Development environments, hosting platforms, and machine learning toolkits.",
    skills: [
      { name: "Git & GitHub", level: "Proficient", icon: "GitFork" },
      { name: "VS Code", level: "Proficient", icon: "Terminal" },
      { name: "Vercel", level: "Basic", icon: "ExternalLink" },
      { name: "Render", level: "Basic", icon: "Cloud" },
      { name: "Flask", level: "Basic", icon: "Server" },
      { name: "Machine Learning Models", level: "Basic", icon: "Zap" },
      { name: "Data Processing", level: "Basic", icon: "RefreshCw" },
      { name: "RESTful APIs", level: "Basic", icon: "Share2" }
    ]
  }
];

export const projectCategories = ["All", "Full Stack", "Web Dev", "Machine Learning"];

export const projects = [
  {
    id: "mathmagic-ai",
    title: "MathMagic AI",
    subtitle: "AI-Powered Mathematics Problem-Solving Platform",
    category: "Full Stack",
    summary: "Developed an AI-powered mathematics problem-solving platform with user sign-up/sign-in and persistent user data.",
    highlights: [
      "Developed an AI-powered mathematics problem-solving platform with user sign-up/sign-in and persistent user data.",
      "Implemented JWT-based authentication and authorization with MongoDB for secure user management.",
      "Integrated an AI API to generate mathematical responses and developed an interactive React.js frontend."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    featured: true,
    liveUrl: "https://mathmagic-ai.vercel.app/",
    githubUrl: "https://github.com/akshaymishra-0/mathmagic-ai",
    gradient: "from-blue-600/20 via-cyan-500/20 to-indigo-500/20",
    stats: { authentication: "JWT + MongoDB", interface: "React.js", backend: "Express.js" }
  },
  {
    id: "quickmath",
    title: "QuickMath",
    subtitle: "Mathematics Toolkit",
    category: "Web Dev",
    summary: "Developed a mathematics toolkit providing 50+ tools for calculations, equations, conversions and problem solving.",
    highlights: [
      "Developed a mathematics toolkit providing 50+ tools for calculations, equations, conversions and problem solving.",
      "Built reusable React.js components and Express.js APIs to organize and serve mathematical operations.",
      "Implemented interactive mathematical visualization features, with Dynamic Theme."
    ],
    tech: ["React.js", "Node.js", "Express.js", "REST APIs"],
    featured: true,
    liveUrl: "https://quickmathx.vercel.app/",
    githubUrl: "https://github.com/akshaymishra-0/quickmath",
    gradient: "from-emerald-600/20 via-teal-500/20 to-cyan-500/20",
    stats: { tools: "50+ Math Tools", visualization: "Dynamic Theme", stack: "React + Express" }
  },
  {
    id: "electricity-consumption-predictor",
    title: "Electricity Consumption Predictor",
    subtitle: "Machine Learning & Flask Web Application",
    category: "Machine Learning",
    summary: "Developed a machine-learning application to predict electricity consumption from user-provided input features.",
    highlights: [
      "Developed a machine-learning application to predict electricity consumption from user-provided input features.",
      "Trained and evaluated machine-learning models as part of the project workflow.",
      "Integrated the trained model with a Flask web application to accept inputs and display predictions."
    ],
    tech: ["Python", "Flask", "Machine Learning", "Data Processing"],
    featured: true,
    githubUrl: "https://github.com/akshaymishra-0/powerpulse",
    gradient: "from-purple-600/20 via-pink-500/20 to-indigo-500/20",
    stats: { framework: "Flask", models: "ML Evaluation", language: "Python" }
  }
];

export const experiences = [
  {
    role: "Machine Learning Intern",
    company: "SRSS Solutions",
    period: "27/02/2026 – 15/05/2026",
    type: "Internship (Academic)",
    description: "Worked on core machine-learning concepts, data processing pipelines, and predictive model development as part of the internship program.",
    achievements: [
      "Applied machine-learning techniques to a practical electricity consumption prediction problem",
      "Trained and evaluated models to optimize prediction accuracy on input features",
      "Integrated trained machine-learning models into a Flask-based web application for real-time predictions",
      "Awarded Internship Completion Certificate"
    ],
    tech: ["Python", "Flask", "Machine Learning", "Data Processing"],
    certificateUrl: "https://drive.google.com/file/d/16etIimPospR5hPFoBVY-gpsjOCjXooLF/view?usp=drive_link"
  }
];

export const education = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Trivenidevi Bhalotia College",
    period: "2023 – 2027",
    score: "CGPA: 8.07 / 10",
    details: "Focusing on Data Structures & Algorithms, OOP, DBMS, Computer Networks, and Software Engineering."
  },
  {
    degree: "Higher Secondary (XII) – WBCHSE",
    institution: "Searsole Raj High School",
    period: "2022",
    score: "Percentage: 92.4%",
    details: "Completed Higher Secondary education with distinction under West Bengal Council of Higher Secondary Education."
  },
  {
    degree: "Secondary (X) – WBBSE",
    institution: "Shyampur High School",
    period: "2020",
    score: "Percentage: 87.57%",
    details: "Completed Secondary board examination under West Bengal Board of Secondary Education."
  }
];
