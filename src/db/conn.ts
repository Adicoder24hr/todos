import 'reflect-metadata'
import { DataSource } from "typeorm";
import { Todo } from '../model/todo';

export const db = new DataSource({
    type: "sqlite",
    database: "./database.db",
    synchronize: true,
    logger: "simple-console",
    logging: true,
    entities: [Todo]
})