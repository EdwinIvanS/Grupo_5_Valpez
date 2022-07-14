module.exports = (sequalize, DataTypes) => {

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

    return Class;
};