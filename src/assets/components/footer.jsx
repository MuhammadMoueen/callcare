import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/agent", label: "Agents" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={darkMode ? "bg-slate-950 text-white" : "bg-slate-900 text-white"}>
      <div className="container-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold text-white">
                ☎
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">CallCare</h2>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-400">
                  Customer Support
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Human support for the moments that matter most, delivered with clarity, care, and a focus on practical solutions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Quick links
            </h3>

            <div className="mt-5 space-y-3 text-sm">
              {footerLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `block transition ${
                      isActive ? "font-semibold text-orange-400" : "text-slate-300 hover:text-orange-300"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>☎ +1 234 567 890</p>
              <p>✉ support@callcare.com</p>
              <p>⌖ Customer Support Center</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © 2026 CallCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;