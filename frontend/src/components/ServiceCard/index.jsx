export default function ServiceCard({ title, description, icon }) {
  return (
    <article className="card service-card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
