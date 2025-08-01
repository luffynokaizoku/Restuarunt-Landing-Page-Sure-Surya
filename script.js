// 1. Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 2. Scroll-To-Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '↑';
scrollBtn.id = 'scrollToTop';
scrollBtn.style.cssText = `
    position: fixed; bottom: 20px; right: 20px;
    display: none; padding: 10px 15px;
    border: none; background: #333;
    color: white; border-radius: 50%;
    font-size: 18px; cursor: pointer;
    z-index: 9999;
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 3. Animated Filter Menu
function filterMenu(category) {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        item.style.opacity = 0;
        setTimeout(() => {
            if (category === 'all' || item.classList.contains(category)) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = 1, 100);
            } else {
                item.style.display = 'none';
            }
        }, 200);
    });
}

// 4. Reservation Confirmation with Sound
function confirmReservation(event) {
    event.preventDefault();
    const audio = new Audio('sounds/success.mp3'); // Add success.mp3 to a sounds folder
    audio.play();
    setTimeout(() => {
        const popup = document.getElementById('success-popup');
        if (popup) popup.style.display = 'block';
    }, 500);
}

// 5. Close Popup
function closePopup() {
    const popup = document.getElementById('success-popup');
    if (popup) popup.style.display = 'none';
}

// Close popup on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// 6. Time-Based Greeting
window.addEventListener('DOMContentLoaded', () => {
    const greetingEl = document.getElementById('greeting');
    if (greetingEl) {
        const hour = new Date().getHours();
        let greeting = 'Welcome!';
        if (hour < 12) greeting = 'Good Morning ☀️';
        else if (hour < 18) greeting = 'Good Afternoon 🌤️';
        else greeting = 'Good Evening 🌙';
        greetingEl.innerText = greeting;
    }
});
