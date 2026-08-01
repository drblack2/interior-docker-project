import ProjectCard from '../components/ProjectCard';

const projectCategories = [
  { title: 'Residential Interiors', subtitle: 'Elegant homes designed for modern living.' },
  { title: 'Commercial Spaces', subtitle: 'Brand-led environments built for comfort and productivity.' },
  { title: 'Renovation Projects', subtitle: 'Thoughtful reworks that enhance every detail.' }
];

export default function Portfolio({ projects }) {
  return (
    <>
      <section className="page-section">
        <div className="page-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>A collection of refined spaces with lasting character.</h2>
          <p>
            Each project reflects a thoughtful balance of architecture, comfort, texture, and timeless materials.
          </p>
        </div>
        <div className="card-grid">
          {projects.length > 0 ? projects.map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} />
          )) : <p className="empty-state">Projects will appear here once the API is connected.</p>}
        </div>
      </section>

      <section className="page-section portfolio-category-section">
        <div className="page-heading">
          <p className="eyebrow">Featured categories</p>
          <h2>The kinds of spaces we love to design.</h2>
        </div>
        <div className="portfolio-category-grid">
          {projectCategories.map((category) => (
            <article key={category.title} className="detail-card">
              <h3>{category.title}</h3>
              <p>{category.subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section portfolio-callout">
        <h3>Every project is designed for enduring comfort.</h3>
        <p>
          We focus on plans that feel as great to live in as they do to look at: generous storage, natural light, calm circulation, and a refined sense of ease.
        </p>
      </section>
    </>
  );
}
