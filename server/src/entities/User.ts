import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,  } from 'typeorm'
import { Field, ObjectType, ID } from 'type-graphql'

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  tagId: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column({ nullable: true })
  credit: string;

  @Field(() => Boolean)
  @Column({nullable: true, default: false})
  clubbis: boolean;


}