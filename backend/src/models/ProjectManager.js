const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  static table = "project";

  findByName(name) {
    return this.connection.query(
      `select * from ${ProjectManager.table} where name = ?`,
      [name]
    );
  }

  findAll() {
    return this.connection.query(
      `select project.*, category.name AS category FROM ${ProjectManager.table} JOIN category ON category.id= plant.categoryId`
    );
  }

  find(id) {
    return this.connection.query(
      `select project.*, category.name AS category FROM ${ProjectManager.table} JOIN category ON category.id= project.category_id where project.id = ?`,
      [id]
    );
  }

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (name) values (?)`,
      [project.name]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${ProjectManager.table} set name = ? where id = ?`,
      [project.name, project.id]
    );
  }
}

module.exports = ProjectManager;
