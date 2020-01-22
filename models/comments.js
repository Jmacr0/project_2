module.exports = function(sequelize, DataTypes) {
  const comments = sequelize.define("comments", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return comments;
};

// POSSIBLE COLUMNS TO ADD:
// like count?
