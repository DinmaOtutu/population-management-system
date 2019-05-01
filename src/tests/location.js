import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';
import env from 'dotenv';
import App from '../app';

chai.use(chaiHttp);

env.config();

let location;

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

    it('should not create a new location that already exist', (done) => {
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
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should not create a new location with incomplete details', (done) => {
      const options = {
        female: '',
        male: '',
        name: '',
        location: ''
      };
      chai
        .request(App)
        .post('/api/location')
        .set({
          'Content-type': 'application/json',
        })
        .send(JSON.stringify(options))
        .end((err, res) => {
          expect(res.status).to.equal(400);
          done();
        });
    });

    it('should get locations', (done) => {
      chai
        .request(App)
        .get('/api/location')
        .set({
          'Content-type': 'application/json',
        })
        .end((err, res) => {
          // console.log(res.body.locationSummary[0].locationId, '.............halllllllllaaaaaaaaaaaa')
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should get the base endpoint', (done) => {
      chai
        .request(App)
        .get('/api')
        .set({
          'Content-type': 'application/json',
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          done();
        });
    });

    it('should update an existing location', (done) => {
      const options = {
        female: '22',
        male: '4000',
        name: '',
        location: 'lokoja'
      };
      chai.request(App)
        .get('/api/location')
        .end((err, res) => {
          location = res.body.locationSummary[0].locationId;
          chai.request(App)
            .put(`/api/location/${location}`)
            .send(JSON.stringify(options))
            .end((err, res) => {
              expect(res.status).to.equal(200);
              done();
            });
        });
    });

    it('should not update an unexisting location', (done) => {
      const options = {
        female: '22',
        male: '4000',
        name: '',
        location: 'lokoja'
      };
      chai.request(App)
        .put('/api/location/5cc8c9f64cbe77cb550efc0d')
        .send(JSON.stringify(options))
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });


    it('should  delete  an existing location', (done) => {
      chai.request(App)
        .get('/api/location')
        .end((err, res) => {
          location = res.body.locationSummary[0].locationId;
          chai.request(App)
            .delete(`/api/location/${location}`)
            .end((err, res) => {
              expect(res.status).to.equal(200);
              done();
            });
        });
    });

    it('should not delete unexisting location', (done) => {
      chai.request(App)
        .delete('/api/location//5cc8c9f64cbe77cb550efc0d')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
  });
});
