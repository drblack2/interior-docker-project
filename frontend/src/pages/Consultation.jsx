import ContactForm from '../components/ContactForm';

export default function Consultation() {
  return (
    <section className="page-section consultation-section">
      <div className="page-heading">
        <p className="eyebrow">Consultation</p>
        <h2>Start your design journey with a thoughtful first conversation.</h2>
        <p>
          Tell us about your space, your style, and your goals. We’ll follow up with suggestions tailored to your project.
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
