
module.exports = (sequelize, Sequelize) => {
    return sequelize.define(`reply`, {
        reply_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        comment_id: {
            type: Sequelize.INTEGER,
        },
        user_id: {
            type: Sequelize.INTEGER,
        },
        reply_content: {
            type: Sequelize.STRING,
        },
        reg_date: {
            type: Sequelize.DATE,
        }


    });
}