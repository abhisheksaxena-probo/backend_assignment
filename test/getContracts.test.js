const chai = require("chai");
const chaiHttp = require("chai-http");

const { app } = require("../index");

chai.use(chaiHttp);

chai.should();

describe("Get all contracts", () => {
  describe("GET /contracts", () => {
    it("should get all contracts", (done) => {
      chai
        .request(app)
        .get("/api/v1/contracts/usercontracts/4")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should show error message when id of user is not given", (done) => {
      chai
        .request(app)
        .get("/api/v1/contracts/usercontracts")
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
    it("should get a contract when its id is given", (done) => {
      chai
        .request(app)
        .get("/api/v1/contracts/2")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should show error message when id of contract not given", (done) => {
      chai
        .request(app)
        .get("/api/v1/contracts")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
