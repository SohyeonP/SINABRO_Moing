


module.exports = (sequelize, Datatypes) => {
    return sequelize.define(`comment`, {
        comment_id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        user_id: {
            type: Datatypes.INTEGER,
        },
        comment_content: {
            type: Datatypes.INTEGER,
        },
        like_thumb: {
            type: Datatypes.INTEGER,
        },
        reg_date: {
            type: Datatypes.DATE,
        }


    });
}
