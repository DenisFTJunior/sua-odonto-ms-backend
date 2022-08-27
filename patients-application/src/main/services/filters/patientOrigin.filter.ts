import { PatientFilter } from "src/main/objects/args/PatientFilter.args";

const patientOriginFilter = ({ origins }: PatientFilter) => {
  if (!Array.isArray(origins) || !origins) return [];
  return origins?.map((origin) => ({ origin }));
};

export default patientOriginFilter;
