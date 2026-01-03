import * as React from "react"

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "#1a1a1a",
    lineHeight: 1.6,
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
    paddingBottom: "40px",
    borderBottom: "2px solid #e0e0e0",
  },
  name: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  tagline: {
    fontSize: "1.3rem",
    color: "#7f8c8d",
    marginBottom: "20px",
    fontWeight: "300",
  },
  contactLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  link: {
    color: "#3498db",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
  section: {
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#2c3e50",
    borderLeft: "4px solid #3498db",
    paddingLeft: "15px",
  },
  profileText: {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    color: "#555",
    maxWidth: "900px",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  skillCategory: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
  },
  skillCategoryTitle: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  skillsList: {
    fontSize: "0.95rem",
    color: "#666",
    lineHeight: "1.6",
  },
  projectsGrid: {
    display: "grid",
    gap: "30px",
    marginTop: "20px",
  },
  projectCard: {
    padding: "25px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "8px",
    color: "#2c3e50",
  },
  projectTech: {
    fontSize: "0.9rem",
    color: "#3498db",
    marginBottom: "15px",
    fontStyle: "italic",
  },
  projectDescription: {
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.7",
  },
  bulletPoint: {
    marginBottom: "8px",
    paddingLeft: "20px",
    position: "relative",
  },
  education: {
    marginBottom: "20px",
  },
  educationTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#2c3e50",
  },
  educationDetails: {
    fontSize: "1rem",
    color: "#666",
    marginTop: "5px",
  },
  focusAreas: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  },
  focusItem: {
    padding: "15px",
    backgroundColor: "#ecf0f1",
    borderRadius: "6px",
    fontSize: "0.95rem",
    color: "#2c3e50",
    textAlign: "center",
    fontWeight: "500",
  },
}

const IndexPage = () => {
  return (
    <main style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.name}>Uday Kiran Hari</h1>
        <p style={styles.tagline}>MSc Software Engineering | AI Integration Specialist</p>
        <p style={{color: "#7f8c8d", marginBottom: "10px"}}>Karlskrona, Sweden</p>
        <div style={styles.contactLinks}>
          <a href="mailto:udaykiranhari07@gmail.com" style={styles.link}>Email</a>
          <span style={{color: "#ddd"}}>|</span>
          <a href="https://github.com/udaykiranhari" style={styles.link} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span style={{color: "#ddd"}}>|</span>
          <a href="https://linkedin.com/in/udaykiranhari" style={styles.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span style={{color: "#ddd"}}>|</span>
          <span style={{color: "#7f8c8d"}}>+46 768 944 740</span>
        </div>
      </header>

      {/* Profile Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Profile</h2>
        <p style={styles.profileText}>
          MSc Software Engineering student at BTH, Sweden with a strong focus on integrating AI into practical 
          products and automating workflows. Driven to build rapid prototypes and proof-of-concepts using 
          modern AI services. Experienced in building retrieval-augmented systems and deploying models under 
          real-world constraints. Eager to help portfolio companies grow through AI adoption and technical innovation.
        </p>
      </section>

      {/* Focus Areas */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Focus Areas</h2>
        <div style={styles.focusAreas}>
          <div style={styles.focusItem}>AI Product Integration</div>
          <div style={styles.focusItem}>Rapid Prototyping</div>
          <div style={styles.focusItem}>Workflow Automation</div>
          <div style={styles.focusItem}>Scalable PoCs</div>
          <div style={styles.focusItem}>LLM Optimization</div>
        </div>
      </section>

      {/* Technical Skills */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Skills</h2>
        <div style={styles.skillsGrid}>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>AI Tools & Services</h3>
            <p style={styles.skillsList}>
              Claude, ChatGPT, Cursor, n8n, Lovable, LLM APIs (OpenAI, Groq)
            </p>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>Programming & Backend</h3>
            <p style={styles.skillsList}>
              Python (Advanced), FastAPI, REST APIs, Node.js
            </p>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>Machine Learning & LLMs</h3>
            <p style={styles.skillsList}>
              PyTorch, Hugging Face, LoRA/Adapters, RAG
            </p>
          </div>
          <div style={styles.skillCategory}>
            <h3 style={styles.skillCategoryTitle}>MLOps & Data</h3>
            <p style={styles.skillsList}>
              Docker, Kubernetes, MLflow, Weights & Biases, PostgreSQL, MongoDB, FAISS
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Selected Projects</h2>
        <div style={styles.projectsGrid}>
          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>AI-Powered RAG PDF Assistant & Automation Workflow</h3>
            <p style={styles.projectTech}>Python, FAISS, Groq API, n8n</p>
            <div style={styles.projectDescription}>
              <div style={styles.bulletPoint}>
                • Engineered a full-stack RAG application for document analysis with automated ingestion and chunking
              </div>
              <div style={styles.bulletPoint}>
                • Integrated n8n automation to streamline data vectorization pipelines, reducing manual preprocessing
              </div>
              <div style={styles.bulletPoint}>
                • Built a multi-user interface with authentication for production-style SaaS workflows
              </div>
            </div>
          </div>

          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>ConsentGate — AI-Powered Security Prototype (2025)</h3>
            <p style={styles.projectTech}>Python, FastAPI, OpenCV, JWT</p>
            <div style={styles.projectDescription}>
              <div style={styles.bulletPoint}>
                • Developed an AI solution to validate user authorization and participant consent before content uploads
              </div>
              <div style={styles.bulletPoint}>
                • Implemented logic to detect participant mismatches as a functional proof-of-concept for product-level security
              </div>
              <div style={styles.bulletPoint}>
                • Focused on rapid prototyping and practical failure handling for operational environments
              </div>
            </div>
          </div>

          <div style={styles.projectCard}>
            <h3 style={styles.projectTitle}>LLM Fine-Tuning & Production Pipeline</h3>
            <p style={styles.projectTech}>PyTorch, LoRA, DeepSpeed, Docker, Kubernetes</p>
            <div style={styles.projectDescription}>
              <div style={styles.bulletPoint}>
                • Designed an end-to-end pipeline to fine-tune language models using LoRA and adapter techniques
              </div>
              <div style={styles.bulletPoint}>
                • Planned GPU-optimized training with mixed-precision and experiment tracking using MLflow
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Education</h2>
        <div style={styles.education}>
          <h3 style={styles.educationTitle}>MSc Software Engineering (2025–Present)</h3>
          <p style={styles.educationDetails}>Blekinge Institute of Technology (BTH), Sweden</p>
        </div>
        <div style={styles.education}>
          <h3 style={styles.educationTitle}>B.Tech Computer Science (2021–2024)</h3>
          <p style={styles.educationDetails}>Jawaharlal Nehru Technological University (JNTU), India</p>
        </div>
      </section>

      {/* Certifications */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Certifications</h2>
        <div style={styles.projectDescription}>
          <div style={styles.bulletPoint}>• AWS Cloud Practitioner (2024)</div>
          <div style={styles.bulletPoint}>• IBM — Introduction to Cloud Computing</div>
          <div style={styles.bulletPoint}>• IBM — Software Engineering Essentials</div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{textAlign: "center", marginTop: "60px", paddingTop: "30px", borderTop: "1px solid #e0e0e0", color: "#7f8c8d"}}>
        <p>© 2026 Uday Kiran Hari. Built with Gatsby.</p>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Uday Kiran Hari | AI Integration Specialist</title>