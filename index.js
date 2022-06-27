const projects = [
    { title: "Testimonial Grid", link: "testimonials-grid-section-main" },
    { title: "Flexbox Landing Page", link: "landing-page"},
    { title: "Expanding Cards", link: "expanding-cards"},
    { title: "Progress Steps", link: "progress-steps"},
    { title: "Rotating Navigation", link: "rotating-navigation"},
  ];
  
  const createAnchorElement = (obj) => {
    const a = document.createElement("a");
    a.textContent = obj.title;
    a.href = `./practices/${obj.link}/`;
    a.target = '_blank';
  
    if (obj.link === "#") {
      a.classList.add("disabled");
      a.title = "To be developed";
      a.href = "#";
    }
  
    return a;
  };
  
  const challengeGridEl = document.getElementById("projects");
  projects.map(createAnchorElement).forEach((el) => challengeGridEl.appendChild(el));