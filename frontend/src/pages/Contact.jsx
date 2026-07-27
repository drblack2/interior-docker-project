import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="page-section contact-layout">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let’s talk about your next space.</h2>
        <p>
          We’re available for consultations in person and virtually, whether you are planning a full renovation or a refresh of a single room.
        </p>
        <ul className="info-list">
          <li>Email: hello@interiorvista.com</li>
          <li>Phone: +1 (555) 014-2218</li>
          <li>Studio: 184 Mercer Avenue, Suite 6</li>
          <li>Hours: Monday to Friday, 9:00 AM – 6:00 PM</li>
        </ul>
      </div>
      <ContactForm />
    </section>
  );
}
