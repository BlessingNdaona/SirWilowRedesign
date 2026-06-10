const filterButtons = document.querySelectorAll(".filter-button");
const portfolioCards = document.querySelectorAll(".portfolio-card");
const themeToggle = document.querySelector(".theme-toggle");
const contactForm = document.querySelector("[data-contact-form]");
const projects = window.WILOW_PROJECTS || [];

const projectUrl = (id) => `work.html?project=${encodeURIComponent(id)}`;

const renderProjectHub = () => {
  const hub = document.querySelector("[data-project-hub]");
  if (!hub || !projects.length) return;

  hub.innerHTML = projects
    .map(
      (project) => `
        <article class="project-hub-card reveal">
          <a href="${projectUrl(project.id)}">
            <img src="${project.cover}" alt="${project.title}" loading="lazy" decoding="async" />
            <span class="project-link">Open project</span>
          </a>
          <p class="category">${project.category}</p>
          <h2>${project.title}</h2>
          <p>${project.deck}</p>
        </article>
      `
    )
    .join("");
};

const renderProjectDetail = () => {
  const detail = document.querySelector("[data-project-detail]");
  if (!detail || !projects.length) return;

  const params = new URLSearchParams(window.location.search);
  const requestedProject = params.get("project");
  const project = projects.find((item) => item.id === requestedProject) || projects[0];
  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  document.title = `${project.title} - Wilow Diallo`;

  detail.innerHTML = `
    <header class="project-detail-hero reveal">
      <div>
        <p class="eyebrow">${project.category}</p>
        <h1>${project.title}</h1>
        <p>${project.deck}</p>
      </div>
      <dl class="project-meta">
        <div>
          <dt>Role</dt>
          <dd>${project.role}</dd>
        </div>
        <div>
          <dt>Location</dt>
          <dd>${project.location}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>${project.year}</dd>
        </div>
      </dl>
    </header>

    <figure class="project-detail-cover reveal">
      <img src="${project.cover}" alt="${project.title}" loading="eager" decoding="async" fetchpriority="high" />
    </figure>

    <section class="project-detail-body reveal" aria-label="Project description">
      <p>${project.body}</p>
      <a class="text-link" href="index.html">Back to project archive</a>
    </section>

    <section class="project-detail-masonry" id="process" aria-label="${project.title} image gallery">
      ${project.images
        .map(
          (image, index) => `
            <figure class="project-detail-card reveal">
              <img src="${image}" alt="${project.title} image ${index + 1}" loading="lazy" decoding="async" />
              <figcaption>${project.title} - image ${String(index + 1).padStart(2, "0")}</figcaption>
            </figure>
          `
        )
        .join("")}
    </section>

    <nav class="project-switcher reveal" aria-label="Project navigation">
      <a href="${projectUrl(previous.id)}">Previous / ${previous.title}</a>
      <a href="${projectUrl(next.id)}">Next / ${next.title}</a>
    </nav>
  `;
};

renderProjectHub();
renderProjectDetail();

document.querySelectorAll("img").forEach((image) => {
  if (!image.hasAttribute("decoding")) {
    image.setAttribute("decoding", "async");
  }

  if (!image.hasAttribute("loading")) {
    image.setAttribute("loading", "lazy");
  }
});

document.querySelectorAll(".hero-media img").forEach((image) => {
  image.setAttribute("loading", "eager");
  image.setAttribute("fetchpriority", "high");
});

const storedTheme = localStorage.getItem("wilow-theme");
if (storedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

if (themeToggle) {
  themeToggle.setAttribute("aria-pressed", String(document.body.classList.contains("dark-mode")));

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    themeToggle.setAttribute("aria-pressed", String(isDark));
    localStorage.setItem("wilow-theme", isDark ? "dark" : "light");
  });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    portfolioCards.forEach((card) => {
      const isVisible = filter === "all" || card.dataset.category === filter;
      card.hidden = !isVisible;
    });
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const projectType = formData.get("project_type") || "Project enquiry";
    const message = formData.get("message") || "";
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:contact@sirwilow.com?subject=${encodeURIComponent(
      `Website enquiry - ${projectType}`
    )}&body=${encodeURIComponent(body)}`;
  });
}
