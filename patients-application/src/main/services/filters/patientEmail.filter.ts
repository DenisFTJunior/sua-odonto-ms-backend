import { PatientFilter } from "src/main/objects/args/PatientFilter.args";

const patientEmailFilter = ({ emails }: PatientFilter) => {
  if (!Array.isArray(emails) || !emails) return [];
  return emails.map((email) => ({ email: { contains: email } }));
};

export default patientEmailFilter;
