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
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">Future Directions</h1>
          {subtitle && <p className="mt-2 text-sm md:text-base text-zinc-300 drop-shadow max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <div className="h-2 w-full bg-purple-500/70 rounded-b-3xl" />
    </div>
  </div>
);

const fig = (n: number) => `/img/figures/fig-${n}.png`;
const tableFig = (n: number) => `/img/figures/table-${n}.png`;

export default function Future() {
  return (
    <Layout
      hero={
        <ThinHero
          title="Future Directions"
          image="/images/banners/hero-future.png"
          subtitle="Next-gen workflows to evolve, validate, and generalize cold-inducible systems"
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
                    <li><a className="toc" href="#wetlab">Wet Lab</a></li>
                    <li><a className="toc" href="#drylab">Dry Lab</a></li>
                    <li><a className="toc" href="#dbtl">DBTL Integration</a></li>
                    <li><a className="toc" href="#automation">Automation</a></li>
                    <li><a className="toc" href="#beyond">Beyond <em>E. coli</em></a></li>
                  </ol>
                </nav>
              </aside>

              <section className="space-y-12">
                <section id="wetlab">
                  <h2 className="text-purple-300">Wet Lab Expansion</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={fig(10)} alt="Golden Gate plan" caption="Fig. 10 — Spacer→Type IIS swap for short inserts." />
                    <Figure src={fig(11)} alt="Assay layout" caption="Fig. 11 — Multi-temperature assay layout &amp; readouts." />
                  </div>
                </section>

                <section id="drylab">
                  <h2 className="text-purple-300">Dry Lab Evolution</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={fig(15)} alt="Designer UI" caption="Fig. 15 — Motif-aware Designer for targeted objectives." />
                    <Figure src={fig(16)} alt="Sequence panel" caption="Fig. 16 — Ranked outputs with constraints &amp; scores." />
                  </div>
                </section>

                <section id="dbtl">
                  <h2 className="text-purple-300">DBTL Integration</h2>
                  <Figure src={fig(3)} alt="DBTL overview" caption="Fig. 3 — Closed-loop DBTL between modeling and assays." />
                </section>

                <section id="automation">
                  <h2 className="text-purple-300">Automation &amp; Screening</h2>
                  <Figure src={tableFig(6)} alt="Automation plan table" caption="Table 6 — Proposed automated screening throughput and timelines." />
                </section>

                <section id="beyond">
                  <h2 className="text-purple-300">Applications Beyond <em>E. coli</em></h2>
                  <p className="text-zinc-300">Generalize to CHO/yeast and other cold-shock elements for scalable production.</p>
                </section>
              </section>
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
