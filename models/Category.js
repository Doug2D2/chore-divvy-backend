module.exports = function(sequelize, Datatypes) {
    const Category = sequelize.define('Category', {
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
        }
    });

    return Category;
}