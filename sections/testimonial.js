const testimonialsSection = document.createElement('section');
testimonialsSection.id = 'testimonials';
testimonialsSection.innerHTML = `
  <div class="testimonials-container">
    <h2 class="testimonials-title">What People Say</h2>
    <div class="testimonials-grid">
      <div class="testimonial-card">
        <div class="testimonial-inner">
          <div class="testimonial-front">
            <p>"Working with Ridhhin was an absolute pleasure. He combines creativity and technical precision like no one else!"</p>
          </div>
          <div class="testimonial-back">
            <span>— Vansh Jain, UX Researcher</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-inner">
          <div class="testimonial-front">
            <p>"His attention to design detail and code quality is top-notch. Truly one of the best collaborators I’ve worked with."</p>
          </div>
          <div class="testimonial-back">
            <span>— Aishwarya Singh Panwar, Product Manager</span>
          </div>
        </div>
      </div>
      <div class="testimonial-card">
        <div class="testimonial-inner">
          <div class="testimonial-front">
            <p>"Ridhhin’s ability to bring ideas to life visually is inspiring. He delivers more than expected every time."</p>
          </div>
          <div class="testimonial-back">
            <span>— Saksham Bansal, Creative Director</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
document.body.appendChild(testimonialsSection);

const testimonialStyle = document.createElement('style');
testimonialStyle.innerHTML = `
  #testimonials {
    width: 100%;
    min-height: 100vh;
    padding: 80px 20px;
    background: radial-gradient(circle at center, rgba(255, 215, 0, 0.08), #0d0d0d);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .testimonials-container {
    max-width: 1000px;
    width: 100%;
    text-align: center;
    color: #fff9e6;
  }

  .testimonials-title {
    font-size: 3rem;
    color: #ffe66d;
    margin-bottom: 80px;
    text-shadow: 0 0 25px rgba(255, 223, 50, 0.5);
    animation: glowTextGold 3s ease-in-out infinite alternate;
  }

  .testimonials-grid {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .testimonial-card {
    width: 280px;
    height: 220px;
    perspective: 1000px;
  }

  .testimonial-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
  }

  .testimonial-card:hover .testimonial-inner {
    transform: rotateY(180deg);
  }

  .testimonial-front,
  .testimonial-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
    padding: 25px;
    backdrop-filter: blur(14px);
    background: rgba(255, 215, 0, 0.08);
    border: 1px solid rgba(255, 215, 0, 0.2);
    box-shadow: 0 12px 30px rgba(255, 223, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffdd0;
    font-style: italic;
    font-size: 1.05rem;
    line-height: 1.6;
    text-align: center;
  }

  .testimonial-back {
    transform: rotateY(180deg);
    font-style: normal;
    font-weight: bold;
    color: #ffdb58;
    font-size: 1rem;
  }

  @keyframes glowTextGold {
    0% { text-shadow: 0 0 15px rgba(255, 223, 50, 0.4); }
    100% { text-shadow: 0 0 35px rgba(255, 223, 50, 0.8), 0 0 50px rgba(255, 215, 0, 0.6); }
  }

  @media (max-width: 768px) {
    .testimonials-title {
      font-size: 2.2rem;
    }

    .testimonial-card {
      margin-bottom: 20px;
    }
  }
`;
document.head.appendChild(testimonialStyle);
