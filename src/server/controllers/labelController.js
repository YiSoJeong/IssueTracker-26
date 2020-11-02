const labelService = require('../services/labelService');

const createLabel = async (req, res) => {
  const labelInfo = req.body;
  if (!labelInfo.title || !labelInfo.color) {
    return res.status(400).end();
  }
  const labelId = await labelService.createLabel(labelInfo);
  if (labelId) {
    return res.status(201).end();
  }
  return res.status(500).end();
};

module.exports = { createLabel };