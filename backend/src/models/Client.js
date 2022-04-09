const { Model, DataTypes } = require("sequelize");

class Client extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(        
            { 

            },
            {
                sequelize,
            }   
        )
    }
    static associate(models){
        this.belongsTo(models.User, {foreignKey: "id"})
    }
}

module.exports = Client;