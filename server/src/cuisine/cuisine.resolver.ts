import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { CuisineResolverBase } from "./base/cuisine.resolver.base";
import { Cuisine } from "./base/Cuisine";
import { CuisineService } from "./cuisine.service";

@graphql.Resolver(() => Cuisine)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CuisineResolver extends CuisineResolverBase {
  constructor(
    protected readonly service: CuisineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
