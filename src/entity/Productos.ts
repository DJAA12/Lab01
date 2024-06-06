import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Productos {

    @PrimaryGeneratedColumn()
    Cedula: number

    @Column()
    Nombre: string

    @Column()
    Apellido1: string

    @Column()
    Apellido2: string

    @Column({ type: "date" })
    FechaNacimiento: Date

    @Column()
    Genero: string

    @Column()
    Estado: boolean
}
