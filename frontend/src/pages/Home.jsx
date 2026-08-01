import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import Testimonial from '../components/Testimonial';

const processSteps = [
  {
    title: 'Discover',
    description: 'We begin with a deep understanding of your lifestyle, goals, and the atmosphere you want to create.'
  },
  {
    title: 'Design',
    description: 'Concepts are developed around architecture, texture, tone, and a calm, refined flow.'
  },
  {
    title: 'Deliver',
    description: 'Every detail is managed with care, from sourcing to installation, so the result feels seamless.'
  }
];

export default function Home({ services, testimonials, projects, onNavigate }) {
  const featuredProject = projects[0];

  return (
    <div>
      <Hero onNavigate={onNavigate} />

      <section className="page-section highlight-panel">
        <div className="section-copy">
          <p className="eyebrow">Studio philosophy</p>
          <h2>Every room is composed like a story — grounded in comfort, shaped by light, and finished with intention.</h2>
          <p>
            We design homes and boutique spaces that feel quietly luxurious: practical, timeless, and deeply personal.
          </p>
          <button className="primary-btn" type="button" onClick={() => onNavigate('About')}>Learn more about our approach</button>
        </div>
        <div className="feature-media">
          {featuredProject && <img src={featuredProject.image} alt={featuredProject.title} />}
        </div>
      </section>

      <section className="home-menu-section">
        <div className="home-menu">
          <button type="button" className="menu-button" onClick={() => onNavigate('Services')}>Services</button>
          <button type="button" className="menu-button" onClick={() => onNavigate('Portfolio')}>Portfolio</button>
          <button type="button" className="menu-button" onClick={() => onNavigate('About')}>About</button>
          <button type="button" className="menu-button" onClick={() => onNavigate('Contact')}>Contact</button>
        </div>
      </section>

      <section className="page-section">
        <div className="page-heading">
          <p className="eyebrow">Design services</p>
          <h2>Services that bring clarity, warmth, and purpose to every space.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </section>

      <section className="page-section process-section">
        <div className="page-heading">
          <p className="eyebrow">Our process</p>
          <h2>A thoughtful, three-step journey from concept to completion.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step) => (
            <article key={step.title} className="process-card">
              <span className="process-step">{step.title}</span>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="page-heading">
          <p className="eyebrow">Featured portfolio</p>
          <h2>Selected projects with quiet luxury and strong character.</h2>
        </div>
        <div className="card-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} title={project.title} description={project.description} image={project.image} />
          ))}
        </div>
      </section>

      <section className="page-section testimonial-section">
        <div className="page-heading">
          <p className="eyebrow">Client stories</p>
          <h2>What our clients say about working with Interior Vista.</h2>
        </div>
        <div className="card-grid">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.author} quote={testimonial.quote} author={testimonial.author} role={testimonial.role} />
          ))}
        </div>
      </section>
    </div>
  );
}
