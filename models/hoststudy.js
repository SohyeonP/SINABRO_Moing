module.exports = (sequelize, Sequelize) => {

    return sequelize.define(`host_study`, {
        hoststudy_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true

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
        title_img:{
            type: Sequelize.BLOB('long')
        },
        box_img:{
            type: Sequelize.BLOB('long')
        },
        // checkbox:{

        // },
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