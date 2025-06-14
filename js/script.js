// ✅ 1. Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".feature-item, .hero-content, section h2, .btn"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animatedElements.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});

// ✅ 2. Floating Animation on CTA Button
document.addEventListener("DOMContentLoaded", () => {
  const ctaButton = document.querySelector(".call-to-action .btn");
  if (ctaButton) {
    ctaButton.classList.add("floating");
  }
});

// ✅ 3. Image Hover Zoom Effect
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img");

  images.forEach((img) => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.transition = "transform 0.3s ease";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});

// ✅ 4. Global checkQuiz function (Moved outside DOMContentLoaded!)
function checkQuiz() {
  let score = 0;

  const answers = {
    q1: "B",
    q2: "5",
    q3: "1"
  };

  const userAnswers = {
    q1: document.querySelector('input[name="q1"]:checked')?.value,
    q2: document.querySelector('input[name="q2"]:checked')?.value,
    q3: document.querySelector('input[name="q3"]:checked')?.value
  };

  let unanswered = false;

  for (let q in answers) {
    if (!userAnswers[q]) {
      unanswered = true;
      break;
    }
  }

  const result = document.getElementById("result");

  if (unanswered) {
    result.textContent = "Please answer all questions before submitting.";
    result.style.color = "red";
  } else {
    for (let q in answers) {
      if (userAnswers[q] === answers[q]) {
        score++;
      }
    }
    result.textContent = `You scored ${score} out of 3! `;
    result.style.color = "blue";
  }

  // Simple form feedback without actual submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.style.color = "red";
      status.textContent = "Please fill in all fields.";
    } else {
      status.style.color = "green";
      status.textContent = "Message sent successfully! We'll get back to you soon.";
      form.reset();
    }
  });
});

}
