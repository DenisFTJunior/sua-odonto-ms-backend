import { PatientFilter } from 'src/main/objects/args/PatientFilter.args';
import { removeObjectNullProps } from '../../../shared/helpers/removeNullProps';

const formatPoints = (key, value) => {
  switch (key) {
    case 'bigger':
      return ['gt', value];
    case 'smaller':
      return ['lt', value];
    case 'equal':
      return ['equal', value];
    default:
      break;
  }
};

const patientPointsFilter = ({ points }: PatientFilter) => {
  if (!points || typeof points !== 'object' || Object.keys(points).length < 1)
    return {};

  const formattedPoints = Object.fromEntries(
    Object.entries(removeObjectNullProps(points)).map(([key, value]) =>
      formatPoints(key, value),
    ),
  );

  return { points: formattedPoints };
};

export default patientPointsFilter;
