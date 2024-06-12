import 'reflect-metadata'
import { TodoRepo } from '@/db/repo'
import type {Request, Response} from 'express'

export const getTodo = async (req: Request, res: Response) => {
    try{
        return res.json({
            data: await TodoRepo.find()
        })
    }
    catch(e){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const getTodoById = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        return res.json({
            data: await TodoRepo.findOne({
                where: {
                    id
                }
            })
        })
    }
    catch(e){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const createTodo = async (req: Request, res: Response) => {
    try{
        const body = req.body;
        if(!body.message || !body.completeOn){
            return res.status(404).send("data not valid");
        }
    
        if ((typeof body.message !== "string")) {
            return res.status(404).send("data not valid");
        }
    
        if((typeof body.completeOn !== "string")){
            return res.status(404).send("data not valid");
        }
        let _data = {...body};

        return res.json({
            create: await TodoRepo.save(TodoRepo.create({..._data}))
        })
    }
    catch(e){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const body = req.body;
        if(!body.message || !body.completeOn){
            return res.status(404).send("data not valid");
        }
    
        if ((typeof body.message !== "string")) {
            return res.status(404).send("data not valid");
        }
    
        if((typeof body.completeOn !== "string")){
            return res.status(404).send("data not valid");
        }

        return res.json({
            data: await TodoRepo.update(id, {...body})
        })
        
    }
    catch(e){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        return res.json({
            data: await TodoRepo.delete(id)
        })
    }
    catch(e){
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}