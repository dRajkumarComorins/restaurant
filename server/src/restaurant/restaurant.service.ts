import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RestaurantServiceBase } from "./base/restaurant.service.base";

@Injectable()
export class RestaurantService extends RestaurantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
