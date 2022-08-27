import { UserFilter } from "src/main/objects/args/UserFilter.args";

const userRoleFilter = ({ roles }: UserFilter) => {
  if (!Array.isArray(roles) || !roles) return [];
  return roles?.map((role) => ({ role }));
};

export default userRoleFilter;
