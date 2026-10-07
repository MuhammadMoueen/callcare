function ServiceCard({ service, isInCart, addToCart }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_60px_rgba(249,115,22,0.12)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-[0_18px_45px_rgba(2,6,23,0.5)]">
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl text-orange-500 dark:bg-orange-500/10 dark:text-orange-300">
          {service.icon}
        </div>

        {isInCart && (
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
            Selected
          </span>
        )}
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
        {service.name}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {service.description}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span className="text-2xl font-bold text-slate-900 dark:text-white">
          ${service.price}
        </span>

        <button
          type="button"
          onClick={() => addToCart(service)}
          className={`inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
            isInCart
              ? "bg-emerald-500 text-white hover:bg-emerald-600"
              : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
        >
          {isInCart ? "Added" : "Add Service"}
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;
