import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ReviewServiceBase } from "./base/review.service.base";

@Injectable()
export class ReviewService extends ReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
