


module.exports = (sequelize,Datatypes)=>{
    return sequelize.define(`comment`,{
        comment_id:{
           type:sequelize.INTEGER,
           primaryKey:true,
           autoincrement:true
        },
        user_id:{
            type:sequelize.INTEGER,
        },
        comment_content:{
            type:sequelize.INTEGER,
        },
        like_thumb:{
            type:sequelize.INTEGER,
        },
        reg_date:{
            type: Sequelize.DATE,
        }


    });
}
