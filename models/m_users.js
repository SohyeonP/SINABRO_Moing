module.exports = (sequelize,Datatypes)=>{

    return sequelize.define(`m_users`,{
        user_id:{
            type:sequelize.INTEGER,
            primaryKey:true,
            autoincrement:true

        },
        user_email:{
            type:sequelize.STRING,
            allownull:false

        },
        user_pw:{
            type:sequelize.STRING,
            allownull:false
        },
        user_name:{
            type:sequelize.STRING,
        }
        ,role:{
            type:sequelize.INTEGER,
        },
        token:{
            type:sequelize.STRING,
           
        }
        ,tokenExp:{
            type:sequelize.INTEGER,
        },
        user_img:{
            type:sequelize.TEXT,
            allowNull: true
        },
        user_introduce:{
            type:sequelize.TEXT,
            allowNull: true
        },
    },{
        timestamps:true,
        paranoid:true
        }   
    );
    }