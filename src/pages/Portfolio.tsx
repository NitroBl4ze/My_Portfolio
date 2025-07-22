import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Download, ExternalLink, Calendar, Award, Code, Video, Briefcase, GraduationCap, ArrowUp, FileText, Instagram, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
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

  const handleViewReport = (reportType: string) => {
    // Handle PDF report viewing based on report type
    if (reportType === 'instrumentation') {
      window.open('https://drive.google.com/file/d/1obuLl5KuhIqvdlP3v6ACmTxikYEZ7uqt/view?usp=drive_link', '_blank');
    } else {
      console.log(`Opening ${reportType} report`);
      // You can add other report links here when available
      window.open('#', '_blank');
    }
  };

  const handleViewProject = (projectName: string) => {
    // Handle project viewing - redirect to GitHub repository
    if (projectName === 'certificate-generator' || projectName === 'mail-sender') {
      window.open('https://github.com/NitroBl4ze/Automated-Certificate-Generator', '_blank');
    } else {
      console.log(`Opening ${projectName} project`);
      window.open('#', '_blank');
    }
  };

  const handleLetConnect = () => {
    // Open email client
    window.location.href = 'mailto:itzz.aadhii@gmail.com?subject=Let\'s Connect&body=Hi Aditya, I would like to connect with you.';
  };

  const handleImageClick = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

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

      {/* Floating Dock */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/40 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 animate-fade-in">
          <div className="flex space-x-4">
            {[
              { icon: Home, label: 'About', id: 'about' },
              { icon: Briefcase, label: 'Experience', id: 'experience' },
              { icon: Code, label: 'Projects', id: 'projects' },
              { icon: Award, label: 'Skills', id: 'skills' },
              { icon: Mail, label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="p-2 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full"
                title={item.label}
              >
                <item.icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={scrollToTop}
          className="bg-black/40 backdrop-blur-lg rounded-full p-3 border border-white/20 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10"
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      </div>

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
              <CardContent className="p-8">
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
                action: { type: 'gallery', text: 'View Gallery' }
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
                action: { type: 'pdf', text: 'View Report', file: 'entrepreneurship' }
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
                action: { type: 'pdf', text: 'View Report', file: 'instrumentation' }
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
                action: { type: 'instagram', text: 'Explore Now', url: 'https://instagram.com/tervpro' }
              }
            ].map((job, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-600 rounded-lg animate-pulse">
                      {job.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="text-gray-300">{job.company} • {job.period}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {job.action && (
                    <div className="mt-4">
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
                      {job.action.type === 'pdf' && (
                        <Button
                          onClick={() => handleViewReport(job.action.file)}
                          variant="outline"
                          size="sm"
                          className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          <FileText size={16} className="mr-2" />
                          {job.action.text}
                        </Button>
                      )}
                      {job.action.type === 'instagram' && (
                        <Button
                          onClick={() => window.open(job.action.url, '_blank')}
                          variant="outline"
                          size="sm"
                          className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          <Instagram size={16} className="mr-2" />
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
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-600 rounded-lg animate-pulse">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">B.E. Electronics and Instrumentation Engineering</CardTitle>
                    <CardDescription className="text-gray-300">St. Joseph's College of Engineering, Chennai</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Duration:</strong> Nov 2022 – May 2026</p>
                  <p><strong>CGPA:</strong> 8.0</p>
                  <p><strong>Activities:</strong> Active in technical clubs (E-Cell, Social Media Team), Participated in workshops, hackathons, and leadership programs</p>
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
                showButton: false,
                status: "In Progress"
              }
            ].map((project, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-purple-300">{project.tech}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {project.showButton ? (
                    <Button 
                      onClick={() => handleViewProject(project.projectId)}
                      variant="outline" 
                      size="sm" 
                      className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Project
                    </Button>
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
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300">{skillGroup.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
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

      {/* Achievements & Certifications */}
      <section className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 animate-fade-in">Achievements & Certifications</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300 flex items-center">
                  <Award size={24} className="mr-2 animate-pulse" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>🏆 Finalist, National Entrepreneurship Challenge – Ranked 7th nationally (IIT Bombay)</li>
                  <li>👥 Social Media Team Lead – Hosted Orientation Programs (2023, 2024)</li>
                  <li>🚀 Core member of Entrepreneurship Development Cell</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-purple-300 flex items-center">
                  <Award size={24} className="mr-2 animate-pulse" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Foundations of Cloud IoT and Edge ML – NPTEL</li>
                  <li>• Essentials of Cloud Computing – Infosys Springboard</li>
                  <li>• Cloud Computing – Self-Paced Learning</li>
                  <li>• Salesforce Trailhead – Cloud Computing & CRM</li>
                  <li>• Net-Zero Energy & Water Buildings – Solar Decathlon India</li>
                </ul>
              </CardContent>
            </Card>
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
                <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 text-white animate-scale-in hover:scale-105 transition-all duration-300">
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
