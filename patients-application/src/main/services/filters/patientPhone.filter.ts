import { PatientFilter } from "src/main/objects/args/PatientFilter.args";

const patientPhoneFilter = ({ phones }: PatientFilter) => {
  if (!Array.isArray(phones) || !phones) return [];
  return phones.map((phone) => ({ phone: { contains: phone } }));
};

export default patientPhoneFilter;
