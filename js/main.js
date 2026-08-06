(function () {
  "use strict";

  var STORAGE_KEY = "lang";
  var SUPPORTED = ["en", "es"];
  var SITE_URL = "https://andrewratnikov.pages.dev";

  function urlForLang(lang) {
    return lang === "es" ? "/?lang=es" : "/";
  }

  function getInitialLang() {
    var fromQuery = new URLSearchParams(window.location.search).get("lang");
    if (fromQuery && SUPPORTED.indexOf(fromQuery) !== -1) return fromQuery;
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

  function applyLanguage(lang, opts) {
    opts = opts || {};
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

    document.querySelectorAll(".lang-toggle a").forEach(function (link) {
      var isCurrent = link.getAttribute("data-lang") === lang;
      link.setAttribute("aria-current", isCurrent ? "page" : "false");
    });

    // Keep canonical + og:url pointing at the language-specific URL so each
    // variant self-canonicalizes instead of always pointing back to English.
    var url = SITE_URL + urlForLang(lang);
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", url);
    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", url);

    renderProjects(lang);
    localStorage.setItem(STORAGE_KEY, lang);

    if (opts.updateHistory) {
      window.history.replaceState(null, "", urlForLang(lang));
    }
  }

  document.querySelectorAll(".lang-toggle a").forEach(function (link) {
    link.addEventListener("click", function (e) {
      var lang = link.getAttribute("data-lang");
      if (SUPPORTED.indexOf(lang) === -1) return;
      // Real hrefs stay in place (crawlers / no-JS visitors get a full,
      // shareable navigation); JS-enabled visitors get an instant swap.
      e.preventDefault();
      applyLanguage(lang, { updateHistory: true });
    });
  });

  applyLanguage(getInitialLang());
})();
