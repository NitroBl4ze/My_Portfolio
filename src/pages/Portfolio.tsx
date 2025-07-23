import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Download, ExternalLink, Award, Code, Video, Briefcase, GraduationCap, ArrowUp, FileText, Instagram, Home, Image as GalleryIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false); // State for scroll-to-top button visibility
  const [showDock, setShowDock] = useState(true); // State for floating dock visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Effect to handle scroll-to-top button and floating dock visibility
  useEffect(() => {
    const handleScroll = () => {
      const experienceSection = document.getElementById('experience');
      const contactSection = document.getElementById('contact');

      // Logic for Back to Top button
      if (experienceSection) {
        if (window.scrollY > (window.innerHeight * 0.5)) {
          setShowScrollToTopButton(true);
        } else {
          setShowScrollToTopButton(false);
        }
      }

      // Logic for Floating Dock
      if (contactSection) {
        // Hide the dock when the user scrolls near the contact section
        const contactTop = contactSection.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Condition to hide the dock when the contact section is close to or enters the viewport
        if (contactTop < viewportHeight * 0.8) {
          setShowDock(false);
        } else {
          setShowDock(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the user loads the page already scrolled down
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // Open Google Drive resume file
    window.open('https://drive.google.com/file/d/1PWB5F-T8iOjqzfM9Hl2sf86bhe81-XCP/view?usp=drive_link', '_blank');
  };

  const handleViewReport = (pdfUrl: string) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      console.warn("No PDF URL provided to handleViewReport.");
    }
  };

  const handleViewProject = (projectName: string) => {
    if (projectName === 'certificate-generator') {
      window.open('https://github.com/NitroBl4ze/Automated-Certificate-Generator', '_blank');
    } else if (projectName === 'mail-sender') {
      window.open('https://github.com/NitroBl4ze/Autonomous_Mailer', '_blank');
    } else if (projectName === 'photo-enhancer') { // Specific URL for Photo Enhance using AI
      window.open('https://github.com/NitroBl4ze/Photo-Enhancer', '_blank');
    } else {
      console.log(`Opening ${projectName} project`);
      window.open('https://acmsjce.acm.org', '_blank'); // Fallback or placeholder for other projects
    }
  };

  const handleLetConnect = () => {
    // Open email client
    window.location.href = 'mailto:itzz.aadhii@gmail.com?subject=Let\'s Connect&body=Hi Aditya, I would like to connect with you.';
  };

  const handleImageClick = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  // Data for Semester Certificates
  const semesterCertificates = [
    { text: 'Sem 1', url: 'https://drive.google.com/file/d/1XmRAfjMGMOObhr9SIHhirmpwteWaDRH5/view?usp=drive_link' },
    { text: 'Sem 2', url: 'https://drive.google.com/file/d/1Ka0UsuGYxnUoGk3QJrv7TuWnnGLEDvYZ/view?usp=drive_link' },
    { text: 'Sem 3', url: 'https://drive.google.com/file/d/1WiCG9cMKZeA6fmmaW3m6mKxShrv8OMfw/view?usp=drive_link' },
    { text: 'Sem 4', url: 'https://drive.google.com/file/d/1KEXNFWRn53iQICJhiE_tWBNV6PIxICP6/view?usp=sharing' },
  ];

  // Data structure for Certifications
  const certifications = [
    { 
      name: 'Foundations of Cloud IoT and Edge ML – NPTEL', 
      type: 'certificate', 
      url: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs75/Course/NPTEL25CS75S45450031704471881.pdf' 
    },
    { 
      name: 'Essentials of Cloud Computing – Infosys Springboard', 
      type: 'certificate', 
      url: 'https://drive.google.com/file/d/1I1d3EwirxG0_JirX5PGGjZwybVMSwBdS/view?usp=drive_link' 
    },
    { 
      name: 'Cloud Computing & CRM - Salesforce Trailhead', 
      type: 'profile', 
      url: 'https://www.salesforce.com/trailblazer/bwj9k9a6tkqltkko1y' 
    },
    { 
      name: 'Introduction to Cyber Security - Infosys Springboard', 
      type: 'certificate', 
      url: 'https://drive.google.com/file/d/1Q3XDzxB7dBPtH4UHYk63fHnY9YaqsAFj/view?usp=drive_link' 
    },
    { 
      name: 'Net-Zero Energy & Water Buildings – Solar Decathlon India', 
      type: 'certificate', 
      url: 'https://drive.google.com/file/d/1V_LnYiujeM57KW_6JOwTFBL42Aayt1Xl/view?usp=drive_link' 
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Aditya Ram</h1>
            <div className="hidden md:flex space-x-6">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Dock - Conditional Rendering */}
      {showDock && (
        <div className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-black/40 backdrop-blur-lg rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/20 animate-fade-in">
            <div className="flex space-x-2 md:space-x-4">
              {[
                { icon: Home, label: 'About', id: 'about' },
                { icon: Briefcase, label: 'Experience', id: 'experience' },
                { icon: Code, label: 'Projects', id: 'projects' },
                { icon: Award, label: 'Skills', id: 'skills' },
                { icon: GalleryIcon, label: 'Gallery', id: 'gallery' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="p-1 md:p-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full"
                  title={item.label}
                >
                  <item.icon size={16} className="md:size-[20px]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button - Conditional Rendering */}
      {showScrollToTopButton && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
          <button
            onClick={scrollToTop}
            className="bg-black/40 backdrop-blur-lg rounded-full p-2 md:p-3 border border-white/20 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10"
            title="Back to Top"
          >
            <ArrowUp size={16} className="md:size-[20px]" />
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className={`pt-32 pb-20 px-4 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto text-center">
          <div className="w-32 h-32 rounded-full mx-auto mb-8 overflow-hidden border-4 border-purple-500 animate-scale-in">
            <img 
              src="/lovable-uploads/d9d9de10-a47e-41f0-a6e3-9912965d62d6.png" 
              alt="Aditya Ram" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Aditya Ram
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
            Full-Stack Developer & Video Editor with a passion for creating scalable web applications and high-impact digital content
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in delay-300">
            <a href="mailto:itzz.aadhii@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
              <Mail size={20} className="mr-2" />
              itzz.aadhii@gmail.com
            </a>
            <a href="tel:+918667301799" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
              <Phone size={20} className="mr-2" />
              +91 8667301799
            </a>
            <a href="https://linkedin.com/in/aditya-ram-vaitheeswaran" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-105">
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </a>
          </div>
          <div className="flex justify-center space-x-4 animate-fade-in delay-400">
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              onClick={handleDownloadResume}
              className="border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              <Download size={20} className="mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in">
              <CardContent className="p-8 text-center">
                <p className="text-lg leading-relaxed">
                  A passionate Full-Stack Developer with a creative edge as a Video Editor. Experienced in building scalable web applications using React.js, Node.js, and Python, while also delivering high-impact digital content through Premiere Pro and After Effects. Strong engineering foundation in Electronics and Instrumentation with exposure to SCADA, PLC, and cloud platforms including Salesforce Trailhead CRM cloud modules. A dynamic multitasker with a proven record in event management, content creation, and entrepreneurship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">Work Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "Video Editor & Content Creator",
                company: "Studio NSR",
                period: "Jan 2025 – Present",
                icon: <Video size={24} />,
                description: [
                  "Specialize in creating high-quality Instagram reels and brand promos",
                  "Use LUTs, transitions, and effects to deliver cinematic content tailored to brand identity",
                  "Collaborate with clients to develop video strategies that maximize engagement"
                ],
                action: { type: 'instagram', text: 'Explore Now', url: 'https://www.instagram.com/studio.nsr_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
              },
              {
                title: "Entrepreneurship Intern",
                company: "Anna University, Chennai",
                period: "Dec 2024 – Jan 2025",
                icon: <Briefcase size={24} />,
                description: [
                  "Learned startup frameworks, market validation, and pitch creation",
                  "Participated in innovation bootcamps and collaborated with peers to develop MVPs"
                ],
                action: { type: 'pdf', text: 'View Certificate', file: 'entrepreneurship', url: 'https://drive.google.com/file/d/1A4L5hZHtPOMm3KbU3vC1iD2SVVCl8kJG/view?usp=drive_link' }
              },
              {
                title: "Instrumentation Intern",
                company: "Ramco Cements, Alathiyur",
                period: "June 2024 – July 2024",
                icon: <Code size={24} />,
                description: [
                  "Worked with SCADA systems and PLCs for real-time process control",
                  "Assisted in instrumentation diagnostics and industrial automation setups"
                ],
                action: { type: 'pdf', text: 'View Report', file: 'instrumentation', url: 'https://drive.google.com/file/d/1obuLl5KuhIqvdlP3v6ACmTxikYEZ7uqt/view?usp=drive_link' }
              },
              {
                title: "Social Media Intern",
                company: "Terv Pro, Chennai",
                period: "Feb 2024 – May 2024",
                icon: <Video size={24} />,
                description: [
                  "Edited and optimized promotional videos for web and social media",
                  "Supported website design and content integration efforts"
                ],
                action: { type: 'instagram', text: 'Explore Now', url: 'https://www.instagram.com/terv.pro?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' }
              }
            ].map((job, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="flex items-center space-x-3 justify-center">
                    <div className="p-2 bg-purple-600 rounded-lg animate-pulse">
                      {job.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-gray-300">{job.company} • {job.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <ul className="space-y-2 mb-4 list-inside text-left inline-block">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {job.action && (
                    <div className="mt-4 flex justify-center">
                      {job.action.type === 'gallery' && (
                        <Button
                          onClick={() => scrollToSection('gallery')}
                          variant="outline"
                          size="sm"
                          className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          {job.action.text}
                        </Button>
                      )}
                      {(job.action.type === 'pdf' || job.action.type === 'instagram') && job.action.url && (
                        <Button
                          onClick={() => {
                            if (job.action.type === 'pdf') {
                              handleViewReport(job.action.url);
                            } else if (job.action.type === 'instagram') {
                              window.open(job.action.url, '_blank');
                            }
                          }}
                          variant="outline"
                          size="sm"
                          className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          {job.action.type === 'pdf' ? <FileText size={16} className="mr-2" /> : <Instagram size={16} className="mr-2" />}
                          {job.action.text}
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">Education</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 justify-center">
                  <div className="p-2 bg-purple-600 rounded-lg animate-pulse">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">B.E. Electronics and Instrumentation Engineering</CardTitle>
                    <CardDescription className="text-gray-300">St. Joseph's College of Engineering, Chennai</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <p><strong>Duration:</strong> Nov 2022 – May 2026</p>
                  <p><strong>CGPA:</strong> 8.03</p>
                  <p><strong>Activities:</strong> Active in technical clubs (E-Cell, Social Media Team), Participated in workshops, hackathons, and leadership programs</p>
                </div>
                {/* Semester Certificates Section */}
                <div className="mt-6 flex flex-col items-center">
                  <h3 className="text-xl font-semibold mb-4 text-purple-300">Semester Certificates</h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {semesterCertificates.map((cert, index) => (
                      <Button
                        key={index}
                        onClick={() => window.open(cert.url, '_blank')}
                        variant="outline"
                        size="sm"
                        className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        <FileText size={16} className="mr-2" />
                        {cert.text}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Automated Certificate Generator",
                tech: "React.js + Python",
                description: "Enabled real-time certificate creation from form inputs or spreadsheets. Integrated dynamic PDF generation with export and download features.",
                showButton: true,
                projectId: "certificate-generator"
              },
              {
                title: "Autonomous Mail Sender",
                tech: "Nodemailer + Python",
                description: "Developed secure email automation with template injection. Implemented status logs and error tracking.",
                showButton: true,
                projectId: "mail-sender"
              },
              {
                title: "ACM Student Chapter Website",
                tech: "React.js",
                description: "Co-developed a scalable and responsive web portal. Focused on modular UI and user engagement features.",
                showButton: true,
                projectId: "acm"
              },
              {
                title: "Photo Enhace using AI",
                tech: "React + Vite",
                description: "Developed a website that automatically detect the colour palettes of the photo and Enhance the photo using AI trained with Basic LLMs.",
                showButton: true,
                projectId: "photo-enhancer"
              }
            ].map((project, index) => (
              <Card 
                key={index} 
                className={`bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 animate-scale-in text-center ${
                  project.title === 'Photo Enhace using AI' ? 'md:col-span-2 lg:col-span-3 mx-auto w-full md:max-w-md' : '' // Center on medium+ screens
                }`}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-purple-300">{project.tech}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {project.showButton ? (
                    <div className="flex justify-center">
                      <Button 
                        onClick={() => handleViewProject(project.projectId)}
                        variant="outline" 
                        size="sm" 
                        className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Project
                      </Button>
                    </div>
                  ) : (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-600/30 text-yellow-300 border border-yellow-600/50">
                      {project.status}
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">Technical Skills</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                category: "Frontend",
                skills: ["HTML", "CSS", "React.js"]
              },
              {
                category: "Backend",
                skills: ["Node.js", "Python"]
              },
              {
                category: "Tools & Platforms",
                skills: ["Git", "SCADA", "PLC", "Cloud (basic)", "Premiere Pro", "After Effects"]
              },
              {
                category: "Soft Skills",
                skills: ["Team Leadership", "Event Management (25+ events)", "Public Speaking"]
              }
            ].map((skillGroup, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-purple-300">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillGroup.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm hover:bg-purple-600/50 transition-all duration-300 hover:scale-105">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">Achievements</h2>
          <div className="max-w-xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-purple-300 flex items-center justify-center">
                  <Award size={24} className="mr-2 animate-pulse" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 inline-block text-left">
                  <li>🏆 Finalist, National Entrepreneurship Challenge – Ranked 7th nationally (IIT Bombay)</li>
                  <li>👥 Social Media Team Lead – Hosted Orientation Programs (2023, 2024)</li>
                  <li>🚀 Core member of Entrepreneurship Development Cell</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">Certifications</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className={`bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300 text-center ${
                  cert.name === 'Net-Zero Energy & Water Buildings – Solar Decathlon India' ? 'md:col-span-2 mx-auto w-full md:max-w-md' : '' // Center on medium+ screens
                }`}
              >
                <CardHeader>
                  <CardTitle className={`text-xl text-purple-300 ${
                    cert.name === 'Net-Zero Energy & Water Buildings – Solar Decathlon India' ? 'text-center' : ''
                  }`}>
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className={`
                  flex justify-center
                  ${cert.name === 'Net-Zero Energy & Water Buildings – Solar Decathlon India' ? 'flex justify-center' : ''}
                `}>
                  <Button
                    onClick={() => window.open(cert.url, '_blank')}
                    variant="outline"
                    size="sm"
                    className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    {cert.type === 'certificate' ? <FileText size={16} className="mr-2" /> : <ExternalLink size={16} className="mr-2" />}
                    {cert.type === 'certificate' ? 'View Certificate' : 'View Profile'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">Work Gallery</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Video Production",
                  description: "Served as the Social Media Head at St. Joseph's College of Engineering, leading digital campaigns and boosting student engagement. Spearheaded content creation across platforms, turning events into impactful online experiences.",
                  image: "/lovable-uploads/82d0bc2b-54f8-4ffe-aa56-3553c6507fde.png",
                  isVideoProduction: true
                },
                {
                  title: "Studio.NSR-Founder",
                  description: "Founder of Studio.NSR, a creative brand specializing in iPhone-shot reels and visual storytelling. Former Social Media Head at St. Joseph's College of Engineering, where I led high-impact digital engagement initiatives.",
                  image: "/lovable-uploads/e6f98ae5-975a-4c15-9c84-2f28474b8ac4.png"
                },
                {
                  title: "Orientation - 2023 and 2024",
                  description: "Over the past two years, I led the videography for my college’s Orientation Program, capturing the spirit of fresh beginnings. In 2023, I focused on setting the tone with cinematic edits. By 2024, I scaled up with multi-cam angles, gimbal shots, and vibrant color grading. Every reel, crafted under Studio.NSR, was designed to make students feel welcomed and remembered through visually engaging.",
                  image: "/lovable-uploads/IMG_5959.jpg"
                },
                {
                  title: "Internship-AUCED",
                  description: "Gained insights into venture creation, leadership, and sustainable business planning through hands-on sessions and mentorship.",
                  image: "/lovable-uploads/1590aa9d-c189-45d7-b83e-94a422558d71.png"
                },
                {
                  title: "Internship-Ramco",
                  description: "Successfully completed an internship at Ramco, gaining hands-on experience in core Electronics and Instrumentation systems. Worked on real-time lab experiments, microcontroller programming, and academic research applications under expert guidance.",
                  image: "/lovable-uploads/361690a5-1d7c-4563-b6e4-18da4fc86f67.png"
                },
                {
                  title: "NEC-Finalist",
                  description: "Finalist in the National Entrepreneurship Challenge, ranked 7th in a team competition conducted by IIT Bombay",
                  image: "/lovable-uploads/18f92c83-5286-49e4-b80e-9d7f33567a8d.png"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div 
                      className="aspect-video bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4 overflow-hidden cursor-pointer"
                      onClick={() => handleImageClick(item.image)}
                    >
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className={`w-full h-full ${item.isVideoProduction ? 'object-cover object-top' : 'object-cover'}`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12 animate-fade-in">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 animate-fade-in delay-200">
              I'm always open to discussing new opportunities, creative projects, or innovative ideas.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fade-in delay-300">
              <a href="mailto:itzz.aadhii@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-lg hover:scale-105">
                <Mail size={24} className="mr-3" />
                itzz.aadhii@gmail.com
              </a>
              <a href="tel:+918667301799" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-lg hover:scale-105">
                <Phone size={24} className="mr-3" />
                +91 8667301799
              </a>
              <a href="https://linkedin.com/in/aditya-ram-vaitheeswaran" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-lg hover:scale-105">
                <Linkedin size={24} className="mr-3" />
                LinkedIn
              </a>
              <a href="https://instagram.com/aditya.nsr" className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-lg hover:scale-105">
                <Instagram size={24} className="mr-3" />
                @aditya.nsr
              </a>
            </div>
            <Button 
              onClick={handleLetConnect}
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-gray-400">
        <p>© 2025 Aditya Ram. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;