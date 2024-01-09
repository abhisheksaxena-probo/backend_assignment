const db = require("../db.js");
const catchAsync = require("../utils/catchAsync");
exports.getAllContracts = catchAsync(async (req, res) => {
  const userId = req.params.id;
  //   console.log(userId);
  const q = `SELECT * FROM contracts_table WHERE User_Id = ?`;
  const result = await db.query(q, [userId]);
  if (result[0].length === 0)
    throw new Error("No Contract Found For Given User");
  res.status(200).json({
    status: "success",
    result: result[0].length,
    data: result[0],
  });
});

exports.getContract = catchAsync(async (req, res) => {
  const id = req.params.id;
  const q = `SELECT * FROM contracts_table WHERE Contract_Id = ?`;
  const result = await db.query(q, [id]);
  if (result[0].length === 0)
    throw new Error("No Contract Found With Given Id");
  res.status(200).json({
    status: "success",
    result: result[0].length,
    data: result[0],
  });
});

exports.deleteContract = catchAsync(async (req, res) => {
  const id = req.params.id;
  const q = `DELETE FROM contracts_table WHERE Contract_Id = ${id};`;
  const result = await db.query(q);
  console.log(result);
  if (result[0].affectedRows === 0)
    throw new Error("No Contract Found With Given Id");
  res.status(200).json({
    status: "success",
  });
});

exports.createContract = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await db.query(
    "INSERT INTO contracts_table (`Contract_Name`,`Description`,`Amount`,`User_Id`) Values (?,?,?,?)",
    [
      req.body.Contract_Name,
      req.body.Description,
      req.body.Amount,
      req.body.User_Id,
    ]
  );
  res.status(200).json({
    status: "success",
    result: result,
  });
});

exports.updateContract = catchAsync(async (req, res) => {
  const id = req.params.id;
  const q = `UPDATE contracts_table SET ? WHERE Contract_Id = ?`;
  const result = await db.query(q, [req.body, id]);
  if (result[0].affectedRows === 0)
    throw new Error("No Contract Found With Given Id");
  res.status(200).json({
    status: "success",
  });
});
