module.exports = (sequelize,Datatypes)=>{

    return sequelize.define(`m_users`,{
        user_id:{
            type:Datatypes.INTEGER,
            primaryKey:true,
            autoIncrement:true

        },
        user_email:{
            type:Datatypes.STRING,
            allownull:false,
            vaildate:{
                isEmail:true
            },
            primaryKey:true

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
            allownull:true,
        },
        token:{
            type:Datatypes.STRING,
            allownull:true,
        }
        ,tokenExp:{
            type:Datatypes.INTEGER,
            allownull:true,
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