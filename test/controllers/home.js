import { request, expect } from '../core';

export default (app) => {
  describe('Home', () => {

    describe('GET /', () => {
      it('should get home page', (done) => {
        request(app)
          .get('/')
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.be.an('string');
            done();
          });
      });
    });

    describe('GET /error', () => {
      it('should get error page', (done) => {
        request(app)
          .get('/error')
          .end((err, res) => {
            expect(res.statusCode).to.equal(500);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.be.an('string');
            done();
          });
      });
    });

    describe('GET /404', () => {
      it('should get not found page', (done) => {
        request(app)
          .get('/404')
          .end((err, res) => {
            expect(res.statusCode).to.equal(404);
            expect(res.body).to.be.an('object');
            expect(res.body.message).to.be.an('string');
            done();
          });
      });
    });

  });
};
