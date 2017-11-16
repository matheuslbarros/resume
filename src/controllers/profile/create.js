import Profile from '../../models/profile';
import { sign } from '../../helpers/token';
import { hash } from '../../helpers/crypt';

export default async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).send(profile);
  } catch (e) {
    res.status(400).send({ message: 'Fail to create a new profile.' });
  }
};
