export const appendArrayIf = ({
  array,
  condition,
}: {
  array: any[];
  condition: boolean;
}) => {
  if (!condition) return [];
  return array;
};

export const appendObjIf = ({
  obj,
  condition,
}: {
  obj: any;
  condition: boolean;
}) => {
  if (!condition) return {};
  return obj;
};
