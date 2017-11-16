import Profile from '../../models/profile';

export default async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({ user: req.user.id }, req.body, { new: true });
    res.status(200).send(profile);
  } catch (e) {
    res.status(400).send({ message: 'Fail to update profile.' });
  }
};
