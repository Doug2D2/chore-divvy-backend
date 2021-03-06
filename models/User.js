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
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING(80),
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate: {
                isAlpha: true
            }
        }, 
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
        }
    });

    return User;
}

