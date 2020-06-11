module.exports = (sequelize,Sequelize)=>{

    return sequelize.define(`m_users`,{
        user_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true

        },
        user_email:{
            type:Sequelize.STRING,
            allownull:false,
            vaildate:{
                isEmail:true
            },
            primaryKey:true

        },
        user_pw:{
            type:Sequelize.STRING,
            allownull:false
        },
        user_name:{
            type:Sequelize.STRING,
        }
        ,role:{
            type:Sequelize.INTEGER,
            allownull:true,
        },
        token:{
            type:Sequelize.STRING,
            allownull:true,
        }
        ,tokenExp:{
            type:Sequelize.INTEGER,
            allownull:true,
        },
        user_img:{
            type:Sequelize.TEXT,
            allowNull: true
        },
        user_introduce:{
            type:Sequelize.TEXT,
            allowNull: true
        },
        
        
    },{
        timestamps:true,
        paranoid:true
        }   
    );
    }