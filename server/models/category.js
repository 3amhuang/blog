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
    }
  }, {
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'article_category'
  })

  ArticleCategory.associate = (models) => {
    ArticleCategory.hasMany(models.Article, { foreignKey: 'categoryId' })
  }

  return ArticleCategory
}
