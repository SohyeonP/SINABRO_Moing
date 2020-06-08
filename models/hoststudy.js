module.exports = (sequelize, Datatypes) => {

<<<<<<< HEAD
    return sequelize.define(`host_study`, {
        hoststudy_id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoincrement: true
=======
    return sequelize.define(`host_study`,{
        hoststudy_id:{
            type:Datatypes.INTEGER,
            primaryKey:true,
            autoincrement:true
>>>>>>> ba19559acb4db35882f49bdbc00fcdeb2331e77b

        },
        createdAt: {
            allowNull: false,
            type: Datatypes.DATE,
<<<<<<< HEAD
        },
        room_name: {
            type: Datatypes.STRING,
        },
        host_name: {
=======
          },
        room_name:{
            type:Datatypes.STRING,
        },
        host_name:{
>>>>>>> ba19559acb4db35882f49bdbc00fcdeb2331e77b
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
<<<<<<< HEAD
        join_in: {
            type: Datatypes.INTEGER,

        },
        introduce: {
            type: Datatypes.TEXT,
=======
        join_in:{
            type:Datatypes.INTEGER,

        },
        introduce:{
            type:Datatypes.TEXT,
>>>>>>> ba19559acb4db35882f49bdbc00fcdeb2331e77b
        }
    }, {
        timestamps: true,
        paranoid: true
    }
    );
}