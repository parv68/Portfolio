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
            `;
            break;
        case 'skills':
            content.innerHTML = `
                <div class="skills">
                    <h2>Skills</h2>
                    <ul>
                        <li>HTML & CSS</li>
                        <li>JavaScript & jQuery</li>
                        <li>React.js (Basics)</li>
                        <li>Node.js & Express (Basics)</li>
                    </ul>
                </div>
            `;
            break;
        case 'education':
            content.innerHTML = `
                <div class="education">
                    <h2>Education</h2>
                    <p>Bachelor of Computer Application (BCA) - [Your University]</p>
                </div>
            `;
            break;
        case 'work':
            content.innerHTML = `
                <div class="work">
                    <h2>Work</h2>
                    <p>Freelance Web Developer - [Details about your freelance work]</p>
                </div>
            `;
            break;
        case 'experience':
            content.innerHTML = `
                <div class="experience">
                    <h2>Experience</h2>
                    <p>Internship at [Company Name] - [Details about your role and what you did]</p>
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
// Function to toggle the navigation menu on mobile devices
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}



// Load home content by default on page load
document.addEventListener("DOMContentLoaded", () => {
    loadContent('home');
});
