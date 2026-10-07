import { createContext, useEffect, useMemo, useState } from "react";

const ServiceContext = createContext();

export function ServiceProvider({ children }) {
  const [cart, setCart] = useState(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const savedCart = localStorage.getItem("callcare-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const services = [
    {
      id: 1,
      name: "Phone Support",
      description: "Direct help from a friendly support specialist when you need quick answers.",
      price: 20,
      icon: "☎",
    },
    {
      id: 2,
      name: "Technical Support",
      description: "Hands-on help for technical issues, troubleshooting, and guided problem solving.",
      price: 30,
      icon: "⚙",
    },
    {
      id: 3,
      name: "Priority Support",
      description: "Accelerated service for urgent matters and higher-touch assistance.",
      price: 50,
      icon: "⚡",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("callcare-cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (service) => {
    setCart((currentCart) => {
      const existingService = currentCart.find((item) => item.id === service.id);

      if (existingService) {
        return currentCart.map((item) =>
          item.id === service.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...service, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((service) => service.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((service) =>
        service.id === id
          ? { ...service, quantity: service.quantity + 1 }
          : service
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((service) =>
          service.id === id
            ? { ...service, quantity: service.quantity - 1 }
            : service
        )
        .filter((service) => service.quantity > 0)
    );
  };

  const totalPrice = useMemo(
    () => cart.reduce((total, service) => total + service.price * service.quantity, 0),
    [cart]
  );

  const totalItems = useMemo(
    () => cart.reduce((total, service) => total + service.quantity, 0),
    [cart]
  );

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ServiceContext.Provider
      value={{
        services,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
        totalItems,
        clearCart,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}

export default ServiceContext;