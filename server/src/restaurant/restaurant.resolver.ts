import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RestaurantResolverBase } from "./base/restaurant.resolver.base";
import { Restaurant } from "./base/Restaurant";
import { RestaurantService } from "./restaurant.service";

@graphql.Resolver(() => Restaurant)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RestaurantResolver extends RestaurantResolverBase {
  constructor(
    protected readonly service: RestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
