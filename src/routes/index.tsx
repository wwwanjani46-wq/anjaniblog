import { useEffect, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import portfolioHomepageHtml from "@/components/portfolio_homepage.html?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "designwithanjani" },
      { name: "description", content: "Design portfolio and creative studio by Anjani — brand identity, editorial design, and motion-led digital experiences." },
    ],
  }),
  component: PortfolioHomepage,
});

function parsePortfolioHtml(html: string) {
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);

  return {
    style: styleMatch?.[1] ?? "",
    body: bodyMatch?.[1] ?? html,
  };
}

function PortfolioHomepage() {
  const { style, body } = useMemo(() => parsePortfolioHtml(portfolioHomepageHtml), []);

  useEffect(() => {
    const cur = document.getElementById("cur");
    const ring = document.getElementById("ring");
    if (!cur || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let rafId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mx = event.clientX;
      my = event.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(animateRing);
    };
    animateRing();

    const hoverElements = Array.from(document.querySelectorAll<HTMLElement>("a,button,.work-card,.svc"));
    const handleMouseEnter = () => {
      cur.style.width = "6px";
      cur.style.height = "6px";
      ring.style.width = "60px";
      ring.style.height = "60px";
    };
    const handleMouseLeave = () => {
      cur.style.width = "12px";
      cur.style.height = "12px";
      ring.style.width = "40px";
      ring.style.height = "40px";
    };

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.transitionDelay = `${index * 0.06}s`;
            target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => observer.observe(el));

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: style }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  );
}
