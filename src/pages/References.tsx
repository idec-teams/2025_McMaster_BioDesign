import React from "react";
import Layout from "../components/Layout";
import heroReferences from "../assets/banners/hero-references.png";

const ThinHero: React.FC<{ title: string; image: string; subtitle?: React.ReactNode }> = ({ title, image, subtitle }) => (
  <div className="not-prose">
    <div className="mx-auto max-w-6xl">
      <div className="relative overflow-hidden rounded-t-3xl">
        <img src={image} alt="" className="h-40 md:h-56 w-full object-cover brightness-90 saturate-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" aria-hidden />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow">References</h1>
          {subtitle && <p className="mt-2 text-sm md:text-base text-zinc-300 drop-shadow max-w-3xl">{subtitle}</p>}
        </div>
      </div>
      <div className="h-2 w-full bg-purple-500/70 rounded-b-3xl" />
    </div>
  </div>
);

const Paper: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-purple-500/40 -z-10" />
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/70 backdrop-blur p-6 md:p-10 shadow-lg">{children}</div>
  </div>
);

export default function References() {
  return (
    <Layout
      hero={
        <ThinHero
          title="References"
          image={heroReferences}
          subtitle="Literature, datasets, and tools referenced across the McMaster iDEC project"
        />
      }
    >
      <div className="mt-8 mx-auto max-w-6xl">
        <Paper>
          <div className="prose prose-invert max-w-none space-y-10">
            <section>
              <h2 className="text-purple-300">Primary Literature</h2>
              <ol className="text-sm md:text-base leading-relaxed text-zinc-300 space-y-3">
                <li>Bae W., Jones P.G., Inouye M. (1997). <em>CspA, the major cold shock protein of Escherichia coli, negatively regulates its own gene expression.</em> Journal of Bacteriology, 179(19), 7081–7088.</li>
                <li>Fang L., Hou Y., Inouye M. (1998). <em>Role of the Cold-Box Region in the 5′ UTR of the cspA mRNA in its transient expression at low temperature.</em> Journal of Bacteriology, 180(19), 5379–5385.</li>
                <li>Yamanaka K., Mitta M., Inouye M. (1999). <em>Mutation analysis of the 5′ untranslated region of the cold-shock cspA mRNA of Escherichia coli.</em> Journal of Bacteriology, 181(20), 6284–6291.</li>
                <li>Nakashima K., Kanamaru K., Mizuno T., Horikoshi K. (1996). <em>Regulation of the cspA family in Escherichia coli: multiple promoters and differential cold-shock induction.</em> Molecular Microbiology, 20(5), 1049–1058.</li>
                <li>Xia B., Ke H., Inouye M. (2001). <em>CspA, CspB, and CspG, major cold-shock proteins of Escherichia coli, are major transcription anti-terminators.</em> Proceedings of the National Academy of Sciences, 98(16), 9059–9064.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-purple-300">Methods, Toolkits, and Databases</h2>
              <ol className="text-sm md:text-base leading-relaxed text-zinc-300 space-y-3">
                <li>Salis H.M. (2011). <em>The Ribosome Binding Site Calculator.</em> Nature Methods, 8, 1009–1014.</li>
                <li>New England Biolabs (NEB). <em>Q5 High-Fidelity DNA Polymerase, DpnI Digestion, and NEBuilder HiFi Assembly User Manuals.</em></li>
                <li>Zymo Research. <em>DNA Clean &amp; Concentrator Kit (DCC) Protocols.</em></li>
                <li>Addgene Plasmid Repository. <em>pUA66-GFP backbone and Anderson Promoter Collection.</em></li>
                <li>Benchling. <em>Sequence design, cloning visualization, and primer design tools.</em></li>
              </ol>
            </section>

            <section>
              <h2 className="text-purple-300">Computational and Model References</h2>
              <ol className="text-sm md:text-base leading-relaxed text-zinc-300 space-y-3">
                <li>Nielsen A.A.K. et al. (2016). <em>Genetic circuit design automation.</em> Science, 352(6281), aac7341.</li>
                <li>Linder J., et al. (2022). <em>EVMP: Evolutionarily-Informed Machine Learning for Promoter Strength Prediction.</em> bioRxiv preprint.</li>
                <li>Radford A., et al. (2023). <em>Transformer architectures for biological sequence modeling.</em> Nature Machine Intelligence, 5(4), 342–356.</li>
                <li>McMaster BioDesign (2025). <em>Directed Evolution of the cspA Regulatory Element for Low-Temperature Expression.</em> Internal Project Report, McMaster University.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-purple-300">Acknowledgments</h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We would like to acknowledge the Currie Lab and the Singh Lab for their guidance and support throughout this project. Special thanks to Dr. Valentina Evdokimova from the Ontario Institute for Cancer Research (OICR) for generously providing reagents and materials essential to our experiments.
              </p>
            </section>
          </div>
        </Paper>
      </div>
    </Layout>
  );
}
