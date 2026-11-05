/* ==========================================================================
   SITE CONTENT — the only file you need to edit for the homepage.
   • Text goes between quotes. Every item in a list ends with a comma.
   • Leave a list empty  []  to hide that section.
   • Lines starting with  //  are notes; the website ignores them.
   ========================================================================== */

window.SITE = {

  profile: {
    name: "Carlos Boned Riera",
    shortName: "Carlos Boned",
    email: "cboned@cvc.uab.cat",
    // Paragraphs under your name. You can use HTML links: <a href="...">text</a>
    bio: [
      "I'm a PhD student at the <a href=\"https://www.uab.cat/\">Universitat Autònoma de Barcelona</a>, affiliated with the <a href=\"https://www.cvc.uab.es/\">Computer Vision Center</a>. My thesis studies how integrating numerical methods can make learning graph-based representations more efficient.",
      "I'm also an associate professor at UAB, where I teach in the Master's in Computer Vision. Before the PhD I was a research fellow at the Computer Vision Center. I hold a Master's in Computer Vision and AI and a BSc in Data Engineering.",
    ],
    // Photo: a square image in assets/img/
    photo: "assets/img/carlos.webp",
    // CV: put the PDF in assets/ and write its path, e.g. "assets/cv.pdf"
    cv: "",
  },

  // Shown under the bio, separated by "/". Leave "" to hide one.
  links: {
    Email: "mailto:cboned@cvc.uab.cat",
    CV: "assets/cv.pdf",                                 // replace assets/cv.pdf to update
    Scholar: "https://scholar.google.com/citations?hl=en&user=FCb2rY8AAAAJ",
    GitHub: "https://github.com/Bycarkos",
    ORCID: "https://orcid.org/0009-0000-6041-0931",
  },

  // Short paragraph above the paper list.
  researchIntro:
    "I'm interested in representation learning and geometric deep learning: neural ODEs, graph neural networks, state-space models and document understanding. Highlighted papers are my main work.",

  /* ---------- PUBLICATIONS — newest first ----------------------------------
     featured: true   → highlighted row
     image:           → thumbnail, e.g. "assets/img/odevit.png" (leave "" for a grey box)
     page:            → your own page for this paper, e.g. "papers/ode-vit/" (or "")
     links:           → any of pdf, arxiv, code, doi, dataset, slides, poster, video       */
  publications: [
    {
      title: "Linear-Time Context Compression with State-Space Encoding",
      authors: ["Marc Serra Ortega", "Andrey Barsky", "Carlos Boned Riera", "Tomás Ockier", "Dimosthenis Karatzas"],
      venue: "arXiv",
      year: 2026,
      featured: false,
      image: "",
      summary: "A Mamba encoder compresses long contexts in a single linear-time pass so a frozen language model can read them, at up to 16× compression.",
      page: "",
      links: { arxiv: "https://arxiv.org/abs/2610.33006" },
    },
    {
      title: "ICDAR 2026 Competition on Long-Term Handwriting Author Identification",
      authors: ["A. M. Rodríguez", "Carlos Boned Riera", "P. Torras"],
      venue: "ICDAR",
      year: 2026,
      featured: false,
      image: "",
      summary: "Competition report on identifying the author of handwriting samples written years apart.",
      page: "",
      links: {},
    },
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
      title: "Synthetic Dataset of ID and Travel Documents (SIDTD)",
      authors: ["Carlos Boned Riera", "Maxime Talarmain", "Nabil Ghanmi", "Guillaume Chiron", "Sanket Biswas", "Ahmad Montaser Awal", "Oriol Ramos Terrades"],
      venue: "Scientific Data (Nature)",
      year: 2024,
      featured: true,
      image: "",
      summary: "A public synthetic benchmark of ID and travel documents for training and evaluating forged-document detection.",
      page: "",
      links: { doi: "https://doi.org/10.1038/s41597-024-04160-9", arxiv: "https://arxiv.org/abs/2401.01858" },
    },
    {
      title: "GeoContrastNet: Contrastive Edge Learning in Graph Attention Networks for Document Understanding",
      authors: ["Nil Biescas", "Carlos Boned Riera", "Josep Lladós", "Sanket Biswas"],
      venue: "ICDAR",
      year: 2024,
      featured: false,
      image: "",
      summary: "Key–value relations in forms from geometric and visual features, without OCR text.",
      page: "",
      links: { arxiv: "https://arxiv.org/abs/2405.03104" },
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

  /* ---------- OTHER SECTIONS — newest first (leave [] to hide) ------------- */
  news: [
    // { date: "Nov 2026", text: "..." },
  ],

  experience: [
    { when: "2024 – now",  text: "Associate Professor, Master's in Computer Vision — Universitat Autònoma de Barcelona" },
    { when: "2022 – now",  text: "Associate Professor — Universitat Autònoma de Barcelona" },
    { when: "2021 – 2025", text: "Research Fellow — Computer Vision Center" },
    { when: "2020 – 2021", text: "Research Intern — Computer Vision Center" },
  ],

  talks: [
    { when: "May 2026", text: "Seminar on Knowledge Graphs — Summer School on Document Analysis" },
    { when: "Jan 2026", text: "Introduction to Machine Learning and Deep Learning — for high-school students in the <i>Bojos per la IA</i> programme (IIIA-CSIC, <i>Bojos per la Ciència</i>)" },
    { when: "Dec 2025", text: "Introduction to Deep Learning — seminar for PhD students in Computer Science, UAB" },
  ],

  education: [
    { when: "2025 – 2028", text: "PhD, Universitat Autònoma de Barcelona — <i>Studying the Effect of Integrating Numerical Methods on Efficient Learning of Graph-Based Representations</i>" },
    { when: "2023 – 2024", text: "Master's in Computer Vision and AI — Computer Vision Center" },
    { when: "2018 – 2022", text: "BSc in Data Engineering — Universitat Autònoma de Barcelona. Thesis: <a href=\"https://ddd.uab.cat/record/264630\">Record linkage algorithms on graphs</a>" },
  ],
};
