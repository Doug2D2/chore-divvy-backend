module.exports = function(sequelize, Datatypes) {
    const Chore = sequelize.define('chore', {
        id: {
            type: Datatypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        chore_name: {
            type: Datatypes.STRING(25),
            allowNull: false
        },
        status: {
            type: Datatypes.STRING(255),
            allowNull: false
        },
        date_complete: Datatypes.DATE,
        frequency_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'frequencies',
                key: 'id'
            }
        },
        category_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categories',
                key: 'id'
            }
        },
        assignee_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        difficulty: Datatypes.INTEGER,
        notes: Datatypes.TEXT
    });

    return Chore;
}