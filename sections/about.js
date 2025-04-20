const aboutSection = document.createElement('section');
aboutSection.id = 'about-section';
aboutSection.innerHTML = `
  <div class="about-container">
    <div class="about-text">
      <h2>About Me</h2>
      <p>Hello! I'm Ridhhin, a passionate CS+Design student at IIITD. I thrive at the intersection of logic and creativity. My interests lie in UI/UX, front-end development, and motion design. I enjoy building interfaces that feel intuitive and delightful. Whether it's crafting pixel-perfect layouts or exploring new tech stacks, I'm always learning and iterating. Outside of tech and design, I'm also an avid sports enthusiast — you'll often find me playing or following cricket, tennis, and football.</p>
    </div>
    <div class="about-image">
      <img src="assets/image.png" alt="About Visual" />
    </div>
  </div>
`;
document.body.appendChild(aboutSection);

const scrollStyle = document.createElement('style');
scrollStyle.innerHTML = `
  #about-section {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 20px;
    box-sizing: border-box;
    position: relative;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);

    /* ✨ Glow effect */
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.15),
              0 0 60px rgba(0, 255, 128, 0.1),
              0 0 90px rgba(0, 255, 128, 0.1);
  }

  .about-container {
    background: rgba(0, 255, 128, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    border: 1px solid rgba(0, 255, 128, 0.2);
    box-shadow: 0 8px 32px rgba(0, 255, 128, 0.15);
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 60px;
    align-items: center;
  }

  .about-text {
    flex: 1;
  }

  .about-text h2 {
    font-size: 3rem;
    color: #98ff98;
    margin-bottom: 24px;
    text-shadow: 0 0 20px rgba(0, 255, 128, 0.5);
  }

  .about-text p {
    color: #e0ffe0;
    font-size: 1.25rem;
    line-height: 1.8;
    text-shadow: 0 0 1px rgba(0, 255, 128, 0.5);
    opacity: 0.9;
    text-align:justify;
  }

  .about-image {
    flex: 0 0 400px;
  }

  .about-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
    border: 2px solid rgba(0, 255, 128, 0.3);
    box-shadow: 0 8px 32px rgba(0, 255, 128, 0.3);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .about-image img:hover {
    transform: scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 255, 128, 0.4);
  }
`;
document.head.appendChild(scrollStyle);