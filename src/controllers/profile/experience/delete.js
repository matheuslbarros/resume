import Profile from '../../../models/profile';

export default (req, res) => {
  Profile.findOneAndUpdate({ user: req.user.id }, { $pull: { experience: { _id: req.params.id } } }).then(() => {
    res.status(204).end();
  });
};
