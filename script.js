// Navigation / Routing
function navigate(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const target = document.getElementById('page-' + pageId);
    if(target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    document.getElementById('navLinks').classList.remove('active');
}

// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
});

// Tab Switching
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        // Remove active from all tabs in this group
        e.target.parentElement.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        // Add active to clicked
        e.target.classList.add('active');
        
        // Filter logic could go here based on e.target.dataset.tab
        const filter = e.target.dataset.tab;
        renderAllServices(filter);
    });
});

// AI Chatbot
function toggleChat() {
    document.getElementById('aiChat').classList.toggle('active');
}

function sendMessage() {
    const input = document.getElementById('aiInput');
    const text = input.value.trim();
    if(!text) return;
    
    const messagesContainer = document.getElementById('aiMessages');
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user animate-fade';
    userMsg.innerHTML = `<div class="msg-content">${text}</div>`;
    messagesContainer.appendChild(userMsg);
    
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulate AI response
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot animate-fade';
        
        let reply = "May the divine bless you. How else can I assist your spiritual journey?";
        const lowerText = text.toLowerCase();
        
        if(lowerText.includes('pooja')) {
            reply = "We offer a variety of poojas like Ganapathi Homam, Rudrabhishekam, and Lakshmi Pooja. Would you like me to recommend a pandit?";
        } else if(lowerText.includes('horoscope') || lowerText.includes('astrology')) {
            reply = "Our expert astrologers can help! I recommend Dr. Sharma for career guidance or Pandit Rajeev for Kundli matching. Shall I take you to their profiles?";
        } else if(lowerText.includes('temple')) {
            reply = "You can book darshan and sevas at major temples like Tirupati, Kashi Vishwanath, and Madurai Meenakshi. Where would you like to visit?";
        }
        
        botMsg.innerHTML = `<div class="msg-content">${reply}</div>`;
        messagesContainer.appendChild(botMsg);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
}

document.getElementById('aiInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Data
const categories = [
    { name: "Temple Visits", icon: "fa-vihara", color: "#F97316" },
    { name: "Astrology", icon: "fa-star-and-crescent", color: "#8B5CF6" },
    { name: "Online Poojas", icon: "fa-om", color: "#EF4444" },
    { name: "Homams", icon: "fa-fire", color: "#F59E0B" },
    { name: "Vastu", icon: "fa-compass", color: "#10B981" },
    { name: "Horoscope", icon: "fa-scroll", color: "#3B82F6" },
    { name: "Festivals", icon: "fa-calendar-day", color: "#EC4899" },
    { name: "Donations", icon: "fa-hand-holding-heart", color: "#14B8A6" }
];

const temples = [
    { name: "Tirumala Tirupati Devasthanams", location: "Andhra Pradesh", rating: "4.9", image: "https://images.unsplash.com/photo-1625806655655-d14fb6192135?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
    { name: "Kashi Vishwanath Temple", location: "Varanasi", rating: "4.8", image: "https://images.unsplash.com/photo-1629815049539-7817454845b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
    { name: "Meenakshi Amman Temple", location: "Madurai", rating: "4.9", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
    { name: "Kedarnath Temple", location: "Uttarakhand", rating: "5.0", image: "https://images.unsplash.com/photo-1600080826970-8ccaa38a5360?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
    { name: "Jagannath Temple", location: "Puri", rating: "4.8", image: "https://images.unsplash.com/photo-1626210080534-118f6d6c9dd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
    { name: "Somnath Temple", location: "Gujarat", rating: "4.7", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" }
];

const astrologers = [
    { name: "Dr. Anand Sharma", exp: "15+ Years", type: "Vedic Astrology", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", rating: "4.9", price: "₹1500" },
    { name: "Pandit Rajeev", exp: "20+ Years", type: "Kundli & Vastu", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", rating: "4.8", price: "₹2000" },
    { name: "Dr. Meera Iyer", exp: "10+ Years", type: "Tarot & Numerology", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", rating: "4.9", price: "₹1200" },
    { name: "Guruji Prakash", exp: "25+ Years", type: "Prashna Kundali", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", rating: "5.0", price: "₹2500" }
];

const poojas = [
    { name: "Ganapathi Homam", desc: "For removing obstacles and bringing success.", type: "Homam", price: "₹4,500", image: "https://images.unsplash.com/photo-1582455981442-5f3353ef2478?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
    { name: "Rudrabhishekam", desc: "Divine offering to Lord Shiva for peace.", type: "Pooja", price: "₹5,100", image: "https://images.unsplash.com/photo-1605553177727-b08e2f8cc59f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
    { name: "Navagraha Shanti", desc: "Pacify the nine planets for harmony.", type: "Pooja", price: "₹7,500", image: "https://images.unsplash.com/photo-1621841380927-400a4db254ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" }
];

// Rendering functions
function renderCategories() {
    const grid = document.getElementById('categories-grid');
    if(!grid) return;
    
    grid.innerHTML = categories.map(cat => `
        <div class="card p-4 text-center hover-glow" style="cursor: pointer;" onclick="navigate('services')">
            <div style="background: ${cat.color}20; width: 60px; height: 60px; border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                <i class="fa-solid ${cat.icon} fa-2x" style="color: ${cat.color};"></i>
            </div>
            <h3 style="font-size: 1.125rem;">${cat.name}</h3>
        </div>
    `).join('');
}

function renderTemples(containerId, limit = null) {
    const grid = document.getElementById(containerId);
    if(!grid) return;
    
    const data = limit ? temples.slice(0, limit) : temples;
    
    grid.innerHTML = data.map(temple => `
        <div class="card">
            <img src="${temple.image}" class="card-img" alt="${temple.name}">
            <div class="card-content">
                <div class="flex justify-between items-center mb-2">
                    <span class="badge badge-primary"><i class="fa-solid fa-star text-accent"></i> ${temple.rating}</span>
                </div>
                <h3 class="card-title" style="margin-bottom: 0.25rem;">${temple.name}</h3>
                <div class="card-meta">
                    <i class="fa-solid fa-location-dot"></i> ${temple.location}
                </div>
                <button class="btn btn-primary w-full mt-4" onclick="alert('Booking modal opened for ${temple.name}')">Book Darshan</button>
            </div>
        </div>
    `).join('');
}

function renderAstrologers(containerId) {
    const grid = document.getElementById(containerId);
    if(!grid) return;
    
    grid.innerHTML = astrologers.map(astro => `
        <div class="card text-center">
            <div style="padding: 1.5rem 1.5rem 0;">
                <img src="${astro.image}" style="width: 120px; height: 120px; border-radius: var(--radius-full); object-fit: cover; margin: 0 auto; border: 4px solid var(--primary-light);">
            </div>
            <div class="card-content">
                <h3 class="card-title">${astro.name}</h3>
                <p style="color: var(--primary); font-weight: 500; font-size: 0.875rem; margin-bottom: 0.5rem;">${astro.type}</p>
                <div class="flex justify-center gap-4 mb-4 text-sm" style="color: var(--text-light); font-size: 0.875rem;">
                    <span><i class="fa-solid fa-briefcase"></i> ${astro.exp}</span>
                    <span><i class="fa-solid fa-star" style="color: var(--accent);"></i> ${astro.rating}</span>
                </div>
                <div style="font-weight: 600; margin-bottom: 1rem;">${astro.price} / 30 mins</div>
                <div class="flex gap-2">
                    <button class="btn btn-outline" style="flex: 1; padding: 0.5rem;" title="Chat"><i class="fa-solid fa-comment"></i></button>
                    <button class="btn btn-primary" style="flex: 2; padding: 0.5rem;">Book Video</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPoojas(containerId) {
    const grid = document.getElementById(containerId);
    if(!grid) return;
    
    grid.innerHTML = poojas.map(pooja => `
        <div class="card flex" style="flex-direction: row; align-items: center; padding: 1rem;">
            <img src="${pooja.image}" style="width: 100px; height: 100px; border-radius: var(--radius-md); object-fit: cover;">
            <div style="padding-left: 1rem; flex: 1;">
                <div class="flex justify-between items-center mb-1">
                    <h3 class="card-title" style="margin: 0; font-size: 1.125rem;">${pooja.name}</h3>
                    <span class="badge badge-secondary">${pooja.type}</span>
                </div>
                <p style="font-size: 0.875rem; margin-bottom: 0.5rem;">${pooja.desc}</p>
                <div class="flex justify-between items-center">
                    <span style="font-weight: 600;">${pooja.price}</span>
                    <button class="btn btn-primary btn-sm" style="padding: 0.25rem 0.75rem; font-size: 0.875rem;">Book</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderAllServices(filter = 'all') {
    const grid = document.getElementById('all-services-grid');
    if(!grid) return;
    
    grid.innerHTML = '';
    
    if(filter === 'all' || filter === 'temple') {
        grid.innerHTML += temples.slice(0, 3).map(temple => `
            <div class="card animate-fade">
                <img src="${temple.image}" class="card-img" alt="${temple.name}">
                <div class="card-content">
                    <span class="badge badge-primary mb-2">Temple Service</span>
                    <h3 class="card-title">${temple.name} Darshan</h3>
                    <button class="btn btn-outline w-full mt-4">View Details</button>
                </div>
            </div>
        `).join('');
    }
    
    if(filter === 'all' || filter === 'pooja') {
        grid.innerHTML += poojas.map(pooja => `
            <div class="card animate-fade">
                <img src="${pooja.image}" class="card-img" alt="${pooja.name}">
                <div class="card-content">
                    <span class="badge badge-secondary mb-2">Pooja</span>
                    <h3 class="card-title">${pooja.name}</h3>
                    <button class="btn btn-outline w-full mt-4">View Details</button>
                </div>
            </div>
        `).join('');
    }
    
    if(filter === 'all' || filter === 'astrology') {
        grid.innerHTML += astrologers.slice(0, 2).map(astro => `
            <div class="card animate-fade">
                <img src="${astro.image}" class="card-img" alt="${astro.name}">
                <div class="card-content">
                    <span class="badge badge-primary mb-2" style="background: #E0E7FF; color: #4338CA;">Astrology</span>
                    <h3 class="card-title">Consult ${astro.name}</h3>
                    <button class="btn btn-outline w-full mt-4">View Details</button>
                </div>
            </div>
        `).join('');
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderTemples('temples-grid', 3);
    renderTemples('full-temples-grid');
    renderAstrologers('astrologers-grid');
    renderAstrologers('full-astrologers-grid');
    renderPoojas('pooja-grid');
    renderAllServices('all');
});
