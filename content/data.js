/* ==========================================================================
   SITE CONTENT — the only file you need to edit for the homepage.
   • Text goes between quotes. Every item in a list ends with a comma.
   • Leave a list empty  []  to hide that section.
   • Lines starting with  //  are notes; the website ignores them.
   • ✎ CHECK = filled in from public sources, please confirm.
   ========================================================================== */

window.SITE = {

  profile: {
    name: "Carlos Boned Riera",
    shortName: "Carlos Boned",
    email: "cboned@cvc.uab.cat",
    // Paragraphs under your name. You can use HTML links: <a href="...">text</a>
    bio: [
      "I'm a PhD student at the <a href=\"https://www.cvc.uab.es/\">Computer Vision Center</a> (Universitat Autònoma de Barcelona), advised by Oriol Ramos Terrades.",  // ✎ CHECK
      "I work on deep learning and computer vision, in particular neural ODEs, Vision Transformers and document analysis. Before the PhD I did a BSc in Data Engineering at UAB.",
    ],
    // Photo: put a square image in assets/img/ and write its path, e.g. "assets/img/carlos.jpg"
    photo: "assets/img/carlos.webp",
    // CV: put the PDF in assets/ and write its path, e.g. "assets/cv.pdf"
    cv: "",
  },

  // Shown under the bio, separated by "/". Leave "" to hide one.
  links: {
    Email: "mailto:cboned@cvc.uab.cat",
    CV: "",
    Scholar: "",                                     // ✎ paste your Google Scholar URL
    ORCID: "https://orcid.org/0009-0000-6041-0931",
    GitHub: "",
    LinkedIn: "",
  },

  // Short paragraph above the paper list.
  researchIntro:
    "I'm interested in deep learning, continuous-time models and document understanding. Highlighted papers are my main work.",

  /* ---------- PUBLICATIONS — newest first ----------------------------------
     featured: true   → highlighted row
     image:           → thumbnail, e.g. "assets/img/odevit.png" (leave "" for a grey box)
     page:            → your own page for this paper, e.g. "papers/ode-vit/" (or "")
     links:           → any of pdf, arxiv, code, doi, dataset, slides, poster, video       */
  publications: [
    {
      title: "ODE-ViT: Plug & Play Attention Layer from the Generalization of the ViT as an Ordinary Differential Equation",
      authors: ["Carlos Boned Riera", "David Romero Sanchez", "Oriol Ramos Terrades"],
      venue: "arXiv",
      year: 2025,
      featured: true,
      image: "",
      summary: "The Vision Transformer written as an ODE: competitive on CIFAR-10/100 with up to 10× fewer parameters.",
      page: "papers/ode-vit/",
      links: { arxiv: "https://arxiv.org/abs/2511.16501" },
    },
    {
      title: "Recurrent Few-Shot Model for Document Verification",
      authors: ["Maxime Talarmain", "Carlos Boned Riera", "Sanket Biswas", "Oriol Ramos Terrades"],
      venue: "ICDAR",
      year: 2024,
      featured: false,
      image: "",
      summary: "Verifying identity documents with only a few genuine examples per class.",
      page: "",
      links: { doi: "https://doi.org/10.1007/978-3-031-70533-5_4" },
    },
    {
      title: "GeoContrastNet: Contrastive Key-Value Edge Learning for Language-Agnostic Document Understanding",
      authors: ["Nil Biescas", "Carlos Boned Riera", "Josep Lladós", "Sanket Biswas"],
      venue: "ICDAR",
      year: 2024,
      featured: false,
      image: "",
      summary: "Key–value relations in forms from geometry and visual features, without OCR text.",
      page: "",
      links: { arxiv: "https://arxiv.org/abs/2405.03104" },
    },
    {
      title: "Synthetic Dataset of ID and Travel Documents",
      authors: ["Carlos Boned Riera", "Maxime Talarmain", "Nabil Ghanmi", "Guillaume Chiron", "Sanket Biswas", "Ahmad Montaser Awal", "Oriol Ramos Terrades"],
      venue: "arXiv",
      year: 2024,
      featured: true,
      image: "",
      summary: "SIDTD, a public synthetic benchmark for forged ID document detection.",
      page: "",
      links: { arxiv: "https://arxiv.org/abs/2401.01858" },
    },
    {
      title: "Discriminative Neural Variational Model for Unbalanced Classification Tasks in Knowledge Graph",
      authors: ["Carlos Boned Riera", "Oriol Ramos Terrades"],
      venue: "ICPR",
      year: 2022,
      featured: false,
      image: "",
      summary: "",
      page: "",
      links: { doi: "https://doi.org/10.1109/ICPR56361.2022.9956220" },
    },
  ],

  /* ---------- OPTIONAL SECTIONS (leave [] to hide) ------------------------- */
  news: [
    // { date: "Nov 2025", text: "ODE-ViT is on arXiv." },
  ],

  education: [
    { when: "2022 – now",  text: "PhD, Computer Vision Center, UAB" },                         // ✎ CHECK years
    { when: "2018 – 2022", text: "BSc in Data Engineering, UAB. Thesis: <a href=\"https://ddd.uab.cat/record/264630\">Record linkage algorithms on graphs</a>" },  // ✎ CHECK years
  ],

  // Teaching, talks, reviewing, awards…
  other: [
    // { when: "2024", text: "Reviewer, ICDAR" },
  ],
};
