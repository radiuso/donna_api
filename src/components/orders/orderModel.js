/**
 * Order model
 * @param {*} sequelize
 * @param {*} DataTypes
 */
module.exports = function(sequelize, DataTypes) {
  const Order = sequelize.define('order', {
    targetDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: false,
      }
    });

    Order.belongsToMany(models.Product, { through: models.ProductsOrder });
  };

  return Order;
}