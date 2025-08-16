const { useState, useEffect, useRef } = React;

        // Scroll Progress Component
        function ScrollProgress() {
            const [scrollProgress, setScrollProgress] = useState(0);

            useEffect(() => {
                const handleScroll = () => {
                    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                    const progress = (window.scrollY / totalHeight) * 100;
                    setScrollProgress(progress);
                };

                window.addEventListener('scroll', handleScroll);
                return () => window.removeEventListener('scroll', handleScroll);
            }, []);

            return React.createElement('div', {
                className: 'scroll-indicator',
                style: { transform: `scaleX(${scrollProgress / 100})` }
            });
        }

        // Navigation Component
        function Navigation() {
            const [isOpen, setIsOpen] = useState(false);
            const [activeSection, setActiveSection] = useState('home');

            const scrollToSection = (sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                }
            };

            return React.createElement('nav', { className: 'fixed top-0 w-full glass-effect z-50' },
                React.createElement('div', { className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' },
                    React.createElement('div', { className: 'flex justify-between items-center py-4' },
                        React.createElement('div', { className: 'text-xl font-bold gradient-text' },
                            React.createElement('i', { className: 'fas fa-code mr-2' }),
                            'Elsa Monteiro Portfolio'
                        ),
                        React.createElement('div', { className: 'hidden md:flex space-x-8' },
                            ['home', 'about', 'skills', 'projects', 'contact'].map(section =>
                                React.createElement('button', {
                                    key: section,
                                    onClick: () => scrollToSection(section),
                                    className: `capitalize transition-all duration-300 ${
                                        activeSection === section 
                                            ? 'text-purple-400 font-semibold' 
                                            : 'hover:text-purple-400'
                                    }`
                                }, section === 'home' ? 'Home' : 
                                   section === 'about' ? 'About' :
                                   section === 'skills' ? 'Skills' :
                                   section === 'projects' ? 'Projets' : 'Contact')
                            )
                        ),
                        React.createElement('button', {
                            onClick: () => setIsOpen(!isOpen),
                            className: 'md:hidden text-xl'
                        }, React.createElement('i', { className: `fas ${isOpen ? 'fa-times' : 'fa-bars'}` }))
                    )
                ),
                isOpen && React.createElement('div', { className: 'md:hidden glass-effect border-t border-gray-800' },
                    React.createElement('div', { className: 'px-4 py-4 space-y-4' },
                        ['home', 'about', 'skills', 'projects', 'contact'].map(section =>
                            React.createElement('button', {
                                key: section,
                                onClick: () => scrollToSection(section),
                                className: 'block w-full text-left hover:text-purple-400 transition-colors capitalize'
                            }, section === 'home' ? 'Home' : 
                               section === 'about' ? 'About' :
                               section === 'skills' ? 'Skills' :
                               section === 'projects' ? 'Projets' : 'Contact')
                        )
                    )
                )
            );
        }

        // Hero Section Component
        function HeroSection() {
            return React.createElement('section', { 
                id: 'home', 
                className: 'min-h-screen flex items-center justify-center px-4 relative overflow-hidden' 
            },
                React.createElement('div', { className: 'absolute inset-0 opacity-20' },
                    React.createElement('div', { className: 'absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse' }),
                    React.createElement('div', { className: 'absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse' }),
                    React.createElement('div', { className: 'absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse' })
                ),
                React.createElement('div', { className: 'text-center max-w-4xl mx-auto relative z-10' },
                    React.createElement('div', { className: 'mb-8 floating' },
                        React.createElement('div', { className: 'w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl' },
                            React.createElement('i', { className: 'fas fa-code text-5xl text-white' })
                        )
                    ),
                    React.createElement('h1', { className: 'text-6xl md:text-8xl font-bold mb-6' },
                        React.createElement('span', { className: 'gradient-text' }, 'Web Developer'),
                        React.createElement('br'),
                        React.createElement('span', { className: 'typewriter' }, '& UI/UX Designer')
                    ),
                    React.createElement('p', { className: 'text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto' },
                        'Where Design Meets Code, Crafting Interactive Web Experiences.',
                        React.createElement('br'),
                        'Turning Ideas Into Interactive Realities.'
                    ),
                    React.createElement('div', { className: 'flex flex-col sm:flex-row gap-6 justify-center' },
                        React.createElement('button', {
                            onClick: () => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' }),
                            className: 'group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-10 py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl'
                        },
                            React.createElement('span', { className: 'mr-2' }, 'View Projects'),
                            React.createElement('i', { className: 'fas fa-arrow-right group-hover:translate-x-1 transition-transform' })
                        ),
                        React.createElement('button', {
                            onClick: () => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }),
                            className: 'group glass-effect border border-purple-500 hover:bg-purple-500/20 px-10 py-4 rounded-xl font-semibold transition-all hover:scale-105'
                        },
                            React.createElement('span', { className: 'mr-2' }, 'Contact Me'),
                            React.createElement('i', { className: 'fas fa-envelope group-hover:rotate-12 transition-transform' })
                        )
                    )
                )
            );
        }

        // About Section Component

        function AboutSection() {
            return React.createElement('section', { id: 'about', className: 'py-20 px-4' },
                React.createElement('div', { className: 'max-w-6xl mx-auto' },
                    React.createElement('h2', { className: 'text-5xl md:text-6xl font-bold text-center mb-16 gradient-text' },
                        'About Me'
                    ),
                    React.createElement('div', { className: 'grid md:grid-cols-2 gap-12 items-center' },
                        React.createElement('div', { className: 'transition-all duration-1000' },
                            React.createElement('div', { className: 'relative' },
                                React.createElement('div', { className: 'w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500' },
                                    React.createElement('img', {
                                        src: 'user.png',
                                        alt: 'Elsa Monteiro',
                                        className: 'w-full h-full object-cover rounded-3xl'
                                    })
                                ),
                                React.createElement('div', { className: 'absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400 rounded-full flex items-center justify-center animate-bounce' },
                                    React.createElement('i', { className: 'fas fa-code text-2xl text-black' })
                                ),
                                React.createElement('div', { className: 'absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce' },
                                    React.createElement('i', { className: 'fas fa-star text-2xl text-black' })
                                )
                            )
                        ),
                        React.createElement('div', { className: 'space-y-6 transition-all duration-1000 delay-300' },
                            React.createElement('h3', { className: 'text-3xl font-semibold text-purple-400' },
                                'Hi! I’m Elsa Monteiro, a passionate Front-End Developer and Web Designer from Porto, Portugal 🇵🇹'
                            ),
                            React.createElement('p', { className: 'text-gray-300 leading-relaxed text-lg' },
                                'Born and raised in Porto, I carry the city’s spirit (and yes, the accent to prove it). I’m passionate about design, curious by nature, and endlessly fascinated by how creativity and technology can work together. I’m also a coffee enthusiast, Italian food devotee, and the kind of person who can get lost for hours in a good romance book or dancing to recharge my energy.'
                            ),
                            React.createElement('p', { className: 'text-gray-300 leading-relaxed text-lg' },
                                'I thrive on challenges — even the ones that make my heart race.'
                            ),
                            React.createElement('p', { className: 'text-gray-300 leading-relaxed text-lg' },
                                'My work blends clean, purposeful design with seamless user experiences — from layouts that tell a story to interactions that make a project feel alive. I’m always exploring new ways to push creativity and usability further.'
                            ),
                            React.createElement('div', { className: 'grid grid-cols-2 gap-4 pt-6' },
                                React.createElement('div', { className: 'glass-effect p-4 rounded-xl text-center' },
                                    React.createElement('div', { className: 'text-3xl font-bold text-purple-400' }, '10+'),
                                    React.createElement('div', { className: 'text-sm text-gray-400' }, 'Projects')
                                ),
                                React.createElement('div', { className: 'glass-effect p-4 rounded-xl text-center' },
                                    React.createElement('div', { className: 'text-3xl font-bold text-blue-400' }, '1+'),
                                    React.createElement('div', { className: 'text-sm text-gray-400' }, 'Years of Experience')
                                )
                            ),
                            React.createElement('div', { className: 'flex flex-wrap gap-3 pt-4' },
                                React.createElement('span', { className: 'bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/30' }, 'HTML5'),
                                React.createElement('span', { className: 'bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-500/30' }, 'CSS3'),
                                React.createElement('span', { className: 'bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm border border-green-500/30' }, 'JavaScript'),
                                React.createElement('span', { className: 'bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm border border-red-500/30' }, 'React.js'),
                                React.createElement('span', { className: 'bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm border border-pink-500/30' }, 'UI/UX Design'),
                                React.createElement('span', { className: 'bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm border border-yellow-500/30' }, 'Figma'),
                                React.createElement('span', { className: 'bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full text-sm border border-cyan-500/30' }, 'Canva')
                            )
                        )
                    )
                )
            );
        }

           // Skills Section Component
function SkillsSection() {
    const [skillsVisible, setSkillsVisible] = useState(false);

    const technicalSkills = [
        { name: 'HTML5', level: 100, icon: 'fab fa-html5', color: 'text-orange-400' },
        { name: 'CSS3', level: 100, icon: 'fab fa-css3-alt', color: 'text-blue-400' },
        { name: 'JavaScript', level: 50, icon: 'fab fa-js-square', color: 'text-yellow-400' },
        { name: 'React.js', level: 20, icon: 'fab fa-react', color: 'text-blue-400' },
        { name: 'Figma', level: 40, icon: 'fab fa-figma', color: 'text-cyan-400' },
    ];

    useEffect(() => {
        const timer = setTimeout(() => setSkillsVisible(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return React.createElement('section', { id: 'skills', className: 'py-20 px-4 bg-gray-900/30' },
        React.createElement('div', { className: 'max-w-6xl mx-auto' },
            React.createElement('h2', { className: 'text-5xl md:text-6xl font-bold text-center mb-16 gradient-text' }, 'Skills'),
            React.createElement('div', { className: 'mb-20' },
                React.createElement('h3', { className: 'text-3xl font-semibold mb-12 text-center text-purple-400' }, 'Technical Skills'),
                React.createElement('div', { className: 'grid md:grid-cols-2 gap-8' },
                    technicalSkills.map((skill, index) =>
                        React.createElement('div', {
                            key: skill.name,
                            className: `glass-box transition-all duration-700 ${
                                skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`
                        },
                            // Nome e ícone
                            React.createElement('div', { className: 'flex items-center justify-between mb-4' },
                                React.createElement('div', { className: 'flex items-center space-x-3' },
                                    React.createElement('i', { className: `${skill.icon} text-2xl ${skill.color}` }),
                                    React.createElement('span', { className: 'text-white font-semibold' }, skill.name)
                                ),
                                React.createElement('span', { className: 'text-purple-400 font-bold' }, `${skill.level}%`)
                            ),
                            // Barra de progresso
                            React.createElement('div', { className: 'bg-gray-700 rounded-full h-3 overflow-hidden' },
                                React.createElement('div', {
                                    className: 'skill-bar rounded-full h-full bg-white transition-all duration-1000 ease-in-out',
                                    style: {
                                        width: skillsVisible ? `${skill.level}%` : '0%',
                                        transitionDelay: `${index * 0.2}s`
                                    }
                                })
                            )
                        )
                    )
                )
            )
        )
    );

}
        // Projects Section Component
        function ProjectsSection()  {
            const [selectedProject, setSelectedProject] = React.useState(null);
        
            const projects = [
                {
                    id: 1,
                    category: 'Web Developer',
                    title: 'Band Tribute Page',
                    description: 'Arctic Monkeys Tribute Page — a minimalist, vintage-styled webpage dedicated to one of the most iconic rock bands of the 21st century',
                    image: 'fas fa-music',
                    color: 'from-green-600 to-teal-600',
                    technologies: ['HTML5', 'CSS3', 'Flexbox'],
                    features: ['Dynamic Layout: Adaptive to different screen sizes and orientations.', 'Responsive Design: Fully compatible with desktops, tablets, and mobile devices.', 'Interactive Links: Clicking on links should open in a new tab.'],
                    details: 'A minimalist, vintage-styled webpage dedicated to one of the most iconic rock bands of the 21st century.',
                    github: 'https://github.com/elsacmonteiro/arctic-monkeys-tribute-page',
                    page: 'https://elsacmonteiro.github.io/arctic-monkeys-tribute-page/'
                },
                {
                    id: 2,
                    category: 'Web Developer',
                    title: 'Software Demo Landing Page',
                    description: 'Responsive landing page designed specifically for software companies to capture leads and request software demos.',
                    image: 'fas fa-code',
                    color: 'from-orange-600 to-red-600',
                    technologies: ['HTML5', 'CSS3', 'Responsive Design'],
                    features: ['Lead Capture Form', 'Email Validation', 'Clear Call-to-Action', 'Customizable Form Fields'],
                    details: 'The page features an intuitive lead capture form that collects vital user details like name, email, phone number, and account type.',
                    github: 'https://github.com/elsacmonteiro/software-demo-landing-page',
                    page: 'https://elsacmonteiro.github.io/software-demo-landing-page/'
                }, 
                {
                    id: 3,
                    category: 'Web Design',
                    title: 'Elara Lace — Brand Creation Process',
                    description: 'Complete creative process of Elara Lace — from concept and brand identity to website design and social media strategy.',
                    image: 'fas fa-paint-brush',
                    color: 'from-pink-500 to-purple-500',
                    technologies: ['Canva'],
                    features: ['Web Design', 'Branding Design', 'Brand Guidelines', 'Logo Design', 'Social Media Strategy'],
                    details: 'Complete creative process of Elara Lace — from concept and brand identity to website design and social media strategy',
                    page: 'https://www.behance.net/gallery/232129611/Elara-Lace-Brand-Creation-Process'
                },
                {
                    id: 4,
                    category: 'Web Design',
                    title: 'Elara Lace — Website Design',
                    description: 'The website design combines a minimal layout, pastel color palette, and elegant typography.',
                    image: 'fas fa-paint-brush',
                    color: 'from-yellow-500 to-orange-500',
                    technologies: ['Canva', 'Figma'],
                    features: ['Web Design', 'UX/UI Design', 'E-commerce', 'Responsive Design', 'Digital Experience'],
                    details: 'Complete creative process of Elara Lace — from concept and brand identity to website design and social media strategy.',
                    page: 'https://elsacmonteiro.github.io/elsamonteiro-react-portfolio/'
                }
            ];
        
            const renderProjectCard = (project) => 
                React.createElement('div', {
                    key: project.id,
                    className: 'project-card rounded-2xl p-6 cursor-pointer max-w-xs w-full',
                    onClick: () => setSelectedProject(project)
                },
                    React.createElement('div', { className: `bg-gradient-to-br ${project.color} rounded-xl p-8 text-center mb-6` },
                        React.createElement('i', { className: `${project.image} text-5xl text-white` })
                    ),
                    React.createElement('h3', { className: 'text-xl font-bold mb-3 text-white text-center' }, project.title),
                    React.createElement('p', { className: 'text-gray-400 mb-4 text-sm leading-relaxed text-center' }, project.description),
                    React.createElement('div', { className: 'flex flex-wrap gap-2 justify-center mb-4' },
                        project.technologies.slice(0, 3).map(tech =>
                            React.createElement('span', {
                                key: tech,
                                className: 'bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs'
                            }, tech)
                        ),
                        project.technologies.length > 3 && React.createElement('span', {
                            className: 'bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs'
                        }, `+${project.technologies.length - 3}`)
                    ),
                    React.createElement('button', {
                        className: `w-full bg-gradient-to-r ${project.color} hover:opacity-80 text-white font-semibold py-2 rounded-lg transition-all`
                    }, 'View Details')
                );
        
            const ProjectModal = ({ project, onClose }) => {
                if (!project) return null;
        
                return React.createElement('div', { className: 'fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4' },
                    React.createElement('div', { className: 'glass-effect rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto' },
                        React.createElement('div', { className: 'flex justify-between items-center mb-6' },
                            React.createElement('h3', { className: 'text-3xl font-bold gradient-text' }, project.title),
                            React.createElement('button', {
                                onClick: onClose,
                                className: 'text-gray-400 hover:text-white text-2xl transition-colors'
                            }, React.createElement('i', { className: 'fas fa-times' }))
                        ),
                        React.createElement('div', { className: 'grid md:grid-cols-2 gap-8' },
                            React.createElement('div', null,
                                React.createElement('div', { className: `bg-gradient-to-br ${project.color} rounded-xl p-12 text-center mb-6` },
                                    React.createElement('i', { className: `${project.image} text-8xl text-white` })
                                ),
                                React.createElement('div', { className: 'flex gap-4 justify-center' },
                                    project.category !== 'Web Design' && project.github && React.createElement('a', {
                                        href: project.github,
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        className: 'flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors'
                                    },
                                        React.createElement('i', { className: 'fab fa-github' }),
                                        React.createElement('span', null, 'GitHub')
                                    ),
                                    React.createElement('a', {
                                        href: project.page,
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        className: `flex items-center space-x-2 bg-gradient-to-r ${project.color} hover:opacity-80 px-4 py-2 rounded-lg transition-opacity`
                                    },
                                        React.createElement('i', { className: 'fas fa-external-link-alt' }),
                                        React.createElement('span', null, project.category === 'Web Design' ? 'Behance' : 'Page')
                                    )
                                )
                            ),
                            React.createElement('div', { className: 'space-y-6' },
                                React.createElement('div', null,
                                    React.createElement('h4', { className: 'text-xl font-semibold mb-3 text-purple-400' }, 'Description'),
                                    React.createElement('p', { className: 'text-gray-300 leading-relaxed' }, project.details)
                                ),
                                React.createElement('div', null,
                                    React.createElement('h4', { className: 'text-xl font-semibold mb-3 text-purple-400' }, 'Technologies'),
                                    React.createElement('div', { className: 'flex flex-wrap gap-2' },
                                        project.technologies.map(tech =>
                                            React.createElement('span', {
                                                key: tech,
                                                className: 'bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30'
                                            }, tech)
                                        )
                                    )
                                ),
                                React.createElement('div', null,
                                    React.createElement('h4', { className: 'text-xl font-semibold mb-3 text-purple-400' }, 'Features'),
                                    React.createElement('ul', { className: 'space-y-2' },
                                        project.features.map(feature =>
                                            React.createElement('li', {
                                                key: feature,
                                                className: 'flex items-center text-gray-300'
                                            },
                                                React.createElement('i', { className: 'fas fa-check text-green-400 mr-3' }),
                                                feature
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                );
            };
        
            // devolvemos a secção + o modal
            return React.createElement(React.Fragment, null,
                React.createElement('section', { id: 'projects', className: 'py-20 px-4' },
                    React.createElement('div', { className: 'max-w-6xl mx-auto' },
                        React.createElement('h2', { className: 'text-5xl md:text-6xl font-bold text-center mb-16 gradient-text' }, 'My Projects'),
        
                        React.createElement('h3', { className: 'text-3xl font-semibold mb-8 text-center text-purple-400' }, 'Web Design'),
                        React.createElement('div', { className: 'flex flex-wrap justify-center gap-8 mb-12' },
                            projects.filter(p => p.category === 'Web Design').map(renderProjectCard)
                        ),
        
                        React.createElement('h3', { className: 'text-3xl font-semibold mb-8 text-center text-purple-400' }, 'Web Developer'),
                        React.createElement('div', { className: 'flex flex-wrap justify-center gap-8 mb-12' },
                            projects.filter(p => p.category === 'Web Developer').map(renderProjectCard)
                        ),
        
                        React.createElement('div', { className: 'text-center' },
                            React.createElement('a', {
                                href: 'https://github.com/elsacmonteiro',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className: 'inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105 text-white'
                            },
                                React.createElement('i', { className: 'fab fa-github mr-2' }),
                                'View more on GitHub'
                            )
                        )
                    )
                ),
                React.createElement(ProjectModal, { project: selectedProject, onClose: () => setSelectedProject(null) })
            );
        }

        // Contact Section Component

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            alert(`Thank you ${formData.name}! Your message has been sent.`);
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return React.createElement('section', { id: 'contact', className: 'py-20 px-4 bg-gray-900/30' },
        React.createElement('div', { className: 'max-w-6xl mx-auto' },
            React.createElement('h2', { className: 'text-5xl md:text-6xl font-bold text-center mb-16 gradient-text' },
                'Feel free to contact me'
            ),
            React.createElement('div', { className: 'grid md:grid-cols-2 gap-12' },
                React.createElement('div', { className: 'space-y-8' },
                    React.createElement('h3', { className: 'text-3xl font-semibold text-purple-400' },
                        'Reach out to me'
                    ),
                    React.createElement('p', { className: 'text-gray-300 leading-relaxed text-lg' },
                        'If you have any questions or if you want to work together. I look forward to hearing from you!'
                    ),
                    React.createElement('div', { className: 'space-y-6' },
                        [
                            { icon: 'fas fa-envelope', label: 'Email', value: 'elsa.cg.monteiro@gmail.com', link: 'mailto:elsa.cg.monteiro@gmail.com', color: 'purple' },
                            { icon: 'fab fa-linkedin', label: 'LinkedIn', value: 'linkedin.com/in/elsamonteiro', link: 'https://www.linkedin.com/in/elsamonteiro13/', color: 'blue' },
                            { icon: 'fab fa-github', label: 'GitHub', value: 'github.com/elsacmonteiro', link: 'https://github.com/elsacmonteiro', color: 'gray' },
                        ].map(contact =>
                            React.createElement('div', {
                                key: contact.label,
                                className: 'flex items-center space-x-4 group'
                            },
                                React.createElement('div', {
                                    className: 'w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform bg-' + contact.color + '-500/20'
                                },
                                    React.createElement('i', { className: contact.icon + ' text-' + contact.color + '-400 text-xl' })
                                ),
                                React.createElement('div', null,
                                    React.createElement('p', { className: 'text-gray-400 text-sm' }, contact.label),
                                    React.createElement('a', {
                                        href: contact.link,
                                        target: '_blank',
                                        rel: 'noopener noreferrer',
                                        className: 'text-white hover:text-' + contact.color + '-400 transition-colors font-medium'
                                    }, contact.value)
                                )
                            )
                        )
                    )
                ),
                React.createElement('div', { className: 'glass-effect p-8 rounded-2xl' },
                    React.createElement('form', { onSubmit: handleSubmit, className: 'space-y-6' },
                        React.createElement('div', { className: 'grid md:grid-cols-2 gap-4' },
                            React.createElement('div', null,
                                React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Name *'),
                                React.createElement('input', {
                                    type: 'text',
                                    name: 'name',
                                    value: formData.name,
                                    onChange: handleChange,
                                    required: true,
                                    className: 'w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all',
                                    placeholder: 'your name'
                                })
                            ),
                            React.createElement('div', null,
                                React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Email *'),
                                React.createElement('input', {
                                    type: 'email',
                                    name: 'email',
                                    value: formData.email,
                                    onChange: handleChange,
                                    required: true,
                                    className: 'w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all',
                                    placeholder: 'your@email.com'
                                })
                            )
                        ),
                        React.createElement('div', null,
                            React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Subject *'),
                            React.createElement('input', {
                                type: 'text',
                                name: 'subject',
                                value: formData.subject,
                                onChange: handleChange,
                                required: true,
                                className: 'w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all',
                                placeholder: 'Subject'
                            })
                        ),
                        React.createElement('div', null,
                            React.createElement('label', { className: 'block text-sm font-medium text-gray-300 mb-2' }, 'Message *'),
                            React.createElement('textarea', {
                                name: 'message',
                                value: formData.message,
                                onChange: handleChange,
                                rows: 5,
                                required: true,
                                className: 'w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none',
                                placeholder: 'Type your message here...'
                            })
                        ),
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isSubmitting,
                            className: 'w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 disabled:hover:scale-100'
                        },
                            isSubmitting ? React.createElement('span', null,
                                React.createElement('i', { className: 'fas fa-spinner fa-spin mr-2' }),
                                'Sending...'
                            ) : React.createElement('span', null,
                                React.createElement('i', { className: 'fas fa-paper-plane mr-2' }),
                                'Send Message'
                            )
                        )
                    ),
                    React.createElement('div', { className: 'mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg' },
                        React.createElement('p', { className: 'text-yellow-400 text-sm text-center' },
                            React.createElement('i', { className: 'fas fa-info-circle mr-2' }),
                            '* Required fields'
                        )
                    )
                )
            )
        )
    );
}

        // Footer

function Footer() {
    return React.createElement('footer', { className: 'py-12 px-4 border-t border-gray-800' },
        React.createElement('div', { className: 'max-w-6xl mx-auto' },
            React.createElement('div', { className: 'flex flex-col md:flex-row justify-between items-center' },
                React.createElement('div', { className: 'mb-4 md:mb-0' },
                    React.createElement('div', { className: 'text-2xl font-bold gradient-text mb-2' },
                        React.createElement('i', { className: 'fas fa-code mr-2' }),
                        'Elsa Monteiro Portfolio'
                    ),
                    React.createElement('p', { className: 'text-gray-400' }, 'Developed with ❤️')
                ),
                React.createElement('div', { className: 'flex space-x-6' },
                    [
                        { icon: 'fab fa-github', link: 'https://github.com/elsacmonteiro' },
                        { icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/elsamonteiro13/' },
                        { icon: 'fas fa-envelope', link: 'mailto:elsa.cg.monteiro@gmail.com' }
                    ].map((social, index) => React.createElement('a', {
                        key: index,
                        href: social.link,
                        className: 'w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110'
                    },
                        React.createElement('i', { className: social.icon + ' text-gray-400 hover:text-white' })
                    ))
                )
            ),
            React.createElement('div', { className: 'mt-8 pt-8 border-t border-gray-800 text-center' },
                React.createElement('p', { className: 'text-gray-400' },
                    '© 2025 Elsa Monteiro Portfolio. All rights reserved.'
                )
            )
        )
    );
}

        // Main App Component
        function App() {
            return React.createElement('div', { className: 'min-h-screen' },
                React.createElement(ScrollProgress),
                React.createElement(Navigation),
                React.createElement(HeroSection),
                React.createElement(AboutSection),
                React.createElement(SkillsSection),
                React.createElement(ProjectsSection),
                React.createElement(ContactSection),
                React.createElement(Footer)
            );
        }

        // Render the app
        ReactDOM.render(React.createElement(App), document.getElementById('root'));