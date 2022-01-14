import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import FetchApp from '../src/app';

chai.use(chaiHttp);

describe('App Tests', () => {
  describe('Smoke Tests', () => {
    let app;

    before((done) => {
      FetchApp.then((express) => {
        app = express;
        done();
      });
    });

    it('should return a homepage', async () => {
      const res = await chai.request(app).get('/');
      expect(res).to.have.status(200);
      expect(res).to.be.html;
    });

    it('should return some swagger', async () => {
      const res = await chai.request(app).get('/api/swagger');
      expect(res).to.have.status(200);
      expect(res).to.be.json;
    });

    it('should return 401 for empty Auth header requests', async () => {
      const res = await chai.request(app).get('/api/user');
      expect(res).to.have.status(401);
      expect(res).to.be.json;
      expect(res.body.code).to.eq('error.unauthorized');
    });
  });
});
