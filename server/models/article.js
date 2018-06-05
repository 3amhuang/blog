module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 64]
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    summary: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 140]
      }
    },
    author: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: 'category_id',
      allowNull: false,
    },
    isPublic: {
      type: DataTypes.INTEGER(3),
      field: 'is_public',
      defaultValue: 1
    },
    isSticky: {
      type: DataTypes.INTEGER(3),
      field: 'is_sticky',
      defaultValue: 0
    },
    viewCount: {
      type: DataTypes.INTEGER,
      field: 'view_count',
      defaultValue: 0
    }
  }, {
    paranoid: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'article'
  })

  Article.associate = (models) => {
    Article.belongsTo(models.User, { foreignKey: 'author' })
    Article.hasMany(models.ArticleCategory, { as: 'Categories' })
  }

  return Article
}
