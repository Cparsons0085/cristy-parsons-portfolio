function Home() {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>🌟 Cristy Parsons</h1>
      <p style={styles.paragraph}>
        Welcome to my personal portfolio — a space to explore my work, skills,
        and creative tech journey.
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
    backgroundColor: '#e9f7f6',
    fontFamily: 'monospace',
    borderRadius: '10px',
    margin: '2rem',
    color: '#333',
  },
  heading: {
    fontSize: '3rem',
    color: '#5b8c85',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default Home;
