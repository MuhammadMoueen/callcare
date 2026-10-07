import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../../context/ThemeContext";
import SectionHeading from "../SectionHeading";

const values = [
  {
    icon: "✓",
    title: "Reliability",
    description: "Thoughtful service that people can depend on when they need help quickly.",
  },
  {
    icon: "♡",
    title: "Empathy",
    description: "Listening closely and responding with respect, clarity, and care.",
  },
  {
    icon: "→",
    title: "Practical solutions",
    description: "Turning questions into clear action steps and better outcomes.",
  },
];

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}>
      <section className="container-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About CallCare"
              title="Support built around people, not friction."
              description="CallCare is a customer-support brand focused on clear communication, calm problem solving, and practical help when customers need it most."
              align="left"
            />

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Services
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[var(--shadow-card)] dark:border-slate-700 dark:bg-slate-900">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">Our mission</p>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                We help people move forward with confidence by making support accessible, personal, and easy to understand.
              </p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-orange-50 p-5 dark:bg-orange-500/10">
                <p className="text-sm font-semibold text-orange-500">Clear support</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">No jargon, no confusion — just direct help.</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
                <p className="text-sm font-semibold text-orange-500">Practical guidance</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Solutions tailored to the problem at hand.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our values"
            title="The principles behind every support experience"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-500 dark:bg-orange-500/10 dark:text-orange-300">
                  {value.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;