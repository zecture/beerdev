import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { CreateUserInput } from "../inputs/CreateUserInput";
import { UpdateCreditInput } from "../inputs/UpdateCreditInput";

import { User } from "../entities/User";

@Resolver()
export class UserResolver {
    @Query(() => String)
    hello() {
        return "Yo"
    }

    @Query(() => [User])
    users() {
        return User.find()
    }

    @Query(() => User)
    user(@Arg("id") id: number) {
        return User.findOne({ where: {id }});
    }

    @Mutation(() => User)
    async createUser(@Arg("data") data: CreateUserInput) {
        const user = User.create(data);
        await user.save();
        return user;
    }

    @Mutation(() => User)
    async updateCredit(@Arg("id") id: string, @Arg("data") data: UpdateCreditInput) {
      const user = await User.findOne({ where: { id } });
      if (!user) throw new Error("User not found!");
      Object.assign(user, data);
      await user.save();
      return user;
    }

    @Mutation(() => Boolean)
    async deleteUser(@Arg("id") id: string) {
        const user = await User.findOne({ where: { id } });
        if(!user) throw new Error("User not found");
        await user.remove();
        return true;
    }



}