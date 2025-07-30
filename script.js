// Count-up animation for followers and engagement
function animateCountUp(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 20);
  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(start);
  }, 20);
}

// On page load - animate initial stats
window.addEventListener("DOMContentLoaded", () => {
  const followersCount = document.getElementById("followers-count");
  const engagementCount = document.getElementById("engagement-count");

  if (followersCount && engagementCount) {
    animateCountUp(followersCount, 1480); // Example
    animateCountUp(engagementCount, 327); // Example
  }
});


function animateCountUp(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 20);
  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(start);
  }, 20);
}

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".count-up").forEach((el) => {
    const target = parseInt(el.dataset.target);
    animateCountUp(el, target);
  });
});


function animateCountUp(el, target, duration = 800) {
  let start = parseInt(el.textContent.replace(/,/g, '')) || 0;
  const step = (target - start) / (duration / 16);
  let current = start;

  const interval = setInterval(() => {
    current += step;
    if ((step > 0 && current >= target) || (step < 0 && current <= target)) {
      current = target;
      clearInterval(interval);
    }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

const followersEl = document.getElementById("followers-count");

let followers = 1480;

document.getElementById("beforeBtn").addEventListener("click", () => {
  followers = 1480;
  followersEl.parentElement.parentElement.classList.remove("highlight-green");
  animateCountUp(followersEl, followers);
  setActive("beforeBtn");
});

document.getElementById("afterBtn").addEventListener("click", () => {
  followers = 2313873;
  followersEl.parentElement.parentElement.classList.add("highlight-green");
  animateCountUp(followersEl, followers);
  setActive("afterBtn");
});

function setActive(id) {
  document.getElementById("beforeBtn").classList.remove("active");
  document.getElementById("afterBtn").classList.remove("active");
  document.getElementById(id).classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  animateCountUp(followersEl, followers);
});

let afterClicked = false;

document.getElementById("afterBtn").addEventListener("click", () => {
  if (afterClicked) return; // Prevent re-trigger
  afterClicked = true;

  followers = 2313873;
  followersEl.parentElement.parentElement.classList.add("highlight-green");
  animateCountUp(followersEl, followers);
  setActive("afterBtn");

  // 🎉 Confetti trigger
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
});

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".feature-card", {
    scrollTrigger: {
      trigger: ".features-grid",
      start: "top 80%",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
  });
