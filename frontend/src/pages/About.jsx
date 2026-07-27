const teamMembers = [
  { name: 'Ariana Chen', role: 'Founder & Creative Director' },
  { name: 'Marco Silva', role: 'Lead Interior Designer' },
  { name: 'Lina Perez', role: 'Project Manager' }
];

const values = [
  'Design with intention and restraint',
  'Respect architecture and context',
  'Choose materials that age beautifully',
  'Keep the client experience calm and easy'
];

export default function About() {
  return (
    <>
      <section className="page-section about-section">
        <div className="page-heading">
          <p className="eyebrow">About Interior Vista</p>
          <h2>Designing spaces that balance beauty, function, and ease.</h2>
        </div>
        <div className="about-grid">
          <div>
            <p>
              Interior Vista is a boutique design studio focused on creating homes and workplaces that feel intentional from the first sketch to the final styling layer.
            </p>
            <p>
              Our process is collaborative, warm, and detail-led, blending architecture, furnishing, lighting, and texture into spaces that support everyday life with grace.
            </p>
          </div>
          <div className="about-panel">
            <h3>Why clients choose us</h3>
            <ul>
              <li>Personalized design direction for every project</li>
              <li>Meticulous sourcing and material selection</li>
              <li>Clear communication throughout the build</li>
              <li>Styling that creates emotional comfort</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section team-section">
        <div className="page-heading">
          <p className="eyebrow">Meet the team</p>
          <h2>The people behind the considered spaces.</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article key={member.name} className="detail-card">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section values-section">
        <div className="page-heading">
          <p className="eyebrow">Studio values</p>
          <h2>A strong point of view centered on thoughtful design.</h2>
        </div>
        <ul className="value-list">
          {values.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
