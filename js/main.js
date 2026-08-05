(function () {
  "use strict";

  var STORAGE_KEY = "lang";
  var SUPPORTED = ["en", "es"];

  function getInitialLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED.indexOf(saved) !== -1) return saved;
    var browserLang = (navigator.language || "en").slice(0, 2);
    return SUPPORTED.indexOf(browserLang) !== -1 ? browserLang : "en";
  }

  function renderProjects(lang) {
    var grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.textContent = "";
    PROJECTS.forEach(function (project) {
      var card = document.createElement("article");
      card.className = "project-card";

      var title = document.createElement("h3");
      var link = document.createElement("a");
      link.href = project.url;
      link.textContent = project.title[lang];
      title.appendChild(link);
      card.appendChild(title);

      var desc = document.createElement("p");
      desc.textContent = project.desc[lang];
      card.appendChild(desc);

      var tags = document.createElement("ul");
      tags.className = "card__tags";
      project.tags.forEach(function (tag) {
        var li = document.createElement("li");
        li.textContent = tag;
        tags.appendChild(li);
      });
      card.appendChild(tags);

      var viewLink = document.createElement("a");
      viewLink.className = "project-card__link";
      viewLink.href = project.url;
      viewLink.textContent = (I18N[lang]["projects.viewProject"] || "View project") + " →";
      card.appendChild(viewLink);

      grid.appendChild(card);
    });
  }

  function applyLanguage(lang) {
    var dict = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-attr");
      if (dict[key]) el.setAttribute("content", dict[key]);
    });

    document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === lang));
    });

    renderProjects(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }

  document.querySelectorAll(".lang-toggle button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  applyLanguage(getInitialLang());
})();
