require('dotenv').config();

const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const consultationRoutes = require('./routes/consultationRoutes');
const errorHandler = require('./middleware/errorHandler');
const { connectDB } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/projects', projectRoutes);
app.use('/api/consultations', consultationRoutes);
app.use(errorHandler);

const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  module.exports = { app, server };
};

if (require.main === module) {
  startServer();
}

module.exports = { app };
