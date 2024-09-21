// Function to dynamically load content based on the navigation item clicked
function loadContent(section) {
    const content = document.getElementById('content');
    switch(section) {
        case 'home':
            content.innerHTML = `
                <div class="hero">
                    <img src="avatar1.jpg" alt="Parv Avatar">
                    <h1>Hi👋 There, <br> I'm <span>Parv</span></h1>
                    <p>I am a passionate web developer with skills in HTML, CSS, and JavaScript.</p>
                    <a href="#" class="cta-button">About Me</a>
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
                    <p>I’m currently pursuing a Bachelor of Computer Application (BCA) and have a passion for web development. I love to build and design web applications that are both functional and aesthetically pleasing. With a focus on clean code and user experience, I’m excited to collaborate on projects that push the boundaries of what the web can do.</p>
                </div>
                <div class="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JavaScript & jQuery</li>
                        <li>React.js (Basics)</li>
                        <li>Node.js & Express (Basics)</li>
                    </ul>
                </div>
                <div class="education">
                    <h2>Education</h2>
                    <p>Bachelor of Computer Application (BCA) - [Your University]</p>
                </div>
            `;
            break;
        
        case 'projects':
            content.innerHTML = `
                <div class="projects">
                    <h2>My Projects</h2>

                    <div class="project-grid">

                        <div class="project-card">
                            <img src="avatar1.jpg" alt="Project 1 Image">
                            <h3>Project 1: To-Do List App</h3>
                            <p>A simple to-do list app built with HTML, CSS, and JavaScript.</p>
                            <a href="https://github.com/parv68/todo-list-app" target="_blank" class="project-link">View Project</a>
                        </div>
            
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>
                        <div class="project-card">
                            <img src="project2.jpg" alt="Project 2 Image">
                            <h3>Project 2: Weather App</h3>
                            <p>A weather app built with HTML, CSS, JavaScript, and API integration.</p>
                            <a href="https://github.com/parv68/weather-app" target="_blank" class="project-link">View Project</a>
                        </div>

                    </div>

                    <div class="button">
                        <a href="#" class="cta-button">View All Projects</a>
                    </div>
                </div>
                `;
                break;

        case 'contact':
            content.innerHTML = `
                <div class="contact">
                    <h2>Contact Me</h2>
                    <form id="contact-form">
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
