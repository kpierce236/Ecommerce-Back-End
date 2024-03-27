const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [Category, Tag] 
    });
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// update product
router.put('/:id', async (req, res) => {
  try {
    // update product data
    const [numUpdatedRows, updatedProducts] = await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true, // This is important to get the updated rows
    });

    if (numUpdatedRows === 0) {
      console.log("No product was updated.");
    } else {
      console.log(`${numUpdatedRows} product was updated.`);
    }

    if (req.body.tagIds && req.body.tagIds.length) {
      const productTags = await ProductTag.findAll({
        where: { product_id: req.params.id }
      });

      // create filtered list of new tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });

      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      await Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    }

    return res.status(200).json(req.body); // Return the req body if sucessful
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(400).json(err);
  }
});



router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.status(200).json({ message: 'Product Deleted' }).end();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }});

module.exports = router;
