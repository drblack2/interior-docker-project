import ServiceCard from '../components/ServiceCard';

const serviceFeatures = [
  {
    title: 'Custom concept development',
    description: 'We translate your brief into a cohesive design vision that feels elevated and deeply personal.'
  },
  {
    title: 'Material and finish selection',
    description: 'High-quality materials are chosen for durability, texture, and atmospheric warmth.'
  },
  {
    title: 'Furniture curation',
    description: 'Every piece is selected for comfort, proportion, and layered style.'
  }
];

export default function Services({ services }) {
  return (
    <>
      <section className="page-section">
        <div className="page-heading">
          <p className="eyebrow">Our services</p>
          <h2>Thoughtful interiors, delivered with precision and care.</h2>
          <p>
            From concept to final styling, we create spaces that feel elevated, functional, and deeply personal.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </section>

      <section className="page-section service-detail-section">
        <div className="page-heading">
          <p className="eyebrow">What makes our service different</p>
          <h2>A premium process built for clarity, trust, and beautiful outcomes.</h2>
        </div>
        <div className="service-detail-grid">
          {serviceFeatures.map((feature) => (
            <article key={feature.title} className="detail-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section service-highlight-panel">
        <div>
          <h3>Designed for real life</h3>
          <p>
            We understand how people live, work, and gather. That means our interiors are elegant without being fragile, beautiful without feeling fussy.
          </p>
        </div>
        <div>
          <h3>Flexible delivery</h3>
          <p>
            Whether you need an in-depth renovation or a refreshed room scheme, we match our approach to your schedule and budget.
          </p>
        </div>
      </section>
    </>
  );
}
