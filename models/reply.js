
<<<<<<< HEAD
module.exports = (sequelize, Datatypes) => {
    return sequelize.define(`reply`, {
        reply_id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        comment_id: {
            type: Datatypes.INTEGER,
        },
        user_id: {
            type: Datatypes.INTEGER,
        },
        reply_content: {
            type: Datatypes.STRING,
        },
        reg_date: {
=======
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
>>>>>>> ba19559acb4db35882f49bdbc00fcdeb2331e77b
            type: Datatypes.DATE,
        }


    });
}