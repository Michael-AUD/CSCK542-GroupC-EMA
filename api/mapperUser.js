const User = require('../models/User'); // Update the path accordingly

const userMapper = (row) => {
  return new User(row.UserID, row.Name, row.RoleID);
}

module.exports = userMapper;
