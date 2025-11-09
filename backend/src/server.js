require('dotenv').config(); // .env dosyasını yükle
const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const dropRoutes = require('./routes/dropRoutes');
const adminRoutes = require('./routes/adminRoutes');
const adminAuthRoutes = require('./routes/adminAuthRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // bodyParser.json() yerine modern kullanım

// Route'lar
app.use('/auth', authRoutes);
app.use('/drops', dropRoutes);
app.use('/admin', adminRoutes);          // JWT ile korunmuş admin CRUD
app.use('/admin', adminAuthRoutes);        // Admin login veya token endpoint

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Sunucu hatası', details: err.message });
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));
