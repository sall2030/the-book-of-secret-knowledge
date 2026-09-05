(function () {
  "use strict";

  var header = document.querySelector("[data-header]");
  var toggle = document.querySelector("[data-menu-toggle]");
  var panel = document.querySelector("[data-menu-panel]");
  var form = document.querySelector("[data-contact-form]");
  var statusEl = document.querySelector("[data-form-status]");
  var roleButtons = document.querySelectorAll("[data-role]");
  var selectedRole = "horseman";

  var roleLabels = {
    horseman: "Horseman",
    expert: "Expert",
    partner: "Partner",
    organisation: "Racing organisation",
    technology: "Technology partner"
  };

  var horizonNotes = {
    "race-prediction": "I am writing about Race Prediction.",
    "smart-digital-stable": "I am writing about the Smart Digital Stable.",
    "expert-agents": "I am writing about Expert Agents.",
    commentary: "I am writing about Commentary Intelligence.",
    bloodstock: "I am writing about Bloodstock / Sales Intelligence.",
    "computer-vision": "I am writing about Computer Vision.",
    "red-team-x": "I am writing about Red Team X."
  };

  var scrolled = false;
  var scrollTick = false;

  function onScroll() {
    if (!header || scrollTick) return;
    scrollTick = true;
    window.requestAnimationFrame(function () {
      var next = window.scrollY > 8;
      if (next !== scrolled) {
        scrolled = next;
        header.classList.toggle("is-scrolled", scrolled);
      }
      scrollTick = false;
    });
  }

  function closeMenu() {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      panel.classList.toggle("is-open", !open);
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach(function (node) {
      observer.observe(node);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (node) {
      node.classList.add("is-in");
    });
  }

  roleButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedRole = button.getAttribute("data-role") || "horseman";
      roleButtons.forEach(function (other) {
        other.setAttribute("aria-pressed", String(other === button));
      });
    });
  });

  var params = new URLSearchParams(window.location.search);
  var horizon = params.get("horizon");
  var roleParam = params.get("role");
  var message = document.getElementById("message");

  if (roleParam && roleLabels[roleParam]) {
    selectedRole = roleParam;
    roleButtons.forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-role") === roleParam));
    });
  }

  if (horizon && message && !message.value) {
    message.value = horizonNotes[horizon] || "";
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = (form.elements.namedItem("name") || {}).value || "";
      var email = (form.elements.namedItem("email") || {}).value || "";
      var body = (form.elements.namedItem("message") || {}).value || "";
      var role = roleLabels[selectedRole] || "Horseman";
      var subject = "TASA11 conversation — " + role;
      var letter = [
        "Name: " + name,
        "Email: " + email,
        "Role: " + role,
        "",
        body
      ].join("\n");

      var href =
        "mailto:hello@tasa11.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(letter);

      if (statusEl) {
        statusEl.textContent = "Opening your mail application.";
      }

      window.location.href = href;
    });
  }

  window.TASA11 = {
    version: "1.0.0",
    routes: {
      home: "/",
      contact: "/contact/",
      ecosystem: "/#ecosystem",
      stack: "/#stack",
      proof: "/#proof",
      horizons: "/#horizons",
      redTeamX: "/#red-team-x",
      vision: "/#vision"
    },
    horizons: [
      "race-prediction",
      "smart-digital-stable",
      "expert-agents",
      "commentary",
      "bloodstock",
      "computer-vision"
    ],
    intersections: [
      "red-team-x",
      "smart-digital-stable",
      "expert-agent-marketplace",
      "computer-vision",
      "racing-intelligence",
      "bloodstock-intelligence"
    ]
  };
})();
