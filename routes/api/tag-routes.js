const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [Product] // Include associated Product data
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET a single tag by id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [Product] // Include associated Product data
    });
    if (tag) {
      res.json(tag);
    } else {
      res.status(404).json({ message: 'Tag not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const { tag_name } = req.body;
    const tag = await Tag.create({ tag_name });
    res.status(201).json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update a tag's name by id
router.put('/:id', async (req, res) => {
  try {
    const { tag_name } = req.body;
    const tag = await Tag.findByPk(req.params.id);
    if (tag) {
      tag.tag_name = tag_name;
      await tag.save();
      res.json(tag);
    } else {
      res.status(404).json({ message: 'Tag not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id);
    if (tag) {
      await tag.destroy();
      res.status(200).json({ message: 'Tag Deleted' }).end();
    } else {
      res.status(404).json({ message: 'Tag not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
