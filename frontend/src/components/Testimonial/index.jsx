export default function Testimonial({ quote, author, role }) {
  return (
    <blockquote className="card testimonial-card">
      <p>“{quote}”</p>
      <footer>
        <strong>{author}</strong>
        <span>{role}</span>
      </footer>
    </blockquote>
  );
}
