import './SkillIcon.css';

const SkillIcon = ({ name, icon, description, projectLink }) => (
  <div className="skill-icon">
    <img src={icon} alt={name} />
    <div className="tooltip">
      <strong>{name}</strong>
      <p>{description}</p>
      <a href={projectLink} target="_blank" rel="noopener noreferrer">See Project →</a>
    </div>
  </div>
);

export default SkillIcon;
