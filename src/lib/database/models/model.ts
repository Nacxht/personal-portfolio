import { db as database } from "../db_config";

export class Model {
  db;
  constructor() {
    this.db = database;
  }
}
