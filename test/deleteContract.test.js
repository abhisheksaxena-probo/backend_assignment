const chai = require("chai");
const chaiHttp = require("chai-http");

const { app } = require("../index");

chai.use(chaiHttp);

chai.should();

describe("delete a Contract", () => {
  describe("delete /contracts", () => {
    it("should not show error", (done) => {
      chai
        .request(app)
        .delete("/api/v1/contracts/18")
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
    it("should show error due to invalid id", (done) => {
      chai
        .request(app)
        .patch("/api/v1/contracts/29")
        .end((err, res) => {
          res.should.have.status(500);
          done();
        });
    });
  });
});
