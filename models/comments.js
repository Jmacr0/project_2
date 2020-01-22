module.exports = function(sequelize, DataTypes) {
  const Comments = sequelize.define("Comments", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Comments;
};

// POSSIBLE COLUMNS TO ADD:
// like count?
