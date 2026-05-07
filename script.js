// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
});

// Product Gallery Thumbnail Switching
function changeImage(element) {
    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
    document.getElementById('main-product-img').src = element.src.replace('w=200', 'w=800');
}

// Countdown Timer logic for Product Page
const countdownEl = document.getElementById('countdown');
if (countdownEl) {
    let time = 10 * 60; // 10 minutes in seconds

    const updateCountdown = () => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countdownEl.innerHTML = `${minutes}:${seconds}`;
        
        if (time > 0) {
            time--;
        } else {
            time = 10 * 60;
        }
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
}

// Social Proof Popup Logic
const popup = document.getElementById('social-proof');
if (popup) {
    const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Ahmedabad", "Gurugram", "Noida"];
    const times = ["Just now", "2 mins ago", "5 mins ago", "12 mins ago", "24 mins ago"];
    
    const images = [
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
    ];

    const showPopup = () => {
        const city = cities[Math.floor(Math.random() * cities.length)];
        const timeStr = times[Math.floor(Math.random() * times.length)];
        const img = images[Math.floor(Math.random() * images.length)];

        document.getElementById('sp-text').innerHTML = `Someone from <strong>${city}</strong> just bought<br>NailHeal™ Patches`;
        document.getElementById('sp-time').innerText = timeStr;
        document.getElementById('sp-img').src = img;

        popup.classList.add('show');

        setTimeout(() => {
            popup.classList.remove('show');
        }, 5000);
    };

    setTimeout(() => {
        showPopup();
        setInterval(showPopup, 15000);
    }, 4000);
}
