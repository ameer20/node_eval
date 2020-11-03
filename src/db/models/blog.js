const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
  return sequelize.define(
    "blogs",  
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
       
      blog_title: {
        defaultValue: "name",
        allowNull: false,
        type: DataTypes.STRING(500),
      },
      language: {
        defaultValue: "language",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      
     content_type: {
        defaultValue: "Educational",
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      review_rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: false }
  );
};