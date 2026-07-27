import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const submitStart = Date.now();

    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      let data = {};

      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (!response.ok) {
        throw new Error(data.message || 'Unable to send your message.');
      }

      const elapsed = Date.now() - submitStart;
      const delay = Math.max(0, 700 - elapsed);

      await new Promise((resolve) => setTimeout(resolve, delay));

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will be in touch soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        Project details
        <textarea
          rows="4"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project"
          required
        />
      </label>
      {isSubmitting ? (
        <div className="form-status success">Sending your inquiry. Please wait a moment...</div>
      ) : null}
      {status.message ? (
        <div className={`form-status ${status.type}`}>{status.message}</div>
      ) : null}
      <button type="submit" className="primary-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send inquiry'}
      </button>
    </form>
  );
}
