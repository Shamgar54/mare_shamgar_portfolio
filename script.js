document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Ajuste pour éviter que le menu cache le titre
                    behavior: "smooth"
                });
            }
        });
    });
    
    // Changer l'état actif du menu
    window.addEventListener("scroll", () => {
        let fromTop = window.scrollY + 100; // Ajuste pour la hauteur du menu
        
        links.forEach(link => {
            const section = document.getElementById(link.getAttribute("href").substring(1));
            
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                links.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typing-text");
    const words = ["Web Developer", "Data Entry Expert", "Designer"];
    const colors = ["#ffcc00", "#00ffcc", "#ff6699"]; // Couleurs des mots
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];
        textElement.innerHTML = currentWord.substring(0, charIndex);
        textElement.style.borderBottomColor = colors[wordIndex]; // Couleur soulignement
        textElement.style.color = colors[wordIndex]; // Couleur texte

        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeEffect, 100); // Vitesse d'écriture
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, 50); // Vitesse d'effacement
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(typeEffect, 1000); // Pause avant le prochain mot
        }
    }

    typeEffect();
});
document.addEventListener("DOMContentLoaded", function () {
    function animateSkills() {
        const progressBars = document.querySelectorAll(".skill-progress");
        progressBars.forEach(bar => {
            const value = bar.getAttribute("data-progress");
            bar.style.width = value + "%";
        });
    }
    
    const skillsSection = document.querySelector(".skills");
    function checkScroll() {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            animateSkills();
            window.removeEventListener("scroll", checkScroll);
        }
    }
    
    window.addEventListener("scroll", checkScroll);
    checkScroll();
});
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");
            
            portfolioItems.forEach(item => {
                // Vérifie si l'élément appartient à la catégorie choisie
                if (category === "all" || item.classList.contains(category)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
