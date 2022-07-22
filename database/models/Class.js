module.exports = (sequelize, DataTypes) => {

    let alias = "Class";
    
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
        category: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    };
    
    let config = {
        tableName: 'classes',
        timestamps: false
        };

    const Class = sequelize.define(alias, cols, config);

    Class.associate = function (models) {
        Class.hasMany(models.Product, { 
            as: "Products",
            foreignKey: 'class_id',
            timestamps: false,
            onDelete: 'cascade'
        })
    }

    return Class;
};