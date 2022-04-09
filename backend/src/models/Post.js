const { Model, DataTypes } = require("sequelize");

class Post extends Model{
    //aqui inicializamos nossos campos na tabela
    static init(sequelize){
        super.init(       
            {           
            title: DataTypes.STRING,
            description: DataTypes.TEXT,
            image: DataTypes.STRING,
            urgency: DataTypes.INTEGER,
            attendance: DataTypes.STRING,
            is_announcement: DataTypes.TINYINT          
            },
            {
                sequelize,
            }   
        )
    }
    static associate(models){
        this.sequelize
        this.belongsTo(models.User, {foreignKey: "user_id"})
        this.belongsToMany(models.Category, {through: "post-category"});
        this.hasMany(models.Service, {foreignKey: "id_post"});
    }
}

module.exports = Post;