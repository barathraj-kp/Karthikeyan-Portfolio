import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">

        <div className="section-label">
          Technical Skills
        </div>

        <h2 className="section-title">
          My <span className="gradient-text">Tech Stack</span>
        </h2>

        <p
          style={{
            color: "var(--muted)",
            maxWidth: "600px",
            lineHeight: "1.8",
            marginBottom: "60px",
          }}
        >
          I enjoy building modern web applications using
          frontend, backend and database technologies.
        </p>

        <div className="skills-grid">

          {skills.map((category, index) => (

            <div
              className="skill-category"
              key={index}
            >

              <div
                style={{
                  fontSize: "2rem",
                  marginBottom: "15px",
                }}
              >
                {category.icon}
              </div>

              <h3
                style={{
                  marginBottom: "10px",
                }}
              >
                {category.title}
              </h3>

              <p
                style={{
                  color: "var(--muted)",
                  fontSize: ".8rem",
                  marginBottom: "20px",
                }}
              >
                {category.subtitle}
              </p>

              <div className="skill-tags">

                {category.tags.map((tag, i) => (

                  <span
                    key={i}
                    className={`skill-tag tag-${category.color}`}
                  >
                    {tag}
                  </span>

                ))}

              </div>

              {category.bars.map((bar, i) => (

                <div
                  className="bar-row"
                  key={i}
                >

                  <div className="bar-meta">
                    <span>{bar.name}</span>

                    <span>{bar.pct}%</span>
                  </div>

                  <div className="bar-track">

                    <div
                      className="bar-fill"
                      style={{
                        width: `${bar.pct}%`,
                        transform: "scaleX(1)",
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>

          ))}

        </div>

        {/* Soft Skills */}

        <div
          style={{
            marginTop: "50px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
            }}
          >
            Soft Skills
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
            }}
          >

            {[
              "Communication",
              "Problem Solving",
              "Time Management",
              "Adaptability",
              "Critical Thinking",
              "Team Work",
            ].map((skill) => (

              <span
                key={skill}
                style={{
                  padding: "10px 18px",
                  border: "1px solid var(--accent3)",
                  borderRadius: "30px",
                  color: "var(--accent3)",
                }}
              >
                {skill}
              </span>

            ))}

          </div>
        </div>

        {/* Languages */}

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
            }}
          >
            Languages
          </h3>

          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <span className="skill-tag tag-blue">
              🇮🇳 Tamil
            </span>

            <span className="skill-tag tag-blue">
              🇬🇧 English
            </span>

            <span className="skill-tag tag-blue">
              🇮🇳 Telugu
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;