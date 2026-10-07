import { useContext } from "react";
import ServiceContext from "../../../context/ServiceContext";
import ThemeContext from "../../../context/ThemeContext";
import SectionHeading from "../SectionHeading";
import ServiceCard from "../ServiceCard";

function Services() {
  const { services, addToCart, cart } = useContext(ServiceContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={darkMode ? "min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-100" : "min-h-[calc(100vh-5rem)] bg-slate-50 text-slate-900"}>
      <section className="container-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Our services"
          title="Support options built for flexibility and clarity"
          description="Choose the support level that fits your timeline, urgency, and communication needs."
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
    </main>
  );
}

export default Services;