import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showContactForm, setShowContactForm] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration and admin dashboard",
      tech: ["React", "Laravel", "MySQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Task Management System",
      description: "Team collaboration tool with real-time updates and task assignments",
      tech: ["React", "Java", "Spring Boot", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "JavaFX Desktop App",
      description: "Inventory management system with beautiful UI and reporting features",
      tech: ["Java", "JavaFX", "SQLite", "CSS"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
      link: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio built with React and Tailwind CSS",
      tech: ["React", "Tailwind", "Vite"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      link: "#",
      github: "#"
    }
  ];

  // Skills data
  const skillCategories = {
    "Frontend": ["React JS", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Python", "Java", "Laravel", "SQL"],
    "Database": ["MySQL", "PostgreSQL", "SQLite"],
    "Tools": ["Git", "GitHub", "VS Code", "Postman"]
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nafyad Getu
            </h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === item 
                      ? 'text-purple-600 font-semibold border-b-2 border-purple-600' 
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-purple-600 capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

     
{/* Hero Section */}
<section
  id="home"
  className="relative isolate min-h-screen overflow-hidden bg-[#030712] text-white flex items-center pt-20"
>
  {/* Background glow effects */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]"></div>
    <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px]"></div>
    <div className="absolute bottom-0 left-1/3 w-96 h-48 bg-cyan-500/10 rounded-full blur-[100px]"></div>
  </div>

  {/* Network background */}
  <svg
    className="absolute bottom-0 left-0 w-full h-72 opacity-40 pointer-events-none -z-10"
    viewBox="0 0 1440 300"
    preserveAspectRatio="none"
  >
    <g fill="none" stroke="#38bdf8" strokeWidth="1">
      <path d="M0 220 L170 160 L310 250 L490 130 L650 220 L850 100 L1040 210 L1250 110 L1440 200" />
      <path d="M0 270 L170 160 L390 190 L490 130 L720 270 L850 100 L1100 160 L1250 110 L1440 260" />
      <path d="M170 160 L230 280 L490 130 L650 220 L720 270 L1040 210 L1100 160 L1250 110" />
      <path d="M310 250 L390 190 L650 220 L850 100 L1040 210 L1440 200" />
    </g>
    <g fill="#67e8f9">
      <circle cx="170" cy="160" r="3"/>
      <circle cx="310" cy="250" r="3"/>
      <circle cx="490" cy="130" r="3"/>
      <circle cx="650" cy="220" r="3"/>
      <circle cx="850" cy="100" r="3"/>
      <circle cx="1040" cy="210" r="3"/>
      <circle cx="1250" cy="110" r="3"/>
    </g>
  </svg>

  <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 py-16 relative z-10">
    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* LEFT SIDE - YOUR INFORMATION */}
      <div className="text-center lg:text-left">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/30 bg-white/5 backdrop-blur-md mb-7 shadow-lg shadow-blue-500/10">
          <span className="text-lg">👋</span>
          <span className="text-sm text-gray-300 font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-5">
          <span className="text-white">Nafyad</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Getu
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-5">
          Full Stack Developer
        </h2>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
          Building robust web applications with modern technologies.
          Passionate about creating elegant solutions to complex problems.
        </p>

        {/* Technology badges */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-9">
          {[
            "React JS",
            "JavaScript",
            "Python",
            "Java",
            "Laravel",
            "MySQL",
            "Tailwind CSS",
            "GitHub"
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-2 rounded-full text-xs font-semibold tracking-wide text-blue-200 border border-blue-400/30 bg-blue-500/10 hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-purple-600/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
          >
            View My Work
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
              →
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-full border border-purple-400/60 text-white font-semibold hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300"
          >
            Contact Me
          </button>

        </div>
      </div>

      {/* RIGHT SIDE - YOUR PHOTO */}
      <div className="relative flex justify-center items-center">

        {/* Glowing frame */}
        <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-[100px] opacity-30"></div>

        <div className="relative w-full max-w-lg flex justify-center">

          {/* Decorative border */}
          <div className="absolute top-10 right-5 w-64 h-80 md:w-80 md:h-[420px] border border-purple-400/30 rounded-3xl rotate-6"></div>

          
{/* Main image */}
<img
  src="/images/Full%20Stack%20Developer%20Poster%20(1).png"
  alt="Nafyad Getu - Full Stack Developer"
  className="relative z-10 w-full max-w-md h-[430px] md:h-[570px] object-contain object-center"
/>


          {/* Floating developer card */}
          <div className="absolute z-20 bottom-20 -left-2 md:left-0 bg-gray-900/90 backdrop-blur-xl border border-blue-400/30 rounded-xl p-4 shadow-xl shadow-blue-500/10 animate-pulse">
            <p className="text-blue-400 text-xs mb-1 font-mono">
              developer.js
            </p>
            <p className="text-gray-300 text-xs font-mono">
              const developer = {"{"}
            </p>
            <p className="text-purple-300 text-xs font-mono ml-3">
              name: "Nafyad Getu"
            </p>
            <p className="text-purple-300 text-xs font-mono ml-3">
              role: "Full Stack"
            </p>
            <p className="text-gray-300 text-xs font-mono">
              {"}"}
            </p>
          </div>

          {/* Availability-style decorative label */}
          <div className="absolute z-20 bottom-8 right-0 bg-gray-900/90 backdrop-blur-lg border border-green-400/30 rounded-full px-4 py-3 flex items-center gap-2 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs text-gray-200 font-medium">
              Software Developer
            </span>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


  
{/* About Section */}
<section
  id="about"
  className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-100"
>
  {/* Background decorations */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    {/* Glowing circles */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute top-40 -right-32 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

    {/* Dotted pattern */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "radial-gradient(#6366f1 1px, transparent 1px)",
        backgroundSize: "25px 25px",
      }}
    ></div>

    {/* Decorative gradient lines */}
    <div className="absolute top-20 right-20 w-32 h-32 border border-purple-300/40 rounded-full"></div>
    <div className="absolute bottom-20 left-10 w-20 h-20 border border-blue-300/40 rounded-full"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-widest text-purple-700 bg-purple-100/80 border border-purple-200 rounded-full shadow-sm">
        GET TO KNOW ME
      </span>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>

      <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Discover my journey, passion, skills, and what drives me
        to create amazing digital experiences.
      </p>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">

      {/* About Me Card */}
      <div className="group relative">

        {/* Card glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-15 group-hover:opacity-35 transition duration-500"></div>

        <div className="relative h-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-xl hover:shadow-2xl rounded-3xl p-7 sm:p-9 transition-all duration-500 hover:-translate-y-2">

          {/* Card title */}
          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
              👨‍💻
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Who I Am
              </h3>
              <p className="text-sm text-purple-600 font-semibold">
                Full Stack Developer
              </p>
            </div>

          </div>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-8 text-base sm:text-lg">
            I'm <span className="font-bold text-purple-600">
              Nafyad Getu
            </span>, a passionate Full Stack Developer
            with expertise in building end-to-end web applications.
          </p>

          <p className="text-gray-600 mb-6 leading-8 text-base sm:text-lg">
            With strong foundations in both frontend and backend
            technologies, I create seamless, responsive, and
            scalable applications that deliver exceptional user
            experiences.
          </p>

          <p className="text-gray-600 leading-8 text-base sm:text-lg">
            I'm constantly learning and staying updated with the
            latest technologies to bring innovative solutions
            to every project I work on.
          </p>

          {/* Decorative bottom line */}
          <div className="flex gap-2 mt-9">
            <div className="w-12 h-1.5 bg-blue-500 rounded-full"></div>
            <div className="w-7 h-1.5 bg-indigo-500 rounded-full"></div>
            <div className="w-4 h-1.5 bg-purple-500 rounded-full"></div>
          </div>

        </div>
      </div>

      {/* Quick Information Card */}
      <div className="group relative">

        {/* Outer glowing border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

        <div className="relative h-full bg-white/65 backdrop-blur-2xl border border-white/90 shadow-xl hover:shadow-2xl rounded-3xl p-7 sm:p-9 transition-all duration-500 hover:-translate-y-2">

          {/* Heading */}
          <div className="flex items-center gap-4 mb-8">

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 text-white text-3xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
              ✨
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800">
                Quick Information
              </h3>
              <p className="text-sm text-gray-500">
                A little more about me
              </p>
            </div>

          </div>

          {/* Information Items */}
          <div className="space-y-4">

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/80 border border-blue-100 hover:bg-blue-100 hover:translate-x-2 transition-all duration-300">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-semibold text-gray-800">Ethiopia</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50/80 border border-purple-100 hover:bg-purple-100 hover:translate-x-2 transition-all duration-300">
              <span className="text-2xl">💼</span>
              <div>
                <p className="text-sm text-gray-500">Profession</p>
                <p className="font-semibold text-gray-800">
                  Full Stack Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50/80 border border-indigo-100 hover:bg-indigo-100 hover:translate-x-2 transition-all duration-300">
              <span className="text-2xl">📧</span>
              <div className="min-w-0">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold text-gray-800 break-all">
                  nafyadgetu7@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-pink-50/80 border border-pink-100 hover:bg-pink-100 hover:translate-x-2 transition-all duration-300">
              <span className="text-2xl">🌍</span>
              <div>
                <p className="text-sm text-gray-500">Languages</p>
                <p className="font-semibold text-gray-800">
                  English, Oromic, Amharic
                </p>
              </div>
            </div>

          </div>

          {/* Bottom section */}
          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-500">
              Always learning & growing
            </span>
            <span className="text-2xl animate-bounce">🚀</span>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


  
{/* Skills Section */}
<section
  id="skills"
  className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-100"
>
  {/* Background Decorations */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* Glowing circles */}
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

    {/* Dotted pattern */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "radial-gradient(#6366f1 1px, transparent 1px)",
        backgroundSize: "25px 25px",
      }}
    ></div>

    {/* Decorative circles */}
    <div className="absolute top-24 left-20 w-24 h-24 border border-blue-300/40 rounded-full"></div>

    <div className="absolute bottom-24 right-20 w-32 h-32 border border-purple-300/40 rounded-full"></div>

  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-widest text-purple-700 bg-purple-100/80 border border-purple-200 rounded-full shadow-sm">
        WHAT I WORK WITH
      </span>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>

      <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Technologies, tools, and programming languages
        I use to build modern and scalable applications.
      </p>

    </div>

    {/* Skills Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

      {Object.entries(skillCategories).map(([category, skills], index) => (

        <div
          key={category}
          className="group relative"
        >

          {/* Glowing Card Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

          {/* Main Card */}
          <div className="relative h-full min-h-[250px] bg-white/65 backdrop-blur-xl border border-white/90 rounded-3xl p-7 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

            {/* Category Number and Icon */}
            <div className="flex items-center justify-between mb-7">

              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                {["💻", "⚙️", "🛠️", "🚀"][index % 4]}
              </div>

              <span className="text-4xl font-extrabold text-gray-200 group-hover:text-purple-200 transition-colors duration-300">
                0{index + 1}
              </span>

            </div>

            {/* Category Name */}
            <h3 className="text-xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {category}
            </h3>

            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6 group-hover:w-20 transition-all duration-500"></div>

            {/* Individual Skills */}
            <div className="flex flex-wrap gap-2">

              {skills.map((skill) => (

                <span
                  key={skill}
                  className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white/80 border border-blue-100 rounded-xl shadow-sm hover:text-purple-700 hover:bg-purple-50 hover:border-purple-300 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></span>

                  {skill}

                </span>

              ))}

            </div>

            {/* Bottom Decoration */}
            <div className="mt-7 pt-4 border-t border-gray-200/70 flex items-center justify-between">

              <span className="text-xs font-semibold text-gray-400 tracking-wider">
                SKILL CATEGORY
              </span>

              <span className="text-purple-500 group-hover:translate-x-2 transition-transform duration-300">
                ✦
              </span>

            </div>

          </div>

        </div>

      ))}

    </div>

    {/* Bottom Message */}
    <div className="mt-16 text-center">

      <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-xl border border-white rounded-2xl shadow-lg">

        <span className="text-2xl animate-bounce">🚀</span>

        <p className="text-gray-600 font-medium text-sm sm:text-base">
          Always learning, improving, and exploring new technologies.
        </p>

      </div>

    </div>

  </div>
</section>


  
{/* Projects Section */}
<section
  id="projects"
  className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-100"
>
  {/* Background Decorations */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">

    {/* Glowing circles */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-400/25 rounded-full blur-3xl animate-pulse"></div>

    <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

    {/* Dotted pattern */}
    <div
      className="absolute inset-0 opacity-[0.12]"
      style={{
        backgroundImage:
          "radial-gradient(#6366f1 1px, transparent 1px)",
        backgroundSize: "25px 25px",
      }}
    ></div>

    {/* Decorative circles */}
    <div className="absolute top-24 right-20 w-24 h-24 border border-purple-300/40 rounded-full"></div>

    <div className="absolute bottom-24 left-16 w-32 h-32 border border-blue-300/40 rounded-full"></div>

  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center mb-16">

      <span className="inline-block px-5 py-2 mb-5 text-sm font-bold tracking-widest text-purple-700 bg-purple-100/80 border border-purple-200 rounded-full shadow-sm">
        MY RECENT WORK
      </span>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        My Projects
      </h2>

      <div className="w-24 h-1.5 mx-auto mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>

      <p className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Explore some of my projects, technologies, and creative
        solutions that demonstrate my development journey.
      </p>

    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

      {projects.map((project, index) => (

        <div
          key={index}
          className="group relative"
        >

          {/* Glowing Card Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-3xl blur opacity-15 group-hover:opacity-50 transition duration-500"></div>

          {/* Main Project Card */}
          <div className="relative h-full overflow-hidden bg-white/70 backdrop-blur-xl border border-white/90 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

            {/* Project Image */}
            <div className="relative h-56 sm:h-64 overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-80"></div>

              {/* Project number */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-bold">
                PROJECT 0{index + 1}
              </div>

              {/* Project title on image */}
              <div className="absolute bottom-5 left-6 right-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  {project.title}
                </h3>
              </div>

            </div>

            {/* Project Details */}
            <div className="p-6 sm:p-8">

              {/* Description */}
              <p className="text-gray-600 leading-7 mb-6 text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-7">

                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
                  Technologies Used
                </h4>

                <div className="flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-semibold text-purple-700 bg-gradient-to-r from-blue-50 to-purple-100 border border-purple-100 rounded-xl hover:from-blue-100 hover:to-purple-200 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>

                  ))}

                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-gray-200/80">

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] text-center px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-purple-300/50 hover:scale-105 transition-all duration-300"
                >
                  Live Demo ↗
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[130px] text-center px-5 py-3 rounded-xl bg-white border-2 border-purple-200 text-purple-700 font-bold hover:bg-purple-50 hover:border-purple-400 hover:scale-105 transition-all duration-300"
                >
                  GitHub ↗
                </a>

              </div>

            </div>

          </div>
        </div>

      ))}

    </div>

    {/* Bottom Message */}
    <div className="mt-16 text-center">

      <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-4 bg-white/60 backdrop-blur-xl border border-white rounded-2xl shadow-lg">

        <span className="text-2xl">💡</span>

        <p className="text-gray-600 font-medium text-sm sm:text-base">
          Turning ideas into real-world digital experiences.
        </p>

        <span className="text-2xl">🚀</span>

      </div>

    </div>

  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://github.com/nafyadgetu7-commits" className="text-gray-600 hover:text-purple-600 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.795.575 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/gold-man-913498361/" className="text-gray-600 hover:text-blue-600 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/abrahaam.geetu" className="text-gray-600 hover:text-blue-800 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
            </div>
            
            {!showContactForm ? (
              <div className="text-center">
                <p className="text-gray-600 mb-6">Feel free to reach out for collaborations or just a friendly chat!</p>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </div>
            ) : (
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600" />
                </div>
                <div>
                  <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>&copy; 2024 Nafyad Getu. All rights reserved.</p>
          <p className="text-gray-400 text-sm mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;