import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">

        <div className="section-label">
          My Projects
        </div>

        <h2 className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >

              <div className="project-img-wrap">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-img-overlay"></div>

              </div>

              <div className="project-body">

                <div className="project-num">
                  Project {project.number}
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-desc">
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >

                  {project.tags.map((tag, index) => (

                    <span
                      key={index}
                      className={`skill-tag tag-${project.color}`}
                    >
                      {tag}
                    </span>

                  ))}

                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >

                  <a
                    href={project.github}
                    className="link-btn link-btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="link-btn link-btn-ghost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Certificate */}

        <div
          style={{
            marginTop: "60px",
            padding: "30px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg, rgba(79,142,247,.08), rgba(167,139,250,.08))",
            border:
              "1px solid rgba(79,142,247,.2)",
          }}
        >

          <h3>
            🏆 MERN Stack Development
          </h3>

          <p
            style={{
              color: "var(--muted)",
              marginTop: "10px",
            }}
          >
            Successfully completed MERN Stack
            Development Training from Elevate Academy.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Projects;