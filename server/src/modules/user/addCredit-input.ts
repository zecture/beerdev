import { IsNumber, IsString, MinLength, MaxLength } from "class-validator";
import { User } from "../../entities/User";
import { Field, InputType } from "type-graphql";

@InputType()
export class AddCreditInput implements Partial<User>{

    @Field()
    @IsNumber()
    id: number;

    @Field()
    @IsString()
    @MinLength(3)
    @MaxLength(255)
    credit: string;
}