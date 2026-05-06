import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const myProjects = [
    {
      id: 1,
      title: "64 Aufgaben in C#",
      desc: "In diesem Projekt habe ich die Basics in C# gelernt. Ich habe Dinge wie: Arrays, Enums, Variablen, jegliche Art von Schleifen und mehr angewendet.",
      color: "rgba(168, 85, 247, 0.6)", 
      tags: ["C#", "Basics", "Console"]
    },
    {
      id: 2,
      title: "Blackjack WPF", 
      desc: "In diesem Projekt habe ich angefangen, WPF und OOP zu nutzen und verstehen.",
      color: "rgba(56, 189, 248, 0.6)", 
      tags: ["C#", "WPF", "OOP"]
    },
    {
      id: 3,
      title: "Portfolio 2026 (V2)", 
      desc: "Mein persönliches Webportfolio. Gebaut mit React und Advanced CSS. Features: Liquid-Glass Effekte und animierte Übergänge.",
      color: "rgba(236, 72, 153, 0.6)", 
      tags: ["React.js", "HTML", "CSS3"]
    }
  ];

  // --- Animation Configs ---
  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { 
      opacity: 1, y: 0, scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  const SkillBar = ({ skill, percentage }) => (
    <div className="skill-wrapper">
      <div className="skill-header">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="progress-track">
        <motion.div 
          className="progress-fill"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );

  return (
    <div className="app-wrapper">
      <div className="plasma-bg" />
      <div className="noise-overlay" />

      <AnimatePresence mode="wait">
        <motion.div 
          key={activeTab}
          className="bento-grid"
          variants={containerVars}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
        >

          {activeTab === 'Home' && (
            <>
              <motion.div className="glass-card span-2 row-2" variants={itemVars}>
                <span className="label">Portfolio 2026</span>
                <motion.h1 
                  initial={{ opacity:0, x:-20 }} 
                  animate={{ opacity:1, x:0 }} 
                  transition={{ delay: 0.3 }}
                >
                  Code.<br/>Passion.<br/>Future.
                </motion.h1>
                <p style={{ marginTop: '20px', maxWidth: '400px' }}>
                  Hallo, ich bin Gabriel. Seit 06.10.2025 Lehrling beim It-L@b Villach als Applikationsentwickler - Coding. 
                  Ich suche nach Herausforderungen, um mein Wissen in echten Projekten anzuwenden.
                </p>
                <div className="hero-buttons" style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                   <div className="glass-btn" onClick={() => setActiveTab('Projects')}>Meine Projekte</div>
                   <div className="glass-btn" onClick={() => setActiveTab('Contact')}>Kontakt</div>
                </div>
              </motion.div>

              <motion.div className="glass-card" variants={itemVars} style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <div style={{width:'15px', height:'15px', background:'#4ade80', borderRadius:'50%', boxShadow:'0 0 15px #4ade80', marginBottom:'15px'}}></div>
                <h3>Offen für Firmen</h3>
                <p style={{textAlign:'center', fontSize:'0.9rem'}}>Suche Praktika ab sofort.</p>
              </motion.div>

              <motion.div className="glass-card row-2" variants={itemVars}>
                <span className="label">Skillset</span>
                <SkillBar skill="JavaScript" percentage={30} />
                <SkillBar skill="React" percentage={45} />
                <SkillBar skill="HTML/CSS" percentage={85} />
                <SkillBar skill="C#" percentage={70} />
                <p style={{marginTop:'20px', fontSize:'0.85rem', opacity:0.7}}>
                  *Lerne täglich dazu und experimentiere mit neuen Technologien.
                </p>
              </motion.div>

              <motion.div className="glass-card" variants={itemVars}>
                <span className="label">Fokus</span>
                <h3>Frontend & C#</h3>
                <p>Ich liebe es, komplexe Logik in C# zu programmieren aber auch, schöne Interfaces für eine gute UX zu designen.</p>
              </motion.div>
            </>
          )}


          {activeTab === 'Projects' && (
            <>
              <motion.div className="glass-card span-3" variants={itemVars}>
                <h1>Projekte</h1>
                <p>Eine Auswahl meiner vollendeten Arbeiten.</p>
              </motion.div>

 
              {myProjects.map((project) => (
                <motion.div key={project.id} className="glass-card" variants={itemVars} whileHover={{ y: -5 }}>
                  <div style={{
                    width:'100%', 
                    height:'140px', 
                    background:`linear-gradient(135deg, rgba(255,255,255,0.1), ${project.color})`, 
                    borderRadius:'16px', 
                    marginBottom:'20px'
                  }} />
                  
                  <span className="label">Projekt 0{project.id}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  
                  <div style={{display:'flex', gap:'8px', marginTop:'15px', flexWrap:'wrap'}}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{fontSize:'0.75rem', padding:'4px 8px', background:'rgba(255,255,255,0.1)', borderRadius:'10px'}}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </>
          )}

          {activeTab === 'Contact' && (
            <>
               <motion.div className="glass-card span-2 row-2" variants={itemVars} style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                 <span className="label">Get in Touch</span>
                 <h1>Kontakt</h1>
                 <p style={{marginBottom:'40px'}}>Interesse an meiner Arbeit oder ein Praktikumsplatz frei?</p>
                 
                 <div className="hero-buttons" style={{display:'grid', gap:'15px'}}>
                                   <a className="glass-btn" style={{justifyContent:'center'}}>
                     💼 Gabriel Knauder
                   </a>
                
                <a href="mailto:gabriel.knauder@itlabs.at" className="glass-btn" style={{justifyContent:'center'}}>
                  ✉️ Email: gabriel.knauder@itlabs.at
                </a>

                 </div>
               </motion.div>

               <motion.div className="glass-card" variants={itemVars}>
                 <span className="label">Location</span>
                 <h3>It-L@b Villach</h3>
                 <p>9524 St. Magdalen/Villach</p>
               </motion.div>
               
               <motion.div className="glass-card" variants={itemVars}>
                 <span className="label">Github</span>
                 <h3>Codebase</h3>
                 <p>Sieh dir meinen Code an.</p>
                 <a href="#" style={{color:'var(--accent-secondary)', textDecoration:'none', fontWeight:'bold', display:'block', marginTop:'10px'}}>github.com/ -></a>
               </motion.div>
            </>
          )}

        </motion.div>
      </AnimatePresence>

      <div className="dock-container">
        <div className="dock">
          {['Home', 'Projects', 'Contact'].map((tab) => (
            <div 
              key={tab} 
              className={`dock-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'Home' && '🏠'}
              {tab === 'Projects' && '⚡'}
              {tab === 'Contact' && '📬'}
              {activeTab === tab && <motion.div layoutId="dot" className="dock-dot" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;