import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4'

const SKILLS = [
  { name: 'HTML/CSS',    level: 85 },
  { name: 'C#',          level: 70 },
  { name: 'React',       level: 45 },
  { name: 'JavaScript',  level: 30 },
]

const PROJECTS = [
  {
    num: '01',
    title: '64 Aufgaben in C#',
    desc:  'In diesem Projekt habe ich die Basics in C# gelernt. Ich habe Dinge wie: Arrays, Enums, Variablen, jegliche Art von Schleifen und mehr angewendet.',
    tags:  ['C#', 'Basics', 'Console'],
    color: '#a855f7',
  },
  {
    num: '02',
    title: 'Blackjack WPF',
    desc:  'In diesem Projekt habe ich angefangen, WPF und OOP zu nutzen und verstehen.',
    tags:  ['C#', 'WPF', 'OOP'],
    color: '#38bdf8',
  },
  {
    num: '03',
    title: 'Portfolio 2026 (V2)',
    desc:  'Mein persönliches Webportfolio. Gebaut mit React und Advanced CSS. Features: Liquid-Glass Effekte und animierte Übergänge.',
    tags:  ['React.js', 'HTML', 'CSS3'],
    color: '#ec4899',
  },
]

const TABS = [
  { id: 'home',     label: 'Home'     },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact'  },
]

const page = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  exit:   { opacity: 0, transition: { duration: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

function SkillBar({ name, level }) {
  return (
    <div className="skill">
      <div className="skill-row">
        <span>{name}</span>
        <span className="muted">{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        />
      </div>
    </div>
  )
}

export default function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="root">

      {/* ── Video background ── */}
      <div className="scene">
        <video className="scene-video" src={VIDEO_URL} autoPlay muted loop playsInline />
        <div className="scene-overlay" />
        <div className="scene-grain" />
      </div>

      {/* ── Content ── */}
      <div className="wrap">
        <AnimatePresence mode="wait">

          {tab === 'home' && (
            <motion.div key="home" className="grid" variants={page} initial="hidden" animate="show" exit="exit">

              <motion.section variants={item} className="card hero col-full">
                <span className="eyebrow">Portfolio 2026</span>
                <h1>Code.<br />Passion.<br />Future.</h1>
                <div className="status-pill">
                  <span className="live-dot" />
                  <span>Offen für Firmen</span>
                  <span className="muted"> · Suche Praktika ab sofort.</span>
                </div>
              </motion.section>

              <motion.section variants={item} className="card">
                <span className="eyebrow">Über mich</span>
                <p className="body">
                  Hallo, ich bin <strong>Gabriel</strong>. Seit 06.10.2025 Lehrling beim It-L@b Villach
                  als Applikationsentwickler – Coding. Ich suche nach Herausforderungen, um mein Wissen
                  in echten Projekten anzuwenden.
                </p>
              </motion.section>

              <motion.section variants={item} className="card">
                <span className="eyebrow">Skills</span>
                <div className="skill-list">
                  {SKILLS.map(s => <SkillBar key={s.name} {...s} />)}
                </div>
                <p className="note">*Lerne täglich dazu und experimentiere mit neuen Technologien.</p>
              </motion.section>

              <motion.section variants={item} className="card card-focus">
                <span className="eyebrow">Fokus</span>
                <h2>Frontend<br />& C#</h2>
                <p className="body">
                  Ich liebe es, komplexe Logik in C# zu programmieren aber auch, schöne Interfaces
                  für eine gute UX zu designen.
                </p>
              </motion.section>

            </motion.div>
          )}

          {tab === 'projects' && (
            <motion.div key="projects" className="grid" variants={page} initial="hidden" animate="show" exit="exit">
              {PROJECTS.map(p => (
                <motion.section
                  key={p.num}
                  variants={item}
                  className="card card-project"
                  style={{ '--c': p.color }}
                >
                  <span className="proj-num">{p.num}</span>
                  <h3>{p.title}</h3>
                  <p className="body">{p.desc}</p>
                  <div className="tags">
                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </motion.section>
              ))}
            </motion.div>
          )}

          {tab === 'contact' && (
            <motion.div key="contact" className="grid" variants={page} initial="hidden" animate="show" exit="exit">

              <motion.section variants={item} className="card col-full">
                <span className="eyebrow">Get in Touch</span>
                <h2 className="contact-h">Kontakt</h2>
                <p className="body">Interesse an meiner Arbeit oder ein Praktikumsplatz frei?</p>
                <div className="contact-btns">
                  <a href="mailto:gabriel.knauder@itlabs.at" className="btn-fill">
                    ✉ gabriel.knauder@itlabs.at
                  </a>
                  <div className="btn-outline">💼 Gabriel Knauder</div>
                </div>
              </motion.section>

              <motion.section variants={item} className="card">
                <span className="eyebrow">Location</span>
                <strong className="card-title">It-L@b Villach</strong>
                <p className="muted sm">9524 St. Magdalen/Villach</p>
              </motion.section>

              <motion.section variants={item} className="card col-span-2">
                <span className="eyebrow">Github</span>
                <strong className="card-title">Codebase</strong>
                <p className="muted sm">Sieh dir meinen Code an.</p>
                <a href="https://github.com/" className="ghost-link">github.com →</a>
              </motion.section>

            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ── Dock ── */}
      <nav className="dock">
        <div className="dock-inner">
          {TABS.map(t => (
            <button
              key={t.id}
              className={`dock-item ${tab === t.id ? 'active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
              {tab === t.id && <motion.span className="dock-pill" layoutId="pill" />}
            </button>
          ))}
        </div>
      </nav>

    </div>
  )
}
