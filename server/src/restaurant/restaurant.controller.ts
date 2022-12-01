import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantService } from "./restaurant.service";
import { RestaurantControllerBase } from "./base/restaurant.controller.base";

@swagger.ApiTags("restaurants")
@common.Controller("restaurants")
export class RestaurantController extends RestaurantControllerBase {
  constructor(
    protected readonly service: RestaurantService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
