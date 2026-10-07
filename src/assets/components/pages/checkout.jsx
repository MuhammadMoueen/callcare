import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ServiceContext from "../../../context/ServiceContext";
import ThemeContext from "../../../context/ThemeContext";

function Checkout() {
  const { cart, totalItems, totalPrice, clearCart } = useContext(ServiceContext);
  const { darkMode } = useContext(ThemeContext);
  const [order, setOrder] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const submittedOrder = {
      id: `CC-${Date.now().toString(36).toUpperCase()}`,
      customerName: formData.get("name").trim(),
      email: formData.get("email").trim(),
      phone: formData.get("phone").trim(),
      notes: formData.get("notes").trim(),
      items: cart.map((item) => ({ ...item })),
      totalItems,
      totalPrice,
    };

    setOrder(submittedOrder);
    clearCart();
  };

  const surfaceClass =
    "rounded-2xl border border-slate-200 bg-white shadow-[var(--shadow-soft)] dark:border-slate-700 dark:bg-slate-900";
  const fieldClass =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 dark:border-slate-600 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500";

  return (
    <main
      className={
        darkMode
          ? "min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-100"
          : "min-h-[calc(100vh-5rem)] bg-slate-50 text-slate-900"
      }
    >
      <section className="container-shell py-14 sm:py-20">
        {order ? (
          <div className={`${surfaceClass} mx-auto max-w-2xl p-6 text-center sm:p-10`}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-600 dark:bg-green-500/10 dark:text-green-400" aria-hidden="true">
              ✓
            </div>
            <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              Request received
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Thank you, {order.customerName}!
            </h1>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Your service request has been recorded. Our team will follow up at{" "}
              <span className="font-semibold text-slate-800 dark:text-slate-100">{order.email}</span>{" "}
              to confirm the details and arrange payment.
            </p>
            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-left dark:bg-slate-800">
              <div className="flex flex-wrap justify-between gap-2 text-sm">
                <span className="text-slate-500 dark:text-slate-400">Request number</span>
                <span className="font-semibold text-slate-900 dark:text-white">{order.id}</span>
              </div>
              <div className="mt-3 flex flex-wrap justify-between gap-2 border-t border-slate-200 pt-3 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">Services requested</span>
                <span className="font-semibold text-slate-900 dark:text-white">{order.totalItems}</span>
              </div>
              <div className="mt-3 flex flex-wrap justify-between gap-2 border-t border-slate-200 pt-3 dark:border-slate-700">
                <span className="font-semibold text-slate-900 dark:text-white">Estimated total</span>
                <span className="text-lg font-bold text-orange-500">${order.totalPrice}</span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
              No payment was processed. This demo checkout does not submit your details to a server.
            </p>
            <Link
              to="/services"
              className="mt-7 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Browse services
            </Link>
          </div>
        ) : cart.length === 0 ? (
          <div className={`${surfaceClass} mx-auto max-w-2xl p-8 text-center sm:p-12`}>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl dark:bg-orange-500/10" aria-hidden="true">
              🛒
            </div>
            <h1 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">Your cart is empty</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Add a service to your cart before continuing to checkout.
            </p>
            <Link
              to="/services"
              className="mt-6 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Browse services
            </Link>
          </div>
        ) : (
          <>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Checkout</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Complete your service request
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                Share your contact details and our team will get in touch to confirm your services and arrange payment.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[1fr_360px] lg:gap-8">
              <form onSubmit={handleSubmit} className={`${surfaceClass} p-6 sm:p-8`}>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Contact information</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  We&apos;ll use this information to follow up about your request.
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <label htmlFor="checkout-name" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Full name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="checkout-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      maxLength={100}
                      className={fieldClass}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkout-email" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Email address <span className="text-orange-500">*</span>
                    </label>
                    <input
                      id="checkout-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      maxLength={254}
                      className={fieldClass}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkout-phone" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Phone number <span className="text-slate-400">(optional)</span>
                    </label>
                    <input
                      id="checkout-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      maxLength={30}
                      className={fieldClass}
                      placeholder="+1 234 567 890"
                    />
                  </div>

                  <div>
                    <label htmlFor="checkout-notes" className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                      Notes <span className="text-slate-400">(optional)</span>
                    </label>
                    <textarea
                      id="checkout-notes"
                      name="notes"
                      rows={4}
                      maxLength={500}
                      className={`${fieldClass} resize-y`}
                      placeholder="Tell us anything that will help us support you."
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm leading-6 text-orange-800 dark:border-orange-500/20 dark:bg-orange-500/10 dark:text-orange-200">
                  This is a demo checkout. No payment details are collected and no real payment is processed. Our team will arrange payment with you.
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                >
                  Place service request
                </button>
              </form>

              <aside className={`${surfaceClass} h-fit p-6`}>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Order summary</h2>
                <div className="mt-5 space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-start justify-between gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-slate-800 dark:text-slate-100">{item.name}</p>
                        <p className="mt-1 text-slate-500 dark:text-slate-400">Qty: {item.quantity}</p>
                      </div>
                      <span className="shrink-0 font-semibold text-slate-800 dark:text-slate-100">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-3 border-t border-slate-200 pt-4 text-sm dark:border-slate-700">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Service items</span>
                    <span>{totalItems}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">Estimated total</span>
                    <span className="text-2xl font-bold text-orange-500">${totalPrice}</span>
                  </div>
                </div>

                <Link
                  to="/cart"
                  className="mt-5 block text-center text-sm font-semibold text-slate-500 transition hover:text-orange-500 dark:text-slate-300"
                >
                  ← Return to cart
                </Link>
              </aside>
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default Checkout;
