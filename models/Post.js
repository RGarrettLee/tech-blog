const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const slugify = require('slugify');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        date: {
            type: DataTypes.DATEONLY,
            defaultValue: Sequelize.NOW,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            },
        },
    },
    {
        hooks: { 
            beforeCreate: async (postData) => {
                postData.slug = slugify(postData.title.toLowerCase());
                return postData
            }
        },
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'post'
    }
);

module.exports = Post;