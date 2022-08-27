// import { Prisma } from '@prisma/client';
import { UserOrder } from "src/main/objects/args/UserOrder.args";

const userOrder = (order: UserOrder): Object =>
  order ? { [order.name]: order.type } : {};

export default userOrder;
