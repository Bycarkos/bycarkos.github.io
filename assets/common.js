/* Shared helpers. No need to edit. */
(function () {
  const esc = (s) => String(s == null ? "" : s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const LINK_LABELS = {
    pdf: "pdf", arxiv: "arXiv", code: "code", doi: "paper", dataset: "dataset",
    slides: "slides", poster: "poster", video: "video", project: "project page",
  };

  function authors(list, profile) {
    const mine = [profile.name, profile.shortName].filter(Boolean).map((n) => n.toLowerCase());
    return (list || []).map((a) =>
      mine.includes(a.toLowerCase()) ? `<span class="me">${esc(a)}</span>` : esc(a)
    ).join(", ");
  }

  window.UI = { esc, authors, LINK_LABELS };
})();
