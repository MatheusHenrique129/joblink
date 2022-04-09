const { Model, DataTypes } = require("sequelize");

class Service extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(      
            {
            progress: DataTypes.STRING,
            is_from_client: DataTypes.TINYINT,
            service_cost: DataTypes.STRING,
            is_accepted: DataTypes.TINYINT,
            rating: DataTypes.STRING,
            is_accepted: DataTypes.TINYINT,
            feedback: DataTypes.TEXT
            },
            {
                sequelize,
            }
        )
    }
    static associate(models){
        this.sequelize
        this.belongsTo(models.User, {foreignKey: "id_user"});
        this.belongsTo(models.User, {foreignKey: "id_freelancer", as: "Freelancer"});
        this.belongsTo(models.Post, {foreignKey: "id_post"});
        this.hasMany(models.Chat, {foreignKey: "id_service"});
        this.hasMany(models.BalanceRegister, {foreignKey: "id_service"})
    }
}

module.exports = Service;