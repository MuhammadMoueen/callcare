import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../images/logo/logo.png";
import ServiceContext from "../../context/ServiceContext";
import ThemeContext from "../../context/ThemeContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/agent", label: "Agents" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const { totalItems } = useContext(ServiceContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="container-shell flex h-20 items-center justify-between gap-4">
        <NavLink
          to="/"
          end
          onClick={closeMobileMenu}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="CallCare logo"
            className="h-10 w-auto object-contain sm:h-11"
          />
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-slate-600 hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <NavLink
            to="/cart"
            aria-label="View cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-slate-700 transition hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            🛒

            {totalItems > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </NavLink>

          <button
            type="button"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-lg text-slate-700 transition hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <NavLink
            to="/contact"
            className="hidden items-center justify-center rounded-xl bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 sm:inline-flex"
          >
            ☎ Let&apos;s Talk
          </NavLink>

          <button
            type="button"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl text-slate-700 transition hover:border-orange-300 hover:text-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 md:hidden"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <div className="container-shell flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2.5 text-base font-medium transition ${
                    isActive
                      ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <NavLink
              to="/cart"
              onClick={closeMobileMenu}
              className="mt-2 flex items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white"
            >
              View cart
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;