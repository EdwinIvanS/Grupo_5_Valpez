module.exports = (sequalize, DataTypes) => {

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
        product_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            references: {
                model: Product,
                key: 'id'
            } 
        }
    };
    
    let config = {
        tableName: 'images',
        timestamps: false
        };

    const Image = sequelize.define(alias, cols, config);

    return Image;
}