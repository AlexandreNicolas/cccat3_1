import pgp from "pg-promise";
import DatabaseConnection from "./DatabaseConnection";

export default class DatabaseConnectionAdapter implements DatabaseConnection{
  db: any

  constructor() {
    this.db = pgp()('postgres://admin:12345@localhost:5432/admin');
  }

  query(statement: string, params: any): any {
    return this.db.query(statement, params)
  }
}