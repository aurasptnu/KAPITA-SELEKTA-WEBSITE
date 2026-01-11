// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and sections
const animatedElements = document.querySelectorAll(
    '.glass-card, .objective-card, .theory-card, .comparison-card, .analogy-card, .cert-type-card, .candidate-card'
);

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Navbar Background on Scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink?.classList.add('active');
        } else {
            navLink?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Parallax Effect for Hero Section
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Card Tilt Effect (3D)
const cards = document.querySelectorAll('.glass-card');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// Case Study Analysis Data
const analysisData = {
    a: {
        title: 'Kandidat A - Si Akademisi',
        avatar: '👨‍🎓',
        verdict: 'PANGGIL UNTUK INTERVIEW',
        verdictClass: 'verdict-maybe',
        analysis: [
            {
                icon: '✅',
                title: 'Kelebihan',
                points: [
                    'IPK tinggi menunjukkan kemampuan belajar yang baik',
                    'Fondasi teori yang kuat dari pendidikan S1',
                    'Potensial untuk berkembang cepat dengan training',
                    'Fresh graduate dengan semangat tinggi'
                ]
            },
            {
                icon: '⚠️',
                title: 'Kekurangan',
                points: [
                    'Tidak ada pengalaman praktis di dunia kerja',
                    'Tidak memiliki sertifikasi yang relevan (CCNA)',
                    'Butuh waktu training lebih lama untuk siap kerja',
                    'Belum terbukti bisa menerapkan teori ke praktik'
                ]
            },
            {
                icon: '💡',
                title: 'Rekomendasi HRD',
                points: [
                    'Panggil untuk interview jika perusahaan punya program training',
                    'Cocok untuk posisi junior dengan mentoring intensif',
                    'Pertimbangkan jika budget training tersedia',
                    'Tanyakan kesediaan untuk mengambil sertifikasi CCNA'
                ]
            }
        ],
        conclusion: 'Kandidat A memiliki potensi bagus dengan fondasi akademis yang kuat, namun membutuhkan investasi waktu dan biaya untuk training. Cocok jika perusahaan mencari fresh graduate yang bisa dibentuk.'
    },
    b: {
        title: 'Kandidat B - Si Spesialis',
        avatar: '👨‍💼',
        verdict: 'KANDIDAT TERBAIK - PRIORITAS TINGGI',
        verdictClass: 'verdict-best',
        analysis: [
            {
                icon: '✅',
                title: 'Kelebihan',
                points: [
                    'Punya CCNA - sertifikasi yang SESUAI dengan kebutuhan posisi',
                    '2 tahun pengalaman kerja - sudah terbukti di lapangan',
                    'Bisa langsung produktif dengan minimal training',
                    'Kombinasi skill praktis dan sertifikasi terstandar'
                ]
            },
            {
                icon: '⚠️',
                title: 'Kekurangan',
                points: [
                    'Tidak punya gelar S1 (tapi tidak krusial untuk posisi teknis)',
                    'Mungkin ekspektasi gaji lebih tinggi karena pengalaman'
                ]
            },
            {
                icon: '💡',
                title: 'Rekomendasi HRD',
                points: [
                    'PANGGIL SEGERA - kandidat paling qualified',
                    'Prioritaskan untuk interview tahap awal',
                    'Siapkan penawaran kompetitif untuk mengamankan kandidat',
                    'Kandidat ini adalah "ready to work" - ROI tercepat'
                ]
            }
        ],
        conclusion: 'Kandidat B adalah pilihan TERBAIK. Kombinasi sertifikasi CCNA dan 2 tahun pengalaman membuat dia bisa langsung berkontribusi. Ini adalah contoh ideal: Skill (Sertifikasi) + Pengalaman = Produktivitas Instan.'
    },
    c: {
        title: 'Kandidat C - Si Kolektor',
        avatar: '👨‍💻',
        verdict: 'HATI-HATI - PERLU VERIFIKASI',
        verdictClass: 'verdict-caution',
        analysis: [
            {
                icon: '✅',
                title: 'Kelebihan',
                points: [
                    'Punya banyak sertifikasi (CCNA, AWS, A+, dll)',
                    'Menunjukkan motivasi untuk belajar',
                    'Punya gelar S1'
                ]
            },
            {
                icon: '❌',
                title: 'Red Flags (Tanda Bahaya)',
                points: [
                    'IPK rendah (2.5) - fokus ujian sertifikasi, bukan belajar',
                    '0 pengalaman kerja - sertifikasi tanpa praktik',
                    'Terlalu banyak sertifikasi dalam waktu singkat - indikasi brain dumping?',
                    'Tidak ada bukti bisa menerapkan skill di dunia nyata'
                ]
            },
            {
                icon: '⚠️',
                title: 'Isu Etis: Brain Dumping',
                points: [
                    'Brain dumping = menghafalkan bocoran soal ujian sertifikasi',
                    'Kandidat lulus ujian tapi tidak benar-benar menguasai skill',
                    'Ini adalah PELANGGARAN ETIKA dan merugikan industri',
                    'Sertifikasi menjadi tidak bermakna jika didapat dengan cara curang'
                ]
            },
            {
                icon: '💡',
                title: 'Rekomendasi HRD',
                points: [
                    'Jika dipanggil, lakukan technical test mendalam',
                    'Tanyakan detail tentang setiap sertifikasi dan pengalaman praktisnya',
                    'Verifikasi apakah dia benar-benar menguasai skill atau hanya hafal soal',
                    'Pertimbangkan kandidat lain yang lebih terbukti'
                ]
            }
        ],
        conclusion: 'Kandidat C adalah contoh "sertifikasi tanpa substansi". Banyak sertifikasi tidak menjamin kompetensi jika tidak disertai pengalaman praktis. HRD harus waspada terhadap kandidat yang fokus mengoleksi sertifikasi tapi IPK rendah dan tanpa pengalaman - ini bisa jadi indikasi brain dumping.'
    }
};

// Show Analysis Modal
function showAnalysis(candidate) {
    const modal = document.getElementById('analysisModal');
    const content = document.getElementById('analysisContent');
    const data = analysisData[candidate];
    
    let html = `
        <div class="analysis-header">
            <div class="analysis-avatar">${data.avatar}</div>
            <h2 class="analysis-title">${data.title}</h2>
            <div class="verdict ${data.verdictClass}">${data.verdict}</div>
        </div>
        <div class="analysis-body">
    `;
    
    data.analysis.forEach(section => {
        html += `
            <div class="analysis-section">
                <h3 class="analysis-section-title">
                    <span class="section-icon">${section.icon}</span>
                    ${section.title}
                </h3>
                <ul class="analysis-list">
                    ${section.points.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    
    html += `
            <div class="analysis-conclusion">
                <h3 class="conclusion-title">📊 Kesimpulan</h3>
                <p class="conclusion-text">${data.conclusion}</p>
            </div>
        </div>
    `;
    
    content.innerHTML = html;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Analysis Modal
function closeAnalysis() {
    const modal = document.getElementById('analysisModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.getElementById('analysisModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'analysisModal') {
        closeAnalysis();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAnalysis();
    }
});

// Add dynamic styles for analysis modal
const analysisStyles = document.createElement('style');
analysisStyles.textContent = `
    .analysis-header {
        text-align: center;
        padding-bottom: var(--spacing-md);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: var(--spacing-md);
    }
    
    .analysis-avatar {
        font-size: 4rem;
        margin-bottom: var(--spacing-sm);
    }
    
    .analysis-title {
        font-family: 'Orbitron', sans-serif;
        font-size: 1.8rem;
        color: var(--text-primary);
        margin-bottom: var(--spacing-sm);
    }
    
    .verdict {
        display: inline-block;
        padding: var(--spacing-xs) var(--spacing-md);
        border-radius: 50px;
        font-weight: 700;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
    
    .verdict-best {
        background: rgba(16, 185, 129, 0.2);
        color: var(--primary-green);
        border: 2px solid var(--primary-green);
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
    }
    
    .verdict-maybe {
        background: rgba(245, 158, 11, 0.2);
        color: var(--accent-orange);
        border: 2px solid var(--accent-orange);
    }
    
    .verdict-caution {
        background: rgba(239, 68, 68, 0.2);
        color: #ef4444;
        border: 2px solid #ef4444;
    }
    
    .analysis-body {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-md);
    }
    
    .analysis-section {
        background: rgba(255, 255, 255, 0.02);
        padding: var(--spacing-sm);
        border-radius: var(--radius-sm);
        border-left: 3px solid var(--primary-blue);
    }
    
    .analysis-section-title {
        font-family: 'Orbitron', sans-serif;
        font-size: 1.2rem;
        color: var(--text-primary);
        margin-bottom: var(--spacing-sm);
        display: flex;
        align-items: center;
        gap: var(--spacing-xs);
    }
    
    .section-icon {
        font-size: 1.5rem;
    }
    
    .analysis-list {
        list-style: none;
        padding-left: 0;
    }
    
    .analysis-list li {
        padding: var(--spacing-xs) 0;
        color: var(--text-secondary);
        position: relative;
        padding-left: 1.5rem;
        line-height: 1.6;
    }
    
    .analysis-list li::before {
        content: '▸';
        position: absolute;
        left: 0;
        color: var(--primary-blue);
    }
    
    .analysis-conclusion {
        background: rgba(14, 165, 233, 0.1);
        padding: var(--spacing-md);
        border-radius: var(--radius-sm);
        border: 1px solid var(--primary-blue);
    }
    
    .conclusion-title {
        font-family: 'Orbitron', sans-serif;
        font-size: 1.3rem;
        color: var(--primary-blue);
        margin-bottom: var(--spacing-sm);
    }
    
    .conclusion-text {
        color: var(--text-secondary);
        line-height: 1.8;
        font-size: 1.05rem;
    }
`;
document.head.appendChild(analysisStyles);

// Initialize on load
window.addEventListener('load', () => {
    // Trigger initial animation
    setTimeout(() => {
        animatedElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 50);
        });
    }, 300);
});

console.log('%c🎓 Universitas Lampung - Teknik Informatika', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
console.log('%cInvest in Your Skills! 🚀', 'color: #a855f7; font-size: 14px;');
