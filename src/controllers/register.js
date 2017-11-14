import User from '../models/user';
import { sign } from '../helpers/token';
import { hash } from '../helpers/crypt';

export default async (req, res) => {
  const { name, email, password } = req.body;
  
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(403).json({ message: 'User already exists.' });
  } else {
    const user = await User.create({ name, email, password: hash(password) });
    const token = sign({ email });
    
    res.status(201).send({ user, token });
  }
};
