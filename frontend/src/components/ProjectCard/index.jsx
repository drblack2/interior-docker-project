export default function ProjectCard({ title, description, image }) {
  return (
    <article className="card project-card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
