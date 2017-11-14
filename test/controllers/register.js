import { request, expect } from '../core';
import User from '../../src/models/user';

export default (app) => {
  describe('User registration', () => {
    const user = {
      name: 'Matheus',
      email: 'matheuslbarros@gmail.com',
      password: 'matheus'
    };

    before(() => {
      return User.findOneAndRemove({ email: user.email });
    })

    describe('POST /api/register', () => {
      it('should get user and token', (done) => {
        request(app)
          .post('/api/register')
          .send(user)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body).to.be.an('object');
            expect(res.body.user).to.be.an('object');
            expect(res.body.token).to.be.an('string');
            done();
          });
      });
    });
    
    describe('POST /api/register', () => {
      it('should throw user already exists', (done) => {
        request(app)
          .post('/api/register')
          .send(user)
          .end((err, res) => {
            expect(res.statusCode).to.equal(403);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.be.an('string');
            expect(res.body.message).to.be.eq('User already exists.');
            done();
          });
      });
    });

  });
};
