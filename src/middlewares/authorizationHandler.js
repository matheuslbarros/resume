import { verify } from '../helpers/token';

export default (req, res, next) => {
  const token = req.headers['x-access-token'];

  try {
    req.user = verify(token);
    next();
  } catch (e) {
    res.status(401).send({ message: 'Unauthorized, requires a valid authentication credentials.' });
  }
};
