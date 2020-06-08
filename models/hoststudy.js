module.exports = (sequelize,Datatypes)=>{

    return sequelize.define(`host_study`,{
        hoststudy_id:{
            type:sequelize.INTEGER,
            primaryKey:true,
            autoincrement:true

        },
        createdAt: {
            allowNull: false,
            type: Datatype.DATE,
          },
        room_name:{
            type:Datatype.STRING,
        },
        host_name:{
            type: equelize.STRING,
        },
        // title_img:{
        //     type: Datatype.BLOB('long')
        // },
        // box_img:{
        //     type: Datatype.BLOB('long')
        // },
        // checkbox:{

        // },
        join_in:{
            type:Datatype.INTEGER,

        },
        introduce:{
            type:Datatype.TEXT,
        }
    },{
        timestamps:true,
        paranoid:true
        }   
    );
    }