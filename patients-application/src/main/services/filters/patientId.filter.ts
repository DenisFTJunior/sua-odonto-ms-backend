import { PatientFilter } from "src/main/objects/args/PatientFilter.args";

const patientIdFilter = ({ ids }: PatientFilter) => {
  if (!Array.isArray(ids) || !ids) return [];
  return ids.map((id) => ({ id }));
};

export default patientIdFilter;
