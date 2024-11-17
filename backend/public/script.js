// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
      
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}


document.querySelectorAll('.feature-card, .about-item').forEach(item => {
    item.classList.add('animate-on-scroll');
});


const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '&uarr;';
scrollToTopButton.className = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


function toggleChat() {
    const chatBody = document.getElementById('chatBody');
    const chatToggle = document.getElementById('chatToggle');
    if (chatBody.style.display === 'block') {
        chatBody.style.display = 'none';
        chatToggle.className = 'fas fa-chevron-up';
    } else {
        chatBody.style.display = 'block';
        chatToggle.className = 'fas fa-chevron-down';
    }
}

async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    
    if (userInput.value.trim() === '') return;

    // Add user message
    const userMessage = userInput.value;
    chatMessages.innerHTML += `<div class="user-message">${userMessage}</div>`;
    
    // Clear input
    userInput.value = '';

    // Add loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'bot-message';
    loadingDiv.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Thinking...';
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    try {
        // Send message to backend
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();

        // Remove loading indicator
        chatMessages.removeChild(loadingDiv);

        // Add bot response
        if (data.success) {
            chatMessages.innerHTML += `<div class="bot-message">${data.message}</div>`;
        } else {
            chatMessages.innerHTML += `<div class="bot-message">Sorry, I'm having trouble connecting right now. Please try again later.</div>`;
        }

    } catch (error) {
        // Remove loading indicator
        chatMessages.removeChild(loadingDiv);
        chatMessages.innerHTML += `<div class="bot-message">Sorry, I'm having trouble connecting right now. Please try again later.</div>`;
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add event listener for Enter key
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Optional: Add typing indicator
let typingTimer;
document.getElementById('userInput').addEventListener('input', function() {
    clearTimeout(typingTimer);
    const chatMessages = document.getElementById('chatMessages');
    const existingTyping = document.querySelector('.typing-indicator');
    
    if (existingTyping) {
        chatMessages.removeChild(existingTyping);
    }
    
    if (this.value) {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'bot-message typing-indicator';
        typingDiv.innerHTML = '<i class="fas fa-ellipsis-h"></i> EcoBot is listening...';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        typingTimer = setTimeout(() => {
            if (existingTyping) {
                chatMessages.removeChild(typingDiv);
            }
        }, 1000);
    }
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
