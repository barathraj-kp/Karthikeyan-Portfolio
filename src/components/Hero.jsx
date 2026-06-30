function Hero() {
  return (
    <section id="home">
      <div className="hero-grid-bg"></div>

      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1 className="hero-name">
          <span className="gradient-text">
            KARTHIKEYAN
          </span>
        </h1>

        <p className="hero-role">
          Full Stack Developer · MERN Stack · Fresher
        </p>

        <p className="hero-desc">
          Passionate developer crafting performant web
          experiences from Coimbatore, India. Turning ideas
          into clean, scalable code — one project at a time.
        </p>

        <div className="hero-cta">
          <a
            href="#projects"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <span>Scroll</span>

        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
