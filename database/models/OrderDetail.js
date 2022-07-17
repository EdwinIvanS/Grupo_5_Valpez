module.exports = (sequelize, DataTypes) => {

    let alias = "OrderDetail";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        order_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false /*,
            references: {
                model: Order,
                key: 'id'
                }   */   
            },
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false /*,
            references: {
                model: Product,
                key: 'id' 
                }     */
            },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        color: {
            type: DataTypes.STRING(50)
            },
        size: {
            type: DataTypes.STRING(50)
            }
    };
    
    let config = {
        tableName: 'order_details',
        timestamps: false
        };

    const OrderDetail = sequelize.define(alias, cols, config);

    OrderDetail.associate = function (models) {
        OrderDetail.belongsTo(models.Product, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Product",
            foreignKey: 'product_id',
            timestamps: false
        })
    }
    return OrderDetail;
}