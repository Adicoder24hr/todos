import 'reflect-metadata'
import { Todo } from "../model/todo";
import { db } from "./conn";

export const TodoRepo = db.getRepository(Todo);
