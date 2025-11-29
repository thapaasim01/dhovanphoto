// =================================================================
// 1. DATE DISPLAY FUNCTIONALITY (Simplified/Removed complex logic)
// =================================================================
function displayDates() {
    const dateElement = document.getElementById('currentDate');

    if (dateElement) {
        const today = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = today.toLocaleDateString('en-US', options);
        dateElement.textContent = dateString;
        dateElement.setAttribute('datetime', today.toISOString().split('T')[0]);
    }
}

// =================================================================
// 2. DARK MODE TOGGLE FUNCTIONALITY (UX/A11y) - KEPT
// =================================================================
function setupDarkModeToggle() {
    const toggleBtn = document.getElementById('darkModeToggle');
    if (toggleBtn) {
        // Set initial icon based on loaded preference
        toggleBtn.innerHTML = localStorage.getItem('theme') === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        
        toggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark-mode');
            const isDarkMode = document.documentElement.classList.contains('dark-mode');
            
            if (isDarkMode) {
                localStorage.setItem('theme', 'dark');
                toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('theme', 'light');
                toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
}


// =================================================================
// 3. NAVIGATION / HAMBURGER MENU FUNCTIONALITY (Responsive/A11y) - KEPT
// =================================================================
function setupHamburgerMenu() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navLinks = document.getElementById('navLinks');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true' || false;
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
            // Toggle icon visual
            hamburgerBtn.querySelector('i').classList.toggle('fa-bars');
            hamburgerBtn.querySelector('i').classList.toggle('fa-times');
        });
    }
}

// =================================================================
// 4. SCROLL TO TOP BUTTON FUNCTIONALITY (Smooth Scroll) - KEPT
// =================================================================
function setupScrollToTop() {
    const mybutton = document.getElementById('scrollToTopBtn');
    if (mybutton) {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                mybutton.style.display = 'block';
            } else {
                mybutton.style.display = 'none';
            }
        });
        
        mybutton.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}


// =================================================================
// 5. CONTACT FORM VALIDATION (Minimal implementation)
// =================================================================
function setupContactFormValidation() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will get back to you soon.'); 
            form.reset();
        });
    }
}


// =================================================================
// 6. INITIALIZATION
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    setupDarkModeToggle();
    setupHamburgerMenu();
    setupScrollToTop();
    
    // Page-specific initialization
    if (document.getElementById('currentDate')) {
        displayDates();
    }
    if (document.getElementById('contactForm')) {
        setupContactFormValidation();
    }
});