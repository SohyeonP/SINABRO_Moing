module.exports = (sequelize, Datatypes) => {

    return sequelize.define(`host_study`, {
        hoststudy_id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoincrement: true

        },
        createdAt: {
            allowNull: false,
            type: Datatypes.DATE,
        },
        room_name: {
            type: Datatypes.STRING,
        },
        host_name: {
            type: Datatypes.STRING,
        },
        // title_img:{
        //     type: Datatype.BLOB('long')
        // },
        // box_img:{
        //     type: Datatype.BLOB('long')
        // },
        // checkbox:{

        // },
        join_in: {
            type: Datatypes.INTEGER,

        },
        introduce: {
            type: Datatypes.TEXT,
        }
    }, {
        timestamps: true,
        paranoid: true
    }
    );
}