import { Resolver, Query, Arg, Ctx, Mutation } from "type-graphql";
import { User } from "../../entities/User";
import { Context } from "../types/Context";
import { RegisterInput } from "./register-inpput";
import { AddCreditInput } from "./addCredit-input";
import { DeleteUserInput } from "./deleteUser-input";
import * as bcrypt  from "bcryptjs";

@Resolver(User)
export class UserResolver {

    private UsersCollection: User[] = [];

    @Query(returns => String)
    async getUsers() {
      const users: User[] = await User.find();
      return users;
    }

    // get specific credit, should be a validation
    @Query(returns => String)
    async getUserCredit() {
      // TODO: Add finByID
      const user = await User.findOne();
      return user.credit;
    }

    // Register new user
    @Mutation(returns => String)
    async Register(@Arg("input") { name, password}: RegisterInput) {
      const hashedPassword = await bcrypt.hash(password, 12);

      await User.create({
          name,
          password: hashedPassword
      }).save();
      return hashedPassword;
    }
    // Add credit to user
    @Mutation(returns => String)
    async addCredit(@Arg("input") { id, credit}: AddCreditInput) {
      const user = await User.findOne({ where: { id } });

      user.credit += credit;
      await user.save();

      return user.credit;
    }
    // TODO: Create remove credit
    @Mutation(returns => String)
    async removeCredit(@Arg("input") { id, credit}: AddCreditInput) {
      const user = await User.findOne({ where: { id } });
      user.credit += credit;
      await user.save();

      return user.credit;
    }
    // Remove user
    @Mutation(returns => String)
    async deleteUser(@Arg("input") { id }: DeleteUserInput) {
      await User.create({
          id
      }).save();
      return "Deleted user";
    }
    // Update user
    @Mutation(returns => String)
    async updateUser(@Arg("input") { id, credit}: AddCreditInput) {
      const user = await User.findOne({ where: { id } });

      return user;
    }


    // TODO: Create validation functions


}