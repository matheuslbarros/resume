import User from '../models/user';
import { sign } from '../helpers/token';
import { compare } from '../helpers/crypt';

export default async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  
  if (user) {
    if (compare(password, user.password)) {
      const token = sign({ id: user.id, email: user.email });
      res.send({ user, token });
    } else {
      res.status(401).send({ message: 'Authentication failed: wrong password.' });
    }
  } else {
    res.status(401).send({ message: 'Authentication failed: user not found.' });
  }
};
