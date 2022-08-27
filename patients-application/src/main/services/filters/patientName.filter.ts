import { PatientFilter } from "src/main/objects/args/PatientFilter.args";

const patientNameFilter = ({ names }: PatientFilter) => {
  if (!Array.isArray(names) || !names) return [];
  return names?.map((name) => ({ name: { contains: name } }));
};

export default patientNameFilter;
