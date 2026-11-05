/* ==========================================================================
   PAPER PAGE CONTENT — ODE-ViT
   --------------------------------------------------------------------------
   Title, authors, year, venue and links are taken automatically from
   content/data.js (the entry whose  page: "papers/ode-vit/").

   Math: write  $x^2$  inline, or use a { type: "math" } block for display.
   Images: put files in the  img/  folder next to this file → src: "img/name.png"
   ✎ The Method/Theory blocks below are EXAMPLES showing the available block
     types (text, math, theorem + proof, figure, code). Replace with your own.
   ========================================================================== */

window.PAPER = {
  slug: "ode-vit",                 // must equal the folder name

  tldr: "",                        // optional one-line summary shown under the title

  abstract: [
    "We reformulate the Vision Transformer as an ordinary differential equation system whose dynamics are well-posed and stable. The resulting model, ODE-ViT, is competitive on CIFAR-10 and CIFAR-100 while using up to one order of magnitude fewer parameters.",
    "We further propose a teacher–student scheme in which a discrete ViT guides the continuous ODE-ViT, improving its performance by more than 10% over training it from scratch.",
  ],

  sections: [
    {
      name: "Method", id: "method",
      blocks: [
        { type: "text", body: [
          "A residual block updates its hidden state as $x_{l+1} = x_l + f_\\theta(x_l)$, which is exactly one explicit Euler step of size $h = 1$ of the continuous system below.",
        ]},
        { type: "math", tex: "\\frac{d x(t)}{dt} = f_\\theta\\big(x(t), t\\big), \\qquad x(0) = x_0" },
        { type: "text", body: [
          "Viewing the attention layer as the vector field $f_\\theta$ turns depth into integration time, so questions about stability become questions about the dynamics.",
        ]},
        // Figure example — add an image to papers/ode-vit/img/ and uncomment:
        // { type: "figure", src: "img/overview.png", label: "Fig. 1", caption: "Overview of ODE-ViT." },
      ],
    },
    {
      name: "Theory", id: "theory",
      blocks: [
        { type: "text", body: ["Background result used for well-posedness (example block — replace with your own statements and proofs)."] },
        {
          type: "theorem", kind: "Theorem", number: "1", name: "Picard–Lindelöf",
          statement: "If $f$ is continuous in $t$ and Lipschitz in $x$ with constant $L$, then the initial value problem $\\dot x = f(x,t),\\ x(0)=x_0$ has a unique solution on $[0, T]$.",
          proof: [
            "Define the Picard operator $(\\Phi x)(t) = x_0 + \\int_0^t f(x(s), s)\\,ds$ on $C([0,T])$ with the weighted norm $\\|x\\|_L = \\sup_t e^{-2Lt}|x(t)|$.",
            "For any $x, y$ one gets $\\|\\Phi x - \\Phi y\\|_L \\le \\tfrac12 \\|x - y\\|_L$, so $\\Phi$ is a contraction and Banach's fixed-point theorem gives a unique fixed point — the solution.",
          ],
          open: false,                 // true = proof starts expanded
        },
      ],
    },
  ],

  /* Artifacts: everything that backs up the paper — code, data, checkpoints, proofs, slides.
     kind is a short label; href can be a web link or a file you put in this folder (e.g. "files/appendix.pdf"). */
  artifacts: [
    { kind: "Paper",  label: "Full text on arXiv",      href: "https://arxiv.org/abs/2511.16501", note: "arXiv:2511.16501 · cs.LG" },
    { kind: "PDF",    label: "Download PDF",            href: "https://arxiv.org/pdf/2511.16501" },
    // { kind: "Code",    label: "GitHub repository",     href: "https://github.com/...", note: "PyTorch implementation" },
    // { kind: "Proofs",  label: "Supplementary proofs",  href: "files/proofs.pdf",       note: "All proofs in full" },
    // { kind: "Weights", label: "Pretrained checkpoints", href: "https://...",           note: "CIFAR-10 / CIFAR-100" },
  ],

  bibtex: `
@article{boned2025odevit,
  title   = {ODE-ViT: Plug \\& Play Attention Layer from the Generalization of the ViT as an Ordinary Differential Equation},
  author  = {Boned Riera, Carlos and Romero Sanchez, David and Ramos Terrades, Oriol},
  journal = {arXiv preprint arXiv:2511.16501},
  year    = {2025}
}`,
};
