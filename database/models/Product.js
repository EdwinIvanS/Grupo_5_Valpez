module.exports = (sequelize, DataTypes) => {

    let alias = "Product";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
            },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
            },
        smallDescription: {
            type: DataTypes.TEXT
        },
        detailedDescription: {
            type: DataTypes.TEXT
        },
        url: {
            type: DataTypes.STRING(100)
        },
        units: {
            type: DataTypes.INTEGER
        },
        colors: {
            type: DataTypes.STRING(100)
        },
        sizes: {
            type: DataTypes.STRING(100)
        },
        reference: {
            type: DataTypes.STRING(100)
        },
        class_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        }
    };
    
    let config = {
        tableName: 'products',
        timestamps: false
        };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.hasMany(models.Image, { 
            as: "Images",
            foreignKey: 'product_num',
            timestamps: false,
            onDelete: 'cascade'
        });

        Product.hasMany(models.OrderDetail, { 
            as: "OrderDetail",
            foreignKey: 'product_id',
            timestamps: false,
            onDelete: 'cascade'
        });

        Product.belongsTo(models.Class, { 
            as: "Class",
            foreignKey: 'class_id',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Product;
};