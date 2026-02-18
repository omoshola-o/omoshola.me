// Theme toggle — matches steipete.me implementation
// Uses data-theme attribute on <html>, persists to localStorage
(function () {
  const storedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const theme = storedTheme || (prefersDark ? "dark" : "light");
  document.documentElement.setAttribute("data-theme", theme);

  function setTheme(newTheme) {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    const btn = document.querySelector("#theme-btn");
    if (btn) btn.setAttribute("aria-label", newTheme);
    document.body.style.colorScheme = newTheme;
  }

  function toggleTheme() {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
  }

  function attachListeners() {
    const btn = document.querySelector("#theme-btn");
    if (btn) {
      btn.addEventListener("click", function () {
        if (document.startViewTransition) {
          document.startViewTransition(function () {
            toggleTheme();
          });
        } else {
          toggleTheme();
        }
      });
    }
  }

  // Attach on load and on Astro page transitions
  attachListeners();
  document.addEventListener("astro:after-swap", function () {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
    attachListeners();
  });

  // Listen for system preference changes
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (e) {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });
})();
