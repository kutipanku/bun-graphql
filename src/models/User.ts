import { ObjectType, Field, Int, ArgsType, InputType } from "type-graphql";

@ObjectType("User", {})
export class User {
  @Field((_type) => Int, {
    nullable: false,
  })
  id!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  name!: string;
}

@ObjectType("User", {})
export class UserInput {
  @Field((_type) => Int, {
    nullable: false,
  })
  id!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  name!: string;
}

@InputType("UserCreateInput", {})
export class UserCreateInput {
  @Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  name!: string;
}

@ArgsType()
export class CreateOneUserArgs {
  @Field((_type) => UserCreateInput, {
    nullable: false,
  })
  data!: UserCreateInput;
}
