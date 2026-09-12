# Akshay Mishra — Engineering Portfolio

[![Live Site](https://img.shields.io/badge/Live_Portfolio-06b6d4?style=for-the-badge&logo=vercel&logoColor=white)](https://mathmagic-ai.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/akshay-mishra-922331284/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/akshaymishra-0)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:akshaymishra2004s@gmail.com)

A high-performance, dark-themed developer portfolio engineered with **React 19**, **Vite**, and **Tailwind CSS v4**. Designed with a focus on clean architecture, component modularity, fluid micro-interactions, and decoupling content from presentation.

---

## 🎯 Executive Summary & Profile

- **Name**: Akshay Mishra
- **Role**: Computer Science Undergraduate & Full Stack Developer
- **Institution**: Trivenidevi Bhalotia College (B.Sc. in Computer Science, 2023–2027 | **CGPA: 8.07 / 10**)
- **Academic Experience**: Machine Learning Intern @ **SRSS Solutions**
- **Location**: Saltora, West Bengal, India
- **Core Focus**: MERN Stack (React, Node.js, Express, MongoDB), Applied Machine Learning (Python, Flask), and Java DSA Pattern Problem Solving.

---

## 🛠️ Architecture & Technical Decisions

When designing this portfolio, specific architectural patterns were implemented to mirror real-world production engineering practices:

| Decision | Implementation | Engineering Rationale |
| :--- | :--- | :--- |
| **Decoupled Data Layer** | `src/data/portfolioData.js` | Isolates content (projects, skills, timeline, socials) from view logic. Updating portfolio content requires zero changes to UI components. |
| **React Portals for Modals** | `createPortal(modal, document.body)` | Prevents CSS stacking context trapping from parent layouts (`<main z-10>`), guaranteeing the modal floats above fixed navbars without `z-index` wars. |
| **Custom Scroll-Spy** | `src/hooks/useScrollSpy.js` | Passive scroll listeners with threshold offsets to calculate active viewport sections dynamically with minimal re-renders. |
| **Tailwind CSS v4** | `@tailwindcss/vite` | Eliminates heavyweight post-processing pipelines and leverages Vite's high-speed compile-time CSS engine. |
| **Zero External Icon Bloat** | Lucide React + Inline Brand SVGs | Replaces heavy third-party brand icon packages with optimized, tree-shakeable SVG components. |

---

## 🚀 Featured Projects

### 1. [MathMagic AI](https://mathmagic-ai.vercel.app/) — *Full Stack AI Platform*
- **Tech Stack**: React.js, Node.js, Express.js, MongoDB, JWT
- **Repository**: [github.com/akshaymishra-0/mathmagic-ai](https://github.com/akshaymishra-0/mathmagic-ai)
- **Key Highlights**:
  - Developed an AI-powered mathematics problem-solving platform featuring user sign-up/sign-in and persistent user calculation history.
  - Implemented secure JWT-based authentication and authorization with MongoDB.
  - Integrated an AI API with an interactive, responsive React.js interface.

### 2. [QuickMath](https://quickmathx.vercel.app/) — *Mathematics & 3D Visualization Suite*
- **Tech Stack**: React.js, Node.js, Express.js, REST APIs, 3D Graphing
- **Repository**: [github.com/akshaymishra-0/quickmath](https://github.com/akshaymishra-0/quickmath)
- **Key Highlights**:
  - Developed a mathematics toolkit providing **50+ tools** for calculations, equations, conversions, and problem solving.
  - Built reusable React components and modular Express REST APIs.
  - Implemented interactive mathematical visualization features, including 3D graphing.

### 3. [Electricity Consumption Predictor](https://github.com/akshaymishra-0/powerpulse) — *ML Web Application*
- **Tech Stack**: Python, Flask, Machine Learning, Data Processing
- **Repository**: [github.com/akshaymishra-0/powerpulse](https://github.com/akshaymishra-0/powerpulse)
- **Key Highlights**:
  - Developed a machine-learning application to predict electricity consumption based on user-provided input features.
  - Trained and evaluated regression models to optimize prediction accuracy.
  - Integrated the trained model into a Flask web application for real-time inference.

---

## 🧠 Technical Skills Matrix

- **Languages**: Java (DSA), JavaScript (ES6+), Python, C
- **Frontend**: React.js 19, Tailwind CSS v4, HTML5, CSS3, Responsive Design
- **Backend & APIs**: Node.js, Express.js, RESTful Architecture, JWT Authentication
- **Databases**: MongoDB, SQL
- **Machine Learning**: Python, Flask, Model Training & Evaluation, Data Processing Pipelines
- **Computer Science Core**: Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Computer Networks, Software Engineering
- **Tools & Platforms**: Git, GitHub, VS Code, Vercel, Render

---

## 🏆 Algorithmic Problem Solving

- **50+ DSA Problems Solved**: Active problem solver on LeetCode and GeeksforGeeks.
- **Pattern-Based Focus in Java**:
  - Sliding Window (Fixed & Dynamic sizing)
  - Two Pointers & Fast/Slow Pointers
  - Array & String Manipulations
  - Time & Space Complexity Optimization

---

## 📁 Repository Structure

```
PORTFOLIO/
├── index.html                   # SEO & Open Graph meta, Plus Jakarta Sans font
├── vite.config.js               # Vite config integrated with Tailwind CSS v4
├── package.json                 # Clean dependencies (zero dead packages)
│
├── public/
│   └── favicon.svg              # Custom AM monogram brand vector
│
└── src/
    ├── main.jsx                 # React root DOM mount point
    ├── App.jsx                  # Main page composition, scroll-spy & toast state
    ├── index.css                # Tailwind base styles and custom glassmorphism utilities
    │
    ├── data/
    │   └── portfolioData.js     # Single source of truth for all personal content
    │
    ├── hooks/
    │   └── useScrollSpy.js      # Performance-optimized viewport section tracker
    │
    ├── components/
    │   ├── common/
    │   │   ├── Navbar.jsx       # Floating glassmorphic navigation with active indicator
    │   │   ├── Footer.jsx       # Dark footer with socials, back-to-top, and attribution
    │   │   └── SectionHeader.jsx# Reusable badge & title component
    │   │
    │   ├── sections/
    │   │   ├── Hero.jsx         # Intro headline, CTA buttons, availability status
    │   │   ├── About.jsx        # Bio, engineering principles, humanized code snippet
    │   │   ├── Skills.jsx       # Categorized technical skills with custom proficiency badges
    │   │   ├── Projects.jsx     # Single-row 3-column project grid with live & code links
    │   │   ├── Experience.jsx   # SRSS Solutions internship, certificate link, and education
    │   │   └── Contact.jsx      # Interactive message form with copy-to-clipboard
    │   │
    │   └── ui/
    │       ├── ProjectModal.jsx # React Portal modal for deep-dive architecture notes
    │       ├── Toast.jsx        # Notification alert for copy actions
    │       └── Icons.jsx        # Lightweight SVG icons for GitHub & LinkedIn
```

---

## ⚙️ Quick Start & Local Verification

### 1. Clone & Install
```bash
git clone https://github.com/akshaymishra-0/portfolio.git
cd portfolio
npm install
```

### 2. Run Local Dev Server
```bash
npm run dev
```
Navigate to `http://localhost:5173/` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates a minified, tree-shaken production bundle in `dist/` with **0 errors**.

---

## 📬 Contact & Connect

- **Email**: [akshaymishra2004s@gmail.com](mailto:akshaymishra2004s@gmail.com)
- **Phone**: +91-7679721123
- **LinkedIn**: [linkedin.com/in/akshay-mishra-922331284](https://www.linkedin.com/in/akshay-mishra-922331284/)
- **GitHub**: [github.com/akshaymishra-0](https://github.com/akshaymishra-0)
