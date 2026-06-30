function About() {
  const stats = [
    { number: "2+", label: "Projects Built" },
    { number: "5+", label: "Technologies" },
    { number: "3", label: "Languages" },
    { number: "2025", label: "Graduate" },
  ];

  const info = [
    {
      label: "Degree",
      value: "B.Sc Information Technology",
    },
    {
      label: "College",
      value: "Kongunadu Arts & Science College",
    },
    {
      label: "Graduated",
      value: "2025",
    },
    {
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
    },
    {
      label: "Certificate",
      value: "MERN Stack",
    },
    {
      label: "Status",
      value: "Open To Work 🟢",
    },
  ];

  return (
    <section id="about">
      <div className="about-grid">

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
            }}
          >
            <div className="about-avatar">
              👨‍💻
              <div className="about-avatar-ring"></div>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((item, index) => (
              <div
                className="stat-card"
                key={index}
              >
                <div className="stat-num">
                  {item.number}
                </div>

                <div className="stat-label">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>

          <div className="section-label">
            About Me
          </div>

          <h2 className="section-title">
            Developer with a
            <br />
            <span className="gradient-text">
              builder's mindset
            </span>
          </h2>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: "1.9",
              marginBottom: "15px",
            }}
          >
            I'm Karthikeyan M, a B.Sc Information
            Technology graduate from Kongunadu
            Arts & Science College. I enjoy building
            modern full-stack web applications using
            the MERN stack.
          </p>

          <p
            style={{
              color: "var(--muted)",
              lineHeight: "1.9",
            }}
          >
            I'm passionate about learning new
            technologies and creating responsive,
            scalable, and user-friendly websites.
          </p>

          <div className="about-info-grid">
            {info.map((item, index) => (
              <div
                className="info-item"
                key={index}
              >
                <span className="info-label">
                  {item.label}
                </span>

                <span className="info-value">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;