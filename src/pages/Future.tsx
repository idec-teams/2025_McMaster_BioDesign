import React from "react";
import Layout from "../components/Layout";
import heroFuture from "../assets/banners/hero-future.png";

const pngs = import.meta.glob("../assets/figures/*.png", { eager: true, as: "url" });
const fig = (n: number) => pngs[`../assets/figures/fig-${n}.png`] as string;

type FigureProps = { src: string; alt: string; caption: React.ReactNode };
const Figure: React.FC<FigureProps> = ({ src, alt, caption }) => (
  <figure className="rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900">
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
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">Future Directions</h1>
          {subtitle && <p className="mt-2 text-sm md:text-base text-zinc-300 drop-shadow max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <div className="h-2 w-full bg-purple-500/70 rounded-b-3xl" />
    </div>
  </div>
);

export default function Future() {
  return (
    <Layout
      hero={
        <ThinHero
          title="Future Directions"
          image={heroFuture}
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
                  <p className="text-zinc-300">Adopt spacer→Type IIS for short inserts; multiplex assays across 15–25&nbsp;°C vs. 37&nbsp;°C.</p>
                </section>

                <section id="drylab">
                  <h2 className="text-purple-300">Dry Lab Evolution</h2>
                  <p className="text-zinc-300">Retrain models with new measurements; add motif-constrained generators for proposals.</p>
                </section>

                <section id="dbtl">
                  <h2 className="text-purple-300">DBTL Integration</h2>
                  <Figure src={fig(3)} alt="DBTL workflow" caption="Fig. 3 — DBTL workflow linking design, build, test, and learn." />
                </section>

                <section id="automation">
                  <h2 className="text-purple-300">Automation &amp; Screening</h2>
                  <p className="text-zinc-300">Scale build-test throughput; track variant metadata and assay conditions.</p>
                </section>

                <section id="beyond">
                  <h2 className="text-purple-300">Applications Beyond <em>E. coli</em></h2>
                  <p className="text-zinc-300">Generalize to other hosts and cold-shock elements for production.</p>
                </section>
              </section>
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
