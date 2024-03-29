const roles = ['user', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['getUsers']);  //roleRights.set(roles[0], ['user']);
roleRights.set(roles[1], ['getUsers', 'manageUsers']); //roleRights.set(roles[1], ['user', 'admin']);

module.exports = {
  roles,
  roleRights,
};
