import { Module } from "@nestjs/common";
import { RestaurantModuleBase } from "./base/restaurant.module.base";
import { RestaurantService } from "./restaurant.service";
import { RestaurantController } from "./restaurant.controller";
import { RestaurantResolver } from "./restaurant.resolver";

@Module({
  imports: [RestaurantModuleBase],
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantResolver],
  exports: [RestaurantService],
})
export class RestaurantModule {}
