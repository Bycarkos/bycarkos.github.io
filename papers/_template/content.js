/* ==========================================================================
   NEW PAPER PAGE — how to use this template
   --------------------------------------------------------------------------
   1. Copy the whole  _template  folder and rename the copy, e.g.  sidtd
      (lowercase, no spaces — this becomes the web address .../papers/sidtd/)
   2. In content/data.js, on that paper's entry, set   page: "papers/sidtd/",
   3. Fill in this file. Delete anything you don't need.
   Title, authors, venue and links come automatically from content/data.js.
   (Folders starting with _ are not published, so this template stays private.)
   ========================================================================== */

window.PAPER = {
  slug: "CHANGE-ME",               // must equal the new folder name, e.g. "sidtd"

  // One line, shown big. *stars* = italic accent.
  tldr: "",

  // One or more paragraphs.
  abstract: [
    "",
  ],

  // Any number of sections, each with any number of blocks.
  sections: [
    {
      name: "Method", id: "method",
      blocks: [
        { type: "text", heading: "", body: ["Paragraph with inline math $f(x)$ and <b>bold</b>."] },
        { type: "math", tex: "E = mc^2" },
        { type: "figure", src: "img/figure1.png", label: "Fig. 1", caption: "Caption text." },
        { type: "theorem", kind: "Lemma", number: "1", name: "",
          statement: "Statement with $math$.",
          proof: ["First paragraph of the proof.", "Second paragraph."], open: false },
        { type: "code", code: "pip install my-package" },
      ],
    },
  ],

  artifacts: [
    // { kind: "Code",    label: "GitHub repository", href: "https://github.com/...", note: "" },
    // { kind: "Dataset", label: "Download dataset",  href: "https://...",           note: "" },
    // { kind: "Proofs",  label: "Full proofs (PDF)", href: "files/proofs.pdf",      note: "" },
  ],

  bibtex: ``,
};
