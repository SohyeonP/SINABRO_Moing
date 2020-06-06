module.exports = (sequelize,Datatypes)=>{

    return sequelize.define(`m_users`,{
        user_id:{
            type:Datatypes.INTEGER,
            primaryKey:true,
            autoincrement:true

        },
        user_email:{
            type:Datatypes.STRING,
            allownull:false

        },
        user_pw:{
            type:Datatypes.STRING,
            allownull:false
        },
        user_name:{
            type:Datatypes.STRING,
        }
        ,role:{
            type:Datatypes.INTEGER,
        },
        token:{
            type:Datatypes.STRING,
           
        }
        ,tokenExp:{
            type:Datatypes.INTEGER,
        },
        user_img:{
            type:Datatypes.TEXT,
            allowNull: true
        },
        user_introduce:{
            type:Datatypes.TEXT,
            allowNull: true
        },
    },{
        timestamps:true,
        paranoid:true
        }   
    );
    }