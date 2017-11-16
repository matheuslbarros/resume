import Profile from '../../../models/profile';

export default (req, res) => {
  Profile.findOneAndUpdate({ user: req.user.id, "experience._id": req.params.id }, { '$set': { 'experience.$': req.body } })
    .then((profile) => {
      res.status(200).send(profile.experience.id(req.params.id));
    });
};
