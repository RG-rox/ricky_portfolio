const contactSection = document.createElement('section');
contactSection.id = 'contact-section';
contactSection.innerHTML = `
  <div class="contact-container">
    <h2 class="contact-title">Contact Me</h2>
    <div class="contact-grid">
      <div class="contact-info">
        <p><strong>Email:</strong> <a href="mailto:ridhhin2027@gmail.com">ridhhin2027@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919910408899">+91 99104 08899</a></p>
        <p>Feel free to reach out for collaborations, project ideas, or just to chat!</p>
      </div>
      <form class="contact-form" onsubmit="event.preventDefault(); alert('Thanks! This is a demo form.');">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="4" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
`;
document.body.appendChild(contactSection);

const contactStyle = document.createElement('style');
contactStyle.innerHTML = `
  #contact-section {
    width: 100%;
    min-height: 100vh;
    padding: 60px 20px;
    box-sizing: border-box;
    background: radial-gradient(circle at center, rgba(0, 128, 128, 0.25), #000);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .contact-container {
    max-width: 1000px;
    width: 100%;
    color: #dfffff;
    text-align: center;
  }

  .contact-title {
    font-size: 3rem;
    margin-bottom: 70px;
    color: #a0fdfd;
    text-shadow: 0 0 25px #80faff;
    animation: glowTextTurq 2s ease-in-out infinite alternate;
    font-family: "Julius Sans One", sans-serif;
    font-style: normal;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    backdrop-filter: blur(14px);
  }

  .contact-info, .contact-form {
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(0, 255, 255, 0.2);
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
    text-align: left;
  }

  .contact-info a {
    color: #a0fdfd;
    text-decoration: none;
  }

  .contact-info p {
    margin-bottom: 14px;
    line-height: 1.5;
    font-size: 1rem;
    color: #e0ffff;
  }

  .contact-form input,
  .contact-form textarea {
    width: 85%;
    padding: 12px 15px;
    margin-bottom: 15px;
    border-radius: 8px;
    border: none;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.08);
    color: #fff;
    outline: none;
  }

  .contact-form button {
    padding: 12px 25px;
    background-color: #40e0d0;
    color: #000;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .contact-form button:hover {
    background-color: #00ffe1;
    transform: scale(1.05);
  }

  @keyframes glowTextTurq {
    from {
      text-shadow: 0 0 5px #a0fdfd;
    }
    to {
      text-shadow: 0 0 25px #00ffff, 0 0 40px #40e0d0;
    }
  }

  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }

    .contact-title {
      font-size: 2.2rem;
    }
  }
`;
document.head.appendChild(contactStyle);