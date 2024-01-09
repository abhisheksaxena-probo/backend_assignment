const express = require("express");
const inputValid = require("../middleware/inputValid");

const router = express.Router();

const contractController = require("../controllers/contractController");

router.get("/usercontracts/:id", contractController.getAllContracts);
router.get("/:id", contractController.getContract);
router.delete("/:id", contractController.deleteContract);
router.post(
  "/",
  inputValid.checkPostValidity,
  contractController.createContract
);
router.patch("/:id", contractController.updateContract);
module.exports = router;
