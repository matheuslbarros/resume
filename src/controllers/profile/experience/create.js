import Profile from '../../../models/profile';

export default (req, res) => {
  Profile.findOneAndUpdate({ user: req.user.id }, { $push: { experience: req.body } }, { new: true }).then((profile) => {
    res.status(201).send(profile.experience.pop());
  });
};
