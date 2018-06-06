module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    avatar: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      }
    },
    phone: {
      type: DataTypes.BIGINT,
      unique: true,
      validate: {
        notEmpty: true
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      },
      set(value) {
        this.setDataValue('email', value.toLowerCase());
      }
    },
    password: {
      type: DataTypes.VIRTUAL,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6, 255]
      }
    },
    userDesc: {
      type: DataTypes.STRING,
      field: 'user_desc',
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    socialId: {
      type: DataTypes.STRING,
      field: 'social_id'
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
    tableName: 'user'
  })

  User.associate = (models) => {
    User.hasMany(models.Article, { foreignKey: 'authorId' })
  }

  return User
}
