/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Search, 
  BarChart3, 
  Globe, 
  Ship, 
  Truck, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin,
  Bot,
  Zap,
  Layout,
  Target,
  FileText,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navLinks = [
    { name: "Who We Are", href: "https://www.botdigitalsolutions.com/", isExternal: true },
    { 
      name: "What We Do", 
      href: "#", 
      hasDropdown: true,
      megaMenu: (
        <div className="grid grid-cols-3 gap-12 p-12">
          <div>
            <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Digital Growth</h5>
            <ul className="space-y-4">
              {["Marketing Strategies", "Branding", "SEO", "Social Media Management", "Lead Generation", "Predictive Market Analysis"].map(item => (
                <li key={item} className="text-[15px] text-gray-700 hover:text-brand-orange cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Technology & Engineering</h5>
            <ul className="space-y-4">
              {["Web Development", "App Development", "Tech Development"].map(item => (
                <li key={item} className="text-[15px] text-gray-700 hover:text-brand-orange cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Platforms & Products</h5>
            <ul className="space-y-4">
              {["HRMS", "People Management System", "CRM", "ERP", "AMC Management"].map(item => (
                <li key={item} className="text-[15px] text-gray-700 hover:text-brand-orange cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    { 
      name: "Industries", 
      href: "#", 
      hasDropdown: true,
      megaMenu: (
        <div className="grid grid-cols-12 gap-12 p-12">
          <div className="col-span-4 border-r border-gray-100 pr-12">
            <h5 className="text-[11px] font-bold text-brand-purple uppercase tracking-widest mb-6">Industry Perspectives</h5>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Deep domain expertise combined with advanced technology to help you build a future-ready enterprise.
            </p>
          </div>
          <div className="col-span-8">
            <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Sectors We Serve</h5>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              {["B2B Businesses", "B2C Businesses", "Logistics Businesses", "Saas Company", "Start Up", "B2B Exporter"].map(item => (
                <div key={item} className="text-[15px] text-gray-700 hover:text-brand-orange cursor-pointer transition-colors font-medium">{item}</div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    { 
      name: "Insights", 
      href: "#", 
      hasDropdown: true,
      megaMenu: (
        <div className="grid grid-cols-12 gap-12 p-12">
          <div className="col-span-4 border-r border-gray-100 pr-12">
            <h5 className="text-[11px] font-bold text-brand-purple uppercase tracking-widest mb-6">TheBot Perspectives</h5>
            <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
              Deep dives into digital trends, success stories, and our latest research on marketing & tech.
            </p>
            <a href="#" className="text-brand-orange font-bold text-sm hover:underline">Read our latest Blogs →</a>
          </div>
          <div className="col-span-8">
            <h5 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">Explore</h5>
            <ul className="space-y-4">
              {["Case Studies", "Blogs"].map(item => (
                <li key={item} className="text-[15px] text-gray-700 hover:text-brand-orange cursor-pointer transition-colors font-medium">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )
    },
    { name: "Pricing", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-2xl font-bold tracking-tighter">thebot</span>
            <div className="relative -top-0.5">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">t.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative h-20 flex items-center"
                onMouseEnter={() => link.megaMenu && setActiveMenu(link.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a 
                  href={link.href} 
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                </a>

                {/* Mega Menu */}
                <AnimatePresence>
                  {activeMenu === link.name && link.megaMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-b-2xl shadow-2xl overflow-hidden border-t-4 border-brand-purple"
                    >
                      {link.megaMenu}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button className="ml-4 px-6 py-2.5 rounded-md border border-transparent bg-gradient-to-r from-brand-orange to-brand-purple p-[1px] hover:scale-105 transition-transform">
              
                <span className="text-sm font-semibold">Free Audit Tool </span>
              
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400 hover:text-white">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a 
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="block text-lg font-medium text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                </div>
              ))}
  
       
             <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
                href="https://freeaudit.thebot.agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-4 px-6 py-2.5 rounded-full border border-purple-500/50 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300 text-sm"
              >
                Free Audit Tool
              </a>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    {/* Background Glows */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full -mr-64 -mt-64" />
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[120px] rounded-full -ml-64 -mb-64" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-6 mx-auto">
            <Zap className="w-3 h-3 text-brand-orange" />
            <span>Powering the future of logistics marketing</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            SEO for <span className="gradient-text">Logistics</span> Companies
          </h1>
          <p className="text-xl text-gray-400 mb-8 mx-auto">
            Generate consistent freight & logistics enquiries online. We help importers, exporters, and supply chain managers find you first.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-orange to-brand-purple font-bold hover:scale-105 transition-transform shadow-lg shadow-brand-purple/20">
              Book a Demo
            </button>
            <button className="px-8 py-4 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-colors flex items-center gap-2">
              Free SEO Audit <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-20 bg-black/30">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Most Logistics Websites <span className="text-brand-orange">Fail</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Providing information isn't enough. You need to attract and convert high-intent shipping enquiries.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Zap className="text-red-400" />, title: "Slow Loading Speed", desc: "Potential clients bounce before your page even loads." },
          { icon: <Layout className="text-blue-400" />, title: "Poor Technical Structure", desc: "Search engines can't crawl or index your services effectively." },
          { icon: <Target className="text-purple-400" />, title: "No Keyword Strategy", desc: "Missing out on the exact terms importers and exporters use." },
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-2xl glass-morphism hover:border-brand-orange/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StrategySection = () => (
  <section id="strategy" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-8">Our SEO Strategy for <br/><span className="gradient-text">Logistics Leaders</span></h2>
          <div className="space-y-8">
            {[
              { 
                title: "1. Technical SEO Optimization", 
                desc: "We fix broken links, improve page speed, and optimize mobile performance to ensure search engines love your site.",
                icon: <BarChart3 className="text-brand-orange" />
              },
              { 
                title: "2. Logistics Keyword Strategy", 
                desc: "Targeting high-intent terms like 'international freight forwarding' and 'supply chain logistics providers'.",
                icon: <Search className="text-brand-purple" />
              },
              { 
                title: "3. Content Strategy", 
                desc: "Publishing industry-focused guides and insights that build authority and attract companies researching solutions.",
                icon: <FileText className="text-emerald-400" />
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="p-8 rounded-3xl bg-brand-card border border-white/10 relative z-10">
            <div className="flex items-center justify-between mb-8">
              <h4 className="font-bold">Search Visibility Growth</h4>
              <span className="text-xs text-brand-orange font-mono">+142% Organic Traffic</span>
            </div>
            <div className="space-y-4">
              {[80, 45, 95, 60, 100].map((height, i) => (
                <div key={i} className="h-4 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-gradient-to-r from-brand-orange to-brand-purple"
                  />
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Lead Generation</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Focused on Growth</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-purple/20 blur-3xl rounded-full" />
        </div>
      </div>
    </div>
  </section>
);

const CaseStudy = () => (
  <section id="case-study" className="py-20 bg-brand-card/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-bold text-sm tracking-widest uppercase">Case Study</span>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4">Transforming a Chennai-based B2B Logistics Company</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-gray-300 italic mb-4">"Our website was not generating enquiries. After implementing the strategy, we received our first international enquiry through Google which converted into a business contract within six months."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold">B</div>
                <div>
                  <p className="font-bold text-sm">B2B Logistics Partner</p>
                  <p className="text-xs text-gray-500">Chennai, India</p>
                </div>
              </div>
            
            <ul className="space-y-3">
              {['Search rankings improved significantly', 'Organic traffic increased by 300%', 'Consistent international enquiries'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-20 h-20 text-brand-orange mx-auto mb-4" />
              <p className="text-xl font-bold">Data-Driven Success</p>
              <p className="text-sm text-gray-500">Verified Results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-brand-orange transition-colors"
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => (
  <section id="faq" className="py-20">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked <span className="text-brand-purple">Questions</span></h2>
      <div className="space-y-2">
        <FAQItem 
          question="How can logistics companies generate leads online?" 
          answer="Logistics companies can generate leads by improving their website visibility through SEO and ranking for keywords used by importers and exporters searching for logistics services."
        />
        <FAQItem 
          question="How long does SEO take to generate logistics enquiries?" 
          answer="SEO results typically appear gradually: 3–4 months for improved rankings, 4–6 months for increased traffic, and 6–12 months for consistent inbound enquiries."
        />
        <FAQItem 
          question="Can SEO help logistics companies attract international clients?" 
          answer="Yes. If your website ranks for relevant logistics keywords, it can attract importers and exporters from multiple countries who are actively searching for reliable partners."
        />
        <FAQItem 
          question="What is the first step to start SEO?" 
          answer="The first step is identifying technical issues affecting your website through a technical SEO audit. You can start with our free audit tool."
        />
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-[40px] overflow-hidden bg-gradient-to-br from-brand-orange/20 to-brand-purple/20 border border-white/10 p-12 lg:p-20 text-center">
        <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm" />
        <div className="relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">Turn Your Website into a <br/><span className="gradient-text">Lead Generation Engine</span></h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Stop relying on referrals alone. Build a consistent pipeline of shipping and logistics enquiries 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://freeaudit.thebot.agency/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-full bg-white text-brand-dark font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              Run Your Free Website SEO Audit <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-orange to-brand-purple rounded-lg flex items-center justify-center">
              <Bot className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tighter">theb<span className="text-brand-orange">o</span>t.</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs mb-6">
            Specialized SEO and digital marketing agency for the logistics and supply chain industry.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange/20 transition-colors"><Phone className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-purple/20 transition-colors"><Mail className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange/20 transition-colors"><MessageSquare className="w-4 h-4" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Technical SEO</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Keyword Strategy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Content Marketing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lead Generation</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Industries</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">Freight Forwarders</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Lines</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Supply Chain</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Export Logistics</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-xs text-gray-600">© 2024 The Bot Agency. All rights reserved.</p>
        <div className="flex gap-8 text-xs text-gray-600">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange/30">
      <Navbar />
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold gradient-text">500+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Leads Generated</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">98%</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Client Retention</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Countries Reached</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">24/7</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Active Monitoring</p>
              </div>
            </div>
          </div>
        </section>

        <ProblemSection />
        
        {/* Who is it for */}
        <section className="py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6">Who This SEO Service <br/><span className="text-brand-purple">Is For</span></h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: <Truck className="w-5 h-5" />, label: "Logistics Companies" },
                    { icon: <Ship className="w-5 h-5" />, label: "Shipping Lines" },
                    { icon: <Globe className="w-5 h-5" />, label: "Freight Forwarders" },
                    { icon: <Zap className="w-5 h-5" />, label: "Supply Chain Providers" },
                    { icon: <BarChart3 className="w-5 h-5" />, label: "Export Logistics" },
                    { icon: <Target className="w-5 h-5" />, label: "B2B Service Providers" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-brand-orange">{item.icon}</div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="aspect-square rounded-full border border-brand-purple/20 absolute inset-0 animate-pulse" />
                <div className="aspect-square rounded-full border border-brand-orange/20 absolute inset-10 animate-pulse delay-75" />
                <div className="relative z-10 flex items-center justify-center h-full min-h-[400px]">
                  <div className="text-center">
                    <Bot className="w-24 h-24 text-white mx-auto mb-4 animate-bounce" />
                    <p className="text-2xl font-bold gradient-text">Targeted Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StrategySection />
        <CaseStudy />
        <FAQSection />
        <CTASection />

        {/* Contact/Offices Section */}
        <section className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-16 text-center">Our <span className="text-brand-orange">Offices</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl glass-morphism border-l-4 border-l-brand-orange">
                <h3 className="text-2xl font-bold mb-6">Mumbai Head Office</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <p>1007/1008 A, Mahavir Platinum, Indian Oil Nagar, Ghatkopar East, Mumbai - 400043</p>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <p>sales@thebot.agency</p>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <p>+91 98929 69508</p>
                  </div>
                </div>
                <button className="mt-8 w-full py-4 rounded-xl bg-brand-orange/10 text-brand-orange font-bold hover:bg-brand-orange hover:text-white transition-all">
                  Click Here To Whatsapp
                </button>
              </div>

              <div className="p-8 rounded-3xl glass-morphism border-l-4 border-l-brand-purple">
                <h3 className="text-2xl font-bold mb-6">Chennai Office</h3>
                <div className="space-y-4 text-gray-400">
                  <div className="flex gap-4">
                    <MapPin className="w-5 h-5 text-brand-purple flex-shrink-0" />
                    <p>W126, 3rd Floor, Near Nalla Appakkadai, 3rd Avenue, Anna Nagar, Chennai - 600040</p>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="w-5 h-5 text-brand-purple flex-shrink-0" />
                    <p>sales@thebot.agency</p>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="w-5 h-5 text-brand-purple flex-shrink-0" />
                    <p>+91 98929 69648</p>
                  </div>
                </div>
                <button className="mt-8 w-full py-4 rounded-xl bg-brand-purple/10 text-brand-purple font-bold hover:bg-brand-purple hover:text-white transition-all">
                  Click Here To Whatsapp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Floating Chat Widget Placeholder */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-orange to-brand-purple flex items-center justify-center shadow-lg shadow-brand-purple/40 hover:scale-110 transition-transform">
          <MessageSquare className="text-white w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
