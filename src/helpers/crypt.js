import bcrypt from 'bcryptjs';

export const hash = (data) => {
  return bcrypt.hashSync(data, 10);
};

export const compare = (data, encrypted) => {
  return bcrypt.compareSync(data, encrypted);
};
