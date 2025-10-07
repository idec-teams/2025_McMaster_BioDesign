import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

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
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">Project Overview</h1>
          {subtitle && <p className="mt-2 text-sm md:text-base text-zinc-300 drop-shadow max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <div className="h-2 w-full bg-purple-500/70 rounded-b-3xl" />
    </div>
  </div>
);

// helpers to reference exported report assets
const fig = (n: number) => `/img/figures/fig-${n}.png`;

export default function Overview() {
  return (
    <Layout
      hero={
        <ThinHero
          title="Project Overview"
          image="/images/banners/hero-overview.png"
          subtitle={<span className="text-zinc-300">Evolving the <em>cspA</em> cold-shock element for robust low-temperature expression</span>}
        />
      }
    >
      <div className="mt-8 mx-auto max-w-6xl">
        <Paper>
          <div className="prose prose-invert max-w-none">
            <div className="not-prose grid lg:grid-cols-[260px_1fr] gap-8">
              <aside className="hidden lg:block">
                <nav className="sticky top-24 p-3 rounded-xl border border-zinc-800 bg-zinc-950/60">
                  <div className="text-xs uppercase tracking-wide text-zinc-400 mb-2">On this page</div>
                  <ol className="space-y-2 text-sm">
                    {[
                      ["intro", "Introduction"],
                      ["design", "Design"],
                      ["workflow", "Workflow"],
                      ["progress", "Progress & Challenges"],
                      ["future", "Future Directions"],
                      ["impact", "Impact"],
                    ].map(([href, label]) => (
                      <li key={href}><a className="toc text-zinc-300 hover:text-purple-300 transition-colors" href={`#${href}`}>{label}</a></li>
                    ))}
                  </ol>
                </nav>
              </aside>

              <article className="space-y-10">
                <section id="intro" className="scroll-mt-28">
                  <h2 className="text-purple-300">Introduction</h2>
                  <p className="mt-3 text-zinc-300 leading-relaxed">
                    Many proteins fold better cold, but expression falls. In <em>E. coli</em>, <em>cspA</em> rapidly activates after a downshift.
                    We leverage and evolve this element (promoter, 5′-UTR upstream box, coding-region downstream box).
                  </p>
                  <Figure src={fig(1)} alt="cspA schematic" caption={<>Fig. 1 — <em>cspA</em> regulatory element and engineering targets.</>} />
                </section>

                <section id="design" className="scroll-mt-28">
                  <h2 className="text-purple-300">Design</h2>
                  <Figure src={fig(2)} alt="Construct designs" caption="Fig. 2 — Construct map: promoter swaps and UTR/DB variants with GFP reporter." />
                </section>

                <section id="workflow" className="scroll-mt-28">
                  <h2 className="text-purple-300">Workflow</h2>
                  <Figure src={fig(3)} alt="DBTL workflow" caption="Fig. 3 — DBTL workflow linking design, build, test, and learn." />
                </section>

                <section id="progress" className="scroll-mt-28">
                  <h2 className="text-purple-300">Progress &amp; Challenges</h2>
                  <Figure src={fig(4)} alt="Assembly diagnostics" caption="Fig. 4 — Assembly diagnostics highlighting short-insert sensitivity." />
                </section>

                <section id="future" className="scroll-mt-28">
                  <h2 className="text-purple-300">Future Directions</h2>
                  <p className="text-zinc-300">Libraries first, CRISPR mutagenesis for AT-rich windows, model-guided selection.</p>
                </section>

                <section id="impact" className="scroll-mt-28">
                  <h2 className="text-purple-300">Impact</h2>
                  <p className="mt-3 text-zinc-300 leading-relaxed">A tunable cold-shock element reduces aggregation and cost in bioproduction.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link to="/wetlab" className="inline-flex items-center justify-center h-10 px-5 rounded-full font-semibold text-[14px] bg-emerald-400 text-black hover:bg-emerald-300 transition-all">See Wet Lab</Link>
                    <Link to="/drylab" className="inline-flex items-center justify-center h-10 px-5 rounded-full font-semibold text-[14px] border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition-all">See Dry Lab</Link>
                    <Link to="/discussion" className="inline-flex items-center justify-center h-10 px-5 rounded-full font-semibold text-[14px] bg-black/70 text-white hover:bg-black transition-all">Discussion</Link>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
