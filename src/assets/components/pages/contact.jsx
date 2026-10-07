import { useContext, useState } from "react";
import ThemeContext from "../../../context/ThemeContext";
import contact from "../../images/contact/contact.jpg";

function Contact() {
  const { darkMode } = useContext(ThemeContext);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}>
      <section className="container-shell py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Contact us</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            How can we
            <span className="text-orange-500"> help?</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Reach out to our support team with a question, an issue, or a request for guidance. We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="container-shell grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[var(--shadow-soft)] dark:border-slate-700 dark:bg-slate-900">
              <img
                src={contact}
                alt="CallCare customer-support agent working at a desk"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Get in touch</h2>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                Choose the most convenient way to contact our team and we&apos;ll guide you to the best next step.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-xl text-orange-500 dark:bg-orange-500/10 dark:text-orange-300">
                    ☎
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Phone</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">+1 234 567 890</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-xl text-orange-500 dark:bg-orange-500/10 dark:text-orange-300">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">support@callcare.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-xl text-orange-500 dark:bg-orange-500/10 dark:text-orange-300">
                    ⌖
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Office</h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Customer Support Center</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-[var(--shadow-soft)] dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Send a message</h2>

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>

            {submitted && (
              <p className="mt-4 rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-orange-700 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-200">
                This is a front-end demo form only. No real message is sent to a backend.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;