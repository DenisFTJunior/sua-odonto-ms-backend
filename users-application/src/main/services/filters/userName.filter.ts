import { UserFilter } from "src/main/objects/args/UserFilter.args";

const userNameFilter = ({ names }: UserFilter) => {
  if (!Array.isArray(names) || !names) return [];
  return names?.map((name) => ({ name: { contains: name } }));
};

export default userNameFilter;
