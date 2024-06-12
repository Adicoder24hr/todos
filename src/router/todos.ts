import 'reflect-metadata'
import * as controller from '../controller/todos';
import { Router } from 'express';

const router = Router();

router.get('/',controller.getTodo);
router.get('/:id',controller.getTodoById);
router.put('/update/:id',controller.updateTodo);
router.post('/create',controller.createTodo);
router.delete('/delete/:id',controller.deleteTodo);

export default router;