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

export default function WetLab() {
  return (
    <Layout
      hero={
        <ThinHero
          title="Wet Lab"
          image="/images/banners/hero-wetlab.png"
          subtitle={<>Directed evolution of the <em>cspA</em> element at low temperature: constructs, materials, methods, and results.</>}
        />
      }
    >
      <div className="mt-8 mx-auto max-w-6xl">
        <Paper>
          <div className="prose prose-invert max-w-none">
            {/* Sidebar + content */}
            <div className="not-prose grid md:grid-cols-[260px_1fr] gap-6">
              <aside className="hidden md:block">
                <nav className="sticky top-24 p-3 rounded-xl border border-zinc-800 bg-zinc-950/60">
                  <div className="text-xs uppercase tracking-wide text-zinc-400 mb-2">On this page</div>
                  <ol className="space-y-2 text-sm">
                    <li><a className="toc" href="#overview">Overview</a></li>
                    <li><a className="toc" href="#methods">Materials &amp; Methods</a></li>
                    <li><a className="toc" href="#results">Results</a></li>
                    <li><a className="toc" href="#tables">Key Tables</a></li>
                    <li><a className="toc" href="#troubleshooting">Troubleshooting</a></li>
                    <li><a className="toc" href="#future">Future (Wet Lab)</a></li>
                  </ol>
                </nav>
              </aside>

              <section className="space-y-12">
                {/* OVERVIEW */}
                <section id="overview">
                  <h2 className="text-purple-300">Overview</h2>
                  <p className="text-zinc-300">
                    We targeted promoter and 5′-UTR boxes within <em>cspA</em> to boost low-temperature expression using a pUA66–<em>PcspA</em>–GFP reporter.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <Figure src={fig(2)} alt="Constructs" caption="Fig. 2 — Reporter backbone and swap sites (PcspA, UB/DB)." />
                    <Figure src={fig(3)} alt="Design workflow" caption="Fig. 3 — Design flow for selecting UTR variants and overlaps." />
                  </div>
                </section>

                {/* MATERIALS & METHODS */}
                <section id="methods">
                  <h2 className="text-purple-300">Materials &amp; Methods</h2>

                  <h3>Strains &amp; Plasmid</h3>
                  <ul className="text-zinc-300">
                    <li><strong>Strains:</strong> DH10B (routine cloning), Stbl3 (stability for structured/AT-rich inserts).</li>
                    <li><strong>Reporter plasmid:</strong> pUA66–<em>PcspA</em>–GFP.</li>
                  </ul>

                  <h3>Reagents</h3>
                  <ul className="text-zinc-300">
                    <li>Q5 High-Fidelity 2× Master Mix; DpnI; NEBuilder HiFi DNA Assembly; Type IIS kit (BsaI + T4 DNA ligase) for Golden Gate.</li>
                    <li>DNA Clean &amp; Concentrator kits; antibiotics (kanamycin 50&nbsp;µg/mL).</li>
                  </ul>

                  <h3>Equipment</h3>
                  <ul className="text-zinc-300">
                    <li>Thermocycler; microcentrifuge; agarose gel rig; blue/UV transilluminator; plate reader (OD<sub>600</sub>, Ex/Em 485/520&nbsp;nm).</li>
                  </ul>

                  <h3>Procedures</h3>
                  <ol className="text-zinc-300 list-decimal pl-5">
                    <li><strong>Miniprep:</strong> spin-column; quantify (ng/µL, A<sub>260/280</sub>).</li>
                    <li><strong>PCR linearization:</strong> Q5; annealing ~65.9&nbsp;°C; 25 cycles; gel-check; DpnI digest to remove template; cleanup.</li>
                    <li><strong>Assembly:</strong> CPEC or NEBuilder with short inserts (~77&nbsp;bp incl. overlaps). For improved efficiency, use padded gBlocks (&gt;200&nbsp;bp) or spacer→Golden Gate swap.</li>
                    <li><strong>Transformation:</strong> 50&nbsp;µL chemically competent DH10B/Stbl3; heat shock 42&nbsp;°C 45&nbsp;s; recover; plate on Kan.</li>
                    <li><strong>Verification:</strong> colony PCR across junctions; Sanger sequencing.</li>
                    <li><strong>Fluorescence assay:</strong> grow at 37&nbsp;°C vs. 15–25&nbsp;°C; measure RFU and OD; compute normalized GFP and on/off ratios.</li>
                  </ol>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <Figure src={fig(4)} alt="PCR/linearization optimization" caption="Fig. 4 — PCR linearization optimization and DpnI cleanup." />
                    <Figure src={fig(5)} alt="Colony outcomes" caption="Fig. 5 — Colony outcomes for assemblies; short inserts underperform." />
                  </div>
                </section>

                {/* RESULTS */}
                <section id="results">
                  <h2 className="text-purple-300">Results</h2>
                  <ul className="text-zinc-300">
                    <li>Backbone prep &amp; linearization were clean and reproducible.</li>
                    <li>Short inserts (&lt;100&nbsp;bp incl. overlaps) markedly reduced assembly success compared with controls.</li>
                  </ul>
                </section>

                {/* TABLES */}
                <section id="tables">
                  <h2 className="text-purple-300">Key Tables</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={tableFig(1)} alt="PCR conditions" caption="Table 1 — PCR/linearization conditions and yields." />
                    <Figure src={tableFig(2)} alt="Miniprep yields" caption="Table 2 — Miniprep concentration and purity metrics." />
                  </div>
                </section>

                {/* TROUBLESHOOTING */}
                <section id="troubleshooting">
                  <h2 className="text-purple-300">Troubleshooting</h2>
                  <ul className="text-zinc-300">
                    <li>Short inserts (&lt;100&nbsp;bp) hamper CPEC/NEBuilder → use padded fragments or spacer→Golden Gate.</li>
                    <li>AT-rich (&gt;70%) windows constrain primer design → widen amplicon or use base/CRISPR editing.</li>
                  </ul>
                </section>

                {/* FUTURE */}
                <section id="future">
                  <h2 className="text-purple-300">Future (Wet Lab)</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Figure src={fig(10)} alt="Golden Gate plan" caption="Fig. 10 — Spacer then Type IIS swap to handle short inserts." />
                    <Figure src={fig(11)} alt="Assay design" caption="Fig. 11 — Plate layout for temperature assays &amp; readouts." />
                  </div>
                </section>
              </section>
            </div>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
