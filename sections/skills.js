const skillsSection = document.createElement('section');
skillsSection.id = 'skills-section';
skillsSection.innerHTML = `
  <div class="skills-container">
    <h2>Skills</h2>
    <div class="skills-slider">
      <div class="skills-track">
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/1827/1827565.png" alt="UI/UX"><span>UI/UX</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/1822/1822899.png" alt="Python"><span>Python</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png" alt="SQL"><span>SQL</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="ReactJS"><span>ReactJS</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="NextJS"><span>NextJS</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="Tailwind CSS"><span>Tailwind CSS</span></div>

        <!-- Repeat for smooth infinite scroll -->
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/1827/1827565.png" alt="UI/UX"><span>UI/UX</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/1822/1822899.png" alt="Python"><span>Python</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/2772/2772128.png" alt="SQL"><span>SQL</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/919/919851.png" alt="ReactJS"><span>ReactJS</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="NextJS"><span>NextJS</span></div>
        <div class="skill-card"><img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="Tailwind CSS"><span>Tailwind CSS</span></div>
      </div>
    </div>
  </div>
`;
document.body.appendChild(skillsSection);

const skillsStyle = document.createElement('style');
skillsStyle.innerHTML = `
  #skills-section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 20px;
    box-sizing: border-box;
    position: relative;
    background: rgba(0, 128, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 128, 255, 0.2);
    box-shadow: 0 0 30px rgba(0, 128, 255, 0.15),
                0 0 60px rgba(0, 128, 255, 0.1),
                0 0 90px rgba(0, 128, 255, 0.1);
  }

  .skills-container {
    background: rgba(0, 128, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    border: 1px solid rgba(0, 128, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 128, 255, 0.15);
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .skills-container h2 {
    font-size: 2.5rem;
    color: #add8ff;
    margin-bottom: 24px;
    text-shadow: 0 0 20px rgba(0, 128, 255, 0.5);
  }

  .skills-slider {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .skills-track {
    display: flex;
    gap: 40px;
    animation: scrollSkills 30s linear infinite;
    width: max-content;
  }

  .skill-card {
    background: rgba(0, 128, 255, 0.15);
    border: 1px solid rgba(0, 128, 255, 0.3);
    border-radius: 20px;
    padding: 20px;
    min-width: 180px;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(0, 128, 255, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .skill-card img {
    width: 64px;
    height: 64px;
    margin-bottom: 12px;
  }

  .skill-card span {
    font-size: 1rem;
    color: #d0f0ff;
    font-weight: 500;
  }

  .skill-card:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(0, 128, 255, 0.4);
  }

  @keyframes scrollSkills {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;
document.head.appendChild(skillsStyle);