module.exports = (sequelize, DataTypes) => {

    let alias = "Image";
    
    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
            },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        product_num: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }
    };
    
    let config = {
        tableName: 'images',
        timestamps: false
        };

    const Image = sequelize.define(alias, cols, config);

    Image.associate = function (models) {
        Image.belongsTo(models.Product, { 
            as: "Product",
            foreignKey: 'product_num',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Image;
}