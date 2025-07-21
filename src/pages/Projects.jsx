function Projects() {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>📂 Projects</h1>
      <p style={styles.paragraph}>
        Here you'll find selected work — from GIS dashboards to full-stack apps.
        Project cards coming soon!
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#fff0f5',
    fontFamily: 'monospace',
    borderRadius: '10px',
    margin: '2rem',
  },
  heading: {
    fontSize: '2rem',
    color: '#a14d76',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
};

export default Projects;
