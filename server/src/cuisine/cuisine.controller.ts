import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CuisineService } from "./cuisine.service";
import { CuisineControllerBase } from "./base/cuisine.controller.base";

@swagger.ApiTags("cuisines")
@common.Controller("cuisines")
export class CuisineController extends CuisineControllerBase {
  constructor(
    protected readonly service: CuisineService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
