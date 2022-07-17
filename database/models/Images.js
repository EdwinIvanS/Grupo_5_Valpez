module.exports = (sequelize, DataTypes) => {

    let alias = "Images";
    
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
            /*,
            references: {
                model: Product,
                key: 'id'
            }  */
        }
    };
    
    let config = {
        tableName: 'images',
        timestamps: false,
        deletedAt: false
        };

    const Images = sequelize.define(alias, cols, config);

    Images.associate = function (models) {
        Images.belongsTo(models.Product, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "Product",
            foreignKey: 'product_num',
            timestamps: false
        })
    }

    return Images;
}