// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.belongsTo(Product, {
  foreignKey: 'category_id',
  constraints: false,
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'P_Tag',
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
