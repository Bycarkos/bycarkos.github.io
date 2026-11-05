/* Builds the homepage from content/data.js. No need to edit. */
(function () {
  const S = window.SITE, P = S.profile;
  const { esc, authors, LINK_LABELS } = window.UI;
  const out = [];

  document.title = P.name;

  // Intro: name, bio, links, photo
  const links = Object.entries(S.links || {}).filter(([, v]) => v)
    .map(([k, v]) => `<a href="${esc(v)}">${esc(k)}</a>`);
  if (P.cv && !(S.links || {}).CV) links.splice(1, 0, `<a href="${esc(P.cv)}">CV</a>`);
  out.push(`<div class="intro">
    <div class="intro__text">
      <h1 class="name">${esc(P.name)}</h1>
      ${(P.bio || []).map((t) => `<p>${t}</p>`).join("")}
      <p class="links">${links.join("")}</p>
    </div>
    ${P.photo ? `<div class="intro__photo"><img src="${esc(P.photo)}" alt="${esc(P.name)}"></div>` : ""}
  </div>`);

  // News
  if ((S.news || []).length) {
    out.push(`<h2>News</h2><ul class="list">${S.news.map((n) =>
      `<li><span class="when">${esc(n.date)}</span><span>${n.text}</span></li>`).join("")}</ul>`);
  }

  // Research
  if ((S.publications || []).length) {
    out.push(`<h2>Research</h2>${S.researchIntro ? `<p>${S.researchIntro}</p>` : ""}`);
    out.push(`<ul class="pubs">${S.publications.map((p) => {
      const l = Object.entries(p.links || {}).filter(([, v]) => v)
        .map(([k, v]) => `<a href="${esc(v)}">${esc(LINK_LABELS[k] || k)}</a>`);
      if (p.page) l.unshift(`<a href="${esc(p.page)}">project page</a>`);
      const main = p.page || Object.values(p.links || {}).find(Boolean);
      const title = main ? `<a href="${esc(main)}">${esc(p.title)}</a>` : esc(p.title);
      const thumb = p.image
        ? `<img src="${esc(p.image)}" alt="" loading="lazy">`
        : `<div class="ph">${esc(p.venue)} ${esc(p.year)}</div>`;
      return `<li class="pub${p.featured ? " featured" : ""}">
        <div class="pub__thumb">${thumb}</div>
        <div class="pub__body">
          <p class="pub__title">${title}</p>
          <p class="pub__authors">${authors(p.authors, P)}</p>
          <p><span class="pub__venue">${esc(p.venue)}</span>, ${esc(p.year)}</p>
          <p class="pub__links">${l.join("")}</p>
          ${p.summary ? `<p class="pub__sum">${esc(p.summary)}</p>` : ""}
        </div></li>`;
    }).join("")}</ul>`);
  }

  // Education / Other
  [["Education", S.education], ["Other", S.other]].forEach(([name, list]) => {
    if ((list || []).length) {
      out.push(`<h2>${name}</h2><ul class="list">${list.map((r) =>
        `<li><span class="when">${esc(r.when)}</span><span>${r.text}</span></li>`).join("")}</ul>`);
    }
  });

  out.push(`<p class="footer">Design inspired by <a href="https://jonbarron.info/">Jon Barron</a>'s website.</p>`);

  document.getElementById("app").innerHTML = out.join("");
})();
