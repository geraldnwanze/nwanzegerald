import type React from "react";
import data from './data.json';
import dp from './assets/dp.png';

const splitTech = (value: string) =>
  value.split(/\s*[•,]\s*/).map((t) => t.trim()).filter(Boolean);

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Chip: React.FC<{ children: React.ReactNode; tone?: "light" | "dark" }> = ({
  children,
  tone = "light",
}) => (
  <span
    className={
      tone === "dark"
        ? "px-3 py-1.5 rounded-full bg-white/10 text-sm text-white ring-1 ring-white/10"
        : "px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
    }
  >
    {children}
  </span>
);

const SectionHeading: React.FC<{ eyebrow: string; title: string; children?: React.ReactNode }> = ({
  eyebrow,
  title,
  children,
}) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-600 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
    </div>
    {children && <p className="text-slate-600 max-w-xl leading-relaxed">{children}</p>}
  </div>
);

const Resume: React.FC = () => {
  const [latest] = data.experience;
  const stats = [
    { value: data.years_of_experience, label: "Years of experience" },
    { value: String(data.experience.length), label: "Companies" },
    { value: String(data.portfolio.length), label: "Flagship projects" },
    { value: latest.role, label: "Most recent role" },
  ];
  const aiStack = data.stacks.filter((s) => s.title === "AI-Assisted Engineering");
  const techStacks = data.stacks.filter((s) => s.title !== "AI-Assisted Engineering");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Primary">
          <a href="#top" className="flex items-center gap-3 font-semibold">
            <span className="w-9 h-9 rounded-xl bg-slate-900 text-white text-sm flex items-center justify-center">
              {data.abbreviation}
            </span>
            <span className="hidden sm:inline">{data.fullname}</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={data.calendly}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-slate-900 text-white px-5 py-2 text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            Book a call
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-white border-b border-slate-200">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-indigo-100/70 blur-3xl"
        />
        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 px-3 py-1 text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Open to remote opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6">
              Building scalable,
              <span className="block bg-gradient-to-r from-indigo-600 to-slate-500 bg-clip-text text-transparent">
                modern digital products.
              </span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">{data.introduction}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={data.calendly}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium shadow-lg shadow-slate-900/10 hover:bg-slate-700 transition-colors"
              >
                Schedule a call
              </a>
              <a
                href="#contact"
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium hover:bg-slate-100 transition-colors"
              >
                Contact me
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-2xl">
            <div className="flex items-center gap-5 mb-8">
              <img
                src={dp}
                alt={`Portrait of ${data.fullname}`}
                width={256}
                height={340}
                className="w-24 h-24 rounded-2xl object-cover object-top ring-2 ring-white/20"
              />
              <div>
                <h2 className="text-2xl font-semibold">{data.fullname}</h2>
                <p className="text-slate-300 mt-1">{data.occupation}</p>
                <p className="text-slate-400 text-sm mt-1">Nigeria · Remote</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{data.focus}</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">Primary stack</p>
            <div className="flex flex-wrap gap-2">
              {data.primary_stack.map((tech) => (
                <Chip key={tech} tone="dark">{tech}</Chip>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="relative max-w-6xl mx-auto px-6 pb-12">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-slate-200 ring-1 ring-slate-200">
            {stats.map((s) => (
              <div key={s.label} className="bg-white px-6 py-5">
                <dt className="text-xs uppercase tracking-widest text-slate-500 order-2">{s.label}</dt>
                <dd className="text-2xl font-bold tracking-tight mt-1">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="About" title="Balancing performance, reliability and user experience.">
          I specialize in designing, supporting, and troubleshooting production software systems — with a
          strong emphasis on root causes and system reliability.
        </SectionHeading>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">{data.core_competence.title}</h3>
            <ul className="space-y-3">
              {data.core_competence.desc.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 content-start">
            {techStacks.map((item) => (
              <div
                key={item.title}
                className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm ${
                  item.title === "Technical Troubleshooting" ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {splitTech(item.desc).map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </div>
            ))}
            {aiStack.map((item) => (
              <div
                key={item.title}
                className="sm:col-span-2 bg-indigo-50 p-6 rounded-3xl border border-indigo-100"
              >
                <h3 className="text-lg font-semibold mb-3 text-indigo-950">{item.title}</h3>
                <p className="text-indigo-900/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="scroll-mt-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionHeading eyebrow="Experience" title="Professional journey">
            Delivering production-ready applications across fintech, e-commerce, SaaS, and
            blockchain-related projects.
          </SectionHeading>

          <ol className="relative border-l border-slate-200 ml-2 space-y-12">
            {data.experience.map((job, i) => (
              <li key={`${job.company}-${job.role}`} className="pl-8 md:pl-10 relative">
                <span
                  aria-hidden
                  className={`absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full ring-4 ring-white ${
                    i === 0 ? "bg-indigo-600" : "bg-slate-300"
                  }`}
                />
                <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight">{job.role}</h3>
                      <p className="text-indigo-700 font-medium">{job.company}</p>
                    </div>
                    <p className="text-sm font-medium text-slate-500 md:text-right">{job.year}</p>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {job.desc.map((exp) => (
                      <li key={exp} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                        {exp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2" aria-label="Environment">
                    {splitTech(job.environment).map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-16 max-w-6xl mx-auto px-6 py-24">
        <SectionHeading eyebrow="Projects" title="Selected work" />

        <div className="grid md:grid-cols-3 gap-6">
          {data.portfolio.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col bg-white rounded-3xl p-8 border border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-6 text-lg font-bold">
                {project.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">{project.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {splitTech(project.tech).map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto text-sm font-semibold text-indigo-700 group-hover:underline"
              >
                View project <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300 mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Let’s build something impactful.</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Available for freelance projects, remote opportunities, and long-term collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${data.socials.email.link}`}
              className="rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium hover:bg-slate-200 transition-colors"
            >
              {data.socials.email.title}
            </a>
            {[data.socials.linkedin, data.socials.github, data.socials.twitter].map((s) => (
              <a
                key={s.title}
                href={s.link}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} {data.fullname}
        </div>
      </section>
    </div>
  );
};

export default Resume;
