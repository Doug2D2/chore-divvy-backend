module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }
    });

    return User;
}

