import jwt from 'jsonwebtoken';

import { SECRET } from '../../config';

export const sign = (data) => {
  return jwt.sign(data, SECRET, { expiresIn: "1d" });
};

export const verify = (token) => {
  return jwt.verify(token, SECRET);
};
