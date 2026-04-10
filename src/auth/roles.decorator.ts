export const Roles = (role: string) => {
  return (target, key, descriptor) => {
    descriptor.value.role = role;
  };
};