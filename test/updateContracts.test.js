const chai = require("chai");
const chaiHttp = require("chai-http");

const { app } = require("../index");

chai.use(chaiHttp);

chai.should();

describe("Update a Contract", () => {
  describe("Patch /contracts", () => {
    it("should not show error", (done) => {
      const contract = {
        Description: "abc",
      };
      chai
        .request(app)
        .patch("/api/v1/contracts/2")
        .send(contract)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should show error due to invalid id", (done) => {
      const contract = {
        Description: "abc",
      };
      chai
        .request(app)
        .patch("/api/v1/contracts/29")
        .send(contract)
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});
