const { Model, DataTypes } = require("sequelize");

class User extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(        
            {
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            birth_date: DataTypes.STRING,
            gender: DataTypes.STRING,
            password: DataTypes.STRING,
            cpf: DataTypes.STRING,
            address: DataTypes.STRING,
            phone_number: DataTypes.STRING,
            image: DataTypes.STRING,
            banned: DataTypes.TINYINT,
            suspended: DataTypes.TINYINT,
            is_freelancer: DataTypes.TINYINT,
            agreed_policy: DataTypes.TINYINT
            },
            {
                sequelize,
            }   
        )
    }
    static associate(models){
        this.sequelize
        this.hasOne(models.Client, {foreignKey: "id"})
        this.hasOne(models.Freelancer, {foreignKey: "id"})
        this.hasOne(models.Service, {foreignKey: "id_user"})
        this.hasOne(models.Service, {foreignKey: "id_freelancer"})
        this.hasMany(models.Post, {foreignKey: "user_id"})
        this.belongsToMany(models.Profession, {through: "user-profession"})
        this.hasMany(models.BalanceRegister, {foreignKey: "id_freelancer"})
        this.hasMany(models.Message, {foreignKey: "message_author"})
    }
}

module.exports = User;