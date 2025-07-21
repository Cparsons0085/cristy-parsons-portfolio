function Contact() {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>📬 Contact Me</h1>
      <p style={styles.paragraph}>
        Have a question, collaboration idea, or want to hire me?
        Reach out at <a href="mailto:hello@cristy-parsons.com">hello@cristy-parsons.com</a>
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f0fff0',
    fontFamily: 'monospace',
    borderRadius: '10px',
    margin: '2rem',
  },
  heading: {
    fontSize: '2rem',
    color: '#5e9c4e',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
  },
};

export default Contact;
