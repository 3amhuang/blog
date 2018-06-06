module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('ArticleComment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    ip: {
      type: DataTypes.STRING,
      validate: {
        isIP: true
      }
    },
    replyComment: {
      type: DataTypes.INTEGER,
      field: 'reply_comment',
      defaultValue: null
    }
  }, {
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    tableName: 'article_comment'
  })

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, { foreignKey: 'user_id' })
    Comment.belongsTo(models.Article, { foreignKey: 'article_id' })
  }

  return Comment
}
