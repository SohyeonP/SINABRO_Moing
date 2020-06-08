
module.exports = (sequelize,Datatypes)=>{
    return sequelize.define(`reply`,{
        reply_id:{
           type:sequelize.INTEGER,
           primaryKey:true,
           autoincrement:true
        },
        comment_id:{
            type:sequelize.INTEGER,
        },
        user_id:{
            type:sequelize.INTEGER,
        },
        reply_content:{
            type:sequelize.STRING,
        },
        reg_date:{
            type: Sequelize.DATE,
        }


    });
}