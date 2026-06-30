import { useState } from "react";
import contact from "../data/contact";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <div className="contact-container">

        <div className="section-label">
          Contact
        </div>

        <h2 className="section-title">
          Let's <span className="gradient-text">Connect</span>
        </h2>

        <div className="contact-grid">

          {/* Left */}

          <div>

            <p
              style={{
                color: "var(--muted)",
                lineHeight: 1.8,
                marginBottom: 40,
              }}
            >
              I'm actively looking for Full Stack Developer
              opportunities. Feel free to contact me.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              {contact.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="contact-link-card"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="contact-icon">
                    {item.icon}
                  </div>

                  <div>
                    <div className="contact-link-label">
                      {item.title}
                    </div>

                    <div className="contact-link-val">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>

          {/* Right */}

          <form onSubmit={submit}>

            <div className="form-group">

              <label className="form-label">
                Name
              </label>

              <input
                className="form-input"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

            </div>

            <div className="form-group">

              <label className="form-label">
                Email
              </label>

              <input
                className="form-input"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />

            </div>

            <div className="form-group">

              <label className="form-label">
                Message
              </label>

              <textarea
                className="form-textarea"
                rows="6"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
              ></textarea>

            </div>

            <button
              className="btn-primary"
              style={{
                marginTop: "20px",
              }}
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;