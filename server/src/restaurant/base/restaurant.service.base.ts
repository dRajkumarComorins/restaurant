/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Restaurant, Cuisine, Review } from "@prisma/client";

export class RestaurantServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RestaurantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantFindManyArgs>
  ): Promise<number> {
    return this.prisma.restaurant.count(args);
  }

  async findMany<T extends Prisma.RestaurantFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantFindManyArgs>
  ): Promise<Restaurant[]> {
    return this.prisma.restaurant.findMany(args);
  }
  async findOne<T extends Prisma.RestaurantFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantFindUniqueArgs>
  ): Promise<Restaurant | null> {
    return this.prisma.restaurant.findUnique(args);
  }
  async create<T extends Prisma.RestaurantCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantCreateArgs>
  ): Promise<Restaurant> {
    return this.prisma.restaurant.create<T>(args);
  }
  async update<T extends Prisma.RestaurantUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantUpdateArgs>
  ): Promise<Restaurant> {
    return this.prisma.restaurant.update<T>(args);
  }
  async delete<T extends Prisma.RestaurantDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RestaurantDeleteArgs>
  ): Promise<Restaurant> {
    return this.prisma.restaurant.delete(args);
  }

  async findCuisines(
    parentId: string,
    args: Prisma.CuisineFindManyArgs
  ): Promise<Cuisine[]> {
    return this.prisma.restaurant
      .findUnique({
        where: { id: parentId },
      })
      .cuisines(args);
  }

  async findReviews(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<Review[]> {
    return this.prisma.restaurant
      .findUnique({
        where: { id: parentId },
      })
      .reviews(args);
  }
}
