const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const dropRoutes = require('./routes/dropRoutes');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/drops', dropRoutes);

// Test route
app.get('/', (req, res) => res.send('DropSpot backend çalışıyor!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor`));

module.exports = prisma;
