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
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        status: {
            type: Datatypes.STRING(255),
            allowNull: false,
            validate: {
                isIn: [["To Do", "In Progress", "Completed"]]
            }
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
        difficulty: {
            type: Datatypes.INTEGER,
            validate: {
                isIn: [["Easy", "Medium", "Hard"]]
            }
        },
        notes: Datatypes.TEXT, 
        createdAt: {
            type: Datatypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: Datatypes.DATE,
            field: 'updated_at'
        }
    });

    return Chore;
}
