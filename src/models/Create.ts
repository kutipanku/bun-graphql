import { Resolver, Mutation, Args, Ctx } from 'type-graphql';
import { User, CreateOneUserArgs } from './User';

@Resolver(User)
export class CreateUserResolver {
  /* ------------------------------------
  => Create user
  ------------------------------------ */
  @Mutation(() => User, { nullable: true })
  async createUser(
    @Ctx() ctx: any,
    // @Args() args: CreateOneUserArgs,
  ): Promise<User | null> {
    try {
      // const user = await ctx.prisma.user.create({
      //   ...args.data
      // });

      const user = await ctx.prisma.user.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
          email: 'alice@prisma.io',
          name: 'Alice',
          posts: {
            create: {
              title: 'Check out Prisma with Next.js',
              content: 'https://www.prisma.io/nextjs',
              published: true,
            },
          },
        },
      });

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
