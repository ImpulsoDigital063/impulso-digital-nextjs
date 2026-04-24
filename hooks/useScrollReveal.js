"use client";

import { useEffect, useRef } from "react";

/**
 * Reveal bidirecional — técnica Gravyx.
 * Elementos com classe `.sf` entram com fade + blur quando visíveis,
 * saem pelo topo com `.sf-out-top` quando scroll avança,
 * voltam ao estado inicial quando scroll recua.
 *
 * Stagger escalonado por ordem no DOM: 0, 70ms, 140ms, 210ms (cicla a cada 4).
 */
export function useScrollReveal() {
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".sf"));
    if (elements.length === 0) return;

    elements.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min((i % 4) * 0.07, 0.21)}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const scrollingDown = window.scrollY >= lastScrollYRef.current;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("sf-out-top");
            entry.target.classList.add("sf-in");
          } else {
            entry.target.classList.remove("sf-in");
            if (scrollingDown) entry.target.classList.add("sf-out-top");
            else entry.target.classList.remove("sf-out-top");
          }
        });
        lastScrollYRef.current = window.scrollY;
      },
      { threshold: [0, 0.12], rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      lastScrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
