import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    id: number
    @Column({ name: 'name' })
    name: string
    @Column({ name: 'photo' })
    photo: string
    @Column({ name: 'description' })
    description: string
}
