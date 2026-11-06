/* ==========================================================================
   PAPER PAGE CONTENT — SSoG
   Title, authors, year, venue and links come from content/data.js
   (the entry whose  page: "papers/ssog/").
   ========================================================================== */

window.PAPER = {
  slug: "ssog",

  // Links shown under the title in addition to the ones in data.js (relative to this folder)
  extraLinks: { explorer: "explorer.html" },

  tldr: "",

  abstract: [
    "We propose SSoG, a separable sum-of-Gaussians operator that replaces dense self-attention with a learned mixture of axis-factorized Gaussian kernels over token offsets, making the per-layer cost subquadratic in the number of tokens.",
    "With fixed kernels SSoG is globally Lipschitz, so its continuous-depth (Neural ODE) variant has a unique solution over the whole integration interval, a guarantee dense attention lacks in general.",
    "On CIFAR-100 at 224×224, SSoG improves Top-1 accuracy by 2.2–4.1 points across three widths with 8.8–16.6% fewer parameters, and by 5.4–8.1 points in a looped-Transformer setting. At inputs up to 1024×1024 the Neural ODE variant reaches up to 154% higher throughput and over 60% lower peak memory than dense attention.",
  ],

  sections: [
    {
      name: "Method", id: "method",
      blocks: [
        { type: "text", body: [
          "Each head mixes $R$ Gaussian atoms with weights $\\lambda_r$. Along each axis, an atom scores the offset $d = q - s$ between query $q$ and source $s$, and a softmax over source positions (with temperature $\\tau$) turns the scores into weights:",
        ]},
        { type: "math", tex: "a_r(d) = \\operatorname{softmax}_s\\!\\left(\\frac{1}{\\tau}\\Big[-\\tfrac12\\log 2\\pi - \\log\\sigma_r - \\frac{(d-\\mu_r)^2}{2\\sigma_r^2}\\Big]\\right)" },
        { type: "text", body: [
          "The 2-D kernel is separable, so it is applied one axis at a time instead of building an $N \\times N$ attention matrix:",
        ]},
        { type: "math", tex: "A[j,k] = \\sum_{r=1}^{R} \\lambda_r \\, a^{(y)}_r[j] \\; a^{(x)}_r[k]" },
        { type: "text", body: [
          "In the <b>steered</b> variant, each patch predicts a shift of $\\mu$, a rescaling of $\\sigma$ and a reweighting of $\\lambda$ from its own content, so the kernel follows the image.",
        ]},
      ],
    },
    {
      name: "Interactive explorer", id: "explorer",
      blocks: [
        { type: "text", body: [
          "The <a href=\"explorer.html\">SSoG Attention Explorer</a> shows the learned Gaussian kernels on real CIFAR-100 and ImageNet validation images. Click any patch to see where it attends, step through depth, compare fixed and steered kernels, and look through the efficiency, patch-size robustness, width-scaling, ablation and attention-sink results.",
          "It is a single self-contained page (about 10 MB) that runs entirely in your browser, with no network requests.",
        ]},
      ],
    },
  ],

  artifacts: [
    { kind: "Explorer", label: "SSoG Attention Explorer (interactive supplementary)", href: "explorer.html", note: "~10 MB, runs offline in the browser" },
    { kind: "Paper",    label: "Full text on arXiv", href: "https://arxiv.org/abs/2611.08236", note: "arXiv:2611.08236 · cs.LG, cs.CV" },
    { kind: "PDF",      label: "Download PDF",       href: "https://arxiv.org/pdf/2611.08236" },
  ],

  bibtex: `
@article{boned2026ssog,
  title   = {Beyond Quadratic Attention: Separable Gaussian Operators for ODE Vision Transformers},
  author  = {Boned Riera, Carlos and Romero Sanchez, David and Ramos Terrades, Oriol},
  journal = {arXiv preprint arXiv:2611.08236},
  year    = {2026}
}`,
};
