module.exports = (sequelize, DataTypes) => {

    const Key = sequelize.define("Key", {
        key: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        restrictedKey: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        administratorKey: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

    return Key;
}