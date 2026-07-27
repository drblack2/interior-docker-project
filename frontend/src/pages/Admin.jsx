import { useEffect, useState } from 'react';

export default function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadSubmissions = async () => {
      try {
        const response = await fetch('/api/consultations/admin');
        if (!response.ok) {
          throw new Error('Unable to load submissions');
        }

        const data = await response.json();
        setSubmissions(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message || 'Unable to load submissions');
      } finally {
        setLoading(false);
      }
    };

    loadSubmissions();
  }, []);

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Admin</p>
        <h2>Customer inquiries</h2>
        <p>Review all messages received through the contact and consultation forms.</p>
      </div>

      {loading ? (
        <p>Loading submissions...</p>
      ) : error ? (
        <p className="empty-state">{error}</p>
      ) : submissions.length === 0 ? (
        <div className="empty-state-card">
          <p>No customer messages yet.</p>
          <p>Submissions from the Contact and Consultation forms will appear here once they are sent.</p>
        </div>
      ) : (
        <div className="admin-list">
          {submissions.map((item) => (
            <article key={item._id || item.createdAt} className="admin-card">
              <div className="admin-card-header">
                <strong>{item.name}</strong>
                <span>{new Date(item.createdAt).toLocaleString()}</span>
              </div>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
