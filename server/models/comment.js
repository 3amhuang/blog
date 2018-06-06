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
    tableName: 'article_comment'
  })

  Comment.associate = (models) => {
    Comment.belongsTo(models.User, { foreignKey: 'user_id' })
    Comment.belongsTo(models.Article, { foreignKey: 'article_id' })
  }

  return Comment
}
