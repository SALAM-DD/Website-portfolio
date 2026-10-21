import React from 'react';
import { SKILLS, PROJECTS, STATS } from './data';
import './Website.css';

export default function App() {
  return (
    <div className="wrap">
      {/* Header Navigation */}
      <header className="header">
        <a className="logo" href="#top">
          AS<span>.</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="mailto:abdulsalamsulaiman700@gmail.com" className="btn">
            Let's talk
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero wrap">
          <div>
            <div className="eyebrow">Hello, I'm Abdulsalam Sulaiman</div>
            <h1>
              Digital products <br />
              with <span>purpose.</span>
            </h1>
            <p>
              I'm a graphics designer and developer helping ambitious teams turn
              complex ideas into simple, useful experiences.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#work">
                See my work
              </a>
              <a className="btn outline" href="cv.pdf" download>
                Download CV
              </a>
            </div>
          </div>

          <div className="portrait">
            <em></em>
            <strong>AS</strong>
            <small>Designer, Developer</small>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="wrap">
          <div className="heading">
            <h2>A little about me</h2>
            <p>
              Curious by nature, collaborative by default, and always looking for
              the next meaningful problem to solve.
            </p>
          </div>
          <div className="about">
            <div>
              <p>
                From early research to the final pixel, I create work that feels
                effortless for people and valuable for businesses.
              </p>
            </div>
            <div className="facts">
              {STATS.map((stat, idx) => (
                <div key={idx} className="fact">
                  <b>{stat.value}</b>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="pale">
          <div className="wrap">
            <div className="heading">
              <h2>What I do</h2>
              <p>A versatile toolkit for taking ideas from a rough concept to reality.</p>
            </div>
            <div className="cards">
              {SKILLS.map((skill) => (
                <article key={skill.id} className="card">
                  <div className="icon">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section id="work" className="wrap">
          <div className="heading">
            <h2>Selected work</h2>
            <p>A few things I've built with talented people and thoughtful teams.</p>
          </div>
          <div className="projects">
            {PROJECTS.map((project) => (
              <article key={project.id} className="project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <span>© Abdulsalam Sulaiman</span>
        <span>Designed & built with care.</span>
      </footer>
    </div>
  );
}