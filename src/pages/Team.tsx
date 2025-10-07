import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

type Person = {
  name: string;
  role?: string; // kept if used elsewhere, but not rendered
  img?: string;
  email?: string; // NEW: email address
  link?: string;  // LinkedIn URL
};

type Section = {
  id: string;
  title: string;
  people: Person[];
};

export default function Team() {
  const hero = (
    <Hero image="/img/team-hero.jpg">
      <h1 className="text-3xl md:text-5xl font-extrabold">
        Meet the McMaster iDEC Team
      </h1>
      <p className="mt-3 text-zinc-300">
        Diverse backgrounds, one goal — colder, better protein production.
      </p>
    </Hero>
  );

  // Helper to make a safe default avatar path (optional)
  const imgOr = (p: Person, fallback: string) => p.img ?? fallback;

  // --- Master roster grouped into sections ---
  const sections: Section[] = [
    {
      id: "leads",
      title: "Team Leads",
      people: [
        {
          name: "Jiayi (Christina) Zheng",
          img: "/img/people/jiayi-zheng.jpg",
          email: "zhengj83@mcmaster.ca",
          link: "https://www.linkedin.com/in/christina-jiayi-zheng/",
        },
        {
          name: "Suky Zheng",
          img: "/img/people/suky-zheng.jpg",
          email: "zhengs66@mcmaster.ca",
          link: "https://www.linkedin.com/in/suky-zheng/",
        },
      ],
    },
    {
      id: "mentors",
      title: "Mentors",
      people: [
        {
          name: "William Pihlainen-Bleecker",
          img: "/img/people/william-pihlainen-bleecker.jpg",
          email: "bleeckew@mcmaster.ca",
          link: "https://www.linkedin.com/in/will-pb/",
                },
        {
          name: "Jordan Classen",
          img: "/img/people/jordan-classen.jpg",
          email: "classenj@mcmaster.ca",
          link: "https://www.linkedin.com/in/jclassen/", 
        },
      ],
    },
    {
      id: "wl-leads",
      title: "Wet Lab Leads",
      people: [
        {
          name: "Irma Lozica",
          img: "/img/people/irma-lozica.jpeg",
          email: "lozicai@mcmaster.ca",
          link: "https://www.linkedin.com/in/irmalozicahehe", 
        },
        {
          name: "Varnigha Mayooran",
          img: "/img/people/varnigha-mayooran.jpg",
          email: "mayoorv@mcmaster.ca",
          link: "https://www.linkedin.com/in/varnigha!",
        },
        {
          name: "Oviya Sathiyanarayanan",
          img: "/img/people/oviya-sathiyanarayanan.png",
          email: "sathiyao@mcmaster.ca",
          link: "https://www.linkedin.com/in/oviyasath/",
        },
        {
          name: "Eshana Pararajasegaram",
          img: "/img/people/eshana-pararajasegaram.jpg",
          email: "pararaje@mcmaster.ca",
          link: "https://www.linkedin.com/in/eshana-pararajasegaram-4009182b2/",
        }
      ],
    },
    {
      id: "dl-leads",
      title: "Dry Lab Leads",
      people: [
        {
          name: "Zachary McKay",
          img: "/img/people/zachary-mckay.jpg",
          email: "mckayz@mcmaster.ca",
          link: "https://www.linkedin.com/in/zacharyrobertmckay/",
        },
        {
          name: "Bob-Shen Yan",
          img: "/img/people/bob-shen-yan.jpg",
          email: "yanb18@mcmaster.ca",
          link: "https://ca.linkedin.com/in/bob-shen-yan-a23042263", 
        },
      ],
    },
    {
      id: "wetlab",
      title: "Wet Lab Members",
      people: [
        {
          name: "Olamide Asaa",
          img: "/img/people/olamide-asaa.png",
          email: "asao@mcmaster.ca",
          link: "https://www.linkedin.com/in/olamide-a-783846278/", 
        },
        {
          name: "Saejin (Grace) Hu",
          img: "/img/people/saejin-hu.jpg",
          email: "hurs1@mcmaster.ca",
          link: "https://www.linkedin.com/in/gracehur01/", 
        },
        {
          name: "Madelyn Uhm",
          img: "/img/people/madelyn-uhm.jpg",
          email: "uhmm@mcmaster.ca",
          link: "https://www.linkedin.com/in/madelyn-uhm/",
        },
        {
          name: "Timothy Zheng",
          img: "/img/people/timothy-zheng.jpg",
          email: "zhenj41@mcmaster.ca",
          link: "https://www.linkedin.com/in/timothy-zheng", 
        },
      ],
    },
    {
      id: "drylab",
      title: "Dry Lab Members",
      people: [
        {
          name: "Ainoor Arora",
          img: "/img/people/ainoor-arora.jpg",
          email: "aroraa79@mcmaster.ca",
          link: "https://www.linkedin.com/in/noor-arora-/",
        },
        {
          name: "Mischa Esmail",
          img: "/img/people/mischa-esmail.jpg",
          email: "esmailm@mcmaster.ca",
          link: "https://www.linkedin.com/in/mischa-esmail-a4a281242/", 
        },
        {
          name: "Andrew Lian",
          img: "/img/people/andrew-lian.jpg",
          email: "liana2@mcmaster.ca",
          link: "https://www.linkedin.com/in/andrew-lian/",
        },
        {
          name: "Sarah Moran",
          img: "/img/people/sarah-moran.jpg",
          email: "morans6@mcmaster.ca",
          link: "https://www.linkedin.com/in/sarahmoran36/",
        },
        {
          name: "Tvara Parikh",
          img: "/img/people/tvara-parikh.jpg",
          email: "parikt5@mcmaster.ca",
          link: "www.linkedin.com/in/tvara-parikh-b76290275", 
        },
        {
          name: "Brandon Yoo",
          img: "/img/people/brandon-yoo.jpg",
          email: "yoob2@mcmaster.ca",
          link: "https://www.linkedin.com/in/brandonwsyoo/", 
        },
      ],
    },
  ];

  const ActionButton = ({
    href,
    onClick,
    title,
    icon,
    disabled,
  }: {
    href?: string;
    onClick?: () => void;
    title: string;
    icon: React.ReactNode;
    disabled?: boolean;
  }) => {
    const base =
      "inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg border border-base-line transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";
    const enabled =
      "hover:opacity-90 cursor-pointer";
    const disabledCls =
      "opacity-50 cursor-not-allowed";

    if (href && !disabled) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          title={title}
          aria-label={title}
          className={`${base} ${enabled}`}
        >
          {icon}
          <span className="sr-only">{title}</span>
        </a>
      );
    }

    return (
      <button
        type="button"
        title={title}
        aria-label={title}
        disabled
        className={`${base} ${disabledCls}`}
      >
        {icon}
        <span className="sr-only">{title}</span>
      </button>
    );
  };

  const MailIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm0 0 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0zM8.98 8.98h4.78v2.05h.07c.67-1.27 2.3-2.6 4.74-2.6 5.07 0 6 3.34 6 7.68V24h-5v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.77-2.61 3.59V24h-5z"
        fill="currentColor"
      />
    </svg>
  );

  const PersonCard = ({ p }: { p: Person }) => {
    const emailHref = p.email ? `mailto:${p.email}` : undefined;
    const linkedInHref = p.link && p.link.trim() !== "" ? p.link : undefined;

    return (
      <div className="card p-4 border border-base-line rounded-xl">
        <img
          src={imgOr(p, "/img/people/placeholder.jpg")}
          alt={p.name}
          className="w-full h-44 object-cover rounded-xl border border-base-line"
        />
        <div className="mt-3">
          <div className="font-semibold">{p.name}</div>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <ActionButton
            href={emailHref}
            title={p.email ? `Email ${p.name}` : "Email not provided"}
            icon={<MailIcon />}
            disabled={!emailHref}
          />
          <ActionButton
            href={linkedInHref}
            title={linkedInHref ? `${p.name} on LinkedIn` : "LinkedIn not provided"}
            icon={<LinkedInIcon />}
            disabled={!linkedInHref}
          />
        </div>
      </div>
    );
  };

  return (
    <Layout hero={hero}>
      <div className="mb-6 flex flex-wrap gap-2">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="pill hover:opacity-90 transition"
          >
            {s.title}
          </a>
        ))}
      </div>

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mt-8 scroll-mt-24">
          <h2 className="text-xl md:text-2xl font-bold">{section.title}</h2>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {section.people.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>
        </section>
      ))}
    </Layout>
  );
}
