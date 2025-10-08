import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import HexLink from "../components/HexLink";

import hero from "../assets/hero.png";
import hexDna   from "../assets/hex-dna.svg";
import hexChart from "../assets/hex-chart.svg";
import hexChip  from "../assets/hex-chip.svg";
import hexTeam  from "../assets/hex-team.svg";
import hexBook  from "../assets/hex-book.svg";

// ✅ Import the PDFs from assets
import labNotebook from "../assets/lab-notebook.pdf";
import labReport from "../assets/lab-report.pdf";   // <-- new import

export default function Home() {
  const heroEl = (
    <Hero image={hero} objectPosition="center 30%">
      <h1 className="text-[44px] md:text-[64px] font-extrabold leading-tight tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.55)]">
        <span className="block text-white">Colder Cultures,</span>
        <span className="block text-[#2fc7a6]">Stronger Proteins</span>
      </h1>

      <p className="mt-4 max-w-2xl mx-auto text-zinc-100/90 text-base md:text-lg font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
        Engineering the <em>cspA</em> regulatory element to enhance expression
        under cold-shock conditions.
      </p>

      <div className="mt-6 flex justify-center flex-wrap gap-3">
        <Link
          to="/overview"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full font-semibold text-[15px] bg-[#2fc7a6] text-black hover:bg-[#28b799] shadow-[0_6px_25px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-[1px]"
        >
          Project Overview
        </Link>
        <Link
          to="/wetlab"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full font-semibold text-[15px] bg-black/80 text-white hover:bg-black shadow-[0_6px_25px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-[1px]"
        >
          Wet Lab
        </Link>
        <Link
          to="/drylab"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full font-semibold text-[15px] bg-black/80 text-white hover:bg-black shadow-[0_6px_25px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-[1px]"
        >
          Dry Lab
        </Link>
        {/* ✅ Lab Notebook PDF */}
        <a
          href={labNotebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full font-semibold text-[15px] bg-black/80 text-white hover:bg-black shadow-[0_6px_25px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-[1px]"
        >
          Lab Notebook
        </a>
        {/* ✅ Lab Report PDF */}
        <a
          href={labReport}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-11 px-6 rounded-full font-semibold text-[15px] bg-black/80 text-white hover:bg-black shadow-[0_6px_25px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-[1px]"
        >
          Lab Report
        </a>
      </div>
    </Hero>
  );

  return (
    <Layout hero={heroEl}>
      {/* Why / What cards */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-neutral-200/60 bg-white/90 dark:border-neutral-800/80 dark:bg-neutral-900/80 p-6 md:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04),_0_6px_20px_rgba(0,0,0,0.06)]">
          <h2 className="text-[20px] md:text-[22px] font-semibold tracking-[-0.01em]">
            Why cold-shock?
          </h2>
          <p className="mt-2 text-zinc-700 dark:text-zinc-300 text-[14.5px]">
            Many proteins fold better at low temperatures, but expression
            plummets. The native <em>cspA</em> system surges during cold
            shock—an ideal target to evolve.
          </p>
        </div>

        <div className="rounded-lg border border-neutral-200/60 bg-white/90 dark:border-neutral-800/80 dark:bg-neutral-900/80 p-6 md:p-7 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
          <h2 className="text-[20px] md:text-[22px] font-semibold tracking-[-0.01em]">
            What we’re building
          </h2>
          <ul className="mt-2 space-y-1.5 list-disc list-inside text-zinc-700 dark:text-zinc-300 text-[14.5px]">
            <li>Promoter swaps against <em>PcspA</em> (Anderson set)</li>
            <li>Upstream & downstream box mutagenesis</li>
            <li>Model-guided design with GFP readout</li>
          </ul>
        </div>
      </section>

      {/* Stats row */}
      <section className="mt-8">
        <h3 className="text-center text-[15px] font-semibold text-zinc-400">
          Cold-shock by the numbers
        </h3>
        <div className="mt-4 grid sm:grid-cols-3 gap-4">
          {[
            { metric: "3", label: "Core motif targets" },
            { metric: "77 bp", label: "Short insert fragments attempted" },
            { metric: "≤ 30 °C", label: "Target operating window" },
          ].map(({ metric, label }) => (
            <div
              key={metric}
              className="rounded-lg border border-neutral-200/60 bg-white/90 dark:border-neutral-800/80 dark:bg-neutral-900/80 p-6 text-center"
            >
              <div className="text-3xl font-extrabold tracking-[-0.02em] text-[#2fc7a6]">
                {metric}
              </div>
              <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Read more grid */}
      <section className="mt-10">
        <h3 className="text-center text-[22px] font-semibold tracking-[-0.01em]">
          Click to read more
        </h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center">
          <HexLink to="/overview"   icon={hexDna}   label="Overview" />
          <HexLink to="/wetlab"     icon={hexChart} label="Wetlab" />
          <HexLink to="/drylab"     icon={hexChip}  label="Drylab" />
          <HexLink to="/team"       icon={hexTeam}  label="Team" />
          <HexLink to="/references" icon={hexBook}  label="References" />
        </div>
      </section>
    </Layout>
  );
}
