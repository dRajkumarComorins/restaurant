/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCuisineArgs } from "./CreateCuisineArgs";
import { UpdateCuisineArgs } from "./UpdateCuisineArgs";
import { DeleteCuisineArgs } from "./DeleteCuisineArgs";
import { CuisineFindManyArgs } from "./CuisineFindManyArgs";
import { CuisineFindUniqueArgs } from "./CuisineFindUniqueArgs";
import { Cuisine } from "./Cuisine";
import { Restaurant } from "../../restaurant/base/Restaurant";
import { CuisineService } from "../cuisine.service";

@graphql.Resolver(() => Cuisine)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CuisineResolverBase {
  constructor(
    protected readonly service: CuisineService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Cuisine",
    action: "read",
    possession: "any",
  })
  async _cuisinesMeta(
    @graphql.Args() args: CuisineFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Cuisine])
  @nestAccessControl.UseRoles({
    resource: "Cuisine",
    action: "read",
    possession: "any",
  })
  async cuisines(
    @graphql.Args() args: CuisineFindManyArgs
  ): Promise<Cuisine[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Cuisine, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Cuisine",
    action: "read",
    possession: "own",
  })
  async cuisine(
    @graphql.Args() args: CuisineFindUniqueArgs
  ): Promise<Cuisine | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Cuisine)
  @nestAccessControl.UseRoles({
    resource: "Cuisine",
    action: "create",
    possession: "any",
  })
  async createCuisine(
    @graphql.Args() args: CreateCuisineArgs
  ): Promise<Cuisine> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        restaurant: args.data.restaurant
          ? {
              connect: args.data.restaurant,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Cuisine)
  @nestAccessControl.UseRoles({
    resource: "Cuisine",
    action: "update",
    possession: "any",
  })
  async updateCuisine(
    @graphql.Args() args: UpdateCuisineArgs
  ): Promise<Cuisine | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          restaurant: args.data.restaurant
            ? {
                connect: args.data.restaurant,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Cuisine)
  @nestAccessControl.UseRoles({
    resource: "Cuisine",
    action: "delete",
    possession: "any",
  })
  async deleteCuisine(
    @graphql.Args() args: DeleteCuisineArgs
  ): Promise<Cuisine | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Restaurant, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async restaurant(
    @graphql.Parent() parent: Cuisine
  ): Promise<Restaurant | null> {
    const result = await this.service.getRestaurant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}