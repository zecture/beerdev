import {ObjectType, Field, } from "type-graphql";
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text", { unique: true})
    name: string | null ;

    @Field()
    @Column()
    idTag: string;

    @Field()
    @Column()
    credit: number;

    @Field()
    @Column()
    isMember: boolean;

    @Column()
    : string;


}
