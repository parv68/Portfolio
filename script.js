// Function to dynamically load content based on the navigation item clicked
function loadContent(section) {
    const content = document.getElementById('content');
    switch(section) {
        case 'home':
            content.innerHTML = `
                <div class="hero">
                    <img src="./images/avatar1.jpg" alt="Parv Avatar">
                    <h1>Hi👋 There, <br> I'm <span>Parv</span></h1>
                    <p>I am a passionate web developer with skills in HTML, CSS, and JavaScript.</p>
                    <a href="#" onClick="loadContent('about')" class="cta-button">About Me</a>
                    <div class="social-media">
                        <a href="https://github.com/parv68" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/parv-429659290/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            `;
            break;
        case 'about':
            content.innerHTML = `
                <div class="about">
                    <h2>About Me</h2>
                    <p>I’m currently pursuing a Bachelor of Computer Application (BCA) and have a passion for <span>Frontend development</span>. I love to build and design web applications that are both functional and aesthetically pleasing. With a focus on clean code and user experience, I’m excited to collaborate on projects that push the boundaries of what the web can do.</p>
                </div>
                <div class="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React.js (Basics)</li>
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>Git (Version Control)</li>
                    </ul>
                </div>
                <div class="education">
                    <h2>Education</h2>
                    <p id="degree">Bachelor of Computer Application (BCA) - [Maharishi Dayanand University(MDU)]</p>
                    <p id="address">Rohtak, Haryana</p>
                    <p id="date">Aug 2023 - July 2026</p>
                </div>
            `;
            break;
        
        case 'projects':
            content.innerHTML = `
                <div class="projects">
                    <h2>My Projects</h2>

                    <div class="project-grid">

                        <div class="project-card">
                            <img src="./images/tip-calculator.png" alt="tip-calculator Image">
                            <h3>Project 1: Tip calculator</h3>
                            <p>A simple tip-calculator built with HTML, CSS and JavaScript.</p>
                            <a href="https://parv68.github.io/tip-calculator/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/tip-calculator" target="_blank" class="project-link">View Code</a>
                        </div>
            
                        <div class="project-card">
                            <img src="./images/weather-app.png" alt="weather-app Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A Weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://parv68.github.io/weather-app/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Code</a>
                        </div>
                        <div class="project-card">
                            <img src="./images/age-calculator.png" alt="age-calculator Image">
                            <h3>Project 3: Age calculator</h3>
                            <p>An Age calculator built with HTML, CSS and JavaScript.</p>
                            <a href="https://parv68.github.io/Age-calculator1/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/Age-calculator1" target="_blank" class="project-link">View Code</a>
                        </div>
                        <div class="project-card">
                            <img src="./images/bmi-calculator.png" alt="bmi-calculator Image">
                            <h3>Project 4: BMI Calculator</h3>
                            <p>A BMI Calculator built with HTML, CSS and JavaScript.</p>
                            <a href="https://parv68.github.io/mass-calculator/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/mass-calculator" target="_blank" class="project-link">View Code</a>
                        </div>
                        <div class="project-card">
                            <img src="./images/food-delivery.png" alt="food delivery Image">
                            <h3>Project 5: Food Delivery</h3>
                            <p>A Food delivery demo app built with HTML and CSS.</p>
                            <a href="https://parv68.github.io/food-delivery/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/food-delivery" target="_blank" class="project-link">View code</a>
                        </div>
                        <div class="project-card">
                            <img src="./images/password-generator.png" alt="password generator Image">
                            <h3>Project 6: Password Generator</h3>
                            <p>A Password generator built with HTML, CSS and JavaScript</p>
                            <a href="https://parv68.github.io/password-generator/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/password-generator" target="_blank" class="project-link">View Code</a>
                        </div>
                        <div class="project-card">
                            <img src="./images/text-to-speech.png" alt="Text to speech Image">
                            <h3>Project 7: Tetx to speech</h3>
                            <p>A Text to speech built with HTML, CSS and JavaScript.</p>
                            <a href="https://parv68.github.io/text-to-speech/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/text-to-speech" target="_blank" class="project-link">View Code</a>
                        </div>
                        <div class="project-card">
                            <img src="./images/speech-to-text.png" alt="Speech to text Image">
                            <h3>Project 8: Speech to text</h3>
                            <p>A Speech to text built with HTML, CSS and JavaScript.</p>
                            <a href="https://parv68.github.io/speech-to-text/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/speech-to-text" target="_blank" class="project-link">View Code</a>
                        </div>
                        <div class="project-card">
                            <img src="./images/music-player.png" alt="Music player Image">
                            <h3>Project 9: Music Player</h3>
                            <p>A Music player built with HTML, CSS and JavaScript.</p>
                            <a href="https://parv68.github.io/music-player/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/music-player" target="_blank" class="project-link">View Code</a>
                        </div>
                        <div class="project-card">
                            <img src="./images/todo-app.png" alt="Todo app Image">
                            <h3>Project 10: Todo app</h3>
                            <p>A simple todo app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://parv68.github.io/todo-app/" target="_blank" class="project-link">View Project</a>
                            <br>
                            <a href="https://github.com/parv68/todo-app" target="_blank" class="project-link">View Code</a>
                        </div>

                    </div>

                    <div class="button">
                        <a href="https://github.com/parv68?tab=repositories" class="cta-button" target="_blank">View All Projects</a>
                    </div>
                </div>
                `;
                break;

        case 'contact':
            content.innerHTML = `
                <div class="contact">
                    <h2>Contact Me</h2>

                    <form id="contact-form" action="https://formspree.io/f/mjkbqojg" method="POST">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required>
                        <label for="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>

                </div>
            `;
            break;
        default:
            content.innerHTML = '<p>Content not found.</p>';
    }
}

// Function to toggle the navigation menu on mobile devices

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Load home content by default on page load
document.addEventListener("DOMContentLoaded", () => {
    loadContent('home');
});
