import { Resolver, Query, Ctx } from 'type-graphql';
import { User } from './User';

@Resolver(User)
export class ReadUserResolver {
  /* ------------------------------------
  => Get user by id
  ------------------------------------ */
  @Query(() => User, { nullable: true })
  async getUsers(
    @Ctx() ctx: any,
  ): Promise<User | null> {
    try {
      const user = await ctx.prisma.user.findFirst();

    if (!user) {
      return null;
    }
    return user;
    } catch(error) {
      console.log('Error:', error);
      return null;
    }
  }
}
