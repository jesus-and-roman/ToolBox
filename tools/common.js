// Thème clair/sombre, partagé par la page d'accueil et les pages d'outils.
(function () {
  const stored = localStorage.getItem("atelier-theme");
  if (stored) document.documentElement.setAttribute("data-theme", stored);
})();

function initThemeToggle(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  function paint() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    btn.innerHTML = icon(isLight ? "moon" : "sun") + "<span>" + (isLight ? "Sombre" : "Clair") + "</span>";
  }

  btn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("atelier-theme", next);
    paint();
  });

  paint();
}

function copyToClipboard(text, btnEl) {
  navigator.clipboard.writeText(text).then(() => {
    if (!btnEl) return;
    const original = btnEl.innerHTML;
    btnEl.innerHTML = "Copié";
    setTimeout(() => (btnEl.innerHTML = original), 1200);
  });
}
