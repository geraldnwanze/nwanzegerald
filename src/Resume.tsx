import type React from "react";
import data from './data.json';

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Software Developer
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Building scalable,
              <span className="block text-gray-600">modern digital products.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mb-8">
              Experienced software developer focused on creating performant,
              user-friendly applications using modern technologies and clean architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href={data.calendly} target="_blank" className="bg-black text-white px-6 py-3 rounded-2xl text-sm font-medium hover:opacity-90 transition">
                Schedule An Appointment
              </a>
              <button className="border border-gray-300 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-gray-100 transition">
                Contact Me
              </button>
            </div>
          </div>
   
          <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-[2rem] p-8 text-white shadow-2xl">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-2xl font-semibold">{ data.fullname }</h2>
                <p className="text-gray-300 mt-1">{ data.occupation }</p>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-2xl font-bold">
                { data.abbreviation }
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Experience</p>
                <h3 className="text-xl font-medium">{ data.years_of_experience } Years</h3>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Primary Stack</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {data.primary_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 rounded-xl bg-white/10 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-gray-400 text-sm mb-1">Location</p>
                <h3 className="text-lg font-medium">Nigeria</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              About
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              Creating solutions that balance performance and user experience.
            </h2>
          </div>

          <div className="md:col-span-2 grid gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <p className="text-gray-600 leading-relaxed text-lg">
                I specialize in building scalable web applications, APIs, and
                cloud-based systems with a strong focus on clean code,
                maintainability, and performance optimization.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {data.stacks.map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
                Experience
              </p>
              <h2 className="text-4xl font-bold">Professional Journey</h2>
            </div>
            <p className="text-gray-600 max-w-xl">
              Delivering production-ready applications across fintech,
              e-commerce, SaaS, and blockchain-related projects.
            </p>
          </div>

          <div className="space-y-8">
            {data.experience.map((job) => (
              <div
                key={job.role}
                className="grid md:grid-cols-4 gap-6 bg-gray-50 p-8 rounded-3xl border border-gray-100"
              >
                <div>
                  <p className="text-sm text-gray-500">{job.year}</p>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-2xl font-semibold mb-1">{job.role}</h3>
                  <p className="text-gray-500 mb-4">{job.company}</p>
                  <p className="text-gray-600 leading-relaxed">{job.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Projects
          </p>
          <h2 className="text-4xl font-bold">Selected Work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fintech Dashboard",
              tech: "React • Laravel • AWS",
              desc: "A modern financial analytics platform with real-time reporting and transaction monitoring.",
            },
            {
              title: "Marketplace Platform",
              tech: "NestJS • PostgreSQL • Docker",
              desc: "Scalable multi-vendor marketplace with secure authentication and payment integration.",
            },
            {
              title: "Blockchain App",
              tech: "TypeScript • Web3 • Node.js",
              desc: "Web3 application with wallet integrations, smart contract interactions, and token utilities.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 text-lg font-bold">
                {project.title.charAt(0)}
              </div>

              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-500 mb-5">{project.tech}</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.desc}
              </p>

              <button className="text-sm font-medium hover:underline">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s build something impactful.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Available for freelance projects, remote opportunities, and long-term collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto: ${data.socials.email.link}`} className="bg-white text-black px-6 py-3 rounded-2xl text-sm font-medium hover:opacity-90 transition">
              {data.socials.email.title}
            </a>
            <a href={data.socials.twitter.link} className="border border-white/20 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-white/10 transition">
              {data.socials.twitter.title}
            </a>
            <a href={data.socials.github.link} className="border border-white/20 px-6 py-3 rounded-2xl text-sm font-medium hover:bg-white/10 transition">
              {data.socials.github.title}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;