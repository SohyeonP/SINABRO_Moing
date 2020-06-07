
module.exports = (sequelize,Datatypes)=>{
    return sequelize.define(`reply`,{
        reply_id:{
           type:Datatypes.INTEGER,
           primaryKey:true,
           autoincrement:true
        },
        comment_id:{
            type:Datatypes.INTEGER,
        },
        user_id:{
            type:Datatypes.INTEGER,
        },
        reply_content:{
            type:Datatypes.STRING,
        },
        reg_date:{
            type: Datatypes.DATE,
        }


    });
}