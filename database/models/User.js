module.exports = (sequelize, DataTypes) => {

    let alias = "User";
    
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
        user: {
            type: DataTypes.STRING(100),
            allowNull: false
            },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
            },
        dob: {
            type: DataTypes.DATE
            },
        address: {
            type: DataTypes.STRING(100)
            },
        photo: {
            type: DataTypes.STRING(100)
            },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false
            },
        category: {
            type: DataTypes.STRING(50)
            }
    };
    
    let config = {
        tableName: 'users',
        timestamps: false
        };

    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Order, { 
            as: "Orders",
            foreignKey: 'user_id',
            timestamps: false,
            onDelete: 'cascade'
        });
    }

    return User;
}