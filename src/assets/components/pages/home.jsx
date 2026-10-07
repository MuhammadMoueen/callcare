import { Link } from "react-router-dom";
import { useContext } from "react";
import ServiceContext from "../../../context/ServiceContext";
import ThemeContext from "../../../context/ThemeContext";
import home from "../../images/home/home.jpg";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";

const valuePoints = [
  {
    icon: "⚡",
    title: "Responsive support",
    description: "Fast, clear communication when your issue needs attention.",
  },
  {
    icon: "🧭",
    title: "Guided assistance",
    description: "Step-by-step help that keeps service simple and productive.",
  },
  {
    icon: "🤝",
    title: "Flexible service options",
    description: "Choose a support model that fits your urgency and needs.",
  },
];

const steps = [
  "Explore support options",
  "Choose the service that fits your needs",
  "Add it to your cart",
  "Review and prepare your support plan",
];

function Home() {
  const { services, addToCart, cart } = useContext(ServiceContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}>
      <section className="container-shell py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-300">
              Professional customer support
            </span>

            <h1 className="mt-6 max-w-xl text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Human support.
              <span className="block text-orange-500">When it matters most.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              CallCare helps people get clear answers, practical guidance, and dependable support when problems need a thoughtful response.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Services
              </Link>

              <Link
                to="/agent"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                Meet Our Agents
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                Responsive service
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-orange-500"></span>
                Friendly guidance
              </span>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[var(--shadow-card)] dark:border-slate-700 dark:bg-slate-900">
            <img
              src={home}
              alt="CallCare support team working together in a professional office"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Why CallCare"
            title="Support experiences built around clarity and care"
            description="From quick fixes to more involved support planning, our service model is designed to feel personal, responsive, and easy to trust."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valuePoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl text-orange-500 dark:bg-orange-500/10 dark:text-orange-300">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="container-shell py-16">
        <SectionHeading
          eyebrow="Featured services"
          title="Flexible support designed for real-world needs"
          description="Choose the service that matches your situation and move forward with confidence."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isInCart={cart.some((item) => item.id === service.id)}
              addToCart={addToCart}
            />
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-shell">
          <SectionHeading
            eyebrow="How CallCare works"
            title="A simple service flow, without the friction"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;