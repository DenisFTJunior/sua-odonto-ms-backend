// import { Prisma } from '@prisma/client';
import { appendArrayIf, appendObjIf } from '../../../shared/helpers/appendIf';
import { UserFilter } from "src/main/objects/args/UserFilter.args";
import userEmailFilter from './userEmail.filter';
import userIdFilter from './userId.filter';
import userNameFilter from './userName.filter';
import userRoleFilter from './userRole.filter';

const isAnyFilter = (filter) =>
  filter?.roles?.length > 0 ||
  filter?.emails?.length > 0 ||
  filter?.names?.length > 0 ||
  filter?.ids?.length > 0;

const userSimpleFilterParser = (filter: UserFilter): Object => ({
  ...appendObjIf({
    obj: {
      OR: [
        ...appendArrayIf({
          array: userEmailFilter(filter),
          condition: filter?.emails?.length > 0,
        }),
        ...appendArrayIf({
          array: userNameFilter(filter),
          condition: filter?.names?.length > 0,
        }),
        ...appendArrayIf({
          array: userIdFilter(filter),
          condition: filter?.ids?.length > 0,
        }),
        ...appendArrayIf({
          array: userRoleFilter(filter),
          condition: filter?.roles?.length > 0,
        }),
      ],
    },
    condition: isAnyFilter(filter),
  }),
});

export default userSimpleFilterParser;
