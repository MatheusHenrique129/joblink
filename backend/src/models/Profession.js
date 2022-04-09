const { Model, DataTypes } = require("sequelize");

class Profession extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(     
            {
            name: DataTypes.STRING
            },
            {
                sequelize,
            }
        )
    }
    static associate(models){
        this.sequelize
        this.belongsToMany(models.User, {through: "user-profession"})
    }
}

module.exports = Profession;