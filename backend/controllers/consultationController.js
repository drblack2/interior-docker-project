const Consultation = require('../models/Consultation');

const fallbackConsultations = [];

const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    return res.status(200).json(consultations);
  } catch (error) {
    return res.status(500).json({ message: 'Unable to fetch consultations', error: error.message });
  }
};

const createConsultation = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Please provide your name, email, and message.' });
    }

    try {
      const consultation = await Consultation.create({ name, email, message });
      return res.status(201).json(consultation);
    } catch (dbError) {
      const fallbackEntry = {
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
        storedLocally: true
      };

      fallbackConsultations.push(fallbackEntry);
      console.warn('MongoDB unavailable, storing consultation locally:', dbError.message);

      return res.status(201).json({
        ...fallbackEntry,
        message: 'Your message was received and saved locally while the database is temporarily unavailable.'
      });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Unable to process consultation', error: error.message });
  }
};

module.exports = { createConsultation, getConsultations, fallbackConsultations };
