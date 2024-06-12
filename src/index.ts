import 'reflect-metadata'
import app from './app'
import {db} from './db'

app.listen(8080,async ()=>{
    await db.initialize()

    console.log("Server started at http://localhost:8080");
})