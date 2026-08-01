export default function Hero({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Boutique design studio</p>
        <h1>Beautiful interiors with quiet luxury and effortless flow.</h1>
        <p>
          We design homes, workplaces, and retail spaces that feel calm, modern, and unmistakably tailored to you.
        </p>
        <div className="hero-actions">
          <button className="primary-btn" type="button" onClick={() => onNavigate('Consultation')}>Book a consultation</button>
          <button className="secondary-btn" type="button" onClick={() => onNavigate('Portfolio')}>Explore portfolio</button>
        </div>
        <div className="hero-stats">
          <div>
            <strong>12+</strong>
            <span>years of design experience</span>
          </div>
          <div>
            <strong>80+</strong>
            <span>projects completed</span>
          </div>
          <div>
            <strong>4.9/5</strong>
            <span>average client rating</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" alt="Elegant interior living room" />
        <div className="hero-badge">Award-winning interiors</div>
      </div>
    </section>
  );
}
