// import { Prisma } from '@prisma/client';
import { PatientOrder } from "src/main/objects/args/PatientOrder.args";

const patientsOrder = (order: PatientOrder): Object =>
  order ? { [order.name]: order.type } : {};

export default patientsOrder;
