module.exports = (sequelize,Datatypes)=>{

    return sequelize.define(`host_study`,{
        hoststudy_id:{
            type:sequelize.INTEGER,
            primaryKey:true,
            autoincrement:true

        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        room_name:{
            type:sequelize.STRING,
        },
        host_name:{
            type: equelize.STRING,
        },
        title_img:{
            type: Sequelize.BLOB('long')
        },
        box_img:{
            type: Sequelize.BLOB('long')
        },
        checkbox:{

        },
        join_in:{


        },
        introduce:{

        }
    },{
        timestamps:true,
        paranoid:true
        }   
    );
    }