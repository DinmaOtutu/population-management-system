import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import env from 'dotenv';
import App from '../app';

chai.use(chaiHttp);

env.config();

mongoose.Promise = global.Promise;

// connect to data base and drop the database before running each test file
describe('Location Controller', () => {
  before((done) => {
    mongoose.connect(process.env.DB_URL_TEST, () => {
      mongoose.connection.db.dropDatabase(() => {
        done();
      });
    });
  });
  // create location, get, update and delete Location
  describe('Create, get update and delete location', () => {
    it('should create a new location', (done) => {
      const options = {
        female: 10,
        male: 20,
        name: 'chidinma',
        location: 'Abuja'
      };
      chai
        .request(App)
        .post('/api/location')
        .set({
          'Content-type': 'application/json',
        })
        .send(JSON.stringify(options))
        .end((err, res) => {
          expect(res.status).to.equal(201);
          done();
        });
    });
  });

  // it('should upate a new location', (done) => {
  //   const options = {
  //     female: 1000,
  //     male: 20000,
  //     name: 'chidinma Otutu',
  //   };
  //   chai
  //     .request(App)
  //     .put('/api/location/')
  //     .set({
  //       'Content-type': 'application/json',
  //     })
  //     .send(JSON.stringify(options))
  //     .end((err, res) => {
  //       expect(res.status).to.equal(201);
  //       done();
  //     });
  // });
});
