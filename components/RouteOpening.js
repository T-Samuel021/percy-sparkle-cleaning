"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteOpening() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const scrollToTop = () => window.scrollTo(0, 0);

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    scrollToTop();
    window.addEventListener("pageshow", scrollToTop);

    return () => {
      window.removeEventListener("pageshow", scrollToTop);
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);

    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    setIsOpening(true);

    const timer = window.setTimeout(() => {
      setIsOpening(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!isOpening) return null;

  return (
    <div className="siteIntro siteIntroRoute" aria-hidden="true">
      <div className="siteIntroContent">
        <div className="siteIntroLogoFrame">
          <span className="siteIntroLogo" />
        </div>
        <p className="siteIntroName">Percy Sparkle</p>
        <p className="siteIntroService">Cleaning Services</p>
      </div>
    </div>
  );
}
