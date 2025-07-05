import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Database, Globe, ChevronDown, Star, Calendar, ExternalLink, Zap, Sparkles } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        setIsVisible(true);

        // Generate floating particles
        const newParticles = Array.from({ length: 50 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        }));
        setParticles(newParticles);

        // Mouse tracking for interactive effects
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Animate particles
    useEffect(() => {
        const animateParticles = () => {
            setParticles(prev => prev.map(particle => ({
                ...particle,
                y: (particle.y + particle.speed * 0.1) % 100,
                x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.1
            })));
        };

        const interval = setInterval(animateParticles, 50);
        return () => clearInterval(interval);
    }, []);

    const skills = [
        { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500', icon: '⚡' },
        { name: 'React.js', level: 80, color: 'from-blue-400 to-cyan-500', icon: '⚛️' },
        { name: 'Python', level: 60, color: 'from-green-400 to-emerald-500', icon: '🐍' },
        { name: 'Java', level: 75, color: 'from-red-400 to-pink-500', icon: '☕' },
        { name: 'SQL', level: 70, color: 'from-purple-400 to-violet-500', icon: '🗄️' },

    ];

    const projects = [
        {
            title: 'Bloggr',
            description: 'A modern, user-friendly web application that allows users to create and share personal memories through blogs enriched with images, captions, and hashtags.',
            tech: ['React', 'Tailwind CSS', 'Appwrite',],
            status: 'Completed',
            github: 'https://github.com/Shruti28-code/Bloggr',
            live: 'https://bloggr-woad.vercel.app/',
            gradient: 'from-blue-600 via-purple-600 to-pink-600'
        },
        {
            title: 'Connect',
            description: 'Stay close to what matters. A real-time chat web application  built using React and Firebase, enabling seamless communication through instant messaging and secure user authentication.',
            tech: ['React', 'Firebase'],
            status: 'In Progress',
            github: 'https://github.com/Shruti28-code/Connect',
            live: 'https://connect-puce-rho.vercel.app/',
            gradient: 'from-green-600 via-teal-600 to-blue-600'
        },

    ];

    const NavButton = ({ section, label, icon: Icon }) => (
        <button
            onClick={() => setActiveSection(section)}
            className={`group relative flex items-center space-x-2 px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-110 font-serif ${activeSection === section
                ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/50 scale-105'
                : 'bg-black/40 backdrop-blur-xl text-gray-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-white border border-gray-700 hover:border-purple-500'
                }`}
        >
            <Icon size={20} className="group-hover:animate-pulse" />
            <span className="font-bold text-lg">{label}</span>
            {activeSection === section && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            )}
        </button>
    );

    const SkillBar = ({ skill, index }) => (
        <div
            className="mb-8 transform transition-all duration-1000 hover:scale-105 group"
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-white font-bold text-xl font-serif">{skill.name}</span>
                </div>
                <span className="text-gray-300 font-bold text-lg font-serif">{skill.level}%</span>
            </div>
            <div className="relative w-full bg-gray-800/50 backdrop-blur-sm rounded-full h-4 overflow-hidden border border-gray-700">
                <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                    style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                    }}
                >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
            </div>
        </div>
    );

    const ProjectCard = ({ project, index }) => (
        <div
            className="group relative bg-black/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl hover:shadow-purple-500/20 transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 border border-gray-700/50 hover:border-purple-500/50 overflow-hidden"
            style={{ animationDelay: `${index * 0.2}s` }}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white font-serif group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                    </h3>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold font-serif ${project.status === 'Completed'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                        : 'bg-gradient-to-r from-yellow-500 to-orange-600 text-white shadow-lg shadow-yellow-500/30 animate-pulse'
                        }`}>
                        {project.status}
                    </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg font-serif">{project.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm text-blue-300 rounded-full text-sm font-bold border border-blue-500/30 hover:border-blue-400 transition-colors font-serif">
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-6">
                    <a href={project.github} className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                        <Github size={18} className="group-hover:animate-spin" />
                        <span className="font-bold font-serif">Code</span>
                    </a>
                    <a href={project.live} className="group flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                        <ExternalLink size={18} className="group-hover:animate-bounce" />
                        <span className="font-bold font-serif">Live</span>
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <div
            className="min-h-screen bg-black text-white relative overflow-hidden"
            style={{
                fontFamily: '"Times New Roman", Times, serif',
                background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #000000 100%)
        `
            }}
        >
            {/* Animated Background Particles */}
            {particles.map(particle => (
                <div
                    key={particle.id}
                    className="absolute pointer-events-none"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        opacity: particle.opacity,
                        background: `linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)`,
                        borderRadius: '50%',
                        filter: 'blur(1px)',
                        animation: `twinkle ${2 + particle.id % 3}s infinite alternate`
                    }}
                />
            ))}

            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className={`text-center z-10 transform transition-all duration-2000 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
                    }`}>
                    <div className="mb-8">
                        <div className="relative w-40 h-40 mx-auto mb-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                                SK
                            </div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-20 animate-pulse"></div>
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                        Shruti Khadatkar
                    </h1>
                    <div className="relative">
                        <p className="text-2xl md:text-4xl text-gray-300 mb-8 font-bold">BTech Student & Full Stack Developer</p>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl rounded-full"></div>
                    </div>
                    <div className="flex justify-center space-x-8 mb-12">
                        <a href="https://github.com/Shruti28-code" className="group relative text-gray-400 hover:text-white transition-all duration-500 transform hover:scale-125 hover:rotate-12">
                            <Github size={32} className="relative z-10" />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </a>
                        <a href="https://www.linkedin.com/in/shruti-khadatkar-454293245/" className="group relative text-gray-400 hover:text-white transition-all duration-500 transform hover:scale-125 hover:rotate-12">
                            <Linkedin size={32} className="relative z-10" />
                            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </a>
                        <a href="shrutikhadatkar2004@gmail.com" className="group relative text-gray-400 hover:text-white transition-all duration-500 transform hover:scale-125 hover:rotate-12">
                            <Mail size={32} className="relative z-10" />
                            <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </a>
                    </div>
                    <ChevronDown className="mx-auto animate-bounce text-gray-400" size={40} />
                </div>
            </div>

            {/* Navigation */}
            <div className="sticky top-0 z-50 backdrop-blur-2xl bg-black/30 border-b border-gray-700/50">
                <div className="container mx-auto px-6 py-6">
                    <nav className="flex justify-center space-x-6 overflow-x-auto">
                        <NavButton section="about" label="About" icon={Sparkles} />
                        <NavButton section="education" label="Education" icon={Calendar} />
                        <NavButton section="skills" label="Skills" icon={Zap} />
                        <NavButton section="projects" label="Projects" icon={Database} />
                    </nav>
                </div>
            </div>

            {/* Content Sections */}
            <div className="container mx-auto px-6 py-16">
                {activeSection === 'about' && (
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}>
                        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <div className="max-w-6xl mx-auto">
                            <div className="relative bg-black/20 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

                                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-serif">
                                    I'm a passionate BTech student with an insatiable curiosity for technology and innovation. My journey in computer science
                                    has been fueled by the desire to push boundaries and create revolutionary solutions that transform the digital landscape.
                                    I specialize in full-stack development with expertise in cutting-edge technologies and frameworks.
                                </p>

                                <div className="grid md:grid-cols-3 gap-8 mt-12">
                                    <div className="group text-center p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl border border-blue-800/30 hover:border-blue-400 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                                        <Code className="mx-auto mb-4 text-blue-400 group-hover:animate-pulse" size={48} />
                                        <h3 className="font-bold text-white text-2xl mb-2 font-serif">Frontend</h3>
                                        <p className="text-gray-400 font-serif">React, JavaScript, Advanced CSS</p>
                                    </div>
                                    <div className="group text-center p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl border border-green-800/30 hover:border-green-400 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                                        <Database className="mx-auto mb-4 text-green-400 group-hover:animate-pulse" size={48} />
                                        <h3 className="font-bold text-white text-2xl mb-2 font-serif">Cloud tools</h3>
                                        <p className="text-gray-400 font-serif">Firebase , Appwrite</p>
                                    </div>
                                    <div className="group text-center p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-800/30 hover:border-purple-400 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
                                        <Globe className="mx-auto mb-4 text-purple-400 group-hover:animate-pulse" size={48} />
                                        <h3 className="font-bold text-white text-2xl mb-2 font-serif">Tools</h3>
                                        <p className="text-gray-400 font-serif">Git , Github, Vercel</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'education' && (
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}>
                        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Educational Journey
                        </h2>
                        <div className="max-w-6xl mx-auto space-y-8">
                            <div className="group relative bg-black/20 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 font-serif">Bachelor of Technology (BTech)</h3>
                                        <p className="text-blue-400 font-bold text-xl mb-2 font-serif">Electronics and Computer Science</p>
                                        <p className="text-gray-400 text-lg font-serif">Shri Ramdeobaba College of Engineering and Management, Nagpur</p>
                                    </div>
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-2xl text-lg font-bold shadow-lg font-serif">2021-2025</span>
                                </div>
                                <p className="text-gray-300 mb-6 text-lg leading-relaxed font-serif">
                                    Currently pursuing a B.Tech in Computer Science with a strong focus on advanced software development and algorithmic optimization, while consistently maintaining exceptional academic performance.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold shadow-lg font-serif">CGPA: 9.4/10</span>

                                </div>
                            </div>

                            <div className="group relative bg-black/20 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-500 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-teal-500"></div>
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 font-serif">Higher Secondary Education (12th)</h3>
                                        <p className="text-green-400 font-bold text-xl mb-2 font-serif">Science Stream (PCM)</p>
                                        <p className="text-gray-400 text-lg font-serif">St. Paul Junior College, Nagpur</p>
                                    </div>

                                </div>
                                <p className="text-gray-300 mb-6 text-lg leading-relaxed font-serif">
                                    Excelled in higher secondary education with Physics, Chemistry, and Mathematics as core disciplines.
                                    Built a solid foundation in analytical thinking, mathematical modeling, and scientific methodology
                                    that continues to drive my technological pursuits.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <span className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-2xl font-bold shadow-lg font-serif">95% </span>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'skills' && (
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}>
                        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Technical Arsenal
                        </h2>
                        <div className="max-w-6xl mx-auto">
                            <div className="relative bg-black/20 backdrop-blur-2xl p-12 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                                <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

                                <div className="relative z-10">
                                    {skills.map((skill, index) => (
                                        <SkillBar key={skill.name} skill={skill} index={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'projects' && (
                    <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                        }`}>
                        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projects.map((project, index) => (
                                <ProjectCard key={project.title} project={project} index={index} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Footer */}
            <footer className="relative bg-black/40 backdrop-blur-2xl border-t border-gray-700/50 py-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <p className="text-gray-400 text-l font-serif">
                        © 2025 Shruti Khadatkar. Crafted with passion using React & Tailwind CSS
                    </p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <Sparkles className="text-blue-400 animate-pulse" size={20} />
                        <Zap className="text-purple-400 animate-pulse" size={20} />
                        <Sparkles className="text-pink-400 animate-pulse" size={20} />
                    </div>
                </div>
            </footer>

            <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
        </div >
    );
};

export default Portfolio;