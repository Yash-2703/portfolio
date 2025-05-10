  window.addEventListener("scroll", () => {
    const home = document.getElementById("home");
    const logo = document.getElementById("logo");
    const centerName = document.getElementById("centerName");
    

    const homeTop = home.offsetTop;
    const homeHeight = home.offsetHeight;
    const scrollY = window.scrollY;

    if (scrollY >= homeTop && scrollY < homeTop + homeHeight - 10) {
      logo.classList.add("hide");
      centerName.classList.remove("hide");
    } else {
      logo.classList.remove("hide");
      centerName.classList.add("hide");
    }

    // Active nav highlighting
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
    const title = document.getElementById("animatedTitle");
    const cards = document.getElementById("projectCards");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          title.classList.add("animate");
          cards.classList.add("animate");
          observer.unobserve(entry.target); // run only once
        }
      });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector("#projects"));
  });
