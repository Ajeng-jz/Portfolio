// Gallery Data
const galleryItems = [
  {
    image: "produk1.png",
    link: "#",
  },
  {
    image: "produk2.png",
    link: "#",
  },
  {
    image: "produk3.png",
    link: "#",
  },
  {
    image: "produk4.png",
    link: "#",
  },
  {
    image: "produk5.png",
    link: "#",
  },
  // Add more items as needed
];

// Initialize Gallery
function initGallery() {
  const container = document.querySelector(".gallery-container");
  const wrapper = document.createElement("div");
  wrapper.className = "gallery-wrapper";

  galleryItems.forEach((item) => {
    wrapper.innerHTML += `
            <div class="gallery-item">
                <img src="${item.image}" alt="Gallery">
                <a href="${item.link}" class="detail-btn green-button">Detail</a>
            </div>
        `;
  });
  container.appendChild(wrapper);
}

// Horizontal Scroll
function initHorizontalScroll() {
  const container = document.querySelector(".gallery-container");
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.style.cursor = "grabbing";
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.style.cursor = "grab";
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  });
}

// Initialize when document is loaded
document.addEventListener("DOMContentLoaded", () => {
  initGallery();
  initHorizontalScroll();
});

// Active Navigation
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    document
      .querySelectorAll("nav a")
      .forEach((a) => a.classList.remove("active"));
    this.classList.add("active");
  });
});
// Contact Form Handler
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const mailtoLink = `mailto:simbah.researcc@gmail.com?subject=Contact Form Submission&body=Name: ${formData.get(
    "name"
  )}%0D%0AEmail: ${formData.get("email")}%0D%0AMessage: ${formData.get(
    "message"
  )}`;
  window.location.href = mailtoLink;
});

//interactive profile
document.addEventListener("DOMContentLoaded", function () {
  const skillBadges = document.querySelectorAll(".skill-badge");
  const timelineContents = document.querySelectorAll(".timeline-content");
  const defaultContent = document.getElementById("default-content");

  skillBadges.forEach((badge) => {
    badge.addEventListener("click", function () {
      // Remove active class from all badges
      skillBadges.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked badge
      this.classList.add("active");

      // Hide all content sections
      timelineContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Show selected content
      const skillId = this.dataset.skill;
      const selectedContent = document.getElementById(skillId);

      if (selectedContent) {
        selectedContent.classList.add("active");
      } else {
        // If no specific content exists, show default content
        defaultContent.classList.add("active");
      }
    });
  });
});
