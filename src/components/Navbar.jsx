import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const sections = ["home", "about", "skills", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const current = sections.find((id) => {
        const section = document.getElementById(id);

        if (!section) return false;

        const rect = section.getBoundingClientRect();

        return rect.top <= 120 && rect.bottom > 120;
      });

      if (current) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id, e) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setActive(id);
  };

  return (
    <nav
      style={{
        boxShadow: scrolled
          ? "0 8px 32px rgba(0,0,0,0.4)"
          : "none",
      }}
    >
      <div className="nav-logo">KARTHIKEYAN</div>

      <ul className="nav-links">
        {sections.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={active === item ? "active" : ""}
              onClick={(e) => scrollToSection(item, e)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;