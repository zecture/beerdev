import { IsNumber, IsString, MinLength, MaxLength } from "class-validator";
import { User } from "../../entities/User";
import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteUserInput implements Partial<User>{

    @Field()
    @IsNumber()
    id: number;

}