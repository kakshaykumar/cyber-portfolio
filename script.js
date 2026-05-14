// ── MOBILE NAV ───────────────────────────────────────────────

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ── REVEAL ON SCROLL ─────────────────────────────────────────

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ── TYPING ANIMATION ─────────────────────────────────────────

const typingTarget = document.getElementById("typing-role");

if (typingTarget) {
  const roles = [
    "SOC Analyst",
    "Blue Team Defender",
    "Network Security Engineer",
    "Cloud Security Analyst",
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const TYPING_SPEED = 75;
  const DELETE_SPEED = 40;
  const PAUSE_MS = 2200;

  function type() {
    const current = roles[roleIndex];

    if (isDeleting) {
      typingTarget.textContent = current.slice(0, charIndex - 1);
      charIndex--;
    } else {
      typingTarget.textContent = current.slice(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => { isDeleting = true; type(); }, PAUSE_MS);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? DELETE_SPEED : TYPING_SPEED);
  }

  // Small delay before starting so page loads first
  setTimeout(type, 800);
}

// ── PROGRESS BAR ANIMATION ───────────────────────────────────

const progCards = document.querySelectorAll(".skill-prog-card");

if (progCards.length) {
  const progObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger each bar inside the card
          entry.target.querySelectorAll(".prog-bar").forEach((bar, i) => {
            const w = bar.getAttribute("data-w");
            if (w) {
              setTimeout(() => {
                bar.style.setProperty("--target-w", w + "%");
                bar.classList.add("animated");
              }, i * 120);
            }
          });
          progObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  progCards.forEach((card) => progObserver.observe(card));
}