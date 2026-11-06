/* Builds a paper page from the content.js file in the same folder. No need to edit. */
(function () {
  const S = window.SITE, P = S.profile, D = window.PAPER;
  const { esc, authors, LINK_LABELS } = window.UI;

  // Title, authors, venue and links come from content/data.js (the entry whose page matches).
  const here = "papers/" + D.slug + "/";
  const pub = S.publications.find((p) => (p.page || "").replace(/\/?$/, "/") === here) || {};
  const title = D.title || pub.title || "Untitled";
  // Links in data.js are relative to the homepage; extraLinks are relative to this folder.
  const fromRoot = (v) => /^(https?:|mailto:|#|\/)/.test(v) ? v : "../../" + v;
  const rootLinks = Object.fromEntries(Object.entries(pub.links || {}).filter(([, v]) => v).map(([k, v]) => [k, fromRoot(v)]));
  const links = Object.entries(Object.assign({}, rootLinks, D.extraLinks)).filter(([, v]) => v)
    .map(([k, v]) => `<a href="${esc(v)}">${esc(LINK_LABELS[k] || k)}</a>`);
  if (D.bibtex) links.push(`<a href="#cite">bibtex</a>`);
  document.title = title;

  const paras = (x) => [].concat(x || []).map((p) => `<p>${p}</p>`).join("");
  const blocks = {
    text: (b) => `${b.heading ? `<h3>${esc(b.heading)}</h3>` : ""}${paras(b.body)}`,
    math: (b) => `<div class="eq">$$${b.tex}$$</div>`,
    theorem: (b) => `<div class="thm">
        <p class="thm__head"><b>${esc(b.kind || "Theorem")} ${esc(b.number || "")}</b>${b.name ? ` (${esc(b.name)})` : ""}.</p>
        <div class="thm__body">${b.statement}</div>
        ${b.proof ? `<details${b.open ? " open" : ""}><summary>Proof</summary><div class="proof">${paras(b.proof)}</div></details>` : ""}
      </div>`,
    figure: (b) => `<figure class="fig"><img src="${esc(b.src)}" alt="${esc(b.alt || "")}" loading="lazy">
        ${b.caption ? `<figcaption>${b.label ? `<b>${esc(b.label)}</b>` : ""}${b.caption}</figcaption>` : ""}</figure>`,
    code: (b) => `<pre class="code"><button class="copy" data-copy>copy</button><code>${esc(b.code)}</code></pre>`,
  };

  const out = [];
  out.push(`<p class="back"><a href="../../">← ${esc(P.name)}</a></p>
    <h1 class="paper-title">${esc(title)}</h1>
    <p class="paper-authors">${authors(pub.authors, P)}</p>
    <p class="paper-venue">${esc(pub.venue || "")} ${esc(pub.year || "")}</p>
    <p class="paper-links">${links.join("")}</p>`);
  if (D.tldr) out.push(`<p class="tldr">${esc(D.tldr).replace(/\*(.+?)\*/g, "<em>$1</em>")}</p>`);
  if (D.abstract) out.push(`<h2>Abstract</h2>${paras(D.abstract)}`);
  (D.sections || []).forEach((s) => {
    out.push(`<h2${s.id ? ` id="${esc(s.id)}"` : ""}>${esc(s.name)}</h2>${(s.blocks || []).map((b) => (blocks[b.type] || blocks.text)(b)).join("")}`);
  });
  if ((D.artifacts || []).length) {
    out.push(`<h2 id="artifacts">Artifacts</h2><ul class="artifacts">${D.artifacts.map((a) =>
      `<li>${esc(a.kind)}: <a href="${esc(a.href)}">${esc(a.label)}</a>${a.note ? ` <span class="note">(${esc(a.note)})</span>` : ""}</li>`).join("")}</ul>`);
  }
  if (D.bibtex) out.push(`<h2 id="cite">BibTeX</h2><pre class="code"><button class="copy" data-copy>copy</button><code>${esc(D.bibtex.trim())}</code></pre>`);

  const app = document.getElementById("app");
  app.innerHTML = out.join("");

  app.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", () => {
    const text = b.nextElementSibling.textContent;
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject()).then(
      () => { b.textContent = "copied"; setTimeout(() => (b.textContent = "copy"), 1500); },
      () => { b.textContent = "select & copy"; }
    );
  }));

  // Math: $...$ inline, $$...$$ display (KaTeX).
  if (window.renderMathInElement) {
    renderMathInElement(app, {
      delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
      throwOnError: false,
    });
  }
})();
