import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,  } from 'typeorm'
import { Field } from 'type-graphql'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  @Field()
  @Column()
  password: string

  @Field()
  @Column()
  credit: string
}