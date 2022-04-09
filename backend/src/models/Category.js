const { Model, DataTypes } = require("sequelize");

class Category extends Model{
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
        this.belongsTo(models.Post, {foreignKey: "post_id"})
        this.belongsToMany(models.Post, {through: "post-category"})
    }
}

module.exports = Category;