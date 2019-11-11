import { Resolver, Query, Arg, Ctx, Mutation } from "type-graphql";
import { User } from "../../entities/User";
import { Context } from "../types/Context";
import { RegisterInput } from "./register-inpput";

@Resolver(User)
export class UserResolver {

    private UsersCollection: User[] = [];

    @Query(returns => String)
    async Users() {
      return "Penis"
    }

    @Mutation(returns => String)
    async Register(@Arg("input") { name, password}: RegisterInput) {
      await User.create({
          name,
          password
      }).save();
      return "Registration succesful";
    }


}