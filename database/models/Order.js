module.exports = (sequelize, DataTypes) => {

    let alias = "Order";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false/*
            references: {
                model: User,
                key: 'id'
                }*/
            },
        ammount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        shipping_address: {
            type: DataTypes.STRING(100)
        },
        order_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        order_status: {
            type: DataTypes.STRING(50)
        }
    };
    
    let config = {
        tableName: 'orders',
        timestamps: false
        };

    const Order = sequelize.define(alias, cols, config);

    return Order;
}