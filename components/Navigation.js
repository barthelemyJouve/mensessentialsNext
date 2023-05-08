import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useRef, useEffect } from "react";

const links = [
  { title: "Home", url: "/" },
  { title: "Blog", url: "/blog" },
  { title: "Shop", url: "/shop" },
  { title: "About us", url: "/about" },
  { title: "Contact", url: "/contact" },
];

const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigationRef = useRef(null);
  const router = useRouter();

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (event) => {
    if (
      navigationRef.current &&
      !navigationRef.current.contains(event.target) &&
      isSidebarOpen
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen, router]);

  // if (typeof window !== "undefined") {
  //   let lastScroll = 0;
  //   console.log(navigationRef.current.style.top);
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY < lastScroll) {
  //       navigationRef.current.style.top = "0";
  //     } else {
  //       navigationRef.current.style.top = "-90px";
  //     }
  //     lastScroll = window.scrollY;
  //   });
  // }
  return (
    <div className="navigation" ref={navigationRef}>
      <div className="navigationBurgerMenu">
        <div className="navigationBurgerMenuOpen" onClick={handleSidebarToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>
        {isSidebarOpen && (
          <div className="side-bar-menu" id="side-bar">
            <ul>
              {links.map((link) => (
                <li key={link.url}>
                  <Link
                    className={router.pathname === link.url ? "nav-active" : ""}
                    href={link.url}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              className={`navigationBurgerMenuClose${
                isSidebarOpen ? " visible" : ""
              }`}
              onClick={handleSidebarToggle}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        )}
      </div>
      <div className="navigationLogo"></div>

      <ul>
        {links.map((link) => (
          <li key={link.url}>
            <Link
              className={router.pathname === link.url ? "nav-active" : ""}
              href={link.url}
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="navigation-shopping-basket">
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  );
};

export default Navigation;
