import { Module } from "@nestjs/common";
import { CuisineModuleBase } from "./base/cuisine.module.base";
import { CuisineService } from "./cuisine.service";
import { CuisineController } from "./cuisine.controller";
import { CuisineResolver } from "./cuisine.resolver";

@Module({
  imports: [CuisineModuleBase],
  controllers: [CuisineController],
  providers: [CuisineService, CuisineResolver],
  exports: [CuisineService],
})
export class CuisineModule {}
