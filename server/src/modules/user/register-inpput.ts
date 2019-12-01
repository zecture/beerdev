import { InputType } from "type-graphql";
import { User } from "../../entities/User";
import { Field } from "type-graphql";
import { IsString, MinLength, MaxLength } from "class-validator";

@InputType()
export class RegisterInput implements Partial<User>{
    @Field()
    @IsString()
    @MinLength(3)
    @MaxLength(25)
    name: string;

    @Field()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    password: string;

    @Field()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    credit: string;
}