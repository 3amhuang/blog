module.exports = (sequelize, DataTypes) => {
  const ArticleCategory = sequelize.define('ArticleCategory', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    categoryDesc: {
      type: DataTypes.STRING,
      field: 'category_desc'
    },
    createdAt:{
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      field: 'deleted_at'
    }
  }, {
    paranoid: true,
    timestamps: false,
    underscored: true,
    tableName: 'article_category'
  })

  ArticleCategory.associate = (models) => {
    ArticleCategory.hasMany(models.Article, { foreignKey: 'categoryId' })
  }

  return ArticleCategory
}
