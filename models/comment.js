


module.exports = (sequelize, Sequelize) => {
    return sequelize.define(`comment`, {
        comment_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        comment_content: {
            type: Sequelize.INTEGER,
        },
        like_thumb: {
            type: Sequelize.INTEGER,
        },
        reg_date: {
            type: Sequelize.DATE,
        }


    });
}
