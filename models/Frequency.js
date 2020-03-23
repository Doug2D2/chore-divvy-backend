module.exports = function(sequelize, Datatypes) {
    const Frequency = sequelize.define('frequency', {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        frequency_name: {
            type: Datatypes.STRING(25),
            allowNull: false
        }
    });

    return Frequency;
}