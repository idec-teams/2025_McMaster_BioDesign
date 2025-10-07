import React from "react";
import Layout from "../components/Layout";

type FigureProps = { src: string; alt: string; caption: React.ReactNode };
const Figure: React.FC<FigureProps> = ({ src, alt, caption }) => (
  <figure className="rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={src} alt={alt} className="w-full h-auto" />
    <figcaption className="p-3 text-sm text-zinc-400 border-t border-zinc-800">{caption}</figcaption>
  </figure>
);

const Paper: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-purple-500/40 -z-10" />
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur p-6 md:p-10 shadow-lg">{children}</div>
  </div>
);

const ThinHero: React.FC<{ title: string; image: string; subtitle?: React.ReactNode }> = ({ title, image, subtitle }) => (
  <div className="not-prose">
    <div className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-t-3xl">
        <img src={image} alt="" className="h-40 md:h-56 w-full object-cover brightness-90 saturate-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">{title}</h1>
          {subtitle && <p className="mt-2 text-sm md:text-base text-zinc-300 drop-shadow max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <div className="h-2 w-full bg-purple-500/70 rounded-b-3xl" />
    </div>
  </div>
);

const fig = (n: number) => `/img/figures/fig-${n}.png`;
const tableFig = (n: number) => `/img/figures/table-${n}.png`;

export default function DryLab() {
  return (
    <Layout
      hero={
        <ThinHero
          title="Dry Lab"
          image="/images/banners/hero-drylab.png"
          subtitle="Computational design for the cspA system: datasets, materials, methods, and in-silico variant ranking."
        />
      }
    >
      <div className="mt-8 mx-auto max-w-6xl">
        <Paper>
          <div className="prose prose-invert max-w-none">
            <div className="not-prose grid md:grid-cols-[260px_1fr] gap-6">
              <aside className="hidden md:block">
                <nav className="sticky top-24 p-3 rounded-xl border border-zinc-800 bg-zinc-950/60">
                  <div className="text-xs uppercase tracking-wide text-zinc-400 mb-2">On this page</div>
                  <ol className="space-y-2 text-sm">
                    <li><a className="toc" href="#methods">Materials &amp; Methods</a></li>
                    <li><a className="toc" href="#features">Feature Engineering</a></li>
                    <li><a className="toc" href="#models">Models</a></li>
                    <li><a className="toc" href="#training">Training &amp; Metrics</a></li>
                    <li><a className="toc" href="#results">Results</a></li>
                    <li><a className="toc" href="#ablations">Ablations</a></li>
                    <li><a className="toc" href="#tables">Tables</a></li>
                    <li><a className="toc" href="#designer">Designer</a></li>
                    <li><a className="toc" href="#future">Future (Dry Lab)</a></li>
                  </ol>
                </nav>
              </aside>

              <section className="space-y-12">
                {/* MATERIALS & METHODS */}
                <section id="methods">
                  <h2 className="text-purple-300">Materials &amp; Methods</h2>

                  <h3>Data Sources</h3>
                  <ul className="text-zinc-300">
                    <li>Public promoter strength panels (e.g., Anderson library) with transferred/normalized labels.</li>
                    <li>Task-specific <em>cspA</em>-context sequences (promoter + 5′-UTR) from literature and internal designs.</li>
                    <li>Hold-out set built by stratifying on base promoter and variant class.</li>
                  </ul>

                  <h3>Preprocessing</h3>
                  <ul className="text-zinc-300">
                    <li>Sequence windowing around −35/−10 and Shine–Dalgarno/start context.</li>
                    <li>Temperature-adjusted proxies (e.g., ΔG at 15–25&nbsp;°C for UTR segments).</li>
                    <li>Label scaling and binning for ratio/strength tasks; train/val/test splits with fixed RNG seeds.</li>
                  </ul>

                  <h3>Features</h3>
                  <ul className="text-zinc-300">
                    <li>k-mer (3–6) frequencies; EVMP-style locality windows.</li>
                    <li>Motif scores (−35/−10, UP element), spacer length, GC% and AT-tract metrics.</li>
                    <li>Secondary-structure proxies: ΔG windows in 5′-UTR.</li>
                  </ul>

                  <h3>Models</h3>
                  <ul className="text-zinc-300">
                    <li>Baselines: Ridge/Lasso, Random Forest/XGBoost.</li>
                    <li>EVMP-inspired CNN with dilations; Transformer (4–6 heads, 2–4 layers) with CLS regression head.</li>
                    <li>Optional conditional generative module for design proposals.</li>
                  </ul>

                  <h3>Training &amp; Evaluation</h3>
                  <ul className="text-zinc-300">
                    <li>Loss: Huber for regression; multi-task (strength, cold/warm ratio) when applicable.</li>
                    <li>5-fold CV; early stopping on val MAE; metrics: Pearson/Spearman r, MAE, precision@k for ranking.</li>
                    <li>Calibration via isotonic regression for uncertainty-aware picking.</li>
                  </ul>

                  <h3>Reproducibility</h3>
                  <ul className="text-zinc-300">
                    <li>Python 3.11, NumPy/scikit-learn, PyTorch/TF; environment yaml &amp; seeds committed.</li>
                    <li>Dataset/model hashes logged; split manifests checked into repo.</li>
                  </ul>
                </section>

                {/* FEATURE ENGINEERING */}
                <section id="features">
                  <h2>Feature Engineering</h2>
                  <Figure src={fig(6)} alt="Feature map" caption="Fig. 6 — Feature map aligning motifs and ΔG windows." />
                </section>

                {/* MODELS */}
                <section id="models">
                  <h2>Models</h2>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <Figure src={fig(7)} alt="EVMP-CNN" caption="Fig. 7 — EVMP-style CNN over k-mer embeddings." />
                    <Figure src={fig(8)} alt="Transformer" caption="Fig. 8 — Compact transformer for low-temp strength and ratio." />
                  </div>
                </section>

                {/* TRAINING & METRICS */}
                <section id="training">
                  <h2>Training &amp; Metrics</h2>
                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <Figure src={fig(9)} alt="Learning curves" caption="Fig. 9 — Learning curves with early stopping." />
                    <Figure src={fig(11)} alt="Calibration" caption="Fig. 11 — Calibration improves top-N hit rate." />
                    <Figure src={tableFig(3)} alt="Metrics table" caption="Table 3 — Summary metrics by model (r, MAE, P@k)." />
                  </div>
                </section>

                {/* RESULTS */}
                <section id="results">
                  <h2>Results</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={fig(12)} alt="Parity plot" caption="Fig. 12 — Predicted vs. measured/parity plots." />
                    <Figure src={fig(13)} alt="Attribution" caption="Fig. 13 — Attribution map highlights −35/−10 and AT-rich UP region." />
                  </div>
                </section>

                {/* ABLATIONS */}
                <section id="ablations">
                  <h2>Ablations</h2>
                  <Figure src={fig(14)} alt="Ablations" caption="Fig. 14 — Effect of removing features/model components." />
                </section>

                {/* TABLES */}
                <section id="tables">
                  <h2>Tables</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={tableFig(4)} alt="Top ranked variants" caption="Table 4 — Top-ranked UB/DB variants by predicted TIR." />
                    <Figure src={tableFig(5)} alt="Data splits" caption="Table 5 — Train/val/test split summary." />
                  </div>
                </section>

                {/* DESIGNER */}
                <section id="designer">
                  <h2>Design Tooling</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={fig(15)} alt="Designer UI" caption="Fig. 15 — Motif-aware Designer for targeted objectives." />
                    <Figure src={fig(16)} alt="Sequence panel" caption="Fig. 16 — Ranked outputs with constraints &amp; scores." />
                  </div>
                </section>

                {/* FUTURE */}
                <section id="future">
                  <h2>Future (Dry Lab)</h2>
                  <ul className="text-zinc-300">
                    <li>Retrain with new wet-lab measurements to reduce domain shift.</li>
                    <li>Motif-constrained generative design and grammar-based decoding.</li>
                    <li>Model activation kinetics from downshift time-courses.</li>
                  </ul>
                </section>
              </section>
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
