exports.createDrop = async (req, res) => {
  const { title, description, drop_time, claim_window } = req.body;
  const drop = await prisma.drop.create({ data: { title, description, drop_time, claim_window } });
  res.status(201).json(drop);
};

exports.updateDrop = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const drop = await prisma.drop.update({ where: { id: parseInt(id) }, data });
  res.json(drop);
};

exports.deleteDrop = async (req, res) => {
  const { id } = req.params;
  await prisma.drop.delete({ where: { id: parseInt(id) } });
  res.json({ success: true });
};

exports.listDrops = async (req, res) => {
  const drops = await prisma.drop.findMany();
  res.json(drops);
};
