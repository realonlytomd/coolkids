module.exports = function(sequelize, DataTypes) {
  var Exercise = sequelize.define("Exercise", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    body_part: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1,200]
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Exercise.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Exercise.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Exercise;
};
