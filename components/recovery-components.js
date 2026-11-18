
/*
 * Recovery NM — Shared Website Components
 * Loads the common header and footer.
 */

(function () {
  "use strict";

  async function loadComponent(id, path) {
    const target = document.getElementById(id);
    if (!target) return;

    try {
      const response = await fetch(path, {
        cache: "no-cache"
      });

      if (!response.ok) {
        throw new Error(
          "Unable to load " + path + ": " + response.status
        );
      }

      target.innerHTML = await response.text();
    } catch (error) {
      console.error("Recovery NM component error:", error);
    }
  }

  function initializeNavigation() {
    const button = document.querySelector(
      "#site-header .toggle"
    );
    const nav = document.querySelector(
      "#site-header #nav"
    );

    if (!button || !nav) return;

    button.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("open");

      button.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      button.textContent = isOpen ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
        button.textContent = "☰";
      });
    });
  }

  async function initializeComponents() {
    await Promise.all([
      loadComponent(
        "site-header",
        "/components/header.html"
      ),
      loadComponent(
        "site-footer",
        "/components/footer.html"
      )
    ]);

    initializeNavigation();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initializeComponents
    );
  } else {
    initializeComponents();
  }
})();
