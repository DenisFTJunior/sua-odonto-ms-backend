// import { Prisma } from '@prisma/client';
import { appendArrayIf, appendObjIf } from '../../../shared/helpers/appendIf';
import { PatientFilter } from 'src/main/objects/args/PatientFilter.args';
import patientEmailFilter from './patientEmail.filter';
import patientIdFilter from './patientId.filter';
import patientNameFilter from './patientName.filter';
import patientPhoneFilter from './patientPhone.filter';
import patientOriginFilter from './patientOrigin.filter';
import patientPointsFilter from './patientPoint.filter';

const isAnyFilter = (filter) =>
  filter?.roles?.length > 0 ||
  filter?.emails?.length > 0 ||
  filter?.names?.length > 0 ||
  filter?.ids?.length > 0 ||
  (!!filter?.points && Object.keys(filter?.points)?.length > 0);

const patientSimpleFilterParser = (filter: PatientFilter): Object => ({
  ...appendObjIf({
    obj: {
      OR: [
        ...appendArrayIf({
          array: patientEmailFilter(filter),
          condition: filter?.emails?.length > 0,
        }),
        ...appendArrayIf({
          array: patientNameFilter(filter),
          condition: filter?.names?.length > 0,
        }),
        ...appendArrayIf({
          array: patientIdFilter(filter),
          condition: filter?.ids?.length > 0,
        }),
        ...appendArrayIf({
          array: patientOriginFilter(filter),
          condition: filter?.origins?.length > 0,
        }),
        ...appendArrayIf({
          array: patientPhoneFilter(filter),
          condition: filter?.phones?.length > 0,
        }),
        appendObjIf({
          obj: patientPointsFilter(filter),
          condition:
            !!filter?.points && Object.keys(filter?.points)?.length > 0,
        }),
      ],
    },
    condition: isAnyFilter(filter),
  }),
});

export default patientSimpleFilterParser;
