import Profile from '../../models/profile';

export default (req, res) => {
  Profile.findOne({ user: req.user.id }).then((profile) => {
    res.status(200).send(profile);
  });
};
