import { UserFilter } from "src/main/objects/args/UserFilter.args";

const userIdFilter = ({ ids }: UserFilter) => {
  if (!Array.isArray(ids) || !ids) return [];
  return ids.map((id) => ({ id }));
};

export default userIdFilter;
