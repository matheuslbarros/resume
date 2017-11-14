import { request, expect } from '../core';
import User from '../../src/models/user';

export default (app) => {
  describe('User authentication', () => {
    const user = {
      name: 'Matheus',
      email: 'matheuslbarros@gmail.com',
      password: 'matheus'
    };

    describe('POST /api/authenticate', () => {
      it('should get user and token', (done) => {
        request(app)
          .post('/api/authenticate')
          .send(user)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.user).to.be.an('object');
            expect(res.body.token).to.be.an('string');
            done();
          });
      });
    });
    
    describe('POST /api/authenticate', () => {
      it('should throw user not found', (done) => {
        request(app)
          .post('/api/authenticate')
          .send({ email: 'none@email.com', password: 'none' })
          .end((err, res) => {
            expect(res.statusCode).to.equal(401);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.be.an('string');
            expect(res.body.message).to.be.eq('Authentication failed: user not found.');
            done();
          });
      });
    });

    describe('POST /api/authenticate', () => {
      it('should throw wrong password', (done) => {
        request(app)
          .post('/api/authenticate')
          .send({ email: user.email, password: 'none' })
          .end((err, res) => {
            expect(res.statusCode).to.equal(401);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.be.an('string');
            expect(res.body.message).to.be.eq('Authentication failed: wrong password.');
            done();
          });
      });
    });

  });
};
