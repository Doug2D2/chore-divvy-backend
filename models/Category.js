module.exports = function(sequelize, Datatypes) {
    const Category = sequelize.define('category', {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        category_name: {
            type: Datatypes.STRING(30),
            allowNull: false
        }, 
        user_id: {
            type: Datatypes.ARRAY(Datatypes.INTEGER)
        }, 
        createdAt: {
            type: Datatypes.DATE,
            field: 'created_at'
        },
        updatedAt: {
            type: Datatypes.DATE,
            field: 'updated_at'
        }
    });

    return Category;
}