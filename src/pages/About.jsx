function About() {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>👩‍💻 About Me</h1>
      <p style={styles.paragraph}>
        I'm Cristy Parsons — a developer, creative technologist, and GIS storyteller.
        I blend code, design, and spatial insight to bring digital projects to life.
        Whether building full-stack apps, crafting interactive maps, or designing
        retro-chic web experiences, I love using technology to help people connect and grow.
      </p>
      <p style={styles.paragraph}>
        This portfolio was built with Vite + React, and showcases real work,
        real tools, and a real passion for thoughtful design.
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'monospace',
    backgroundColor: '#fffaf0',
    color: '#333',
    borderRadius: '10px',
    margin: '2rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2rem',
    color: '#d26d6d',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
  },
};

export default About;
