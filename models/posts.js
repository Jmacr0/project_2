module.exports = function(sequelize, DataTypes) {
  const Posts = sequelize.define("Posts", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Posts;
};

// POSSIBLE COLUMNS TO ADD:
// like count
// like username (to see who likes the post)
// comment count
// comment username (to see who commented)