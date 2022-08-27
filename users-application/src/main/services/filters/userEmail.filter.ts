import { UserFilter } from "src/main/objects/args/UserFilter.args";

const userEmailFilter = ({ emails }: UserFilter) => {
  if (!Array.isArray(emails) || !emails) return [];
  return emails.map((email) => ({ email: { contains: email } }));
};

export default userEmailFilter;
