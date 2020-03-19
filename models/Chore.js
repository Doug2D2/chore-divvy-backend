module.exports = function(sequelize, Datatypes) {
    const Chore = sequelize.define('Chore', {
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
                model: 'Frequencies',
                key: 'id'
            }
        },
        category_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Categories',
                key: 'id'
            }
        },
        assignee_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        difficulty: Datatypes.INTEGER,
        notes: Datatypes.TEXT
    });

    return Chore;
}