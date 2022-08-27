export const removeObjectNullProps = (obj: Object) =>
  Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) => value !== null && value.length > 0,
    ),
  );
