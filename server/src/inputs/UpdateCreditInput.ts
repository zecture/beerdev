import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateCreditInput {

  @Field()
  credit: string;

}