const content = document.createElement('div');
content.classList.add('content');

content.innerHTML = `
  <div class="info">
    <h1 class="scramble">Ridhhin Grover</h1>
    <h2>Undergraduate CS+ Design Student</h2>
  </div>
  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
    <a href="#testimonials">Testimonials</a>
    <a href="#contact">Contact</a>
  </nav>
`;
const heroSection = document.createElement('section');
heroSection.id = 'hero-section';
heroSection.style.height = '100vh'; 
heroSection.style.position = 'relative'; 
heroSection.appendChild(content);
document.body.appendChild(heroSection);

const scrambleTarget = content.querySelector('.info h1');
const originalText = scrambleTarget.textContent;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let scrambleFrame;

function scrambleText(element, text) {
  let iteration = 0;

  cancelAnimationFrame(scrambleFrame);
  scrambleFrame = requestAnimationFrame(function animateScramble() {
    const scrambled = text
      .split("")
      .map((char, i) => {
        if (i < Math.floor(iteration)) return char;
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    element.textContent = scrambled;

    if (iteration <= text.length) {
      iteration += 1 / 20;
      scrambleFrame = requestAnimationFrame(animateScramble);
    }
  });
}

scrambleTarget.addEventListener("mouseenter", () => {
  scrambleText(scrambleTarget, originalText);
});

scrambleTarget.addEventListener("mouseleave", () => {
  scrambleTarget.textContent = originalText;
});

window.addEventListener("load", () => {
  scrambleText(scrambleTarget, originalText);
});

const typewriterTarget = content.querySelector('.info h2');
const phrases = [
  { text: 'Undergraduate CS+ Design Student', color: '#87cefa' },
  { text: 'Surviving 4th Semester in IIITD currently ', color: 'yellow' }
];
let current = 0, isDeleting = false, charIndex = 0;
const typingSpeed = 100;
const pauseTime = 3000;

function typewriterLoop() {
  const phrase = phrases[current].text;
  const color = phrases[current].color;
  const partialText = phrase.substring(0, charIndex);
  typewriterTarget.innerHTML = `<span style="color:${color}">${partialText}</span>`;

  if (!isDeleting && charIndex === phrase.length) {
    setTimeout(() => {
      isDeleting = true;
      typewriterLoop();
    }, pauseTime);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    current = (current + 1) % phrases.length;
  }

  charIndex += isDeleting ? -1 : 1;
  setTimeout(typewriterLoop, isDeleting ? 50 : typingSpeed);
}
typewriterLoop();

const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const threeScript = document.createElement('script');
threeScript.src = 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js';
document.head.appendChild(threeScript);

const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesome);


const headphoneImg = document.createElement('img');
headphoneImg.src = 'assets/headphone.png';
headphoneImg.alt = 'Headphones';
headphoneImg.className = 'floating-headphone';
document.body.appendChild(headphoneImg);

const audio = document.createElement('audio');
audio.id = 'customAudio';
audio.src = '/rainy.mp3';
audio.loop = true;
audio.volume = 1;
document.body.appendChild(audio);

headphoneImg.addEventListener('click', async () => {
  try {
    if (audio.paused) {
      await audio.play();
      console.log('🎵 Playing');
    } else {
      audio.pause();
      console.log('⏸️ Paused');
    }
  } catch (err) {
    console.error('Playback error:', err);
  }
});

const aiAssistant = document.createElement('div');
aiAssistant.className = 'ai-assistant';
aiAssistant.innerHTML = `
  <img src="assets/avatar.png" alt="AI Assistant" class="ai-avatar">
  <div class="ai-status">Click to activate voice assistant</div>
`;
document.body.appendChild(aiAssistant);

const aiAvatar = aiAssistant.querySelector('.ai-avatar');
const aiStatus = aiAssistant.querySelector('.ai-status');
let recognition;
let isListening = false;

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    isListening = true;
    aiStatus.textContent = 'Listening...';
    aiStatus.classList.add('active');
    aiAvatar.style.boxShadow = '0 0 50px rgba(135, 206, 250, 0.8)';
  };

  recognition.onend = () => {
    isListening = false;
    aiStatus.textContent = 'Click to activate voice assistant';
    aiStatus.classList.remove('active');
    aiAvatar.style.boxShadow = '0 0 30px rgba(135, 206, 250, 0.3)';
  };

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    processCommand(command);
  };
}

function processCommand(command) {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  if (command.includes('about')) {
    speak('Taking you to the About section');
    document.querySelector('#about-section').scrollIntoView({ behavior: 'smooth' });
  } else if (command.includes('skills')) {
    speak('Navigating to Skills section');
    document.querySelector('#skills-section').scrollIntoView({ behavior: 'smooth' });
  } else if (command.includes('projects')) {
    speak('Showing you my projects');
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  } else if (command.includes('testimonials')) {
    speak('Going to your testimonials');
    document.querySelector('#testimonials').scrollIntoView({ behavior: 'smooth' });
  }
  else if (command.includes('contact')) {
    speak('Displaying your contacts');
    document.querySelector('#contact-section').scrollIntoView({ behavior: 'smooth' });
  }
  else if (command.includes('home')) {
    speak('Going back to home');
    document.querySelector('#hero-section').scrollIntoView({ behavior: 'smooth' });
  }
  else {
    speak('Sorry, I didn\'t catch that. I can only navigate to sections of your page.');
  }
}

aiAvatar.addEventListener('click', () => {
  if (!recognition) {
    alert('Speech recognition is not supported in your browser');
    return;
  }

  if (!isListening) {
    speak('How can I help you?');
    setTimeout(() => recognition.start(), 1000);
  } else {
    recognition.stop();
  }
});

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}



const style = document.createElement('style');
style.innerHTML = `
  body, html {
    font-family: 'DM Sans', sans-serif;
    color: #87cefa;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 60px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .info h1 {
    font-size: 4rem;
    font-weight: 700;
    top: -250px;
    position: absolute;
    white-space: nowrap;
    font-family: "Julius Sans One", sans-serif;
    font-style: normal;
  
  }
  .info h2 {
    font-size: 1rem;
    font-weight: 400;
    position: absolute;
    top: -176px;
    left: 2px;
    white-space: nowrap;
  }
  nav {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    position: relative;
  }
  nav a {
    text-decoration: none;
    color: #87cefa;
    font-size: 1.2rem;
    font-weight: 400;
    transition: all 0.3s ease;
    position: relative;
  }
  nav a:hover {
    font-size: 2.5rem;
    text-shadow: 0 0 20px rgba(135, 206, 250, 0.7);
    transform: translateX(20px);
  }
  nav a:hover ~ a {
    filter: blur(4px);
    opacity: 0.3;
  }
  
  .sub-options {
    position: fixed;
    left: 550px;
    top: 40%;
    transform: translateY(-50%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.6s ease-in-out;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 10;
  }

  .sub-options.active-sub {
    left: 600px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .sub-option-item {
    background: linear-gradient(135deg, rgba(135,206,250,0.35), rgba(255,255,255,0.15));
    padding: 1.5rem 3rem;
    border-radius: 5px;
    border: 1px solid rgba(135, 206, 250, 0.4);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(14px);
    color: #ffffff;
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.3s ease-out;
  }

  .sub-options.active-sub .sub-option-item {
    opacity: 1;
    transform: translateY(0);
  }

  .sub-options.active-sub .sub-option-item:nth-child(1) {
    transition-delay: 0.1s;
  }

  .sub-options.active-sub .sub-option-item:nth-child(2) {
    transition-delay: 0.2s;
  }

  .sub-options.active-sub .sub-option-item:nth-child(3) {
    transition-delay: 0.3s;
  }

  .sub-option-item:hover {
    background: rgba(135, 206, 250, 0.5);
    transform: scale(1.1);
    box-shadow: 0 12px 40px rgba(135, 206, 250, 0.4);
    transition: all 0.3s ease-out;
  }
  
  
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animated-item:hover {
    transform: scale(1.03);
    background: rgba(135, 206, 250, 0.5);
    box-shadow: 0 12px 40px rgba(135, 206, 250, 0.4);
  }
  
  .item-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
  
  .item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    font-size: 1.2rem;
  }
  
  .item-content {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .item-title {
    font-weight: 600;
    font-size: 1rem;
    color: #ffffff;
  }
  
  .item-description {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
  }
  
  .animated-list-container::-webkit-scrollbar {
    width: 5px;
  }
  
.animated-list-container::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}
  
.animated-list-container::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
}

.social-icons {
    position: fixed;
    top: 33.5%;
    right:40px;
    display:flex;
    flex-direction:column;
    gap: 23px;
    z-index: 2000;
  }
.social-icons img {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease, filter 0.3s ease;
    cursor: pointer;
}
  .social-icons img:hover {
    transform: scale(1.5);
    filter: drop-shadow(0 0 10px white);
}
.floating-headphone {
  position: fixed;
  top: 35px;
  right: 17px;
  width: 80px;
  height: 80px;
  cursor: pointer;
  z-index: 9999;
  transition: transform 0.2s ease, filter 0.3s ease;
}

.floating-headphone:hover {
  transform: scale(1.15);
  filter: drop-shadow(0 0 10px rgba(135, 206, 250, 0.8));
}

.ai-assistant {
    position: fixed;
    left: 6%;
    top: 90%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .ai-avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid rgba(135, 206, 250, 0.5);
    box-shadow: 0 0 30px rgba(135, 206, 250, 0.3);
    transition: all 0.3s ease;
  }

  .ai-avatar:hover {
    transform: scale(1.1);
    box-shadow: 0 0 40px rgba(135, 206, 250, 0.5);
  }

  .ai-status {
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    color: #87cefa;
    font-size: 0.9rem;
    white-space: nowrap;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .ai-status.active {
    opacity: 1;
  }

  }
`;
document.head.appendChild(style);


const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  link.addEventListener('click', e => {
    e.preventDefault();
    if (href === '#about') {
      document.querySelector('#about-section').scrollIntoView({ behavior: 'smooth' });
    }
    if (href === '#skills') {
      document.querySelector('#skills-section').scrollIntoView({ behavior: 'smooth' });
    }
    if (href === '#projects'){
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    }
    if (href === '#contact'){
        document.querySelector('#contact-section').scrollIntoView({ behavior: 'smooth' });
    }
    if (href === '#testimonials'){
        document.querySelector('#testimonials').scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const socialIcons = document.createElement('div');
socialIcons.className = 'social-icons';
socialIcons.innerHTML = `
  <a href="https://www.instagram.com/ridhhin27?igsh=MTU0enNpeTZhYzg1cg%3D%3D&utm_source=qr" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" /></a>
  <a href="https://discord.com" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png" alt="Discord" /></a>
  <a href="https://github.com/RG-rox" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" /></a>
  <a href="https://www.facebook.com/share/181TSojQdC/?mibextid=wwXIfr" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></a>
  <a href="https://www.linkedin.com/in/ridhhin-grover-03a694288/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" /></a>
`;
document.body.appendChild(socialIcons);

