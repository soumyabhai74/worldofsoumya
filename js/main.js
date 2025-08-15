// Typing Animation
const typingLines = [
  "👋 Hey there! I'm Soumya",
  "🎓 B.Tech Computer Science Engineering student",
  "💻 Passionate about coding, learning, and creating real-world solutions",
  "🧠 Currently learning: Python, C, Java, Web Development (HTML, CSS, JS)",
  "🔨 Building: Personal portfolio website, beginner to intermediate-level projects",
  "📫 Let’s connect on LinkedIn and grow together",
  "🔍 Fun fact: I believe coding + creativity = infinite possibilities 🚀"
];

const typingEl = document.getElementById('typing');
let lineIndex = 0;

function typeLine(line) {
  let charIndex = 0;
  typingEl.innerHTML = "";
  function typeChar() {
    if (charIndex < line.length) {
      typingEl.innerHTML += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 80);
    } else {
      setTimeout(typeNextLine, 800);
    }
  }
  typeChar();
}

function typeNextLine() {
  lineIndex++;
  if (lineIndex < typingLines.length) {
    typeLine(typingLines[lineIndex]);
  } else {
    typingEl.innerHTML = "Soumyabhai"; // Final static name
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeLine(typingLines[0]);
});

// EmailJS Contact Form
(function() {
  emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
})();

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => { status.innerText = "Message sent successfully!"; form.reset(); })
    .catch(() => { status.innerText = "Failed to send message. Try again."; });
});
