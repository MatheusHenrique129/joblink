const { Model, DataTypes } = require("sequelize");

class Chat extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(        
            {

            },
            {
                sequelize,
                tableName: "chat"
            }    
        )
    }
    static associate(models){
        this.sequelize
        this.hasMany(models.Message, {foreignKey: "id_chat"})
        this.belongsTo(models.Service, {foreignKey: "id_service"})

    }
}

module.exports = Chat;