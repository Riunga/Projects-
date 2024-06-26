/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Address as PrismaAddress,
  Order as PrismaOrder,
  User as PrismaUser,
} from "@prisma/client";

export class AddressServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AddressCountArgs, "select">): Promise<number> {
    return this.prisma.address.count(args);
  }

  async addresses<T extends Prisma.AddressFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressFindManyArgs>
  ): Promise<PrismaAddress[]> {
    return this.prisma.address.findMany<Prisma.AddressFindManyArgs>(args);
  }
  async address<T extends Prisma.AddressFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressFindUniqueArgs>
  ): Promise<PrismaAddress | null> {
    return this.prisma.address.findUnique(args);
  }
  async createAddress<T extends Prisma.AddressCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressCreateArgs>
  ): Promise<PrismaAddress> {
    return this.prisma.address.create<T>(args);
  }
  async updateAddress<T extends Prisma.AddressUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressUpdateArgs>
  ): Promise<PrismaAddress> {
    return this.prisma.address.update<T>(args);
  }
  async deleteAddress<T extends Prisma.AddressDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AddressDeleteArgs>
  ): Promise<PrismaAddress> {
    return this.prisma.address.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.address
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.address
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
