import SkillIcon from '../components/SkillIcon';
import reactLogo from '../assets/react.svg';

function Skills() {
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>🛠️ Languages, Libraries & Frameworks</h1>
      <div style={styles.grid}>
        <SkillIcon
          name="React"
          icon={reactLogo}
          description="Used in GeoClover and this portfolio site"
          projectLink="https://github.com/your-username/geoclover"
        />
        {/* Add more skills here */}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f5f5ff',
    fontFamily: 'monospace',
    borderRadius: '10px',
    margin: '2rem',
  },
  heading: {
    fontSize: '2rem',
    color: '#7a5c99',
    marginBottom: '1rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
};

export default Skills;
