module.exports = (sequelize, DataTypes) => {

    return sequelize.define(`m_users`, {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        user_email: {
            type: DataTypes.STRING,
            allownull: false,
            vaildate: {
                isEmail: true
            },
            primaryKey: true

        },
        user_pw: {
            type: DataTypes.STRING,
            allownull: false
        },
        user_name: {
            type: DataTypes.STRING,
        }
        // ,role:{
        //     type:Sequelize.INTEGER,
        //     allownull:true,
        // },
        // token:{
        //     type:Sequelize.STRING,
        //     allownull:true,
        // }
        // ,tokenExp:{
        //     type:Sequelize.INTEGER,
        //     allownull:true,
    // }
        ,
        user_img:{
            type:DataTypes.TEXT,
            allowNull: true
        }
        // user_introduce:{
        //     type:Sequelize.TEXT,
        //     allowNull: true
        // },


    }, {
        timestamps: true,
        paranoid: true
    }
    );
}