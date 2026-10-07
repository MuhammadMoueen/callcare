import { useContext } from "react";
import { Link } from "react-router-dom";
import ServiceContext from "../../../context/ServiceContext";
import ThemeContext from "../../../context/ThemeContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalItems,
    clearCart,
  } = useContext(ServiceContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <main className={darkMode ? "min-h-[calc(100vh-5rem)] bg-slate-950 text-slate-100" : "min-h-[calc(100vh-5rem)] bg-slate-50 text-slate-900"}>
      <section className="container-shell py-16 sm:py-20">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange-500">Your cart</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Selected services
          </h1>

          {cart.length > 0 && (
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              {totalItems} service item{totalItems !== 1 ? "s" : ""} selected
            </p>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="mx-auto mt-10 max-w-2xl rounded-[28px] border border-slate-200 bg-white p-12 text-center shadow-[var(--shadow-soft)] dark:border-slate-700 dark:bg-slate-900">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl dark:bg-orange-500/10">
              🛒
            </div>

            <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">No services selected yet</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Start with a support option that matches your needs and build your service plan.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Browse Services
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="space-y-4">
              {cart.map((service) => (
                <div
                  key={service.id}
                  className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[var(--shadow-soft)] dark:border-slate-700 dark:bg-slate-900"
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-500 dark:bg-orange-500/10 dark:text-orange-300">
                        {service.icon}
                      </div>

                      <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">{service.name}</h2>
                        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                          ${service.price} per service
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-5 sm:justify-end">
                      <div className="flex items-center overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(service.id)}
                          className="flex h-10 w-10 items-center justify-center text-lg font-bold text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                          aria-label={`Decrease quantity for ${service.name}`}
                        >
                          −
                        </button>

                        <span className="flex h-10 w-12 items-center justify-center border-x border-slate-200 text-sm font-semibold dark:border-slate-700 dark:text-white">
                          {service.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => increaseQuantity(service.id)}
                          className="flex h-10 w-10 items-center justify-center text-lg font-bold text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                          aria-label={`Increase quantity for ${service.name}`}
                        >
                          +
                        </button>
                      </div>

                      <div className="min-w-[70px] text-right text-lg font-bold text-slate-900 dark:text-white">
                        ${service.price * service.quantity}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeFromCart(service.id)}
                    className="mt-4 text-sm font-semibold text-red-500 transition hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-slate-500 transition hover:text-red-500 dark:text-slate-300"
              >
                Clear cart
              </button>
            </div>

            <aside className="h-fit rounded-[24px] border border-slate-200 bg-white p-6 shadow-[var(--shadow-soft)] dark:border-slate-700 dark:bg-slate-900">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Order summary</h2>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>Selected services</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>

                <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">Total</span>
                    <span className="text-2xl font-bold text-orange-500">${totalPrice}</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="mt-7 block w-full rounded-xl bg-orange-500 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-orange-600"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/services"
                className="mt-3 block text-center text-sm font-semibold text-slate-500 transition hover:text-orange-500 dark:text-slate-300"
              >
                ← Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
}

export default Cart;