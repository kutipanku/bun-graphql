import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFilter } from "../inputs/BoolFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PostWhereInput } from "../inputs/PostWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("PostWhereUniqueInput", {})
export class PostWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  AND?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  OR?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereInput], {
    nullable: true,
  })
  NOT?: PostWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, {
    nullable: true,
  })
  published?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;
}
