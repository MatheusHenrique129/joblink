const { Model, DataTypes } = require("sequelize");

class BalanceRegister extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(    
            {
            value: DataTypes.STRING,
            status_flow: DataTypes.STRING,
            },
            {
                sequelize,
                tableName: "balance_register"
            }
        )
    }
    static associate(models){    
        this.belongsTo(models.User, {foreignKey: "id_freelancer"})
        this.belongsTo(models.Service, {foreignKey: "id_service"})
    }
}

module.exports = BalanceRegister;