const { Model, DataTypes } = require("sequelize");

class Freelancer extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(       
            {
            rating: DataTypes.FLOAT,
            years_experience: DataTypes.STRING,
            history: DataTypes.TEXT 
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

module.exports = Freelancer;