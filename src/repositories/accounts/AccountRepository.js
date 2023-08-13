const { v4: uuid } = require('uuid');

const mockUsers = [
];

class AccountRepository {
  async userExists(email) {
    const [user] = await mockUsers.filter((userObj) => userObj.email === email);

    if (user) {
      return true;
    }

    return false;
  }

  async signup(name, email, password) {
    const user = {
      id: uuid(),
      name,
      email,
      password,
    };

    await mockUsers.push(user);
  }

  async login(email) {
    const [user] = await mockUsers.filter((userObj) => userObj.email === email);

    return user;
  }
}

module.exports = new AccountRepository();
