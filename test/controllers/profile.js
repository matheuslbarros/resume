import { request, expect } from '../core';
import User from '../../src/models/user';
import Profile from '../../src/models/profile';
import { sign } from '../../src/helpers/token';

export default (app) => {
  describe('Profile', () => {

    const user = {
      name: 'Matheus',
      email: 'matheuslbarros@gmail.com',
      password: 'matheus'
    };

    const profile = {
      first_name: 'Matheus',
      last_name: 'Barros',
      location: 'Porto Alegre - RS, Brazil',
      headline: 'Web developer',
      bio: 'Nothing to say at this moment',
      fone: '+55 51 984332919',
      skype: 'matheuslbarros',
      site: 'https://github.com/matheuslbarros'
    };

    var token = null;

    before(() => {
      return User.findOne({ email: user.email }).then((user) => {
        token = sign({ id: user.id, email: user.email });
        profile.user = user;
      });
    });

    before(() => {
      return Profile.remove({ skype: profile.skype });
    });

    describe('Create a new profile', () => {

      describe('POST /api/profile', () => {
        it('should throw unauthorized', (done) => {
          request(app)
            .post('/api/profile')
            .send({})
            .end((err, res) => {
              expect(res.statusCode).to.equal(401);
              expect(res.body).to.be.an('object');
              expect(res.body.message).to.be.an('string');
              expect(res.body.message).to.be.eq('Unauthorized, requires a valid authentication credentials.');
              done();
            });
        });
      });

      describe('POST /api/profile', () => {
        it('should throw bad request', (done) => {
          request(app)
            .post('/api/profile')
            .set('x-access-token', token)
            .send({})
            .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              expect(res.body).to.be.an('object');
              expect(res.body.message).to.be.an('string');
              expect(res.body.message).to.be.eq('Fail to create a new profile.');
              done();
            });
        });
      });

      describe('POST /api/profile', () => {
        it('should create a new profile', (done) => {
          request(app)
            .post('/api/profile')
            .set('x-access-token', token)
            .send(profile)
            .end((err, res) => {
              expect(res.statusCode).to.equal(201);
              expect(res.body).to.be.an('object');
              expect(res.body.first_name).to.be.an('string');
              expect(res.body.first_name).to.be.eq(profile.first_name);
              done();
            });
        });
      });

    });

    describe('Update profile', () => {

      profile.first_name = "Mathews";

      describe('PUT /api/profile', () => {
        it('should throw bad request', (done) => {
          request(app)
            .put('/api/profile')
            .set('x-access-token', token)
            .send({ first_name: {} })
            .end((err, res) => {
              expect(res.statusCode).to.equal(400);
              expect(res.body).to.be.an('object');
              expect(res.body.message).to.be.an('string');
              expect(res.body.message).to.be.eq('Fail to update profile.');
              done();
            });
        });
      });

      describe('PUT /api/profile', () => {
        it('should update profile', (done) => {
          request(app)
            .put('/api/profile')
            .set('x-access-token', token)
            .send(profile)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an('object');
              expect(res.body.first_name).to.be.an('string');
              expect(res.body.first_name).to.be.eq(profile.first_name);
              done();
            });
        });
      });
      
    });

    describe('Get profile', () => {
      describe('GET /api/profile', () => {
        it('should get profile', (done) => {
          request(app)
            .get('/api/profile')
            .set('x-access-token', token)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an('object');
              expect(res.body.first_name).to.be.an('string');
              expect(res.body.first_name).to.be.eq(profile.first_name);
              done();
            });
        });
      });
    });

    describe('Experience', () => {

      var experienceId = null;

      const experience = {
        role: 'Full stack developer',
        company: 'Procergs',
        start: new Date('2017/11'),
        end: null,
        description: 'Work experience description...'
      };

      describe('POST /api/profile/experience', () => {
        it('should add a new experience', (done) => {
          request(app)
            .post('/api/profile/experience')
            .set('x-access-token', token)
            .send(experience)
            .end((err, res) => {
              experienceId = res.body._id;
              expect(res.statusCode).to.equal(201);
              expect(res.body).to.be.an('object');
              expect(res.body.role).to.be.an('string');
              expect(res.body.role).to.be.eq(experience.role);
              done();
            });
        });
      });

      describe('PUT /api/profile/experience/:id', () => {
        experience.role = 'Backend developer';

        it('should update the experience', (done) => {
          request(app)
            .put('/api/profile/experience/' + experienceId)
            .set('x-access-token', token)
            .send(experience)
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an('object');
              expect(res.body.role).to.be.an('string');
              expect(res.body.role).to.be.eq(experience.role);
              done();
            });
        });
      });

      describe('DELETE /api/profile/experience/:id', () => {
        it('should delete the experience', (done) => {
          request(app)
            .delete('/api/profile/experience/' + experienceId)
            .set('x-access-token', token)
            .end((err, res) => {
              expect(res.statusCode).to.equal(204);
              done();
            });
        });
      });

    });

  });
};
