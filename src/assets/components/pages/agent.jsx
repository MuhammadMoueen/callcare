import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import agent1 from "../../images/agents/agent1.jpg";
import agent2 from "../../images/agents/agent2.jpg";
import agent3 from "../../images/agents/agent3.jpg";

const agentProfiles = {
  moueen: {
    slug: "moueen",
    name: "Moueen",
    title: "Customer Support Specialist",
    focus: "Phone support, issue triage, and customer guidance.",
    specialties: ["Phone support", "Issue triage", "Customer guidance"],
    image: agent1,
  },
  "callcare-team": {
    slug: "callcare-team",
    name: "CallCare Team",
    title: "Service Desk Specialist",
    focus: "Service desk coordination, support requests, and connecting customers with the right help.",
    specialties: ["Service desk", "Request coordination", "Customer guidance"],
    image: agent2,
  },
  "support-desk": {
    slug: "support-desk",
    name: "Support Desk",
    title: "Customer Care Specialist",
    focus: "Customer care, answering questions, and helping customers find a clear path forward.",
    specialties: ["Customer care", "Question handling", "Helpful follow-up"],
    image: agent3,
  },
};

const agencyHighlights = Object.values(agentProfiles);

function Agent() {
  const { name } = useParams();
  const { darkMode } = useContext(ThemeContext);
  const profile = name ? agentProfiles[name.toLowerCase()] : null;
  const agentName = profile?.name ?? (name ? name.charAt(0).toUpperCase() + name.slice(1) : null);

  return (
    <main className={darkMode ? "min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-100" : "min-h-[calc(100vh-5rem)] bg-slate-50 text-slate-900"}>
      <section className="container-shell py-16 sm:py-20">
        {!agentName && (
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[28px] bg-orange-100 text-4xl text-orange-500 dark:bg-orange-500/10">
                ☎
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-[0.22em] text-orange-500">
                Customer support
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Meet the CallCare team
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Our support specialists are here to help with responsive communication, practical guidance, and clear next steps.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {agencyHighlights.map((agent) => (
                <div
                  key={agent.name}
                  className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="overflow-hidden">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="h-72 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">{agent.title}</p>
                    <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{agent.name}</h2>
                    <Link
                      to={`/agent/${agent.slug}`}
                      className="mt-4 inline-flex rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                    >
                      View profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {agentName && profile && (
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[var(--shadow-card)] dark:border-slate-700 dark:bg-slate-900">
              <div className="relative isolate overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-amber-400 px-6 py-8 sm:px-10 sm:py-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-12 -top-24 -z-10 h-72 w-72 rounded-full border-[36px] border-white/10"
                />
                <div className="absolute -bottom-20 right-1/3 -z-10 h-44 w-44 rounded-full bg-white/10 blur-2xl" />

                <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-end sm:text-left">
                  <div className="relative shrink-0">
                    <img
                      src={profile.image}
                      alt={`${agentName}, ${profile.title}`}
                      className="h-32 w-32 rounded-[28px] border-4 border-white/90 object-cover shadow-xl sm:h-36 sm:w-36"
                    />
                    <span className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-4 border-orange-500 bg-white text-lg text-green-600 shadow-sm" aria-label="Available">
                      ✓
                    </span>
                  </div>

                  <div className="pb-1 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">
                      Meet your support specialist
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{agentName}</h1>
                    <p className="mt-2 text-base font-medium text-white/90 sm:text-lg">{profile.title}</p>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-sm font-medium text-white">
                      <span className="h-2 w-2 rounded-full bg-green-300" />
                      Ready to help
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_300px] lg:gap-10">
                <div>
                  <section aria-labelledby="about-agent">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">About</p>
                    <h2 id="about-agent" className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                      Here to make things easier
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
                      {profile.focus} Get clear, thoughtful support and practical next steps, every time you reach out.
                    </p>
                  </section>

                  <section className="mt-8" aria-labelledby="specialties">
                    <h2 id="specialties" className="text-sm font-bold text-slate-900 dark:text-white">
                      Areas of support
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {profile.specialties.map((specialty) => (
                        <span
                          key={specialty}
                          className="rounded-full border border-orange-200 bg-orange-50 px-3.5 py-2 text-sm font-medium text-orange-700 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-300"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </section>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg text-orange-500 dark:bg-slate-900" aria-hidden="true">☎</span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Phone support</h3>
                        <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">Talk through your question with our team.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg text-orange-500 dark:bg-slate-900" aria-hidden="true">✓</span>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Practical guidance</h3>
                        <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400">Get clear answers and useful next steps.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800/70">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Let&apos;s get started</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    Choose how you&apos;d like to connect with CallCare support.
                  </p>

                  <div className="mt-5 space-y-3">
                    <a
                      href="tel:+1234567890"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                    >
                      <span aria-hidden="true">☎</span>
                      Call our team
                    </a>
                    <Link
                      to="/contact"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/10 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-orange-400 dark:hover:text-orange-300"
                    >
                      Send a message
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>

                  <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-700">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Support line</p>
                    <a href="tel:+1234567890" className="mt-1 inline-block text-sm font-semibold text-slate-800 hover:text-orange-500 dark:text-slate-200 dark:hover:text-orange-300">
                      +1 234 567 890
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        )}

        {agentName && !profile && (
          <div className="mx-auto max-w-xl rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-[var(--shadow-soft)] dark:border-slate-700 dark:bg-slate-900 sm:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl text-orange-500 dark:bg-orange-500/10" aria-hidden="true">
              ☎
            </div>
            <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">Profile not found</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              We couldn&apos;t find an agent profile for “{agentName}”. Browse the CallCare team to find the right support.
            </p>
            <Link
              to="/agent"
              className="mt-6 inline-flex rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Meet the team
            </Link>
          </div>
        )}
      </section>
    </main>
  );
}

export default Agent;