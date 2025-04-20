const projectsSection = document.createElement('section');
projectsSection.id = 'projects';
projectsSection.innerHTML = `
  <div class="projects-container">
    <h2 class="projects-title">My Projects</h2>
    <div class="bento-grid">
      <a href="https://github.com/pewglitch/angry_birds" class="project-card" target="_blank">
        <div class="project-content">
          <h3>Angry Birds Clone</h3>
          <p>Java game with libGDX framework featuring multiple levels, OOP principles, and robust testing.</p>
        </div>
      </a>
      <a href="https://github.com/Saksham355/CO-project" class="project-card" target-"_blank">
        <div class="project-content">
          <h3>Assembler & Simulator</h3>
          <p>Assembly language converter and binary instruction simulator for computer organization.</p>
        </div>
      </a>
      <a href="#" class="project-card">
        <div class="project-content">
          <h3>Public Spitting Problem</h3>
          <p>Analysis of public spitting as a wicked problem despite government interventions.</p>
        </div>
      </a>
      <a href="https://github.com/Saksham355/RealEstateHub" class="project-card" target="_blank">
        <div class="project-content">
          <h3>Real Estate System</h3>
          <p>Database management system for properties, clients, agents and legal processes.he schema supports detailed relationships, ensuring efficient property management and legal tracking.</p>
        </div>
      </a>
      <a href="https://github.com/anshv-py/grape-ai" class="project-card" target="_blank">
        <div class="project-content">
          <h3>Wine AI Assistant</h3>
          <p>Voice-powered ML analysis of wine quality with interactive visualizations.The project combined voice recognition, text processing, and personalized recommendations.
Implemented ML models.</p>
        </div>
      </a>
    </div>
  </div>
`;
document.body.appendChild(projectsSection);

const projectStyle = document.createElement('style');
projectStyle.innerHTML = `
  #projects {
    width: 100%;
    min-height: 100vh;
    padding: 60px 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at center, rgba(30, 10, 60, 0.85), #000);
  }

  .projects-container {
    max-width: 1200px;
    width: 100%;
    text-align: center;
  }

  .projects-title {
    font-size: 3rem;
    margin-bottom: 80px;
    color: #f8d6ff;
    text-shadow: 0 0 25px #ff8ce7;
    animation: glowText 2s ease-in-out infinite alternate;
    font-family: "Julius Sans One", sans-serif;
    font-style: normal;
  }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: minmax(150px, auto);
    gap: 10px;
    width: 100%;
  }

  .project-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 100, 200, 0.25);
    border-radius: 12px;
    padding: 18px;
    text-align: left;
    color: #ffe6fa;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 20px rgba(255, 0, 150, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
  }

  .project-card h3 {
    font-size: 1.25rem;
    margin-bottom: 8px;
    color: #ffb3ec;
  }

  .project-card p {
    font-size: 0.9rem;
    color: #f8dff5;
    opacity: 0.9;
    line-height: 1.4;
    margin: 0;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 0, 150, 0.4);
    background: rgba(255, 255, 255, 0.08);
  }

  /* Angry Birds*/
  .bento-grid a:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1;
  }

  /* Assembler & Simulator*/
  .bento-grid a:nth-child(2) {
    grid-column: 3 / span 2;
    grid-row: 1;
  }

  /* Public Health Study */
  .bento-grid a:nth-child(3) {
    grid-column: 5 / span 2;
    grid-row: 1;
  }

  /* Real Estate System - */
  .bento-grid a:nth-child(4) {
    grid-column: 1 / span 3;
    grid-row: 2;
  }

  /* Wine AI Assistant */
  .bento-grid a:nth-child(5) {
    grid-column: 4 / span 3;
    grid-row: 2;
  }

  @keyframes glowText {
    from {
      text-shadow: 0 0 5px #ff8ce7;
    }
    to {
      text-shadow: 0 0 25px #ff8ce7, 0 0 40px #ff00cc;
    }
  }

  @media (max-width: 900px) {
    .bento-grid {
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: minmax(130px, auto);
    }
    
    .bento-grid a:nth-child(1) {
      grid-column: 1;
      grid-row: 1;
    }
    
    .bento-grid a:nth-child(2) {
      grid-column: 2;
      grid-row: 1;
    }
    
    .bento-grid a:nth-child(3) {
      grid-column: 1;
      grid-row: 2;
    }
    
    .bento-grid a:nth-child(4) {
      grid-column: 2;
      grid-row: 2;
    }
    
    .bento-grid a:nth-child(5) {
      grid-column: 1 / span 2;
      grid-row: 3;
    }
  }

  @media (max-width: 600px) {
    .bento-grid {
      grid-template-columns: 1fr;
    }
    
    .project-card,
    .bento-grid a:nth-child(1),
    .bento-grid a:nth-child(2),
    .bento-grid a:nth-child(3),
    .bento-grid a:nth-child(4),
    .bento-grid a:nth-child(5) {
      grid-column: 1;
      grid-row: auto;
    }
    
    .projects-title {
      font-size: 2.2rem;
    }
  }
`;
document.head.appendChild(projectStyle);