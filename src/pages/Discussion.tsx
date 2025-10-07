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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-40 md:h-56 w-full object-cover brightness-90 saturate-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">Discussion</h1>
          {subtitle && <p className="mt-2 text-sm md:text-base text-zinc-300 drop-shadow max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <div className="h-2 w-full bg-purple-500/70 rounded-b-3xl" />
    </div>
  </div>
);

const fig = (n: number) => `/img/figures/fig-${n}.png`;
const tableFig = (n: number) => `/img/figures/table-${n}.png`;

export default function Discussion() {
  return (
    <Layout
      hero={
        <ThinHero
          title="Discussion"
          image="/images/banners/hero-discussion.png"
          subtitle="Synthesis of wet- and dry-lab findings for cold-inducible expression via the cspA system"
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
                    <li><a className="toc" href="#summary">Executive Summary</a></li>
                    <li><a className="toc" href="#wetlab">Wet Lab</a></li>
                    <li><a className="toc" href="#drylab">Dry Lab</a></li>
                    <li><a className="toc" href="#integration">Integration</a></li>
                    <li><a className="toc" href="#limitations">Limitations</a></li>
                    <li><a className="toc" href="#path">Path Forward</a></li>
                  </ol>
                </nav>
              </aside>

              <section className="space-y-12">
                <section id="summary">
                  <h2 className="text-purple-300">Executive Summary</h2>
                  <p className="text-zinc-300">
                    UB variants show larger predicted gains than DB; cloning constraints—not design—were the main blocker.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={fig(2)} alt="UB/DB concept" caption="Fig. 2 — Targeting UB/DB preserves temperature responsiveness." />
                    <Figure src={fig(3)} alt="Predicted TIR shifts" caption="Fig. 3 — UB drives higher predicted TIR than DB in this context." />
                  </div>
                </section>

                <section id="wetlab">
                  <h2 className="text-purple-300">Wet Lab</h2>
                  <Figure src={fig(5)} alt="Assembly outcome" caption="Fig. 5 — Short inserts reduce assembly success despite clean backbone." />
                </section>

                <section id="drylab">
                  <h2 className="text-purple-300">Dry Lab</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={fig(12)} alt="Parity" caption="Fig. 12 — Ranking quality on hold-out/ proxy labels." />
                    <Figure src={fig(13)} alt="Attribution" caption="Fig. 13 — Interpretable motifs and UTR nucleotides." />
                  </div>
                </section>

                <section id="integration">
                  <h2 className="text-purple-300">Integration</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={tableFig(4)} alt="Top picks" caption="Table 4 — Prioritized UB/DB variants for next build." />
                    <Figure src={fig(10)} alt="Golden Gate plan" caption="Fig. 10 — Spacer → Type IIS swap to enable short promoter insertion." />
                  </div>
                </section>

                <section id="limitations">
                  <h2 className="text-purple-300">Limitations</h2>
                  <ul className="text-zinc-300">
                    <li>Cloning sensitivity to insert length.</li>
                    <li>AT-rich (&gt;70%) windows limit primer options.</li>
                    <li>Predictions need empirical validation in the <em>PcspA</em> context.</li>
                  </ul>
                </section>

                <section id="path">
                  <h2 className="text-purple-300">Path Forward</h2>
                  <ul className="text-zinc-300">
                    <li>Use gBlocks (&gt;200&nbsp;bp) or spacer+Golden Gate; extend overlaps (25–30&nbsp;bp).</li>
                    <li>Start with top UB picks; then combine UB+DB.</li>
                    <li>Assay at 15–25&nbsp;°C vs. 37&nbsp;°C; feed results back into the model.</li>
                  </ul>
                  <Figure src={fig(11)} alt="Assay plan" caption="Fig. 11 — Assay layout for temperature response and kinetics." />
                </section>
              </section>
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
