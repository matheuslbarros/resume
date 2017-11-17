import Profile from '../../../models/profile';

export default (req, res) => {
  var body = {};
  for(var key in req.body) {
    body["experience.$." + key] = req.body[key];
  }
  
  Profile.findOneAndUpdate({ user: req.user.id, "experience._id": req.params.id }, { '$set': body })
    .then((profile) => {
      res.status(200).send(profile.experience.id(req.params.id));
    });
};
