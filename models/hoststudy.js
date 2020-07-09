module.exports = (sequelize, Sequelize) => {

    return sequelize.define(`host_study`, {
        hoststudy_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        room_name: {
            type: Sequelize.STRING,
        },
        host_name: {
            type: Sequelize.STRING,
        },
        title_img: {
            type: Sequelize.TEXT,
        },
        box_img: {
            type: Sequelize.BLOB('long'),
        },
        checkbox:{
            type: Sequelize.STRING,
        },
        join_in: {
            type: Sequelize.INTEGER,

        },
        introduce: {
            type: Sequelize.TEXT,
        }
    }, {
        timestamps: true,
        paranoid: true
    }
    );
}