const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  findByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, email, role from ${UserManager.table}`
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password, role) values (?, ?, ?)`,
      [user.email, user.hash, user.role]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set email = ?, password = ?, role = ? where id = ?`,
      [user.email, user.hash, user.role, user.id]
    );
  }
}

module.exports = UserManager;
