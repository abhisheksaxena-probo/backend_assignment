const chai = require("chai");
const chaiHttp = require("chai-http");

const { app } = require("../index");

chai.use(chaiHttp);

chai.should();

describe("Post a Contract", () => {
  describe("Post /contracts", () => {
    it("should show error", (done) => {
      const contract = {
        Contract_Name: "",
        Description: "abc",
        Amount: 4,
        User_Id: 4,
      };
      chai
        .request(app)
        .post("/api/v1/contracts")
        .send(contract)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
      it("should post data", (done) => {
        const contract = {
          Contract_Name: "123",
          Description: "abc",
          Amount: 4,
          User_Id: 4,
        };
        chai
          .request(app)
          .post("/api/v1/contracts")
          .send(contract)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });
});
