/*const { PrismaClient } = require('../generated');
const prisma = new PrismaClient();
const { generateSeed, calculatePriorityScore } = require('../utils/priority');

// Aktif drop listesi
exports.getDrops = async (req, res) => {
  try {
    const drops = await prisma.drop.findMany();
    res.json(drops);
  } catch (err) {
    res.status(500).json({ error: 'Drop listesi alınamadı', details: err.message });
  }
};

// Waitlist’e katıl
exports.joinWaitlist = async (req, res) => {
  const userId = req.body.userId;
  const dropId = parseInt(req.params.id);

  const dropExists = await prisma.drop.findUnique({ where: { id: dropId } });
  if (!dropExists) return res.status(400).json({ error: 'Drop bulunamadı' });

  try {
    const entry = await prisma.$transaction(async (tx) => {
      // Idempotent kontrol: kullanıcı zaten waitlistte mi?
      const existing = await tx.waitlist.findUnique({
        where: { user_id_drop_id: { user_id: userId, drop_id: dropId } },
      });
      if (existing) return existing;

      // Seed & priority_score hesaplama
      const seed = generateSeed(
        process.env.GITHUB_REMOTE_URL,
        process.env.FIRST_COMMIT_EPOCH,
        process.env.START_TIME
      );

      // Bu değerler backend veya kullanıcı verilerinden alınmalı
      const signupLatencyMs = 1200; // örnek
      const accountAgeDays = 30;     // örnek
      const rapidActions = 2;        // örnek

      const priority_score = calculatePriorityScore(seed, signupLatencyMs, accountAgeDays, rapidActions);

      return await tx.waitlist.create({
        data: { user_id: userId, drop_id: dropId, priority_score },
      });
    });

    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Waitlist’e katılamadı', details: err.message });
  }
};

// Waitlist’ten ayrıl
exports.leaveWaitlist = async (req, res) => {
  const userId = req.body.userId;
  const dropId = parseInt(req.params.id);

  try {
    const result = await prisma.$transaction(async (tx) => {
      return await tx.waitlist.deleteMany({
        where: { user_id: userId, drop_id: dropId },
      });
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Waitlist’ten ayrılamadı', details: err.message });
  }
};

// Claim süreci
exports.claimDrop = async (req, res) => {
  const userId = req.body.userId;
  const dropId = parseInt(req.params.id);

  try {
    const claim = await prisma.$transaction(async (tx) => {
      // Waitlist kontrolü
      const entry = await tx.waitlist.findFirst({
        where: { user_id: userId, drop_id: dropId },
      });
      if (!entry) throw new Error('Waitlist’te değilsiniz');

      // Idempotent claim kontrolü
      let existingClaim = await tx.claim.findFirst({
        where: { user_id: userId, drop_id: dropId },
      });
      if (existingClaim) return existingClaim;

      const claimCode = Math.random().toString(36).substring(2,10).toUpperCase();
      return await tx.claim.create({
        data: { user_id: userId, drop_id: dropId, claim_code: claimCode },
      });
    });

    res.json(claim);
  } catch (err) {
    const message = err.message === 'Waitlist’te değilsiniz' ? err.message : 'Claim yapılamadı';
    res.status(500).json({ error: message, details: err.message });
  }
};*/


/*const { PrismaClient } = require('../generated');
const prisma = new PrismaClient();
const { generateSeed, getPriorityScore } = require('../utils/priority');
const jwt = require('jsonwebtoken');

/// Aktif drop listesi
exports.getDrops = async (req, res) => {
  try {
    const drops = await prisma.drop.findMany({
      include: { waitlists: true, claims: true },
      orderBy: {
        drop_time: 'asc' // opsiyonel, drop zamanına göre sırala
      }
    });

    // waitlists sıralaması
    drops.forEach(drop => {
      drop.waitlists.sort((a, b) =>
        getPriorityScore(process.env.DROP_SEED, a.signupLatencyMs, a.accountAgeDays, a.rapidActions) -
        getPriorityScore(process.env.DROP_SEED, b.signupLatencyMs, b.accountAgeDays, b.rapidActions)
      );
    });

    res.json(drops);
  } catch (err) {
    res.status(500).json({ error: 'Drop listesi alınamadı', details: err.message });
  }
};


// Waitlist’e katıl
exports.joinWaitlist = async (req, res) => {
  const userId = null;
  const dropId = parseInt(req.params.id);
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Token yok' });

    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    userId = payload.id;

    // Artık userId frontend’den gelmiyor, token’dan alınıyor
    // Waitlist ekleme işlemi
    dropId = parseInt(req.params.id);
    // ... prisma join logic
    const dropExists = await prisma.drop.findUnique({ where: { id: dropId } });
  if (!dropExists) return res.status(400).json({ error: 'Drop bulunamadı' });

  try {
    const entry = await prisma.$transaction(async (tx) => {
      // Kullanıcı zaten waitlistte mi?
      const existing = await tx.waitlist.findUnique({
        where: { user_id_drop_id: { user_id: userId, drop_id: dropId } },
      });
      if (existing) return existing;

      // Seed ve priority_score hesapla
      const seed = generateSeed(
        process.env.GITHUB_REMOTE_URL,
        process.env.FIRST_COMMIT_EPOCH,
        process.env.START_TIME
      );

      // Örnek değerler (gerçek uygulamada backend veya kullanıcı verisinden alınmalı)
      const signupLatencyMs = 1200;
      const accountAgeDays = 30;
      const rapidActions = 2;

      const priority_score = getPriorityScore(seed, signupLatencyMs, accountAgeDays, rapidActions);

      return await tx.waitlist.create({
        data: { user_id: userId, drop_id: dropId, priority_score },
      });
    });

    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: 'Waitlist’e katılamadı', details: err.message });
  }
  } catch (err) {
    res.status(401).json({ error: 'Token geçersiz' });
  }

  
};

// Waitlist’ten ayrıl
exports.leaveWaitlist = async (req, res) => {
  //const userId = req.body.userId;
  //const dropId = parseInt(req.params.id);
  const userId = null;
  const dropId = parseInt(req.params.id);
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Token yok' });

    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    userId = payload.id;

    // Artık userId frontend’den gelmiyor, token’dan alınıyor
    // Waitlist ekleme işlemi
    dropId = parseInt(req.params.id);
    // ... prisma join logic
  } catch (err) {
    res.status(401).json({ error: 'Token geçersiz' });
  }

  try {
    const result = await prisma.$transaction(async (tx) => {
      return await tx.waitlist.deleteMany({
        where: { user_id: userId, drop_id: dropId },
      });
    });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Waitlist’ten ayrılamadı', details: err.message });
  }
};

// Claim süreci
exports.claimDrop = async (req, res) => {
  //const userId = req.body.userId;
  //const dropId = parseInt(req.params.id);
  const userId = null;
  const dropId = parseInt(req.params.id);
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Token yok' });

    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    userId = payload.id;

    // Artık userId frontend’den gelmiyor, token’dan alınıyor
    // Waitlist ekleme işlemi
    dropId = parseInt(req.params.id);
    // ... prisma join logic
  } catch (err) {
    res.status(401).json({ error: 'Token geçersiz' });
  }

  try {
    const claim = await prisma.$transaction(async (tx) => {
      // Waitlist kontrolü
      const entry = await tx.waitlist.findFirst({
        where: { user_id: userId, drop_id: dropId },
      });
      if (!entry) throw new Error('Waitlist’te değilsiniz');

      // Idempotent claim kontrolü
      let existingClaim = await tx.claim.findFirst({
        where: { user_id: userId, drop_id: dropId },
      });
      if (existingClaim) return existingClaim;

      const claimCode = Math.random().toString(36).substring(2,10).toUpperCase();
      return await tx.claim.create({
        data: { user_id: userId, drop_id: dropId, claim_code: claimCode },
      });
    });

    res.json(claim);
  } catch (err) {
    const message = err.message === 'Waitlist’te değilsiniz' ? err.message : 'Claim yapılamadı';
    res.status(500).json({ error: message, details: err.message });
  }
};*/


const { PrismaClient } = require('../generated');
const prisma = new PrismaClient();
const { generateSeed, getPriorityScore } = require('../utils/priority');
const jwt = require('jsonwebtoken');

// -----------------
// Token doğrulama middleware
// -----------------
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token yok' });

  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = payload.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token geçersiz' });
  }
};

// -----------------
// Aktif drop listesi
// -----------------
exports.getDrops = async (req, res) => {
  try {
    const drops = await prisma.drop.findMany({
      include: { waitlists: true, claims: true },
      orderBy: { drop_time: 'asc' },
    });

    drops.forEach(drop => {
      drop.waitlists.sort((a, b) =>
        getPriorityScore(process.env.DROP_SEED, a.signupLatencyMs, a.accountAgeDays, a.rapidActions) -
        getPriorityScore(process.env.DROP_SEED, b.signupLatencyMs, b.accountAgeDays, b.rapidActions)
      );
    });

    res.json(drops);
  } catch (err) {
    res.status(500).json({ error: 'Drop listesi alınamadı', details: err.message });
  }
};

// -----------------
// Waitlist’e katıl
// -----------------
exports.joinWaitlist = [
  verifyToken, // token doğrulama
  async (req, res) => {
    const userId = req.userId;
    const dropId = parseInt(req.params.id);

    try {
      const dropExists = await prisma.drop.findUnique({ where: { id: dropId } });
      if (!dropExists) return res.status(400).json({ error: 'Drop bulunamadı' });

      const entry = await prisma.$transaction(async (tx) => {
        const existing = await tx.waitlist.findUnique({
          where: { user_id_drop_id: { user_id: userId, drop_id: dropId } },
        });
        if (existing) return existing;

        const seed = generateSeed(
          process.env.GITHUB_REMOTE_URL,
          process.env.FIRST_COMMIT_EPOCH,
          process.env.START_TIME
        );

        const signupLatencyMs = 1200;
        const accountAgeDays = 30;
        const rapidActions = 2;

        const priority_score = getPriorityScore(seed, signupLatencyMs, accountAgeDays, rapidActions);

        return await tx.waitlist.create({
          data: { user_id: userId, drop_id: dropId, priority_score },
        });
      });

      res.status(201).json(entry);
    } catch (err) {
      res.status(500).json({ error: 'Waitlist’e katılamadı', details: err.message });
    }
  }
];

// -----------------
// Waitlist’ten ayrıl
// -----------------
exports.leaveWaitlist = [
  verifyToken,
  async (req, res) => {
    const userId = req.userId;
    const dropId = parseInt(req.params.id);

    try {
      const result = await prisma.waitlist.deleteMany({
        where: { user_id: userId, drop_id: dropId },
      });
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: 'Waitlist’ten ayrılamadı', details: err.message });
    }
  }
];

// -----------------
// Claim süreci
// -----------------
exports.claimDrop = [
  verifyToken,
  async (req, res) => {
    const userId = req.userId;
    const dropId = parseInt(req.params.id);

    try {
      const claim = await prisma.$transaction(async (tx) => {
        const entry = await tx.waitlist.findFirst({
          where: { user_id: userId, drop_id: dropId },
        });
        if (!entry) throw new Error('Waitlist’te değilsiniz');

        let existingClaim = await tx.claim.findFirst({
          where: { user_id: userId, drop_id: dropId },
        });
        if (existingClaim) return existingClaim;

        const claimCode = Math.random().toString(36).substring(2, 10).toUpperCase();
        return await tx.claim.create({
          data: { user_id: userId, drop_id: dropId, claim_code: claimCode },
        });
      });

      res.json(claim);
    } catch (err) {
      const message = err.message === 'Waitlist’te değilsiniz' ? err.message : 'Claim yapılamadı';
      res.status(500).json({ error: message, details: err.message });
    }
  }
];



