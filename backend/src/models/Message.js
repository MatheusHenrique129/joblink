const { Model, DataTypes } = require("sequelize");

class Message extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(
            {
            message_description: DataTypes.TEXT
            },
            {
                sequelize,
            }        
        )
    }
    static associate(models){
        this.sequelize
        this.belongsTo(models.User, {foreignKey: "message_author"})
        this.belongsTo(models.Chat, {foreignKey: "id_chat"})
    }
}

module.exports = Message;