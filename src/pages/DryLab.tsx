import React from "react";
import Layout from "../components/Layout";
import heroDrylab from "../assets/banners/hero-drylab.png";

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
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">Dry Lab</h1>
          {subtitle && <p className="mt-2 text-sm md:text-base text-zinc-300 drop-shadow max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <div className="h-2 w-full bg-purple-500/70 rounded-b-3xl" />
    </div>
  </div>
);

export default function DryLab() {
  return (
    <Layout
      hero={
        <ThinHero
          title="Dry Lab"
          image={heroDrylab}
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
                    <li><a className="toc" href="#overview">Overview</a></li>
                    <li><a className="toc" href="#data">Data &amp; Preprocessing</a></li>
                    <li><a className="toc" href="#features">Feature Engineering</a></li>
                    <li><a className="toc" href="#models">Models</a></li>
                    <li><a className="toc" href="#training">Training &amp; Metrics</a></li>
                    <li><a className="toc" href="#results">Results</a></li>
                    <li><a className="toc" href="#ablations">Ablations</a></li>
                    <li><a className="toc" href="#designer">Designer &amp; Selection</a></li>
                    <li><a className="toc" href="#repro">Reproducibility</a></li>
                    <li><a className="toc" href="#future">Future</a></li>
                  </ol>
                </nav>
              </aside>

              <section className="space-y-12">
                <section id="overview">
                  <h2 className="text-purple-300">Overview</h2>
                  <p className="text-zinc-300">
                    We modeled expression in the <em>PcspA</em> context to prioritize upstream (UB) and downstream (DB) variants for wet-lab testing.
                    The goal was not absolute prediction, but reliable ranking and uncertainty estimates to select a small set of constructs.
                  </p>
                </section>

                <section id="data">
                  <h2 className="text-purple-300">Data &amp; Preprocessing</h2>
                  <h3>Sources</h3>
                  <ul className="text-zinc-300">
                    <li>Public promoter panels (e.g., Anderson library) with harmonized strength labels.</li>
                    <li>Task-specific <em>cspA</em> promoter + 5′-UTR sequences from literature and internal designs.</li>
                    <li>Hold-out split stratified by base promoter and variant class.</li>
                  </ul>
                  <h3>Normalization &amp; Splits</h3>
                  <ul className="text-zinc-300">
                    <li>Windowed sequences around −35/−10 and Shine–Dalgarno/start regions.</li>
                    <li>Temperature-aware proxies (e.g., ΔG in 5′-UTR windows at 15–25&nbsp;°C).</li>
                    <li>Label scaling for strength/ratio tasks; fixed RNG seeds for train/val/test.</li>
                  </ul>
                </section>

                <section id="features">
                  <h2 className="text-purple-300">Feature Engineering</h2>
                  <ul className="text-zinc-300">
                    <li><strong>Motifs:</strong> −35/−10 consensus scores; UP element; spacer length.</li>
                    <li><strong>Composition:</strong> GC%, AT-tract metrics; k-mer (3–6) frequencies.</li>
                    <li><strong>Structure proxies:</strong> ΔG windows within the 5′-UTR near the RBS/start.</li>
                    <li><strong>Context windows:</strong> EVMP-style locality around functional boxes.</li>
                  </ul>
                </section>

                <section id="models">
                  <h2 className="text-purple-300">Models</h2>
                  <ul className="text-zinc-300">
                    <li><strong>Baselines:</strong> Ridge/Lasso and tree ensembles (RF/XGBoost).</li>
                    <li><strong>Neural:</strong> compact CNN (dilated) and a small Transformer.</li>
                    <li><strong>Optional:</strong> conditional generator to propose UB/DB edits under constraints.</li>
                  </ul>
                </section>

                <section id="training">
                  <h2 className="text-purple-300">Training &amp; Metrics</h2>
                  <ul className="text-zinc-300">
                    <li><strong>Loss:</strong> Huber for regression; multi-task for strength and cold/warm ratios.</li>
                    <li><strong>Validation:</strong> 5-fold CV; early stopping on val MAE.</li>
                    <li><strong>Reporting:</strong> Pearson/Spearman r, MAE, and precision@k.</li>
                    <li><strong>Calibration:</strong> isotonic regression for uncertainty-aware top-N picks.</li>
                  </ul>
                </section>

                <section id="results">
                  <h2 className="text-purple-300">Results</h2>
                  <ul className="text-zinc-300">
                    <li>Ranking was stable across seeds; UB-focused variants dominated the top tranche.</li>
                    <li>Motif quality and local ΔG windows were the highest-impact features.</li>
                    <li>Predictions inform selection; magnitudes require confirmation in the <em>PcspA</em> reporter.</li>
                  </ul>
                </section>

                <section id="ablations">
                  <h2 className="text-purple-300">Ablations</h2>
                  <ul className="text-zinc-300">
                    <li>Removing motif features reduced correlation and precision@k.</li>
                    <li>Dropping ΔG windows hurt ranking of UB variants near the RBS.</li>
                    <li>Simpler linear models underfit with context windows.</li>
                  </ul>
                </section>

                <section id="designer">
                  <h2 className="text-purple-300">Designer &amp; Selection</h2>
                  <ul className="text-zinc-300">
                    <li>Constraint-aware filters gate proposals before ranking.</li>
                    <li>Export shortlists with model score, Δscore vs. baseline, and uncertainty.</li>
                    <li>Bundle UB-first picks, then UB+DB combinations.</li>
                  </ul>
                </section>

                <section id="repro">
                  <h2 className="text-purple-300">Reproducibility</h2>
                  <ul className="text-zinc-300">
                    <li>Python 3.11; NumPy/scikit-learn; PyTorch/TF.</li>
                    <li>Environment YAML, RNG seeds, and split manifests committed.</li>
                    <li>Dataset/model hashes logged for traceability.</li>
                  </ul>
                </section>

                <section id="future">
                  <h2 className="text-purple-300">Future</h2>
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
