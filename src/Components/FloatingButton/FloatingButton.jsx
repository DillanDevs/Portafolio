import React, { useState, useEffect } from "react";
import "./FloatingButton.css"; // Añade estilos según tus preferencias

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Cambia 500 a la posición en la que deseas que aparezca el botón
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`floating-button ${isVisible ? "visible" : "hidden"}`}
      onClick={scrollToTop}
    >
      <span></span>
      <span></span>
      <span></span>

    </div>
  );
};

export default FloatingButton;
