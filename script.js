// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    const formMessage = document.getElementById('formMessage');

    // Contact Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const message = formData.get('message');
            const newsletter = formData.get('newsletter');

            // Basic validation
            if (!firstName || !lastName || !email || !message) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (replace with actual API call)
            showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();

            // In a real implementation, you would send the data to a server:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ firstName, lastName, email, message, newsletter })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            //     contactForm.reset();
            // })
            // .catch(error => {
            //     showMessage('Something went wrong. Please try again later.', 'error');
            // });
        });
    }

    // Newsletter Form Submission
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletterEmail').value;
            
            if (!email) {
                alert('Please enter your email address.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            // Simulate newsletter signup (replace with actual API call)
            alert('Thank you for subscribing!');
            newsletterForm.reset();

            // In a real implementation:
            // fetch('/api/newsletter', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Thank you for subscribing!');
            //     newsletterForm.reset();
            // })
            // .catch(error => {
            //     alert('Something went wrong. Please try again later.');
            // });
        });
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for hero section
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroVisual && currentScroll < window.innerHeight) {
            const parallaxSpeed = 0.5;
            heroVisual.style.transform = `translateY(${currentScroll * parallaxSpeed}px)`;
        }
        
        lastScroll = currentScroll;
    });

    // Add hover effect to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate numbers/counters if needed (for future use)
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
});
