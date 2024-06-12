import 'reflect-metadata'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'todo'})
export class Todo{
    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column({ default: "TIME()" })
    time: Date;

    @Column()
    message: string;

    @Column()
    completeOn: Date;
}